# ADR 001 — Papel do Three.js

**Status:** Aceito (direção); implementação incremental V2–V4  
**Data:** 2026-09-10  
**Specs:** `10-threejs-guidelines.md`, `12-scene-3d-layers.md`, `17-release-phases.md`

## Contexto

O portfólio usa atmosfera cinematográfica e terror psicológico sutil. WebGL pode reforçar profundidade e luz, mas aumenta bundle, complexidade e risco de parecer “demo Three.js”.

## Decisão

1. **Regra de ouro:** cada elemento 3D deve passar no teste — *“Isso precisa ser 3D para a experiência desejada?”* Se não, usar imagem, CSS ou efeitos 2D (`specs/09`).
2. **Direção preferida (não final em `18-open-decisions.md`):** híbrido **HTML + 2.5D (depth/parallax) + objetos 3D pontuais** (porta, piano, luz), não cena full-screen que compete com o conteúdo.
3. **Opção de referência entre A–D da spec 10:** combinar **B** (ambiente escuro, luz, neblina) com **C** (detalhe de fundo) até V3; **D** (scroll narrativo) só se V4 for priorizada.
4. **Camadas:** React/HTML sempre responsável por texto, navegação e a11y; canvas com `pointer-events: none` exceto interações explícitas (`three-scene.mdc`).
5. **Fallback:** sem WebGL ou com falha, o site permanece utilizável — apenas camada 2D/09 (`02-principles.md`).

## Consequências

- Bundle `three` em chunk separado; lazy load após conteúdo crítico.
- Todo PR que adiciona mesh ou shader deve citar **user story atmosférica** (ver checklist no PR template).
- Efeitos 2D (grain, vignette) não dependem de WebGL.

## Critério de review (WebGL)

Antes de merge, responder no PR:

1. Qual sensação atmosférica este 3D reforça (uma frase)?
2. Por que 2D/imagem não basta?
3. O que o visitante vê se WebGL falhar?
