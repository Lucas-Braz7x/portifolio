# Spec 12 — Arquitetura da cena (camadas)

## Escopo

Modelo híbrido: HTML + imagem/2.5D + Three.js para dinâmica pontual.

## Fora de escopo

- Pipeline de arte (concept art) → `13-concept-art-hybrid.md`
- Depth map → `14-depth-map-parallax.md`

## Diagrama de camadas

```text
THREE.JS
├── background / image
├── depth / parallax
├── iluminação
├── porta 3D
├── piano 3D
└── efeitos

+

HTML / REACT
├── Navigation
├── Hero
├── Projects
├── About
└── Lab
```

## Responsabilidades

| Camada | Dono | Função |
|--------|------|--------|
| 1 | HTML/React | Texto, nav, a11y, links, conteúdo |
| 2 | Imagem / 2.5D | Ambiente estático com parallax via depth |
| 3 | Three.js | Câmera, porta, piano, luz, sombra, interação |

## Entregáveis

- [x] `components/three/` com boundary claro (canvas não cobre conteúdo interativo) → [`src/components/three/`](../src/components/three/), integrado em [`RootLayout`](../src/components/layout/RootLayout.tsx)
- [x] Documentação de z-index e pointer-events → [`src/components/three/README.md`](../src/components/three/README.md), [`src/styles/scene-layers.css`](../src/styles/scene-layers.css)

## Critérios de aceite

- [x] Cliques em links e formulários nunca capturados pelo canvas — `.scene-root` / `.scene-layer` com `pointer-events: none`; conteúdo em `--z-content`
- [x] Degradação: camada 3 desligada → camadas 1–2 ou só 1 ainda aceitáveis — `VITE_SCENE_3D` + detecção WebGL em [`SceneCanvas`](../src/components/three/SceneCanvas.tsx)
