# Spec 11 — Camada narrativa (terror sutil)

## Escopo

Progressão ao longo da navegação: site “normal” → anomalias → revelação opcional. Integra ideias de Three.js + terror e três estados visuais.

## Fora de escopo

- Implementação técnica de cada anomalia (distribuída em 09, 15, 16)
- Jumpscares, monstros, Halloween

## Fluxo de navegação (referência)

```text
HOME → PROJECTS → ABOUT → LAB
```

No topo, copy profissional (ex. Currently @ Certta). Mais abaixo ou em rotas seguintes, detalhes visuais emergem **sem** revelação explícita obrigatória.

Objetivo:

> “Tem alguma coisa acontecendo aqui.”

## Três estados

| Estado | Características |
|--------|-----------------|
| 1 — Normal | Minimalista, profissional, técnico |
| 2 — Estranho | Texto deslocado, ruído, luz, frames rápidos, 3D mais perceptível |
| 3 — Revelação | Opcional; usuário entende que terror não era só decoração — **sutil** |

## Lista de anomalias possíveis (não todas obrigatórias)

1. Câmera muda levemente
2. Luz da porta oscila
3. Objeto onde não estava
4. Tecla de piano pressionada
5. Sombra cruzando ambiente
6. Elemento some
7. Nada é explicado

## Entregáveis

- [x] Mapa rota → intensidade narrativa (0–2 ou 0–3) → [`content/site/narrative-routes.json`](../content/site/narrative-routes.json), [`src/lib/narrative/route-intensity.ts`](../src/lib/narrative/route-intensity.ts)
- [x] Feature flags ou config para desligar camada narrativa (dev/demo acessível) → `VITE_NARRATIVE_LAYER` em [`.env.example`](../.env.example), [`src/lib/feature-flags.ts`](../src/lib/feature-flags.ts)

## Critérios de aceite

- [x] Estado 1 sozinho já cumpre portfólio profissional (`01-vision.md`) — `VITE_NARRATIVE_LAYER=false` força intensidade 0 em todas as rotas
- [x] Nenhuma anomalia bloqueia leitura de projetos ou contato — camada narrativa só ajusta data-attrs/CSS; conteúdo em `--z-content` com `pointer-events` padrão
