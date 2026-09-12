# Code style

Convenções de código do repositório. Em dúvida, siga o que já existe em `src/` e as rules em `.cursor/rules/`.

## Funções: preferir arrow functions

Use **arrow functions** para componentes React, hooks, handlers e funções utilitárias no `src/`.

| Contexto | Preferido | Evitar |
|----------|-----------|--------|
| Componente | `export const HomePage = () => { ... }` | `export function HomePage() { ... }` |
| Hook | `export const useProjects = () => { ... }` | `export function useProjects() { ... }` |
| Helper em módulo | `const normalizeStack = (stack) => { ... }` | `function normalizeStack(stack) { ... }` |
| Callback / handler | `const onClick = () => { ... }` | `function onClick() { ... }` |

### Exceções

- **`function` nomeada** só quando arrow não for adequada (raro neste repo): por exemplo, hoisting explícito em script legado ou API de biblioteca que exija `function`.
- **Geradores**, **constructors** e métodos de **classe** (não usamos classes em componentes).
- Arquivos de **config** Node (`vite.config.ts`, `eslint.config.js`) podem usar `export default defineConfig(...)` e helpers locais como `function`; não é obrigatório converter configs.

### Exemplos

```tsx
// ✅ componente
export const PageFallback = () => (
  <p className="type-body-sm" role="status">Carregando…</p>
)

// ✅ hook
export const useReducedMotion = (): boolean => {
  const [reducedMotion, setReducedMotion] = useState(false)
  // ...
  return reducedMotion
}

// ✅ export nomeado de utilitário
export const getAllProjects = (): readonly Project[] => allProjects
```

```tsx
// ❌ evitar em src/
export function AboutPage() {
  return <div>...</div>
}
```

### Lazy routes

Mantém-se `React.lazy(() => import(...))`; o módulo importado exporta o componente como `const`:

```tsx
export const HomePage = () => { ... }
```

## TypeScript

- Props tipadas; evitar `any`.
- Tipos de domínio em `src/types/`.
- `verbatimModuleSyntax`: usar `import type` para tipos.

## React

- Componentes funcionais; sem classes.
- Páginas finas em `src/pages/`; composição em `src/components/`.
- Conteúdo longo em `content/`, não duplicado em TSX.

## Formatação

- Prettier (`yarn format`).
- ESLint (`yarn lint`).
