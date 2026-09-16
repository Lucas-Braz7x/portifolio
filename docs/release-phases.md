# Fases de release (V1–V4)

Spec [`17-release-phases.md`](../specs/17-release-phases.md). Decisões de produto ainda abertas: [`18-open-decisions.md`](../specs/18-open-decisions.md).

Cada fase **adiciona** valor; fases anteriores continuam utilizáveis via flags e fallbacks (ver tabela de degradação).

## Mapa rápido

| Fase | Foco | Specs | Status no repo |
|------|------|-------|----------------|
| **V1** | Portfólio HTML + identidade | 01–09, 03–06 | **Entregue** — deployável como nível 1 |
| **V2** | 2.5D + camada WebGL básica | 10, 12, 14 | **Entregue** — parallax + cena atmosférica |
| **V3** | Híbrido foto + meshes | 13, 15 | **Entregue (mínimo)** — procedural; GLB/arte pendente |
| **V4** | Narrativa + câmera | 11, 16 | **Entregue (mínimo)** — polish narrativo opcional |
| **Parity** | Home vs `home.png` | 19–25 | **Em progresso** — nav + `/notes`; layout mock pendente 20–22 |

---

## Home visual parity

**Objetivo:** composição e chrome da referência [`docs/images/home.png`](../docs/images/home.png) na rota `/`, com fallback forte quando WebGL/parallax/narrativa estão off.

**Specs:** [`19-home-visual-parity.md`](../specs/19-home-visual-parity.md) (contrato) → 20 / 21 / 22 → 23 / 24 → 25.

Checklist manual: [`home-visual-parity-checklist.md`](./home-visual-parity-checklist.md).

### Definition of Done (copiar para issue/milestone)

```markdown
- [ ] Home: ordem hero → projetos → faixa 03–05 → barra final (spec 19 — adiar até 20–22)
- [ ] Hero ~100dvh + máscara cena (spec 20)
- [x] Nav primária PT: INÍCIO, PROJETOS, SOBRE, NOTAS, CONTATO; `/lab` fora da nav
- [ ] REC + timestamp + citação hero (spec 24)
- [x] `/notes` com conteúdo mínimo em `content/notes/`
- [ ] Thumbnails featured + placeholders documentados (spec 21)
- [ ] Regressão visual static em 1440, 768, 390 (spec 25)
- [x] `yarn build` + flags V1 off: site legível (fundo opaco abaixo do hero)
```

**Ordem de implementação:** 19 → (20 ∥ 21 ∥ 22) → 23 → 24 → 25.

**Relação com V2–V4:** spec 20 integra cena existente; paridade HTML (21–22) não depende de 3D.

---

## V1 — Identidade

**Objetivo:** site completo como portfólio profissional sem depender de WebGL.

### Definition of Done (copiar para issue/milestone)

```markdown
- [x] Rotas `/`, `/projects`, `/projects/:slug`, `/about`, `/contact`, `/lab`
- [x] Home com hero, Currently, Selected work (spec 04–05)
- [x] ≥1 case study publicado com template completo (spec 06)
- [x] Grain + vignette + reduced motion (spec 09)
- [x] Tokens e layout editorial (spec 08)
- [x] Navegação e meta/visão em `content/site/`
- [x] `yarn build` produz `dist/` estático
```

**Validação:** `VITE_SCENE_3D=false` + `VITE_SCENE_PARALLAX=false` + `VITE_NARRATIVE_LAYER=false` → site legível e navegável.

---

## V2 — 2.5D

**Objetivo:** profundidade e atmosfera sem competir com o conteúdo HTML.

### Definition of Done

```markdown
- [x] Camadas documentadas (spec 12) — `src/components/three/README.md`
- [x] Depth parallax + fallback estático (spec 14)
- [x] Chunk `three` lazy; guidelines + ADR (spec 10)
- [x] Iluminação ambiente / neblina leve na cena WebGL
- [x] Parallax off em mobile e prefers-reduced-motion
```

**Flags:** `VITE_SCENE_PARALLAX`, `VITE_SCENE_3D`.

---

## V3 — Híbrido

**Objetivo:** porta e piano como objetos 3D com estados por rota.

### Definition of Done

```markdown
- [x] Manifest foto vs mesh (spec 13) — `content/scene/assets.json`
- [x] Porta com abertura, luz e sombra (spec 15)
- [x] Piano com visibilidade por rota; tecla reativa ao pointer (sem áudio autoplay)
- [x] Poses em config — `content/scene/scene-routes.json`
- [ ] Arte final (WEBP + depth PNG + GLB otimizados) — ver `docs/scene/concept-art-export.md`
- [ ] Cadeira 3D — não incluída (regra de ouro spec 10)
```

---

## V4 — Narrativa

**Objetivo:** progressão sutil; câmera cinematográfica sem hijack de scroll.

### Definition of Done

```markdown
- [x] Mapa rota → intensidade narrativa (spec 11)
- [x] Câmera por pathname + blend de scroll na Home (spec 16)
- [x] Flag para demo profissional sem narrativa (`VITE_NARRATIVE_LAYER`)
- [ ] Anomalias pontuais adicionais (distribuídas em 09/15/16 — polish)
- [ ] Encerramento narrativo opcional (conteúdo/copy)
```

---

## Degradação (fase N off → fase N−1 ok)

| Desligar | Efeito |
|----------|--------|
| `VITE_NARRATIVE_LAYER=false` | Estado visual “normal” em todas as rotas |
| `VITE_SCENE_PARALLAX=false` | Background estático (plano B spec 13) |
| `VITE_SCENE_3D=false` | Sem canvas R3F; camadas 1–2 + atmosfera 2D |
| WebGL indisponível | Parallax e canvas caem em fallback automático |

---

## Issue tracker (GitHub)

Labels sugeridas (criar uma vez no repositório):

| Label | Cor sugerida | Uso |
|-------|--------------|-----|
| `phase:v1` | `#6b7280` | Identidade / HTML |
| `phase:v2` | `#4b5563` | 2.5D / parallax |
| `phase:v3` | `#374151` | Porta / piano / híbrido |
| `phase:v4` | `#1f2937` | Narrativa / câmera |

Milestones opcionais com os mesmos nomes (`V1 — Identidade`, …).

Comandos (requer [`gh`](https://cli.github.com/) autenticado):

```bash
# Ver também scripts/github-phase-labels.sh
./scripts/github-phase-labels.sh
```
