# Spec 19 — Paridade visual da Home (contrato)

## Escopo

Contrato entre a referência [`docs/images/home.png`](../docs/images/home.png) e a implementação da rota `/`. Define zonas, ordem, componentes-alvo, estados (estático vs cênico) e viewports de validação.

Esta spec **não substitui** specs 04–09 (histórico V1); orienta o trabalho incremental descrito em 20–25.

## Fora de escopo

- Detalhe de implementação de cada zona → specs 20–25
- Case studies completos → `06-projects-case-studies.md`
- Meshes e câmera → specs 10–16 (integração citada em 20)

## Referência visual

Arquivo único de paridade: [`docs/images/home.png`](../docs/images/home.png).

Fidelidade esperada: **composição e elementos obrigatórios** (não pixel-perfect). Tipografia e tokens seguem `08-visual-identity.md` salvo ajustes documentados em 20/25.

## Mapa zona → spec → componente (alvo)

| Zona (mock) | Ordem no scroll | Spec | Componente / rota (alvo) |
|-------------|-----------------|------|---------------------------|
| Header: LBD + nav `[ 01 ]`…`[ 05 ]` + REC | fixo / topo | 20, 24 | `SiteHeader`, `PrimaryNav`, chrome REC |
| Hero ~100vh: cenário + copy + CTAs | 1 | 20 | `HomeHero`, máscara cena |
| Hero footer: citação (esq.) + timestamp (dir.) | dentro do hero | 20, 24 | conteúdo em `content/site/` |
| **02. PROJETOS**: título, texto, 3 cards, `ver todos →` | 2 | 21 | `HomeProjectShowcase`, `ProjectCard` |
| Faixa **03 / 04 / 05** (3 colunas) | 3 | 22, 05, 23 | `HomeEditorialFooter`, `CurrentlySection`, `SocialLinks`, teaser Notas |
| Barra final: nome + ano + tagline | 4 | 22 | `SiteFooterBar` |

## Ordem de seções (substitui wire da spec 04 na Home)

```text
[ Hero full-viewport ]
[ 02 — Projetos (grade 3) ]
[ Faixa editorial: 03 Atualmente | 04 Em outro lugar | 05 Notas ]
[ Barra final ]
```

A ordem **Currently → Selected work → Elsewhere** da spec 04 deixa de ser o layout alvo da Home quando esta trilha estiver concluída.

## Navegação primária (decisão fechada nesta trilha)

| Slot | Label (PT) | Rota |
|------|------------|------|
| `[ 01 ]` | INÍCIO | `/` |
| `[ 02 ]` | PROJETOS | `/projects` |
| `[ 03 ]` | SOBRE | `/about` |
| `[ 04 ]` | NOTAS | `/notes` |
| `[ 05 ]` | CONTATO | `/contact` |

`/lab` permanece implementado (`07-lab-oficina.md`) mas **fora** da nav primária (link secundário em About, footer ou sitemap interno — ver 23).

## Estados de renderização

| Estado | Flags / condição | O que deve permanecer legível |
|--------|------------------|----------------------------------|
| Estático profissional | `VITE_SCENE_3D=false`, parallax off | Hero com imagem estática ou scrim + copy; seções 02–barra com fundo opaco |
| 2.5D | parallax on, 3D off | Cenário visível no hero; scroll revela blocos opacos abaixo |
| Cênico completo | 3D + narrativa on | Mesma hierarquia HTML; cena não cobre texto (spec 12) |

## Viewports-alvo (validação)

| Nome | Largura × altura | Uso |
|------|------------------|-----|
| desktop | 1440 × 900 | paridade principal |
| tablet | 768 × 1024 | grade e faixa 3 colunas → empilhamento |
| mobile | 390 × 844 | hero crop, nav, cards 1 coluna |

Detalhe de QA → `25-responsive-visual-qa.md`.

## Dependências

- `08-visual-identity.md` — tokens e tipografia
- `04-page-home.md`, `05-section-currently.md`, `06-projects-case-studies.md` — conteúdo e loaders existentes
- `09-atmospheric-effects-2d.md`, `12-scene-3d-layers.md`, `14-depth-map-parallax.md` — camadas de fundo
- `18-open-decisions.md` — decisões fechadas por esta trilha (Notas, PT-BR nav)

## Entregáveis

- [x] Checklist de paridade anexada a issues/milestone “Home visual parity” → [`docs/home-visual-parity-checklist.md`](../docs/home-visual-parity-checklist.md)
- [x] `HomePage` recomposta conforme ordem acima → [`HomePage.tsx`](../src/pages/HomePage.tsx)
- [x] Nav primária alinhada à tabela → [`PrimaryNav`](../src/components/layout/PrimaryNav.tsx), rota [`/notes`](../src/routes/index.tsx)

## Critérios de aceite

- [x] Em desktop, ordem visual das quatro zonas coincide com o mock (hero → projetos → faixa 3 colunas → barra)
- [x] Com todas as flags de cena desligadas, `/` permanece navegável e legível — `.home-page` em [`home.css`](../src/styles/home.css)
- [x] Um único `h1` na página; landmark `main` via [`PageContainer`](../src/components/layout/PageContainer.tsx)
- [x] Nenhum item da nav primária aponta para rota inexistente — `/notes` + [`NotesPage`](../src/pages/NotesPage.tsx)
