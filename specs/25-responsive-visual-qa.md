# Spec 25 — Responsividade e QA visual

## Escopo

Matriz de breakpoints, regras de empilhamento, acessibilidade mínima para a Home em paridade, fallbacks sem efeitos e **regressão visual automatizada** com baselines screenshot.

## Fora de escopo

- E2E funcional completo do site (apenas Home + nav crítica)
- Performance budgets globais (Lighthouse CI opcional futuro)

## Breakpoints e comportamento

| Viewport | Largura | Hero | Projetos (21) | Faixa 22 | Header |
|----------|---------|------|---------------|----------|--------|
| mobile | &lt;640px | 100dvh, copy stack, timestamp compacto | 1 coluna | 3 blocos empilhados | nav wrap; REC visível |
| tablet | 640–1023px | idem | 2 colunas ou 1 | 3 colunas se couber, senão stack | nav centrada |
| desktop | ≥1024px | paridade `home.png` | 3 colunas | 3 colunas | full width |

## Tokens de largura (entrega conjunta com 20/21)

- Documentar em `tokens.css`: `--width-hero`, `--width-editorial` (≥ `--width-content` atual).
- Hero e showcase podem usar wide; barra final pode seguir mesmo grid.

## Acessibilidade

- Foco visível em links de nav, CTAs e cards.
- Ordem de tab: header → hero CTAs → conteúdo main → footer.
- `prefers-reduced-motion`: desliga flicker, pulse REC, relógio ao vivo (24).
- Contraste: texto sobre scrim hero validado (AA body).

## Regressão visual

Ferramenta sugerida: **Playwright** screenshot compare (ou Percy/Chromatic — escolha documentada no PR que implementa esta spec).

### Baselines

| Cenário | URL / flags | Viewports |
|---------|-------------|-----------|
| static | `/?` ou query documentada desligando 3D/parallax/narrativa | 1440×900, 768×1024, 390×844 |
| scenic (opcional CI) | flags on em runner com WebGL | desktop only |

### Tolerância

- Diff pixel default ≤ **0.2%** da área ou threshold do comparador; atualização de snapshot só via PR explícito (`test -u` documentado).

### Comandos (alvo)

```bash
yarn test:visual        # compare
yarn test:visual:update # refresh baselines
```

Scripts adicionados ao `package.json` quando implementado.

## Dependências

- `19-home-visual-parity.md`
- Specs 20–24 implementadas (baselines após layout estável)

## Entregáveis

- [x] Documentação de breakpoints nesta spec refletida em CSS → [`tokens.css`](../src/styles/tokens.css), [`home.css`](../src/styles/home.css)
- [ ] Pacote de testes visuais + baselines em `tests/visual/` (ou `.github/` workflow)
- [ ] Checklist manual de paridade linkando `docs/images/home.png`
- [ ] CI opcional: job `visual` em PRs que tocam `HomePage`, hero, footer, tokens

## Critérios de aceite

- [ ] Três viewports geram screenshots comparáveis sem falha no modo static
- [ ] Mobile: sem overflow horizontal em `/`
- [ ] Checklist manual da spec 19 marcável após rodar testes + inspeção
- [ ] Falha de teste visual bloqueia merge (quando CI ativo) ou documenta exceção temporária
