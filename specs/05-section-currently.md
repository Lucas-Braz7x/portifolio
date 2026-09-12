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

- [ ] Schema de frontmatter para currently + learning list
- [ ] Componente `CurrentlySection` consumindo conteúdo

## Critérios de aceite

- Atualizar learning/working focus alterando apenas arquivo de conteúdo
- Lista numerada acessível (lista ordenada ou headings com índice visível)
