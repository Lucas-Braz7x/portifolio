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

- [ ] `components/three/` com boundary claro (canvas não cobre conteúdo interativo)
- [ ] Documentação de z-index e pointer-events

## Critérios de aceite

- Cliques em links e formulários nunca capturados pelo canvas
- Degradação: camada 3 desligada → camadas 1–2 ou só 1 ainda aceitáveis
