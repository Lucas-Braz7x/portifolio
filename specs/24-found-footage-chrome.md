# Spec 24 — Chrome found footage (REC, tempo, citação)

## Escopo

Elementos de interface “câmera / gravação” da referência: indicador **● REC** no header, **timestamp** no canto inferior direito do hero, integração com grain/vignette existentes (spec 09) sem duplicar lógica.

## Fora de escopo

- Narrativa por rota e anomalias → `11-narrative-horror-layer.md`
- Bloco LOG fixo global (`AtmosphereLog`) — pode coexistir; não substitui timestamp do hero
- Áudio e autoplay

## REC

- Posição: canto superior direito do header (desktop e mobile).
- Visual: ponto vermelho + label `REC` mono.
- Vermelho **pontual** (accent), não dominante na página — alinhado a `08-visual-identity.md`.
- `prefers-reduced-motion`: sem blink/pulse; REC estático aceitável.

## Timestamp

- Posição: canto inferior direito **dentro do hero** (spec 20).
- Formato referência: `DD.MM.YYYY HH:mm:ss` (locale PT-BR para separadores).
- Atualização: relógio ao vivo opcional; com reduced motion ou flag demo, valor estático de build ou conteúdo.

## Citação hero

- Posição: canto inferior esquerdo do hero, itálico serif ou body italic token.
- Texto em `content/site/` (ver spec 20).

## Relação com spec 09

| Elemento | Spec 09 | Spec 24 |
|----------|---------|---------|
| Grain / vignette | Sim | Reutilizar; ajustar opacidade se hero exigir |
| LOG canto tela | Sim | Mantém; distinto do timestamp do hero |
| REC / relógio | Não | Novo |

## Flags

- `VITE_NARRATIVE_LAYER=false`: REC/timestamp podem permanecer (modo “profissional cinematográfico”) — não confundir com anomalias narrativas.
- Documentar em `docs/release-phases.md` se algum chrome for desligável por env.

## Dependências

- `09-atmospheric-effects-2d.md`
- `20-home-cinematic-hero.md`
- `08-visual-identity.md`

## Entregáveis

- [x] Componente `RecIndicator` no header → [`RecIndicator.tsx`](../src/components/atmosphere/RecIndicator.tsx)
- [x] Componente `HeroTimestamp` (e wiring em `HomeHero`)
- [x] Conteúdo citação consumido no hero
- [x] Comportamento reduced-motion documentado — relógio estático com `prefers-reduced-motion` em `HeroTimestamp`

## Critérios de aceite

- [x] REC visível no header na Home sem cobrir nav
- [x] Timestamp visível no hero em desktop; em mobile pode simplificar formato mas permanece legível
- [x] Nenhuma animação contínua full-screen adicional além do grain spec 09
- [x] Texto principal do hero mantém contraste AA com chrome ativo
