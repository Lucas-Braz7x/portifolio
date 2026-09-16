# Spec 23 — Notas (conteúdo + rota + nav)

## Escopo

Área **Notas** alinhada ao mock: rota `/notes`, conteúdo Markdown em `content/notes/`, teaser na Home (coluna 05, spec 22), item `[ 04 ] NOTAS` na navegação primária.

## Fora de escopo

- Lab / experimentos → `07-lab-oficina.md` (rota `/lab` mantida)
- Blog longo com comentários ou CMS

## Decisões (fechadas)

- Nav primária slot `[ 04 ]` = **NOTAS** → `/notes`.
- `/lab` **não** aparece na nav primária; acesso via link secundário (sugestão: footer coluna 04, About ou página Projects — implementar ≥1 link discoverável).

## Conteúdo

- Formato: `.md` em `content/notes/` com frontmatter mínimo (`title`, `date`, `summary` opcional).
- Estado vazio: página `/notes` com mensagem editorial curta (não 404).
- Publicação mínima para paridade: ≥1 nota listada OU teaser estático na Home até haver conteúdo (preferir ≥1 arquivo real).

## UX `/notes`

- Lista editorial (título + data + uma linha); detalhe opcional `/notes/:slug` se houver corpo longo — V1 da spec pode ser só lista + link externo no frontmatter.

## Dependências

- `19-home-visual-parity.md`
- `22-home-editorial-footer.md`
- `03-stack-and-routes.md` (nova rota)

## Entregáveis

- [ ] Rota `/notes` em `src/routes/`
- [ ] Loader `content/notes/` espelhando padrão de projects/experiments
- [ ] `NotesPage` + item de lista
- [ ] `PrimaryNav` atualizado (NOTAS no slot 04; Lab removido da primária)
- [ ] Link secundário para `/lab`

## Critérios de aceite

- [ ] `/notes` retorna 200 e lista notas do diretório de conteúdo
- [ ] Nav primária tem 5 itens conforme tabela da spec 19
- [ ] `/lab` continua acessível por URL e por ≥1 link fora da nav primária
- [ ] Teaser na Home aponta para `/notes`
