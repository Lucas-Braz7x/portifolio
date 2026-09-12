# Portfólio — Lucas Braz Dutra

> **Nota:** versão consolidada para leitura. Especificações de escopo finito para implementação estão em [`specs/README.md`](../specs/README.md).

## 1. Conceito

Um portfólio pessoal de Software Engineer que não pareça um currículo online nem um template genérico de desenvolvedor.

A ideia é combinar:

- Engenharia de Software
- Arquitetura e sistemas
- AWS e backend/fullstack
- AI Engineering / Spec-Driven Development
- Projetos e experimentos pessoais
- Música e outros interesses criativos
- Uma identidade visual autoral

**Direção geral:** minimalista + técnico + sombrio + cinematográfico.

A inspiração em terror deve ser atmosférica, não "tema de Halloween": mais horror psicológico, estranheza, silêncio, sombras e sensação de que existe algo fora do campo de visão.

---

## 2. Home

Estrutura inicial:

```text
LUCAS BRAZ DUTRA
Software Engineer

Construo sistemas, exploro ideias
e tento entender como as coisas funcionam.

[ projetos ]  [ sobre ]  [ contato ]

────────────────────────────────

01 / CURRENTLY

Software Engineer @ Certta
Fullstack · AWS · AI

────────────────────────────────

02 / SELECTED WORK

Projeto X
Uma frase explicando o problema
→ case study

Projeto Y
Uma frase explicando o problema
→ case study

Projeto Z
Uma frase explicando o problema
→ case study

────────────────────────────────

03 / ELSEWHERE

GitHub   LinkedIn   Email
```

Possíveis frases de identidade:

> Entre sistemas, música e algumas perguntas que não precisam de resposta.

ou

> I like building things that are difficult to explain before they're built.

São referências de direção, não necessariamente os textos finais.

---

## 3. Currently

Uma seção curta mostrando o que está acontecendo atualmente.

```text
CURRENTLY

Software Engineer @ Certta
AWS / Backend / Fullstack
AI Engineering
Spec-Driven Development

Learning:
Distributed Systems
AI Engineering
Jazz Harmony
...
```

Pode ser atualizada com o tempo.

---

## 4. Projetos

Os projetos não devem ser apenas cards de tecnologias.

A ideia é transformar os principais projetos em pequenos **case studies de engenharia**.

Exemplo:

```text
01
CERTTA

Migrating legacy serverless systems

AWS · Lambda · TypeScript · Node

→ case study
```

Ao abrir:

### Problema
O que precisava ser resolvido.

### Contexto
Por que o problema existia.

### Decisões
Quais decisões arquiteturais foram tomadas e por quê.

### Arquitetura
Diagrama e explicação da solução.

### Resultado
O que melhorou.

### O que eu faria diferente
Uma seção importante para mostrar maturidade técnica e capacidade crítica.

---

## 5. Lab / Experiments

Área para coisas que não precisam ser projetos profissionais.

Possíveis conteúdos:

- Experimentos com IA
- Ferramentas pessoais
- Estudos de arquitetura
- Pequenos projetos
- Visualizações e dados
- Música
- Experimentos criativos
- Cerâmica
- Ideias que não chegaram a virar produto

Possíveis nomes:

- `Lab`
- `Experiments`
- `Workshop`
- `Oficina`

**Oficina** pode ser interessante por conectar software com o aspecto manual/criativo.

---

## 6. Seção pessoal

Uma pequena seção mostrando o que estou estudando ou explorando.

```text
CURRENTLY LEARNING

01  Distributed Systems
02  AI Engineering
03  Jazz Harmony
04  ...
```

Pode funcionar como um registro vivo.

Não precisa explicar cada item.

---

# 7. Identidade visual

## Direção

A página deve parecer um **site pessoal de um engenheiro**, não uma landing page de startup.

Características:

- Bastante espaço vazio
- Tipografia forte
- Layout editorial
- Elementos monoespaçados para informações técnicas
- Poucos elementos decorativos
- Animações sutis
- Contraste alto
- Composição assimétrica em alguns pontos
- Sensação cinematográfica

## Paleta

Direção inicial:

- Preto / quase preto
- Branco quebrado
- Cinza
- Uma cor de destaque usada pontualmente

Não usar vermelho como cor dominante apenas por causa da inspiração em terror.

---

# 8. Aparência de filme de terror

A ideia é que o site **pareça ter sido filmado por uma câmera que encontrou alguma coisa estranha**, e não que seja simplesmente "um site de terror".

Referências conceituais:

- Horror psicológico
- Found footage
- Fotografia analógica
- Filmes antigos
- Corredores vazios
- Ruído de película
- Sombras
- Baixa iluminação
- Pequenas falhas
- Sensação de algo fora do campo de visão

## Possíveis elementos

