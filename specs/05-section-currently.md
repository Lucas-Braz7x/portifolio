# Spec 05 — Seção Currently (+ learning)

## Escopo

Bloco curto “o que está acontecendo agora”: trabalho, foco técnico e lista de aprendizado.

## Fora de escopo

- Histórico de carreira completo (fica em About, se necessário)
- Blog ou notas longas

## Conteúdo mínimo

```text
CURRENTLY

Software Engineer @ Certta
AWS / Backend / Fullstack
AI Engineering
Spec-Driven Development

Learning:
01  Distributed Systems
02  AI Engineering
03  Jazz Harmony
...
```

## Comportamento

- Conteúdo **editável** sem redeploy complexo (MDX/markdown em `content/experience/` ou similar).
- Não exige parágrafo explicativo por item de learning.
- Pode ser reutilizado na Home (bloco 01) e, se desejado, expandido em About.

## Entregáveis

- [x] Schema de frontmatter para currently + learning list → [`content/experience/currently.md`](../content/experience/currently.md) + [`content/experience/README.md`](../content/experience/README.md)
- [x] Componente `CurrentlySection` consumindo conteúdo → [`src/components/experience/CurrentlySection.tsx`](../src/components/experience/CurrentlySection.tsx)

## Critérios de aceite

- [x] Atualizar learning/working focus alterando apenas arquivo de conteúdo → loader [`src/lib/content/experience.ts`](../src/lib/content/experience.ts)
- [x] Lista numerada acessível (lista ordenada ou headings com índice visível) → `<ol>` + índice `01` visível em `CurrentlySection`
- [x] Reuso na Home e expansão opcional em About → [`HomePage`](../src/pages/HomePage.tsx), [`AboutPage`](../src/pages/AboutPage.tsx)
