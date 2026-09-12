# Spec 06 — Projetos e case studies

## Escopo

Lista de projetos na Home/`/projects` e **template** obrigatório de case study.

## Fora de escopo

- Projetos do Lab → `07-lab-oficina.md`
- Quantidade final de projetos (meta: 3–5) → `18-open-decisions.md`

## Teaser (lista)

Formato por item:

```text
01
NOME DO PROJETO

Uma linha: problema ou resultado
Stack em linha única (ex.: AWS · Lambda · TypeScript)

→ case study
```

Exemplo de referência:

```text
01
CERTTA
Migrating legacy serverless systems
AWS · Lambda · TypeScript · Node
→ case study
```

## Template do case study (`/projects/[slug]`)

Seções obrigatórias, nesta ordem:

1. **Problema** — o que precisava ser resolvido
2. **Contexto** — por que o problema existia
3. **Decisões** — escolhas arquiteturais e motivação
4. **Arquitetura** — diagrama + explicação
5. **Resultado** — o que melhorou (métricas se houver)
6. **O que eu faria diferente** — reflexão crítica

## Entregáveis

- [x] `content/projects/*.mdx` com frontmatter (title, summary, stack, order, featured) → `.md` / `.mdx` + [`content/projects/README.md`](../content/projects/README.md)
- [x] Layout de case study com âncoras ou scroll para cada seção → [`CaseStudyLayout`](../src/components/projects/CaseStudyLayout.tsx), [`CaseStudyNav`](../src/components/projects/CaseStudyNav.tsx)
- [x] Página `/projects` listando todos; Home mostra subset `featured` → já em spec 03/04; validação de seções no build

## Critérios de aceite

- [x] Nenhum case study publicado só com lista de tecnologias → template de 6 seções obrigatório (`assertCaseStudyComplete`)
- [x] Diagrama de arquitetura presente (imagem ou mermaid embed) em cada case publicado → validação em Arquitetura + [`MermaidDiagram`](../src/components/projects/MermaidDiagram.tsx)
