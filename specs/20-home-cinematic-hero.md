# Spec 20 — Hero cinematográfico (Home)

## Escopo

Primeira dobra da Home: header wide, hero com altura mínima de viewport, copy e CTAs sobre cenário (ou fallback estático), scrim para legibilidade, citação e timestamp nos cantos inferiores do hero, transição visual para fundo opaco nas seções seguintes.

## Fora de escopo

- Grade de projetos → `21-home-project-showcase.md`
- Faixa editorial inferior → `22-home-editorial-footer.md`
- REC e relógio (comportamento found footage) → `24-found-footage-chrome.md` (posicionamento definido aqui, lógica em 24)
- Modelagem porta/piano → `15-3d-door-piano.md`

## Composição (referência `home.png`)

```text
┌─────────────────────────────────────────────────────────────┐
│ LBD ─────────── [ 01 ]…[ 05 ] nav ─────────── ● REC        │
├─────────────────────────────────────────────────────────────┤
│ ░░░░░░░░░░░ cenário (foto / parallax / 3D) ░░░░░░░░░░░░░░░ │
│  LUCAS BRAZ DUTRA                                           │
│  SOFTWARE ENGINEER                                          │
│  (bio 2–3 linhas)                                           │
│  → ver projetos   → sobre mim   → contato                   │
│                                                             │
│  "citação itálica"                    10.09.2026 21:47:13   │
└─────────────────────────────────────────────────────────────┘
```

- Remover kicker **“Arquivo”** do hero alvo (não aparece no mock).
- CTAs: labels alinhadas ao mock (`ver projetos`, `sobre mim`, `contato`) ou PT documentado em `18-open-decisions.md`.

## Layout e tokens

- Hero: `min-height: 100dvh` (ou equivalente com safe-area).
- Largura do conteúdo do hero **maior** que `--width-content` (48rem) onde necessário — introduzir token `--width-hero` ou layout full-bleed com padding lateral (ver revisão de tokens em 25 / `tokens.css`).
- Header: full width; nav **centrada** no desktop; logo LBD à esquerda; slot REC à direita (24).
- Scrim: gradiente ou overlay sem quebrar contraste AA do body sobre imagem (validar com ferramenta ou ratio documentado).

## Cenário e máscara

- Camadas globais (`SceneLayers`, parallax) devem ser **visíveis no hero** e **não competir** com blocos 02+ :
  - Opção A: máscara CSS limitando `scene-root` à primeira viewport na Home
  - Opção B: fundo opaco em `main` a partir da seção 02 com z-index acima da cena fixa
- Integração: `12-scene-3d-layers.md`, `14-depth-map-parallax.md`, `16-camera-scroll.md` (blend de scroll só na Home, se ativo).

## Fallback (obrigatório)

| Condição | Comportamento |
|----------|----------------|
| WebGL off / indisponível | Imagem estática hero (`room-background` ou WEBP final spec 13) + scrim |
| Parallax off (mobile / flag) | Mesma imagem estática, sem jitter |
| Reduced motion | Sem animações de entrada no hero; timestamp pode ser estático (24) |

## Conteúdo editável

Arquivos sugeridos em `content/site/`:

- Bio: existente (`vision.json` ou equivalente)
- Citação hero: novo campo (ex. `hero-quote.md` ou chave JSON)
- CTAs: paths fixos `/projects`, `/about`, `/contact`

## Dependências

- `19-home-visual-parity.md`
- `08-visual-identity.md`
- `12-scene-3d-layers.md`, `14-depth-map-parallax.md`
- `24-found-footage-chrome.md` (REC + timestamp)

## Entregáveis

- [x] `HomeHero` refatorado: viewport, scrim, CTAs, slots citação/timestamp → [`HomeHero.tsx`](../src/components/home/HomeHero.tsx)
- [x] `SiteHeader` full-bleed com nav centrada (coordenação com 24) → [`SiteHeader.tsx`](../src/components/layout/SiteHeader.tsx)
- [x] Máscara ou fundo opaco pós-hero na Home → [`home.css`](../src/styles/home.css), `home-below`
- [x] Conteúdo de citação em `content/site/` → [`home.json`](../content/site/home.json)

## Critérios de aceite

- [x] Hero ocupa pelo menos 100dvh em desktop e mobile (sem colapsar a uma faixa estreita)
- [x] Nome e bio legíveis com cena ativa e com `VITE_SCENE_3D=false`
- [x] Scroll para seção 02 não deixa texto de projetos sobreposto ilegível à cena
- [x] Hierarquia: um `h1`; CTAs em `nav` ou lista de links com nomes acessíveis
