# Câmera Three.js e scroll (spec 16)

## Estratégia escolhida

| Modo | Quando | Comportamento |
|------|--------|----------------|
| **Primário — `pathname`** | Toda navegação SPA | Pose de câmera, porta e piano vêm de [`content/scene/scene-routes.json`](../../content/scene/scene-routes.json). |
| **Secundário — scroll na Home** | Apenas rota `/` | Progresso do scroll do **documento** (`window.scrollY`) adiciona offset suave à pose `camera` + `scroll` da Home. |
| **Narrativa (spec 11)** | Todas as rotas | `openRad` da porta escala com `narrativeIntensity`; luz já reage em `AtmosphericScene`. |

Não usamos scroll hijacking, `position: fixed` no body, nem bloqueio de wheel/touch. O HTML continua scrollável e independente da câmera WebGL.

## Acessibilidade

- Navegação, foco e leitores de tela usam só a camada HTML (`--z-content`).
- Canvas permanece `pointer-events: none` (tecla do piano reage ao `pointer` normalizado do R3F, sem capturar cliques).

## Implementação

- Resolver de rota: [`src/lib/scene/scene-routes.ts`](../../src/lib/scene/scene-routes.ts)
- Rig: [`src/components/three/SceneCameraRig.tsx`](../../src/components/three/SceneCameraRig.tsx)
- Scroll Home: [`src/hooks/useDocumentScrollProgress.ts`](../../src/hooks/useDocumentScrollProgress.ts)
