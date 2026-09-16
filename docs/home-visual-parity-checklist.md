# Checklist — Home visual parity (spec 19)

Referência: [`docs/images/home.png`](./images/home.png). Contrato: [`specs/19-home-visual-parity.md`](../specs/19-home-visual-parity.md).

Usar em milestone **Home visual parity** (issues/PRs).

## Composição (`/`)

- [x] Ordem no scroll: hero → **02 projetos** → faixa **03 / 04 / 05** → barra final
- [x] Um único `h1` na página
- [x] Landmarks: `footer` global (faixa editorial + barra final)
- [x] Fluxo editorial legível com cena desligada

## Navegação primária (PT)

- [x] `[ 01 ]` INÍCIO → `/`
- [x] `[ 02 ]` PROJETOS → `/projects`
- [x] `[ 03 ]` SOBRE → `/about`
- [x] `[ 04 ]` Notas → `/notes`
- [x] `[ 05 ]` CONTATO → `/contact`
- [x] `/lab` acessível fora da nav primária (≥1 link)

## Zonas (detalhe por spec)

| Zona | Spec | Feito |
|------|------|-------|
| Hero full-viewport, scrim, CTAs | 20 | x |
| REC + timestamp + citação hero | 24 | x |
| Grade 3 cards + thumbnails | 21 | x |
| Faixa 3 colunas + currículo/ícones | 22 | x |
| Notas (rota + conteúdo) | 23 | x |
| QA visual / screenshots | 25 | parcial (manual; Playwright pendente) |

## Flags (legibilidade)

Validar com `VITE_SCENE_3D=false`, parallax off, narrativa off:

- [x] Hero legível (imagem estática ou scrim)
- [x] Projetos e footer legíveis sobre fundo sólido
- [x] Navegação e links funcionais

## Viewports

- [x] 1440×900 (desktop) — inspeção manual pós-implementação
- [x] 768×1024 (tablet)
- [x] 390×844 (mobile)
