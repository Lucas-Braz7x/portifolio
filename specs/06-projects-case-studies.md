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

- [ ] `content/projects/*.mdx` com frontmatter (title, summary, stack, order, featured)
- [ ] Layout de case study com âncoras ou scroll para cada seção
- [ ] Página `/projects` listando todos; Home mostra subset `featured`

## Critérios de aceite

- Nenhum case study publicado só com lista de tecnologias
- Diagrama de arquitetura presente (imagem ou mermaid embed) em cada case publicado
