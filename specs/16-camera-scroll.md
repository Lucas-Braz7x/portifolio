# Spec 16 — Câmera Three.js e scroll / rotas

## Escopo

Sincronizar movimento de câmera (e revelação de elementos) com scroll ou mudança de página.

## Fora de escopo

- Conteúdo HTML das seções
- Depth parallax sem câmera 3D → `14-depth-map-parallax.md`

## Mapa de referência

```text
HOME      → câmera inicial
PROJECTS  → deslocamento
ABOUT     → aproximação / ângulo
LAB       → outro elemento aparece
END       → cena muda novamente
```

HTML permanece o site; Three.js é cenário cinematográfico.

## Entregáveis

- [x] Estratégia: scroll na Home + cena por `pathname` (2.5D) → [`docs/scene/route-backgrounds.md`](../docs/scene/route-backgrounds.md), [`docs/scene/camera-scroll-strategy.md`](../docs/scene/camera-scroll-strategy.md)
- [x] Integração com `11-narrative-horror-layer.md` (intensidade por parada) → `openRad` da porta em [`DoorObject.tsx`](../src/components/three/DoorObject.tsx); luz em [`AtmosphericScene.tsx`](../src/components/three/AtmosphericScene.tsx)

## Critérios de aceite

- [x] Scroll do documento não “trava” por causa da câmera (sem hijack agressivo) → listener `passive` em [`useDocumentScrollProgress.ts`](../src/hooks/useDocumentScrollProgress.ts)
- [x] Navegação por teclado e leitores de tela independente da câmera → canvas `pointer-events: none`; conteúdo em `--z-content`

## Fase

**V4** narrativa — opcional — `17-release-phases.md`
