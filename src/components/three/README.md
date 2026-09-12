# Three.js (`src/components/three/`)

Canvas e cena WebGL — fases V2–V4. Antes de implementar, ler:

- [`docs/adr/001-threejs-role.md`](../../../docs/adr/001-threejs-role.md)
- [`specs/10-threejs-guidelines.md`](../../../specs/10-threejs-guidelines.md)
- [`.cursor/rules/three-scene.mdc`](../../../.cursor/rules/three-scene.mdc)

Nenhum canvas full-screen sem propósito narrativo. Lazy load + fallback 2D obrigatório.

## Camadas e z-index (spec 12)

Stack fixo, de baixo para cima. Tudo abaixo de `--z-content` (10); header e `main` usam `z-content` para receber cliques.

| Token | Valor | Camada | `pointer-events` |
|-------|------:|--------|------------------|
| `--z-scene-root` | 0 | `.scene-root` (wrapper) | `none` |
| `--z-scene-bg` | 1 | `SceneBackground` — imagem / 2.5D (spec 14) | `none` |
| `--z-scene-3d` | 2 | `SceneCanvas` — WebGL (specs 15–16) | `none` (exceções explícitas no mesh interativo) |
| `--z-atmosphere` | 5 | grain, vignette, LOG (spec 09) | `none` |
| `--z-content` | 10 | nav, links, formulários | `auto` (padrão) |

Regras:

- **Nunca** posicionar o canvas acima de `--z-content` sem revisão de a11y.
- Interação 3D pontual (ex.: tecla do piano): `pointer-events: auto` só no elemento alvo, não no canvas inteiro.
- `VITE_SCENE_3D=false` ou WebGL indisponível → `SceneCanvas` não monta; site permanece nas camadas 1–2 + atmosfera 2D.
- Cena atual: [`AtmosphericScene.tsx`](./AtmosphericScene.tsx) (luz, neblina, silhueta distante) — lazy via [`SceneCanvasContent.tsx`](./SceneCanvasContent.tsx).

Estilos: [`src/styles/scene-layers.css`](../../styles/scene-layers.css), tokens em [`src/styles/tokens.css`](../../styles/tokens.css).

## Componentes

| Arquivo | Função |
|---------|--------|
| `SceneLayers.tsx` | Composição das camadas 2–3 no layout |
| `SceneBackground.tsx` | Camada 2.5D (spec 14) |
| `DepthParallaxBackground.tsx` | Shader WebGL2 + fallback estático (plano B, spec 13) |
| `SceneCanvas.tsx` | Boundary WebGL + flag `VITE_SCENE_3D` |
| `DoorObject.tsx` / `PianoObject.tsx` | Meshes procedurais por rota (spec 15) |
| `SceneCameraRig.tsx` | Câmera por pathname + scroll Home (spec 16) |
