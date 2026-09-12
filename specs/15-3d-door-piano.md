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

- [ ] Assets 3D otimizados (draco/meshopt se necessário)
- [ ] Estados por rota (config, não hardcode espalhado)

## Critérios de aceite

- Porta/piano não quebram LCP crítico da Home (lazy load WebGL)
- Fase mínima: **V3** — `17-release-phases.md`
