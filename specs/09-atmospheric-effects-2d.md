# Spec 09 — Efeitos atmosféricos 2D (filme / found footage)

## Escopo

Camada visual CSS/canvas leve: grain, vignette, flicker, scan, cursor, blocos de texto “LOG”.

## Fora de escopo

- WebGL / Three.js → `10-threejs-guidelines.md` em diante
- Narrativa por seção → `11-narrative-horror-layer.md`

## Referência conceitual

Site como se filmado por câmera que encontrou algo estranho — horror psicológico, found footage, analógico, corredores vazios, baixa luz, pequenas falhas.

## Elementos

| Efeito | Intensidade | Notas |
|--------|-------------|--------|
| Grain | Muito discreto | Overlay full-page |
| Vignette | Quase imperceptível | Bordas |
| Flicker | Momentos específicos | Não constante |
| Scan / distortion | Transições | Muito sutil |
| Cursor | Variante em alguns elementos | Opcional V1 |
| Texto LOG | Parcimônia | Ex.: `LOG 001`, `SYSTEM: ONLINE` |

Exemplo de bloco LOG:

```text
LOG 001
10.09.2026

SYSTEM: ONLINE
SUBJECT: LUCAS BRAZ DUTRA
STATUS: BUILDING
```

## Áudio

- Futuro opcional; **sem autoplay**
- Qualquer som ligado explicitamente pelo usuário

## Entregáveis

- [x] Componentes ou classes reutilizáveis (`GrainOverlay`, `Vignette`, etc.) → [`src/components/atmosphere/`](../src/components/atmosphere/), [`src/styles/atmosphere.css`](../src/styles/atmosphere.css)
- [x] Toggle respeitando `prefers-reduced-motion` (desliga flicker/grain animado) → [`AtmosphericEffects`](../src/components/atmosphere/AtmosphericEffects.tsx) + `useReducedMotion` + media query em CSS

## Critérios de aceite

- [x] Efeitos não degradam legibilidade do texto principal → overlays `pointer-events: none`, baixa opacidade; conteúdo em `--z-content`
- [x] Performance: sem repaint full-screen contínuo pesado em mobile (grain estático ou baixa FPS aceitável) → grain SVG estático com `steps(6)` lento; LOG oculto em mobile; animações off com reduced motion
