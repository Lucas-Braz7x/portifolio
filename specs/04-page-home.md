# Spec 04 — Página Home

## Escopo

Estrutura, blocos e navegação primária da landing.

## Fora de escopo

- Textos finais de case studies → `06-projects-case-studies.md`
- Efeitos de fundo 3D → specs 12–16
- Copy definitivo de identidade (frases são referência)

## Wire de conteúdo

```text
LUCAS BRAZ DUTRA
Software Engineer

Construo sistemas, exploro ideias
e tento entender como as coisas funcionam.

[ projetos ]  [ sobre ]  [ contato ]

────────────────────────────────

01 / CURRENTLY
(ver spec 05)

────────────────────────────────

02 / SELECTED WORK
3 entradas: título, uma frase do problema, link → case study

────────────────────────────────

03 / ELSEWHERE
GitHub · LinkedIn · Email
```

## Navegação

- Links principais: projetos, sobre, contato (labels podem ser PT ou EN — decidir em `18-open-decisions.md`).
- “Selected work” aponta para slugs em `/projects/[slug]`.

## Frases de identidade (referência, não obrigatórias)

> Entre sistemas, música e algumas perguntas que não precisam de resposta.

> I like building things that are difficult to explain before they're built.

## Entregáveis

- [ ] `app/page.tsx` (ou composição) com seções 01–03
- [ ] Componentes reutilizáveis: hero, section divider, project teaser, social links

## Critérios de aceite

- Hierarquia semântica (`h1`, `nav`, `main`, `section`)
- Selected work: exatamente 3–5 itens configuráveis via conteúdo, não hardcoded em JSX sem fonte MDX
