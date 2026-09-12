# Spec 03 — Stack, rotas e estrutura de pastas

## Escopo

Stack inicial, ausência de backend, organização de app e conteúdo.

## Fora de escopo

- Conteúdo editorial das páginas → specs 04–07
- Pipeline de deploy detalhado (apenas destino: hosting estático)

## Stack

| Camada | Tecnologia |
|--------|------------|
| Build / dev | **Vite** |
| UI | **React** + TypeScript |
| Rotas | `react-router-dom` (SPA) |
| Estilo | **Tailwind CSS v4** + `@tailwindcss/vite` (ver `.cursor/rules/styling.mdc`) |
| 3D | Three.js; `@react-three/fiber` + `@react-three/drei` se fizer sentido |
| Conteúdo | Markdown / MDX (build-time) |
| Deploy | `dist/` estático — Vercel, Cloudflare Pages ou AWS (S3 + CDN) |
| Backend | **Nenhum** na implementação inicial |

## Rotas

| Rota | Responsabilidade |
|------|------------------|
| `/` | Home |
| `/projects` | Lista de projetos |
| `/projects/:slug` | Case study |
| `/about` | Sobre |
| `/contact` | Contato |
| `/lab` | Lab / Oficina (quando existir) |

## Estrutura de pastas (alvo)

```text
src/
├── main.tsx
├── App.tsx
├── routes/
├── pages/
├── components/
│   ├── ui/
│   ├── three/
│   ├── projects/
│   └── layout/
├── hooks/
├── lib/
└── styles/

content/
├── projects/
├── experiments/
├── experience/
└── notes/
```

## Entregáveis

- [x] Repo scaffold Vite + rotas acima (páginas placeholder) → `src/routes/index.tsx`, lazy por rota
- [x] Loader de conteúdo a partir de `content/` → `src/lib/content/` (`import.meta.glob` + frontmatter em build-time)

## Critérios de aceite

- `yarn build` gera site estático deployável (`dist/`)
- Nenhuma dependência de API própria para exibir conteúdo publicado
- Bundle inicial sem Three.js (chunk separado, lazy) → `manualChunks` em `vite.config.ts`; canvas em `React.lazy` quando existir (`specs/10-threejs-guidelines.md`)