### Grain

Ruído de película muito discreto sobre o site.

### Vignette

Escurecimento quase imperceptível nas bordas.

### Flicker

Pequenas variações de luminosidade em momentos específicos.

### Scan / distortion

Distorção muito sutil em transições.

### Cursor

O cursor pode ter comportamentos diferentes em determinados elementos.

### Texto

Algumas informações podem aparecer como registros:

```text
LOG 001
10.09.2026

SYSTEM: ONLINE
SUBJECT: LUCAS BRAZ DUTRA
STATUS: BUILDING
```

Usar com parcimônia.

### Som

Possibilidade futura, mas sem autoplay.

Se existir áudio, deve ser totalmente opcional.

---

# 9. Three.js

Three.js deve entrar como **elemento de atmosfera**, não simplesmente como demonstração de tecnologia.

Ainda não definir a implementação.

Possibilidades:

## A. Objeto 3D abstrato

Um objeto quase invisível no fundo:

- esfera
- estrutura geométrica
- objeto orgânico
- modelo indefinido

Pode reagir discretamente ao mouse.

## B. Ambiente 3D

Uma cena escura com:

- uma fonte de luz
- neblina
- uma geometria distante
- câmera lenta

O conteúdo principal continua sendo HTML/CSS.

## C. "Algo no fundo"

Possivelmente a opção mais interessante.

A página parece normal, mas existe alguma coisa em Three.js no background.

O usuário talvez nem perceba inicialmente.

## D. Interação com scroll

Conforme o usuário navega:

- a câmera muda
- o objeto se aproxima
- a iluminação muda
- elementos desaparecem
- determinadas seções revelam detalhes

Isso pode transformar o portfólio em uma pequena experiência narrativa.

---

# 10. Three.js + terror

Uma direção especialmente interessante:

O site começa completamente normal.

Conforme o usuário navega, pequenas coisas começam a mudar.

```text
HOME
↓
PROJECTS
↓
ABOUT
↓
LAB
```

No início:

```text
CURRENTLY
Software Engineer @ Certta
```

Mais abaixo, algum detalhe visual começa a aparecer.

Não precisa haver uma "revelação" explícita.

Objetivo:

> "Tem alguma coisa acontecendo aqui."

A estética deve ser psicológica e sutil, não um gimmick.

---

# 11. Possível narrativa visual

O site pode ter três estados.

## Estado 1 — Normal

Minimalista, profissional, técnico.

## Estado 2 — Estranho

Pequenas anomalias:

- textos deslocados
- ruído
- mudanças de luz
- elementos que aparecem por poucos frames
- Three.js começa a ficar perceptível

## Estado 3 — Revelação

Opcional.

O usuário percebe que a estética de terror não era apenas decoração.

A revelação deve ser sutil.

---

# 12. Stack

Implementação inicial:

- Next.js
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber, se fizer sentido
- Vercel ou AWS para deploy

Não criar backend inicialmente.

Conteúdo pode ficar em Markdown/MDX.

Estrutura possível:

```text
app/
├── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx

content/
├── projects/
├── experiments/
├── experience/
└── notes/

components/
├── ui/
├── three/
├── projects/
└── layout/
```

---

# 13. Princípios

1. Personalidade > quantidade de efeitos.
2. Conteúdo técnico > buzzwords.
3. Atmosfera > decoração.
4. Three.js deve ter propósito.
5. O site deve continuar excelente sem JavaScript pesado.
6. Mobile precisa ser considerado desde o início.
7. Não exagerar na estética de terror.
8. Cada animação precisa justificar sua existência.
9. Projetos devem mostrar decisões, não apenas tecnologias.
10. O portfólio também deve ser uma demonstração de engenharia.

---

# 14. Ideia central

O portfólio pode ser pensado como:

> **um arquivo pessoal de um engenheiro de software.**

No primeiro nível, é um portfólio profissional.

No segundo, é um laboratório.

No terceiro, existe uma atmosfera estranha que vai aparecendo aos poucos.

Isso permite juntar:

**Software + Arquitetura + IA + Música + curiosidade + estética contemplativa**

sem transformar cada hobby em uma seção artificial.

---

# 15. Próximas decisões

- [ ] Definir nome/conceito visual definitivo
- [ ] Definir paleta
- [ ] Escolher tipografia
- [ ] Definir referências de filmes/terror
- [ ] Definir se Three.js será background, objeto ou narrativa
- [ ] Selecionar 3–5 projetos
- [ ] Escrever case studies
- [ ] Escrever About
- [ ] Definir conteúdo do Lab
- [ ] Criar wireframe
- [ ] Criar identidade visual
- [ ] Implementar Home
- [ ] Implementar projetos
- [ ] Implementar camada Three.js
- [ ] Adicionar microinterações
- [ ] Deploy

