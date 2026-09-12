# Exemplos — implement-specs

## Entrada: uma spec

**Usuário:** `vamos para a spec 05`

**Plano (trecho):**

```markdown
## Plano — spec 05

### Escopo desta rodada
- Loader `content/experience/currently.md`, componente CurrentlySection, reuso Home + About.

### Perguntas ao Lucas
- Nenhuma — placeholders alinhados ao wire em spec 05.
```

**Commits sugeridos (trecho):**

```bash
git add \
  content/experience/README.md \
  content/experience/currently.md \
  src/components/experience/CurrentlySection.tsx \
  src/lib/content/experience.ts \
  src/hooks/useCurrently.ts \
  src/types/experience.ts \
  src/pages/HomePage.tsx \
  src/pages/AboutPage.tsx \
  specs/05-section-currently.md \
  .cursor/rules/content-case-studies.mdc

git commit -m "$(cat <<'EOF'
feat(experience): complete currently section from markdown (spec 05)

Load role, focus, and learning at build time; reuse on Home and About.
EOF
)"
```

## Entrada: várias specs

**Usuário:** `implemente specs 04 e 06`

1. Ordem: 04 antes de 06 (home teasers dependem de projetos em conteúdo).
2. Dois commits `feat` separados se o diff for grande e temas distintos:
   - `feat(home): … (spec 04)`
   - `feat(projects): … (spec 06)`
3. Se spec 06 adicionar `mermaid`:

```bash
git add package.json yarn.lock

git commit -m "$(cat <<'EOF'
chore(deps): add mermaid for case study diagrams
EOF
)"
```

## README com hunks mistos

```bash
# commit feat — só seção Stack/spec
git add -p README.md

# commit style — linha docs/code-style.md
git add -p README.md
```

## O que não fazer

- Marcar `[x]` na spec sem implementar o entregável.
- Um único `git commit -am "várias specs"` quando há `feat` + `chore(deps)` + `style` misturados.
- `git push` sem pedido do usuário.
