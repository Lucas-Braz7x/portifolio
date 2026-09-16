# Spec 21 — Showcase de projetos na Home

## Escopo

Seção **02. PROJETOS** da referência: título e descrição curtos à esquerda (ou stack editorial), **três cards** em grade horizontal com thumbnail, título serif, resumo, tags de stack em estilo mono/caixa, link `ver todos →` para `/projects`.

## Fora de escopo

- Template completo do case study → `06-projects-case-studies.md`
- Lista em `/projects` (mantém spec 06; pode reutilizar card)
- Quantidade final de projetos featured → `18-open-decisions.md` (mínimo visual: 3 slots)

## Layout

- Fundo **opaco** (`--color-bg`), separado do hero cênico (spec 20).
- Desktop: grade de 3 colunas para cards; largura alinhada ao mock (usar token wide da spec 19/25).
- Tablet/mobile: 3 → 2 → 1 coluna sem overflow horizontal.

## Card (contrato)

Cada card exibe:

| Campo | Fonte |
|-------|--------|
| Thumbnail | frontmatter `thumbnail` (path em `public/` ou import) |
| Título | `title` |
| Resumo | `summary` (1–2 linhas) |
| Tags | `stack[]` ou `tags[]` — chips mono |
| Link | `/projects/:slug` (área clicável ou título) |

## Frontmatter (extensão sobre spec 06)

```yaml
title: string
summary: string
stack: string[]
featured: boolean
order: number
thumbnail: string   # novo — obrigatório para featured na Home quando publicado
```

## Placeholders editoriais

Enquanto houver menos de 3 projetos `featured` com case completo:

- Preencher slots vazios com card **placeholder** (sem link publicado ou marcado `draft`) OU repetir editorialmente projetos secundários — decisão documentada no PR; build não deve quebrar.
- Thumbnails ausentes: imagem neutra de fallback (`public/projects/placeholder.webp`) documentada no README de `content/projects/`.

## Performance

- Thumbnails: `width`/`height` explícitos ou aspect-ratio CSS; lazy-load abaixo do hero (`loading="lazy"`).
- LCP: hero não deve competir com imagens de card no primeiro paint (cards fora da primeira viewport idealmente).

## Dependências

- `19-home-visual-parity.md`
- `06-projects-case-studies.md`
- `20-home-cinematic-hero.md` (fundo opaco abaixo do hero)

## Entregáveis

- [x] Componente `ProjectCard` → [`ProjectCard.tsx`](../src/components/home/ProjectCard.tsx)
- [x] `HomeProjectShowcase` na `HomePage` como seção 02
- [x] README `content/projects/` atualizado com `thumbnail`
- [x] Link `ver todos →` para `/projects`

## Critérios de aceite

- [x] Exatamente **3** cards visíveis na Home em desktop (featured ou placeholder documentado)
- [x] Cada card publicado tem thumbnail e ≥1 tag visível
- [x] Grade responsiva sem scroll horizontal em 390px
- [x] Dados vêm de markdown/loader, não hardcoded em JSX (exceto fallback asset path)
