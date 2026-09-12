# Spec 08 — Identidade visual (2D)

## Escopo

Direção de layout, tipografia, paleta e composição **sem** efeitos de filme nem Three.js.

## Fora de escopo

- Grain, vignette, flicker → `09-atmospheric-effects-2d.md`
- Objetos 3D e câmera → specs 12–16

## Direção

Site de **engenheiro**, não landing de startup.

Características:

- Bastante espaço vazio
- Tipografia forte
- Layout editorial
- Monoespaçado para dados técnicos
- Poucos decorativos
- Animações sutis
- Alto contraste
- Assimetria pontual
- Sensação cinematográfica (composição, não efeitos)

## Paleta (direção inicial)

- Preto / quase preto
- Branco quebrado
- Cinza
- Uma cor de destaque **pontual**

**Não** usar vermelho dominante só por causa do terror.

## Entregáveis

- [x] Tokens Tailwind (cores, fontes, spacing scale) — [`src/styles/tokens.css`](../src/styles/tokens.css) + `@theme` em [`index.css`](../src/styles/index.css); tipografia em [`typography.css`](../src/styles/typography.css)
- [x] Escolha de 1–2 famílias tipográficas (display + mono técnica) — **Cormorant Garamond** (display) + **IBM Plex Mono** (dados/nav/corpo); referência `docs/images/home.png`
- [x] Grid/layout base em `components/layout/` → [`SiteHeader`](../src/components/layout/SiteHeader.tsx), [`PageContainer`](../src/components/layout/PageContainer.tsx), classes `.layout-page` / `.editorial-grid`

## Critérios de aceite

- [x] Contraste WCAG AA para texto body principal — `--color-fg` em `--color-bg` (~15:1); muted apenas em meta secundária
- [x] Tipografia e cores documentadas nesta spec ou em `tailwind.config` com comentário referenciando spec 08 — comentário em `index.css`; tokens em `tokens.css`
