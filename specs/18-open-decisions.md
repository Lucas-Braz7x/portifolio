# Spec 18 — Decisões abertas (backlog de produto)

## Escopo

Checklist de decisões que ainda não fecham escopo de outras specs. Atualizar conforme itens forem resolvidos (mover decisão para spec relevante).

## Fora de escopo

- Implementação em código

## Checklist

### Identidade e conteúdo

- [ ] Nome/conceito visual definitivo (título do site, se diferente do nome pessoal)
- [ ] Paleta final (tokens em `08-visual-identity.md`)
- [ ] Tipografia final
- [ ] Referências concretas de filmes/terror (para alinhar equipe/IA de arte)
- [ ] Frase de posicionamento final na Home
- [ ] PT vs EN na UI

### Estrutura

- [ ] Nome da área Lab: Lab / Experiments / Workshop / **Oficina**
- [ ] Rota do Lab (`/lab` vs outro)

### Projetos

- [ ] Selecionar 3–5 projetos featured
- [ ] Escrever case studies completos
- [ ] Copy About
- [ ] Conteúdo inicial do Lab

### 3D e narrativa

- [ ] Three.js: background vs objeto vs narrativa (registrar em `10-threejs-guidelines.md`)
- [ ] Wireframe de páginas (pode ser Figma ou sketch)
- [ ] Identidade visual final (logo/mark se houver)

### Stack e estilo

- [x] Framework: React + Vite (ver `03-stack-and-routes.md`)
- [x] Estilização: Tailwind CSS v4 + `@tailwindcss/vite` (`.cursor/rules/styling.mdc`)

### Implementação e lançamento

- [ ] Implementar Home (`04`)
- [ ] Implementar projetos (`06`)
- [ ] Camada Three.js conforme fase (`17`)
- [ ] Microinterações (lista priorizada)
- [ ] Deploy (Vercel vs Cloudflare vs AWS estático)

## Entregáveis

- [ ] Este arquivo mantido como fonte única de “ainda não decidido”
- [ ] Quando item fechado: link para PR/commit ou seção na spec correspondente

## Critérios de aceite

- Nenhum item duplicado em outras specs como “TBD” sem apontar para aqui
