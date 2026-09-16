# Câmera Three.js e scroll (spec 16)

## Estratégia escolhida

| Modo | Quando | Comportamento |
|------|--------|----------------|
| **Primário — `pathname`** | Toda navegação SPA | Textura de fundo (room / corredor / piano) em [`content/scene/route-backgrounds.json`](../../content/scene/route-backgrounds.json) com crossfade. |
| **Secundário — scroll na Home** | Apenas rota `/` | Scroll do documento modula pan vertical da cena 2.5D (`useSceneRouteBackground`). |
| **Opcional — R3F** | `VITE_SCENE_3D=true` | Poses em [`scene-routes.json`](../../content/scene/scene-routes.json) (legado; meshes desligados por padrão). |
| **Narrativa (spec 11)** | Todas as rotas | Intensidade por rota → atributos `data-narrative-*` no HTML. |

Não usamos scroll hijacking, `position: fixed` no body, nem bloqueio de wheel/touch. O HTML continua scrollável e independente da câmera WebGL.

## Acessibilidade

- Navegação, foco e leitores de tela usam só a camada HTML (`--z-content`).
- Canvas permanece `pointer-events: none` (tecla do piano reage ao `pointer` normalizado do R3F, sem capturar cliques).

## Implementação

- Resolver de rota: [`src/lib/scene/scene-routes.ts`](../../src/lib/scene/scene-routes.ts)
- Rig: [`src/components/three/SceneCameraRig.tsx`](../../src/components/three/SceneCameraRig.tsx)
- Scroll Home: [`src/hooks/useDocumentScrollProgress.ts`](../../src/hooks/useDocumentScrollProgress.ts)
