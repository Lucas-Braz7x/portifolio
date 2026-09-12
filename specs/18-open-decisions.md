# Spec 18 — Decisões abertas (backlog de produto)

## Escopo

Checklist de decisões que ainda não fecham escopo de outras specs. **Fonte única** de “ainda não decidido”: outras specs devem apontar para este arquivo em vez de “TBD” solto.

Quando um item fechar: marcar `[x]` aqui com link para spec/ADR/código e remover duplicata em outros docs.

## Fora de escopo

- Implementação em código (exceto manter este checklist atualizado)

---

## Checklist — aberto

### Identidade e conteúdo

- [ ] Nome/conceito visual definitivo (título do site, se diferente do nome pessoal)
- [ ] Paleta final (tokens provisórios em [`08-visual-identity.md`](./08-visual-identity.md) / `src/styles/tokens.css`)
- [ ] Tipografia final (provisória: Cormorant + IBM Plex Mono — spec 08)
- [ ] Referências concretas de filmes/terror (para alinhar equipe/IA de arte)
- [ ] Frase de posicionamento final na Home (placeholder em [`content/site/vision.json`](../content/site/vision.json))
- [ ] PT vs EN na UI

### Estrutura

- [ ] Nome da área Lab: Lab / Experiments / Workshop / **Oficina** (UI usa “Lab” em [`PrimaryNav`](../src/components/layout/PrimaryNav.tsx) até decidir)

### Projetos

- [ ] Selecionar 3–5 projetos featured (hoje: 1 case — [`content/projects/certta.md`](../content/projects/certta.md))
- [ ] Escrever case studies completos (além do primeiro)
- [ ] Copy About (página mínima em [`AboutPage`](../src/pages/AboutPage.tsx))
- [ ] Conteúdo inicial do Lab (esboços em [`content/experiments/`](../content/experiments/); expandir)

### 3D e narrativa

- [ ] Wireframe de páginas (Figma ou sketch)
- [ ] Identidade visual final (logo/mark se houver)
- [ ] Arte final concept + GLB (polish após V3 mínimo — [`docs/scene/concept-art-export.md`](../docs/scene/concept-art-export.md))

### Implementação e lançamento

- [ ] Microinterações (lista priorizada)
- [ ] Deploy (Vercel vs Cloudflare vs AWS estático)

---

## Checklist — resolvido

### Stack e estilo

- [x] Framework: React + Vite → [`03-stack-and-routes.md`](./03-stack-and-routes.md)
- [x] Estilização: Tailwind CSS v4 + `@tailwindcss/vite` → [`.cursor/rules/styling.mdc`](../.cursor/rules/styling.mdc)

### Estrutura

- [x] Rota do Lab → `/lab` — [`07-lab-oficina.md`](./07-lab-oficina.md), [`src/routes/index.tsx`](../src/routes/index.tsx)

### 3D e narrativa

- [x] Three.js: direção híbrido 2D/2.5D + objetos pontuais → [`docs/adr/001-threejs-role.md`](../docs/adr/001-threejs-role.md), [`10-threejs-guidelines.md`](./10-threejs-guidelines.md)

### Implementação e lançamento

- [x] Implementar Home → [`04-page-home.md`](./04-page-home.md), [`src/pages/HomePage.tsx`](../src/pages/HomePage.tsx)
- [x] Implementar projetos → [`06-projects-case-studies.md`](./06-projects-case-studies.md)
- [x] Camada Three.js por fase (V2–V4 mínimo) → [`docs/release-phases.md`](../docs/release-phases.md), [`17-release-phases.md`](./17-release-phases.md)

---

## Entregáveis

- [x] Este arquivo mantido como fonte única de “ainda não decidido” — seção **aberto** vs **resolvido** acima
- [x] Itens fechados com link para spec/ADR/código — seção **resolvido**

## Critérios de aceite

- [x] Nenhum item duplicado em outras specs como “TBD” sem apontar para aqui — refs em 04, 06, 07, 08, 10 apontam para `18-open-decisions.md`
