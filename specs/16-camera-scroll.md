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

- [ ] Estratégia: scroll na Home única vs. câmera por `pathname` em SPA
- [ ] Integração com `11-narrative-horror-layer.md` (intensidade por parada)

## Critérios de aceite

- Scroll do documento não “trava” por causa da câmera (sem hijack agressivo)
- Navegação por teclado e leitores de tela independente da câmera

## Fase

**V4** narrativa — opcional — `17-release-phases.md`
