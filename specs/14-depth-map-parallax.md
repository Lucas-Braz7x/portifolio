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

- [ ] Shader ou técnica escolhida (R3F custom, displacement simples, etc.)
- [ ] Asset `depth.png` alinhado ao background

## Critérios de aceite

- Parallax desligável em mobile ou `prefers-reduced-motion`
- Sem tearing visível entre camadas ao scroll moderado

## Fase

Previsto em **V2** — `17-release-phases.md`
