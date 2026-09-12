# Specs — Portfólio Lucas Braz Dutra

Especificações derivadas de [`docs/portfolio-lucas-braz-dutra.md`](../docs/portfolio-lucas-braz-dutra.md), divididas em escopos finitos para implementação e revisão.

## Ordem sugerida de leitura

| # | Spec | Foco |
|---|------|------|
| 01 | [vision](./01-vision.md) | Por que o site existe e o que ele comunica |
| 02 | [principles](./02-principles.md) | Regras de decisão transversais |
| 03 | [stack-and-routes](./03-stack-and-routes.md) | Stack, rotas e pastas do repo |
| 04 | [page-home](./04-page-home.md) | Layout e conteúdo da Home |
| 05 | [section-currently](./05-section-currently.md) | Bloco “agora” + aprendizado |
| 06 | [projects-case-studies](./06-projects-case-studies.md) | Lista de projetos e template de case study |
| 07 | [lab-oficina](./07-lab-oficina.md) | Área Lab / Oficina |
| 08 | [visual-identity](./08-visual-identity.md) | Tipografia, paleta, layout editorial |
| 09 | [atmospheric-effects-2d](./09-atmospheric-effects-2d.md) | Grain, vignette, flicker, texto-log (sem 3D) |
| 10 | [threejs-guidelines](./10-threejs-guidelines.md) | Papel do Three.js e regra de ouro |
| 11 | [narrative-horror-layer](./11-narrative-horror-layer.md) | Progressão sutil e três estados visuais |
| 12 | [scene-3d-layers](./12-scene-3d-layers.md) | HTML + 2.5D + Three.js |
| 13 | [concept-art-hybrid](./13-concept-art-hybrid.md) | Imagem como storyboard vs objetos 3D |
| 14 | [depth-map-parallax](./14-depth-map-parallax.md) | Mapa de profundidade e parallax |
| 15 | [3d-door-piano](./15-3d-door-piano.md) | Porta e piano como objetos 3D |
| 16 | [camera-scroll](./16-camera-scroll.md) | Câmera ligada à navegação/scroll |
| 17 | [release-phases](./17-release-phases.md) | V1–V4 e o que entra em cada fase |
| 18 | [open-decisions](./18-open-decisions.md) | Checklist de decisões pendentes |

## Dependências (alto nível)

```text
01 vision ──► 02 principles ──► 03 stack
                    │
                    ├──► 04–07 (páginas e conteúdo)
                    ├──► 08 visual identity ──► 09 atmospheric 2D
                    └──► 10 threejs guidelines
                              ├──► 12 scene layers
                              ├──► 13 concept art ──► 14 depth map
                              ├──► 15 door/piano ──► 16 camera scroll
                              └──► 11 narrative (pode sobrepor 09 e 15–16)

17 release-phases ordena o que implementar primeiro.
18 open-decisions não bloqueia V1, mas bloqueia polish final.
```

## Convenções das specs

- **Escopo**: o que esta spec cobre.
- **Fora de escopo**: o que pertence a outra spec.
- **Entregáveis**: resultado observável quando a spec estiver “feita”.
- **Critérios de aceite**: como validar sem ambiguidade.