---

# 16. Arquitetura da cena 3D

A cena não precisa ser construída inteiramente em Three.js. A direção preferida é um híbrido **2D/2.5D + objetos 3D reais**.

A ideia é combinar uma concept art/imagem como base visual, profundidade artificial e alguns elementos realmente tridimensionais.

## Camadas

```text
THREE.JS
├── background / image
├── depth / parallax
├── iluminação
├── porta 3D
├── piano 3D
└── efeitos

+

HTML / REACT
├── Navigation
├── Hero
├── Projects
├── About
└── Lab
```

### Camada 1 — HTML/React

Responsável por texto, navegação, projetos, acessibilidade, links e conteúdo.

### Camada 2 — Imagem / 2.5D

A maior parte do ambiente pode continuar sendo uma imagem. Um depth map pode criar paralaxe e sensação de profundidade.

### Camada 3 — Three.js

Responsável pelo que realmente precisa ser dinâmico: câmera, porta, piano, iluminação, sombras, profundidade e interações.

---

# 17. Imagem como concept art

A concept art da sala não precisa ser o produto final. Ela pode funcionar como **storyboard**.

Podemos partir de uma imagem e decidir quais elementos permanecem como textura e quais serão separados como objetos 3D.

Exemplo:

```text
FOTO
 ├── parede
 ├── chão
 ├── ambiente
 └── composição

3D
 ├── porta
 ├── cadeira
 └── piano
```

O usuário não precisa perceber onde termina a imagem e começa o 3D.

---

# 18. Depth Map / 2.5D

Outra possibilidade é usar a imagem com um mapa de profundidade:

```text
preto  = longe
cinza  = meio
branco = perto
```

Isso permite deslocar diferentes regiões da imagem em velocidades diferentes quando a câmera se move.

O resultado é uma espécie de 2.5D: não existe uma cena totalmente modelada, mas pequenos movimentos de câmera produzem profundidade convincente.

Essa abordagem é adequada para movimentos lentos e controlados.

---

# 19. Elementos 3D importantes

Alguns objetos podem existir como modelos 3D independentes.

## Porta

Pode abrir alguns centímetros, receber iluminação, projetar sombra e mudar de posição entre seções.

A ideia é que talvez não exista nada atrás dela. A ausência de explicação faz parte da atmosfera.

## Piano

O piano pode funcionar como elemento pessoal recorrente.

Possível evolução:

```text
HOME
→ piano quase invisível

PROJECTS
→ apenas uma parte aparece

ABOUT
→ câmera passa mais perto

LAB
→ piano fica claramente visível
```

Uma interação possível é uma única tecla se mover quando o cursor passa pelo instrumento. Qualquer áudio deve ser opcional e nunca tocar automaticamente.

---

# 20. Câmera e scroll

A câmera do Three.js pode acompanhar a navegação:

```text
HOME
  ↓
camera inicial

PROJECTS
  ↓
camera se desloca

ABOUT
  ↓
camera se aproxima / muda o ângulo

LAB
  ↓
outro elemento aparece

END
  ↓
cena muda novamente
```

O HTML continua sendo o site. O Three.js funciona como o cenário cinematográfico que acompanha o usuário.

---

# 21. Terror como camada narrativa

O site começa normal e profissional.

Depois, pequenas coisas começam a parecer erradas:

1. A câmera muda levemente.
2. A iluminação da porta oscila.
3. Um objeto aparece onde não estava.
4. Uma tecla do piano é pressionada.
5. Uma sombra cruza o ambiente.
6. Um elemento desaparece.
7. Nada é explicado.

Evitar jumpscare, monstros explícitos e estética de Halloween.

A sensação desejada é:

> "Tem alguma coisa acontecendo aqui."

---

# 22. Evolução de implementação

### V1 — Identidade

- imagem/background;
- HTML;
- grain;
- vignette;
- pequenas animações;
- navegação;
- projetos.

### V2 — 2.5D

- imagem;
- depth map;
- parallax;
- câmera Three.js;
- iluminação;
- partículas/neblina.

### V3 — Híbrido

- porta 3D;
- piano 3D;
- cadeira;
- objetos específicos;
- sombras;
- interações.

### V4 — Narrativa

- câmera integrada ao scroll;
- mudanças de iluminação;
- novos elementos revelados;
- pequenas anomalias;
- possível encerramento narrativo.

Não é necessário chegar à V4.

---

# 23. Regra de ouro do 3D

Para cada elemento:

> **Isso precisa ser 3D para produzir a experiência que queremos?**

Se não, imagem, textura, CSS ou efeito 2D provavelmente é melhor.

O objetivo é que o usuário pense:

> "Que site estranho e bonito."

E não:

> "Esse cara colocou Three.js no portfólio."
