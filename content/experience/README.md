# Experience — Currently

Fonte do bloco **Atualmente** (spec 05). Edite apenas os arquivos aqui; o site recompila no build.

## `currently.md`

Frontmatter obrigatório e opcional:

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `role` | sim | Cargo / contexto atual (ex.: `Software Engineer @ Certta`) |
| `focus` | não | Lista de linhas de foco técnico (cada item = uma linha na UI) |
| `learning` | não | Lista de tópicos em aprendizado (numerada na UI) |

Exemplo:

```yaml
---
role: Software Engineer @ Certta
focus:
  - AWS / Backend / Fullstack
  - AI Engineering
  - Spec-Driven Development
learning:
  - Distributed Systems
  - AI Engineering
  - Jazz Harmony
---
```

Corpo do Markdown após o frontmatter é ignorado por enquanto (reservado para notas futuras).
