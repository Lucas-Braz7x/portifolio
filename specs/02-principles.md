# Spec 02 — Princípios de produto e engenharia

## Escopo

Regras transversais para conteúdo, performance, acessibilidade e efeitos.

## Fora de escopo

- Detalhes de implementação por fase → `17-release-phases.md`
- Guidelines específicos de Three.js → `10-threejs-guidelines.md`

## Princípios

1. Personalidade > quantidade de efeitos.
2. Conteúdo técnico > buzzwords.
3. Atmosfera > decoração.
4. Three.js deve ter propósito.
5. O site deve continuar **excelente** sem JavaScript pesado (conteúdo e navegação utilizáveis).
6. Mobile considerado desde o início.
7. Não exagerar na estética de terror.
8. Cada animação precisa justificar sua existência.
9. Projetos mostram **decisões**, não apenas tecnologias.
10. O portfólio é também demonstração de engenharia.

## Entregáveis

- [x] Checklist de PR/review interno baseado nos 10 itens → [`.github/pull_request_template.md`](../.github/pull_request_template.md) + seção no [README](../README.md); dados em [`content/site/principles.json`](../content/site/principles.json)

## Critérios de aceite

- Home e projetos legíveis com JS desabilitado ou falha de WebGL (fallback definido em `12-scene-3d-layers.md`). **V1:** `<noscript>` em `index.html`; degradação WebGL → spec 12.
- Nenhuma animação contínua sem `prefers-reduced-motion` respeitado (detalhar em `09-atmospheric-effects-2d.md`). **Base:** `src/styles/index.css` + hook `src/hooks/useReducedMotion.ts` para efeitos JS futuros.
