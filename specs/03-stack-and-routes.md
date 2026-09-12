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

- [ ] Repo scaffold Vite + rotas acima (páginas placeholder)
- [ ] Loader de conteúdo a partir de `content/`

## Critérios de aceite

- `npm run build` gera site estático deployável
- Nenhuma dependência de API própria para exibir conteúdo publicado
- Bundle inicial sem Three.js (chunk separado, lazy)
