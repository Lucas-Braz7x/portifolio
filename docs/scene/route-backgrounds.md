# Cenas de fundo por rota

Progressão visual 2.5D (sem meshes 3D por padrão).

## Configuração

- Mapa rota → cena: [`content/scene/route-backgrounds.json`](../../content/scene/route-backgrounds.json)
- Assets WebP: [`public/scene/`](../../public/scene/) (`room`, `corredor`, `piano`)
- Resolver: [`src/lib/scene/route-backgrounds.ts`](../../src/lib/scene/route-backgrounds.ts)
- UI: [`RouteSceneBackground.tsx`](../../src/components/three/RouteSceneBackground.tsx)

## Mapa narrativo

| Rotas | Cena |
|-------|------|
| `/`, `/contact` | home (`room-background.webp`, hero sombrio) |
| `/projects`, `/projects/*`, `/notes` | corredor |
| `/about`, `/lab` | piano |

## Tratamento visual

- Cena `home`: sem escurecimento extra.
- `corredor` e `piano`: overlay + `brightness` leve (classe `scene-route-bg__plate--dimmed`) para aproximar do hero.

## Movimento

- **Ponteiro:** pan leve (`VITE_SCENE_PARALLAX` + não `prefers-reduced-motion`)
- **Scroll:** só na Home, via `useDocumentScrollProgress`
- **Tempo:** “respiração” de brilho/contraste (CSS), sem trocar imagem automaticamente
- **Navegação:** crossfade ~850ms entre cenas

## Flags

- `VITE_SCENE_PARALLAX=false` — pan/zoom/respiração desligados; crossfade permanece
- `VITE_SCENE_3D=false` (padrão) — sem canvas R3F
