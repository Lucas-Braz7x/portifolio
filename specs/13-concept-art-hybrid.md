# Spec 13 — Concept art e separação foto vs 3D

## Escopo

Usar imagem da sala como storyboard; decidir o que permanece textura e o que vira mesh.

## Fora de escopo

- Algoritmo de parallax → `14-depth-map-parallax.md`
- Rig/animação da porta → `15-3d-door-piano.md`

## Princípio

A concept art **não precisa** ser o frame final; orienta composição e recorte.

```text
FOTO / TEXTURA
 ├── parede
 ├── chão
 ├── ambiente
 └── composição geral

3D
 ├── porta
 ├── cadeira
 └── piano
```

Transição foto ↔ 3D deve ser **imperceptível** na melhor versão.

## Entregáveis

- [ ] Lista de assets: quais PNG/JPG + quais GLB/GLTF
- [ ] Guia de export (resolução máx, formato) para background

## Critérios de aceite

- Cada elemento 3D justificado pela regra em `10-threejs-guidelines.md`
- Plano B documentado: apenas imagem full-bleed sem meshes
