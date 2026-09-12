# Portfólio — Lucas Braz Dutra

React + Vite + TypeScript + Tailwind CSS v4. Especificações em [`specs/README.md`](./specs/README.md).

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
