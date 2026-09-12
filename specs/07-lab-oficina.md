# Spec 07 — Lab / Oficina

## Escopo

Área para experimentos não profissionais: IA, ferramentas, estudos, música, cerâmica, ideias abortadas.

## Fora de escopo

- Case studies formais → `06-projects-case-studies.md`
- Narrativa 3D específica do piano no Lab → `15-3d-door-piano.md` (só referência visual)

## Conteúdo esperado (tipos)

- Experimentos com IA
- Ferramentas pessoais
- Estudos de arquitetura
- Pequenos projetos e visualizações
- Música e experimentos criativos
- Cerâmica
- Ideias que não viraram produto

## Nome da área

Opções documentadas: `Lab`, `Experiments`, `Workshop`, **`Oficina`** (favorece ligação manual/criativo).

**Decisão pendente** em `18-open-decisions.md`.

## UX mínima

- Grid ou lista editorial (menos “card de startup” que projetos).
- Item pode ser link externo, post curto ou apenas título + uma linha.
- Sem obrigatoriedade de case study completo.

## Entregáveis

- [ ] Rota (ex. `/lab`) e `content/experiments/`
- [ ] Componente de listagem distinto visualmente de “Selected work”

## Critérios de aceite

- Adicionar experimento novo = novo arquivo em `content/experiments/` sem mudar código de layout
- Lab não aparece misturado aos featured projects da Home (link separado na nav quando existir)
