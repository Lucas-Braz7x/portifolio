---
name: implement-specs
description: >-
  Reads portfolio specs from specs/, plans and implements them (single or multiple),
  asks the user when blocked on open decisions, marks deliverables done in the spec
  files, runs yarn build/lint, and outputs git add/commit commands split by
  conventional-commit context. Use when the user asks to implement a spec (e.g.
  "spec 04", "implementar specs 06 e 07", "vamos para a spec 03").
---

# Implementar specs do portfólio

Workflow para implementar uma ou mais specs numeradas deste repo sem improvisar escopo.

## Entrada do usuário

Aceitar:

- Número(s): `04`, `spec 06`, `specs 04–06`, `04 e 05`
- Nome parcial: `page-home`, `case-studies` → resolver para arquivo em `specs/`

Resolver caminho: `specs/{NN}-*.md` (ex.: `specs/06-projects-case-studies.md`).

**Múltiplas specs:** ordenar por dependências em `specs/README.md` (01 → 02 → 03 …). Se a ordem for ambígua, seguir a numeração crescente e ler "Fora de escopo" de cada uma.

## Antes de codar (obrigatório)

1. Ler **cada spec** alvo por completo (Escopo, Fora de escopo, Entregáveis, Critérios de aceite).
2. Ler regras relevantes em `.cursor/rules/` (mínimo: `project-context.mdc`, `stack-vite-react.mdc`; incluir `styling.mdc`, `react-typescript.mdc`, `content-case-studies.mdc`, `git-safety.mdc` quando aplicável).
3. Ler `docs/code-style.md` (arrow functions em `src/`).
4. Inspecionar código existente relacionado (grep/glob); **não duplicar** loaders, tokens ou componentes já criados.
5. Produzir um **plano curto** (markdown) antes de editar arquivos:

```markdown
## Plano — specs NN[, MM…]

### Escopo desta rodada
- …

### Arquivos previstos
- criar / alterar: …

### Fora desta rodada (explicitar)
- …

### Riscos / dependências
- …

### Perguntas ao Lucas (se houver)
- [ ] …
```

6. **Perguntar ao usuário** somente quando:
   - `specs/18-open-decisions.md` bloqueia (copy final, PT/EN, paleta, nome Lab, etc.) **e** não há placeholder coerente com `specs/08-visual-identity.md` ou wire existente;
   - a spec exige decisão de produto não descrita;
   - implementar uma spec **violaria** "Fora de escopo" de outra sem confirmação.

Se não houver bloqueio, declarar no plano: *Nenhuma pergunta — seguindo placeholders da spec / código existente.*

Usar `AskQuestion` quando houver opções claras; caso contrário, uma pergunta aberta por vez.

## Implementação

- **Escopo mínimo** que fecha entregáveis e critérios de aceite da spec.
- Conteúdo editorial em `content/`; UI em `src/`; não hardcodar copy longa em TSX (ver `content-case-studies.mdc`).
- **Arrow functions** em `src/` (`docs/code-style.md`).
- **Sem backend**; build-time para conteúdo (`specs/03-stack-and-routes.md`).
- Three.js só se a spec pedir; chunk lazy + `manualChunks` em `vite.config.ts`.
- Após mudanças substantivas: `yarn build` e `yarn lint` (corrigir até passar).

## Atualizar specs

Para cada spec implementada, editar o arquivo em `specs/`:

- Marcar entregáveis `- [x]` com link relativo ao arquivo criado quando fizer sentido (padrão já usado em 01–06).
- Nos critérios de aceite, marcar `- [x]` ou adicionar linha curta apontando **onde** foi atendido (arquivo/comando), se ainda não estiver óbvio.

Não marcar itens parciais como feitos. Se ficou de fora, deixar `[ ]` e resumir no fechamento da tarefa.

## Fechamento (obrigatório)

Responder ao usuário com:

1. Resumo do que foi feito (por spec).
2. O que ficou pendente / próximo passo sugerido.
3. Bloco **Git — commits sugeridos** (apenas comandos; **não** executar `git commit`/`git push` salvo pedido explícito).

### Agrupar commits por contexto (Commitizen / Conventional Commits)

Separar mudanças em **um commit por tipo de mudança**, não necessariamente um commit por spec. Tipos comuns neste repo:

| Tipo | Quando |
|------|--------|
| `feat` | comportamento ou feature de produto (páginas, loaders, componentes) |
| `style` | visual/CSS/tipografia sem mudar lógica de negócio |
| `docs` | só specs markdown, README, `content/**/README.md` |
| `chore` | deps, tooling, config (vite, eslint) |
| `refactor` | reestruturação sem mudar comportamento |

Formato da mensagem:

```text
<type>(<scope opcional>): <subject imperativo, ≤72 chars>

<body opcional: 1–2 frases — por quê, não lista de arquivos>
```

`scope` sugerido: `home`, `projects`, `content`, `spec-06`, `lab`, etc.

Para **cada** commit, gerar:

```bash
git add \
  path/one \
  path/two

git commit -m "$(cat <<'EOF'
feat(projects): add case study layout and section validation

Parse required markdown sections at build time; render mermaid in architecture.
EOF
)"
```

Regras para `git add`:

- Listar paths explícitos (evitar `git add .` salvo pedido do usuário).
- Se `README.md` mistura contextos, indicar `git add -p README.md` e qual hunk vai em qual commit.
- Não incluir `.env`, secrets, ou `dist/` (salvo pedido explícito).

Ordenar commits: `chore` (deps) → `feat`/`refactor` → `style` → `docs` quando houver vários na mesma rodada.

## Múltiplas specs numa sessão

- Um plano único listando todas as specs.
- Implementar na ordem de dependência.
- Commits: preferir **agrupar por tipo**, não por spec — exceto se o usuário pedir um commit por spec.
- Exemplo: specs 04+05 num `feat(home): …`; spec 06 em `feat(projects): …` se forem commits separados.

## Exemplo de invocação

Usuário: *implemente a spec 06*

1. Ler `specs/06-projects-case-studies.md` + rules + `src/lib/content/projects.ts`.
2. Plano → implementar → marcar spec → build/lint.
3. Entregar commits sugeridos (`feat(projects): …`, e `chore(deps): add mermaid` se aplicável).

## Referência

- Índice de specs: `specs/README.md`
- Fases V1–V4: `specs/17-release-phases.md`
- Decisões abertas: `specs/18-open-decisions.md`
- Exemplos de commits no histórico: `feat: implement spec 01…`, `style: prefer arrow functions…`

Mais exemplos de plano/commits: [examples.md](examples.md)
