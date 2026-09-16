# Spec 22 — Faixa editorial e barra final (Home)

## Escopo

Rodapé editorial da Home conforme mock: três colunas numeradas **03. ATUALMENTE**, **04. EM OUTRO LUGAR**, **05. NOTAS**, separadas por linha fina; barra final com copyright e tagline.

## Fora de escopo

- Página completa de Notas → `23-notes.md`
- Case studies → `06-projects-case-studies.md`
- Chrome REC / LOG global → `24-found-footage-chrome.md`

## Coluna 03 — Atualmente

- Título de seção no estilo mock (`03. ATUALMENTE` ou equivalente PT).
- Conteúdo: lista com prefixo `/` (foco técnico + hobbies pessoais quando presentes no conteúdo).
- Reutilizar `CurrentlySection` com variante **compacta** (sem bloco Learning longo na faixa, se o mock for só lista `/` — learning pode ficar em About ou sublista opcional).
- Schema: estender `content/experience/currently.md` com `hobbies[]` ou linhas livres (coordenação com spec 05).

## Coluna 04 — Em outro lugar

- Links: GitHub, LinkedIn, Email, **currículo** (PDF ou página — URL em `content/site/links` ou equivalente).
- Ícones simples mono (SVG inline ou sprite leve); texto alternativo em cada link.
- Evolução de `SocialLinks`.

## Coluna 05 — Notas

- Teaser curto (1–2 frases) + `ver notas →` para `/notes`.
- Conteúdo teaser em `content/site/` ou primeiro item de `content/notes/` (23).

## Barra final

```text
LUCAS BRAZ DUTRA — 2026          ENTRE SISTEMAS E SILÊNCIOS.
```

- Ano dinâmico ou fixo conforme decisão em `18-open-decisions.md` (tagline fechada nesta trilha).
- Tipografia mono, caixa alta na tagline.

## Layout

- Desktop: CSS grid 3 colunas, gap generoso, borda superior full width dentro do container wide.
- Mobile: colunas empilhadas na ordem 03 → 04 → 05; barra final em duas linhas se necessário.
- Landmark `<footer>` envolvendo faixa + barra (ou `footer` + `div` interna com roles claros).

## Dependências

- `19-home-visual-parity.md`
- `05-section-currently.md`
- `23-notes.md` (link coluna 05)
- `08-visual-identity.md`

## Entregáveis

- [x] `HomeEditorialFooter` (3 colunas) → [`HomeEditorialFooter.tsx`](../src/components/home/HomeEditorialFooter.tsx)
- [x] `SiteFooterBar` (barra final)
- [x] Integração na `HomePage` após showcase (21)
- [x] Currículo linkável + ícones em coluna 04 → [`SocialLinks.tsx`](../src/components/home/SocialLinks.tsx)

## Critérios de aceite

- [x] Três colunas visíveis em ≥768px; empilhamento em mobile sem perda de links
- [x] Coluna 05 linka `/notes` (rota existente após spec 23)
- [x] Tagline e copyright presentes na barra inferior
- [x] Contraste AA nos links e textos secundários
