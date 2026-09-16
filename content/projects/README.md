# Projects — case studies

Cada arquivo `.md` ou `.mdx` em esta pasta é um projeto. Frontmatter obrigatório:

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `title` | sim | Nome do projeto |
| `summary` | sim | Uma linha: problema ou resultado (teaser) |
| `stack` | não | Lista ou string; exibida como `AWS · Lambda` |
| `order` | não | Ordenação na lista |
| `featured` | não | `true` para aparecer na Home (até 5) |
| `thumbnail` | não | Path em `public/` — card na Home (spec 21) |

## Corpo — seções obrigatórias (spec 06)

Use headings `##` **nesta ordem**:

1. Problema  
2. Contexto  
3. Decisões  
4. Arquitetura — incluir diagrama (` ```mermaid ` ou imagem Markdown)  
5. Resultado  
6. O que eu faria diferente  

O build falha se faltar seção ou diagrama em Arquitetura.
