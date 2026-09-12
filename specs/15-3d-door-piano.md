# Spec 15 — Objetos 3D: porta e piano

## Escopo

Comportamento e presença narrativa da porta e do piano na cena híbrida.

## Fora de escopo

- Mapeamento scroll global → `16-camera-scroll.md`
- Concept art estática → `13-concept-art-hybrid.md`

## Porta

- Pode abrir poucos centímetros
- Recebe iluminação e projeta sombra
- Posição pode variar entre seções
- **Narrativa:** talvez não haja nada atrás; ausência de explicação é intencional

## Piano

Elemento pessoal recorrente. Evolução sugerida por rota:

| Rota | Visibilidade |
|------|----------------|
| HOME | Quase invisível |
| PROJECTS | Parte visível |
| ABOUT | Câmera mais próxima |
| LAB | Claramente visível |

Interação opcional: **uma** tecla move com hover; áudio só se usuário ativar (`09-atmospheric-effects-2d.md`).

## Cadeira

Mencionada no doc original como candidata 3D; incluir só se passar na regra de ouro (`10-threejs-guidelines.md`).

## Entregáveis

- [x] Assets 3D otimizados (draco/meshopt se necessário) → geometria procedural leve em [`DoorObject.tsx`](../src/components/three/DoorObject.tsx) / [`PianoObject.tsx`](../src/components/three/PianoObject.tsx); GLB futuro no manifest
- [x] Estados por rota (config, não hardcode espalhado) → [`content/scene/scene-routes.json`](../content/scene/scene-routes.json)

## Critérios de aceite

- [x] Porta/piano não quebram LCP crítico da Home (lazy load WebGL) → chunk `three` via [`SceneCanvas.tsx`](../src/components/three/SceneCanvas.tsx) (`React.lazy`)
- [x] Fase mínima: **V3** — `17-release-phases.md` — comportamento V3 entregue; polish de arte GLB permanece opcional
