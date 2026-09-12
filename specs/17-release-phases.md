# Spec 17 — Fases de implementação (V1–V4)

## Escopo

Ordem incremental de entrega; **não é obrigatório** chegar à V4.

## Fora de escopo

- Detalhe de cada feature (ver specs numeradas)

## V1 — Identidade

- Imagem/background
- HTML (páginas 04–07 em versão mínima)
- Grain + vignette (`09`)
- Pequenas animações
- Navegação
- Projetos (teasers + pelo menos 1 case study)

**Specs primárias:** 01–09, 03, 04–06.

## V2 — 2.5D

- Depth map + parallax (`14`)
- Câmera Three.js básica
- Iluminação ambiente
- Partículas/neblina leve

**Specs:** 10, 12, 14.

## V3 — Híbrido

- Porta 3D, piano 3D, cadeira se justificada (`15`)
- Sombras e interações pontuais
- Concept art split (`13`)

**Specs:** 13, 15.

## V4 — Narrativa

- Câmera integrada ao scroll (`16`)
- Mudanças de luz e anomalias (`11`)
- Revelação opcional
- Possível encerramento narrativo

**Specs:** 11, 16.

## Entregáveis

- [x] Milestones ou labels no issue tracker alinhados a V1–V4 → [`.github/release-phase-labels.md`](../.github/release-phase-labels.md), [`scripts/github-phase-labels.sh`](../scripts/github-phase-labels.sh)
- [x] Definition of Done por fase (checklist copiável) → [`docs/release-phases.md`](../docs/release-phases.md)

## Critérios de aceite

- [x] V1 deployável em produção como portfólio completo “nível 1” (`01-vision.md`) — validação com flags 3D/parallax/narrativa off em [`docs/release-phases.md`](../docs/release-phases.md#v1--identidade)
- [x] Cada fase adiciona valor sem tornar V anterior inutilizável — tabela de degradação em [`docs/release-phases.md`](../docs/release-phases.md#degradação-fase-n-off--fase-n1-ok)
