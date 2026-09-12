type DepthParallaxOptions = {
  colorUrl: string
  depthUrl: string
  onFallback?: () => void
}

type DepthParallaxHandle = {
  dispose: () => void
  setShift: (x: number, y: number) => void
}

const VERTEX_SHADER = `#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uColor;
uniform sampler2D uDepth;
uniform vec2 uShift;
void main() {
  float depth = texture(uDepth, vUv).r;
  vec2 offset = uShift * (depth - 0.5);
  outColor = texture(uColor, vUv + offset);
}
`

const compileShader = (
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader | null => {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

const createProgram = (gl: WebGL2RenderingContext): WebGLProgram | null => {
  const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
  if (!vertex || !fragment) return null

  const program = gl.createProgram()
  if (!program) return null

  gl.attachShader(program, vertex)
  gl.attachShader(program, fragment)
  gl.linkProgram(program)
  gl.deleteShader(vertex)
  gl.deleteShader(fragment)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    return null
  }

  return program
}

const loadImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error(`Failed to load ${url}`))
    image.src = url
  })

const createTexture = (
  gl: WebGL2RenderingContext,
  image: HTMLImageElement,
): WebGLTexture | null => {
  const texture = gl.createTexture()
  if (!texture) return null

  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
  return texture
}

export const mountDepthParallax = async (
  canvas: HTMLCanvasElement,
  { colorUrl, depthUrl, onFallback }: DepthParallaxOptions,
): Promise<DepthParallaxHandle | null> => {
  const gl = canvas.getContext('webgl2', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
  })

  if (!gl) {
    onFallback?.()
    return null
  }

  const program = createProgram(gl)
  if (!program) {
    onFallback?.()
    return null
  }

  const positionBuffer = gl.createBuffer()
  if (!positionBuffer) {
    onFallback?.()
    return null
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW,
  )

  const positionLocation = gl.getAttribLocation(program, 'aPosition')
  const shiftLocation = gl.getUniformLocation(program, 'uShift')
  const colorLocation = gl.getUniformLocation(program, 'uColor')
  const depthLocation = gl.getUniformLocation(program, 'uDepth')

  let disposed = false

  try {
    const [colorImage, depthImage] = await Promise.all([
      loadImage(colorUrl),
      loadImage(depthUrl),
    ])

    if (disposed) return null

    const colorTexture = createTexture(gl, colorImage)
    const depthTexture = createTexture(gl, depthImage)
    if (!colorTexture || !depthTexture) {
      onFallback?.()
      return null
    }

    let shiftX = 0
    let shiftY = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.floor(parent.clientWidth * dpr)
      const height = Math.floor(parent.clientHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const draw = () => {
      if (disposed) return
      resize()

      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, colorTexture)
      gl.uniform1i(colorLocation, 0)

      gl.activeTexture(gl.TEXTURE1)
      gl.bindTexture(gl.TEXTURE_2D, depthTexture)
      gl.uniform1i(depthLocation, 1)

      gl.uniform2f(shiftLocation, shiftX, shiftY)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => draw())
        : null
    resizeObserver?.observe(canvas.parentElement ?? canvas)

    draw()

    return {
      setShift: (x: number, y: number) => {
        shiftX = x
        shiftY = y
        draw()
      },
      dispose: () => {
        disposed = true
        resizeObserver?.disconnect()
        gl.deleteTexture(colorTexture)
        gl.deleteTexture(depthTexture)
        gl.deleteBuffer(positionBuffer)
        gl.deleteProgram(program)
      },
    }
  } catch {
    onFallback?.()
    return null
  }
}
