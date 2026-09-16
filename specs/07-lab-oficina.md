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

**Decisão:** rota `/lab` mantida; **nav primária** usa NOTAS em `[ 04 ]` — ver [`23-notes.md`](./23-notes.md) e [`19-home-visual-parity.md`](./19-home-visual-parity.md). Nome exibido na UI secundária ainda pendente abaixo.

**Decisão pendente (rótulo secundário)** em `18-open-decisions.md`.

## UX mínima

- Grid ou lista editorial (menos “card de startup” que projetos).
- Item pode ser link externo, post curto ou apenas título + uma linha.
- Sem obrigatoriedade de case study completo.

## Entregáveis

- [x] Rota (ex. `/lab`) e `content/experiments/` → [`/lab`](../src/routes/index.tsx), [`content/experiments/`](../content/experiments/README.md)
- [x] Componente de listagem distinto visualmente de “Selected work” → [`ExperimentList`](../src/components/lab/ExperimentList.tsx) (grid editorial + borda accent)

## Critérios de aceite

- [x] Adicionar experimento novo = novo arquivo em `content/experiments/` sem mudar código de layout → [`src/lib/content/experiments.ts`](../src/lib/content/experiments.ts)
- [x] Lab não aparece misturado aos featured projects da Home (link separado na nav quando existir) → [`PrimaryNav`](../src/components/layout/PrimaryNav.tsx) `[ 04 ] Lab`; Home só `featured` projects
