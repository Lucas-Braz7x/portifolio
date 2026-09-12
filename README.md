# Portfólio — Lucas Braz Dutra

React + Vite + TypeScript + Tailwind CSS v4. Especificações em [`specs/README.md`](./specs/README.md).

## Visão (spec 01)

Fonte de verdade editorial: [`content/site/vision.json`](./content/site/vision.json) — metáfora, frase de posicionamento, meta do site e **não objetivos** (use como filtro em features: “reforça arquivo pessoal de engenheiro?”).

## Princípios (spec 02)

Lista canônica: [`content/site/principles.json`](./content/site/principles.json) (cada item inclui `reviewPrompt`).

Ao abrir PR, use o [template](./.github/pull_request_template.md) e marque os 10 princípios. Para efeitos em JS, use `useReducedMotion`; CSS global já reduz animações em `src/styles/index.css`.

## Ambiente (nvm + Yarn)

```bash
# Carregar nvm (novo terminal ou após instalação)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd /home/lucas/projetos/portifolio
nvm use          # lê .nvmrc (Node LTS)
yarn install
```

## Scripts

| Comando             | Descrição                   |
| ------------------- | --------------------------- |
| `yarn dev`          | Servidor de desenvolvimento |
| `yarn build`        | Typecheck + build estático  |
| `yarn preview`      | Preview do `dist/`          |
| `yarn lint`         | ESLint                      |
| `yarn format`       | Prettier (write)            |
| `yarn format:check` | Prettier (check)            |
