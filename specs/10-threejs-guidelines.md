# Spec 10 — Papel do Three.js e regra de ouro

## Escopo

**Por que** usar Three.js e **quando não** usar; opções de alto nível (sem fixar implementação final).

## Fora de escopo

- Modelagem de porta/piano → `15-3d-door-piano.md`
- Fases de entrega → `17-release-phases.md`

## Papel

Three.js é **atmosfera**, não vitrine de “sei WebGL”.

## Opções (exploratórias)

| Opção | Descrição |
|-------|-----------|
| A. Objeto abstrato | Esfera/geometria quase invisível; reação leve ao mouse |
| B. Ambiente 3D | Cena escura, luz, neblina, geometria distante; HTML continua principal |
| C. Algo no fundo | Conteúdo normal; detalhe 3D que o usuário pode não notar de imediato |
| D. Scroll narrativo | Câmera/luz/objeto mudam por seção → `16-camera-scroll.md` |

Direção preferida documentada em specs 12–16: híbrido 2D/2.5D + objetos pontuais 3D.

## Regra de ouro

Para cada elemento:

> **Isso precisa ser 3D para produzir a experiência que queremos?**

Se não: imagem, textura, CSS ou efeito 2D.

Sucesso:

> “Que site estranho e bonito.”

Fracasso:

> “Esse cara colocou Three.js no portfólio.”

## Entregáveis

- [x] ADR curto no repo citando opção escolhida (quando decidido em `18-open-decisions.md`) → [`docs/adr/001-threejs-role.md`](../docs/adr/001-threejs-role.md) (direção B+C; detalhe final em `18`)
- [x] Critério de review: todo mesh/efeito WebGL referencia user story atmosférica → seção no [PR template](../.github/pull_request_template.md)

## Critérios de aceite

- [x] Fallback sem WebGL: site permanece utilizável (`02-principles.md`) — V1 sem canvas; atmosfera 2D em spec 09; ADR exige fallback para fases 3D
