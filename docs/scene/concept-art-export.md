# Concept art — export e separação foto vs 3D

Spec 13. A concept art orienta composição; o frame final pode misturar textura e mesh.

## O que permanece textura (FOTO / PNG)

| Região | Asset | Formato preferido |
|--------|--------|-------------------|
| Paredes, chão, ambiente geral | `room-background` | WEBP ou AVIF (PNG fallback) |
| Composição / grading | mesmo arquivo | sRGB, sem alpha |

## O que vira mesh (GLB / GLTF)

| Objeto | Arquivo alvo | Quando incluir |
|--------|--------------|----------------|
| Porta | `door.glb` | Spec 15 — luz, sombra, micro-abertura |
| Piano | `piano.glb` | Spec 15 — teclas / reação à luz |
| Cadeira | `chair.glb` | Opcional; só se 2D não bastar (regra spec 10) |

Justificativas registradas em [`content/scene/assets.json`](../../content/scene/assets.json).

## Guia de export (background + depth)

1. **Dimensões:** largura máxima **2560 px** (altura proporcional, ex. 16:9). Não enviar 4K+ para o bundle estático.
2. **Background:** WEBP q=82–88 ou AVIF; PNG só se banding visível. Sem texto nem UI na arte.
3. **Depth map:** PNG grayscale **mesmo width × height** que o background. Preto = longe, branco = perto, sem alpha.
4. **Alinhamento:** mesmo crop e enquadramento; exportar os dois do mesmo arquivo mestre (Photoshop/Blender/Krita).
5. **Nomes no repo:** `public/scene/room-background.webp`, `public/scene/room-depth.png` (atualizar paths no manifest).
6. **Peso:** alvo &lt; 400 KB background + &lt; 200 KB depth após otimização.

## Plano B

Se WebGL ou parallax falhar, ou em demo só 2D:

- Servir apenas `room-background` em full-bleed (`object-fit: cover`).
- `VITE_SCENE_3D=false` remove meshes; o portfólio HTML continua completo.

Implementação do fallback: [`DepthParallaxBackground.tsx`](../../src/components/three/DepthParallaxBackground.tsx).
