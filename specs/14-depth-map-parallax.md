# Spec 14 — Depth map e parallax 2.5D

## Escopo

Profundidade artificial a partir de imagem + mapa de profundidade; movimentos lentos de câmera.

## Fora de escopo

- Objetos 3D independentes → `15-3d-door-piano.md`
- Efeitos CSS de grain → `09-atmospheric-effects-2d.md`

## Modelo do depth map

```text
preto  = longe
cinza  = meio
branco = perto
```

Regiões deslocam em velocidades diferentes com movimento de câmera → sensação 2.5D sem modelar cena inteira.

## Restrições

- Adequado a movimentos **lentos e controlados**
- Não substituir interação de objetos que precisam de sombra dinâmica (porta/piano)

## Entregáveis

- [x] Shader depth (legado) em [`depth-parallax-gl.ts`](../src/lib/scene/depth-parallax-gl.ts); **produção** usa pan/zoom CSS em [`RouteSceneBackground.tsx`](../src/components/three/RouteSceneBackground.tsx) sem depth map por cena
- [x] Asset `depth.png` alinhado ao background → placeholders alinhados [`public/scene/room-depth.svg`](../public/scene/room-depth.svg) + [`room-background.svg`](../public/scene/room-background.svg) (substituir por PNG conforme guia spec 13)

## Critérios de aceite

- [x] Parallax desligável em mobile ou `prefers-reduced-motion` → [`usePrefersStaticScene`](../src/hooks/usePrefersStaticScene.ts); `VITE_SCENE_PARALLAX=false` força estático
- [x] Sem tearing visível entre camadas ao scroll moderado → deslocamento único por pixel via depth (sem fatiar camadas); scroll suavizado com lerp

## Fase

Previsto em **V2** — `17-release-phases.md`
