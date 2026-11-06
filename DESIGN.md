---
name: IIESBC
description: Sitio institucional del Instituto Interamericano de Estudios Superiores de Baja California
colors:
  olive: "#66822c"
  olive-deep: "#556e23"
  lime: "#a5c94c"
  sun: "#f68c24"
  sun-deep: "#cd751e"
  ink: "#1a1f14"
  ink-soft: "#4a5240"
  ink-muted: "#8a9180"
  surface: "#fafaf7"
  surface-alt: "#f3f1ea"
  line: "#e6e3d8"
  night: "#0c1208"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Sora, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Sora, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Sora, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"cv11\", \"ss01\""
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  card: "1.75rem"
  image: "2rem"
  pill: "9999px"
spacing:
  gutter: "1.5rem"
  gutter-lg: "2.5rem"
  card: "2rem"
  section: "6rem"
  section-lg: "8rem"
  container: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.sun-deep}"
  button-primary-lg:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1.25rem 2.5rem"
  button-secondary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-secondary-hover:
    backgroundColor: "{colors.olive-deep}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
  chip-dark:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 1rem"
  nav-link:
    textColor: "{colors.ink-soft}"
  nav-link-active:
    textColor: "{colors.olive}"
---

# Design System: IIESBC

## Overview

**Creative North Star: "El Olivo y el Sol"**

El sistema nace de los dos colores de la institución. El verde oliva es la raíz: solidez, tradición, la validez oficial que respalda cada programa. El naranja es el sol: energía, oportunidad, el siguiente paso que el aspirante está por dar. Todo lo demás es tierra cálida (neutros con matiz verdoso, nunca grises fríos) y noche profunda (`night`), el fondo casi negro donde ambos colores brillan más.

El carácter es **moderno y enérgico**: titulares Sora enormes y apretados, heroes fotográficos a sangre con un zoom lento, partículas que flotan, una barra de luz que recorre el acento. La energía viene del contraste y del movimiento medido, no del ruido: las secciones de contenido respiran sobre blanco y papel cálido con composición editorial alineada a la izquierda.

La página se lee como un ritmo de día y noche: abre en oscuro con imagen, pasa a secciones claras que alternan blanco y papel, y cierra otra vez en oscuro con la llamada a la acción en naranja.

**Key Characteristics:**
- Dos acentos con papeles distintos: oliva para la estructura, naranja para la acción.
- Neutros cálidos con matiz oliva; ningún gris genérico.
- Titulares display muy grandes, peso extra-negrita, tracking negativo, una palabra en naranja.
- Heroes y cierres sobre `night` con fotografía y overlays en tres paradas.
- Superficies muy redondeadas, sombras suaves con un toque verde al hover.
- Movimiento ambiental continuo pero lento; todo se apaga con `prefers-reduced-motion`.

## Colors

Una paleta de tierra y sol: dos acentos saturados sobre neutros cálidos con matiz oliva.

### Primary
- **Sol de Baja California** (`sun`): el color de la acción. Botones primarios (siempre con texto `ink`), la palabra destacada de los titulares **sobre fondo oscuro**, puntitos de chips, el borde de los blockquotes. Su hover es **Naranja Tostado** (`sun-deep`). Como texto sobre blanco o papel da 2.4:1 y no pasa ni el mínimo de texto grande (3:1): ahí no se usa como texto.

### Secondary
- **Verde Olivo** (`olive`): el color de la estructura. Links activos del menú y su subrayado, botones secundarios, íconos y líneas de tarjetas, el tinte de las sombras al hover. Su hover es **Olivo Profundo** (`olive-deep`).

### Tertiary
- **Lima Brote** (`lime`): solo brillos pequeños sobre fondo oscuro. El punto con `animate-ping` de los chips, checks, partículas. Nunca como fondo ni en texto largo.

### Neutral
- **Tinta de Olivo** (`ink`): texto principal y titulares sobre claro.
- **Tinta Suave** (`ink-soft`): párrafos secundarios, links del menú en reposo.
- **Tinta Apagada** (`ink-muted`): eyebrows apagados, metadatos, texto terciario.
- **Papel** (`surface`): fondo alterno de secciones.
- **Papel Tostado** (`surface-alt`): hover sutil sobre superficies claras.
- **Línea de Arena** (`line`): divisores y bordes del menú.
- **Noche del Desierto** (`night`): fondo de heroes, CTAs finales y overlays sobre fotografía (85% → 60% → 92%).

### Named Rules
**The Two Roles Rule.** El naranja invita a actuar; el oliva ordena. Si un elemento no es una acción ni el acento de un titular, no es naranja.

**The Warm Ground Rule.** Ningún gris o color genérico de Tailwind (`gray-*`, `green-*`, `blue-*`, `emerald-*`). Los neutros son siempre los tokens de tinta, papel y línea; las transparencias sobre oscuro son `white/XX` y sobre claro `black/5`.

**The One Word Rule.** Cada titular grande lleva como máximo una palabra de acento: en `sun` sobre fondo oscuro, en `olive` sobre fondo claro (el naranja sobre blanco no es legible). Dos ya diluye el acento.

**The Dark Ink Rule.** El texto de los botones naranjas es `ink`, nunca blanco: blanco sobre `sun` da 2.4:1; `ink` sobre `sun` pasa de 7:1 (y más de 5:1 sobre `sun-deep` al hover).

**The Readable Olive Rule.** Texto pequeño en verde (eyebrows, horarios, etiquetas) va en `olive-deep`; `olive` sobre blanco queda en 4.4:1 y solo sirve para texto grande y elementos gráficos.

## Typography

**Display Font:** Sora (con Inter y system-ui de respaldo)
**Body Font:** Inter (con system-ui de respaldo), con alternativas `cv11` y `ss01` activas

**Character:** Sora es geométrica, ancha y segura; a tamaño display y con tracking negativo da la energía moderna. Inter es la voz neutra y muy legible del contenido, importante para adultos que leen desde el celular.

### Hierarchy
- **Display** (800, fluido 2.75rem → 5.75rem, interlineado 0.98): el `<h1>` del hero. Uno por página, con `text-balance`.
- **Headline** (700–800, fluido 2.25rem → 4.25rem, 1.02): `<h2>` de sección y del CTA final.
- **Title** (700, fluido 1.875rem → 3rem, 1.08): `<h3>` destacados, cifras, titulares de tarjeta grande.
- **Body** (400, 1rem–1.25rem, 1.6–1.7): párrafos, con `text-pretty` y un ancho máximo cercano a `max-w-2xl` (~65ch).
- **Label** (600, 0.75rem, tracking 0.2em, MAYÚSCULAS): eyebrows sobre los titulares de sección y dentro de los chips.

### Named Rules
**The Eyebrow First Rule.** Todo titular de sección va precedido por una línea corta y un eyebrow en mayúsculas. El eyebrow sustituye cualquier decorador debajo del titular.

**The Tabular Rule.** Horarios, fechas, precios y enumeraciones usan `tabular-nums`.

## Layout

Contenedor centrado de `max-w-7xl` (80rem) con márgenes laterales de 1.5rem en móvil y 2.5rem en escritorio. Las secciones tienen mucho aire vertical: 6rem en móvil, 8rem desde `lg`. El fondo alterna blanco ↔ `surface` entre secciones; los heroes y los cierres son a sangre sobre `night`.

La composición es editorial y **alineada a la izquierda**: grids de 12 columnas en `lg` con imagen y texto en mitades (p. ej. 6/6), y grids de 2–3 columnas para tarjetas. En móvil todo cae a una columna y la imagen pasa abajo del texto cuando el texto es lo que decide.

Breakpoints estándar de Tailwind (`sm` 640, `md` 768, `lg` 1024, `xl` 1280); el menú completo de escritorio aparece en `xl`.

## Elevation & Depth

Sistema de capas suaves: las superficies claras se separan con un anillo de 1px (`black/5`) más una sombra difusa, y la profundidad aumenta solo como respuesta al hover. En oscuro la profundidad la dan la fotografía, los overlays en tres paradas y dos radiales tenues (naranja arriba a la derecha, oliva abajo a la izquierda), más vidrio esmerilado (`backdrop-blur`) en chips y botones secundarios.

### Shadow Vocabulary
- **Tarjeta en reposo** (`--shadow-card`): todas las tarjetas, el menú al hacer scroll.
- **Tarjeta en hover** (`--shadow-card-hover`): mismo elemento al hover, con el tinte oliva que lo "enciende".
- **Anillo flotante** (`--shadow-ring`): badges que flotan sobre imágenes.
- **Brillo de botón**: sombra coloreada del mismo tono del botón (naranja u oliva) que crece al hover.

### Named Rules
**The Lift On Intent Rule.** En reposo, las tarjetas apenas se levantan. Al hover suben 4px (`-translate-y-1`) y cambian a `--shadow-card-hover`. Nunca se escalan.

## Shapes

Formas generosamente redondeadas y amigables. Botones, chips y puntos son píldoras (`pill`). Las tarjetas usan 1.75rem, las imágenes editoriales 2rem, y los acordeones y contenedores menores 1.25rem. Los íconos viven en cuadros de 3.5rem con radio de 1rem tintados con el acento al 8%. Los bordes son anillos de 1px casi invisibles; ningún borde grueso ni blanco.

## Components

### Buttons
Contundentes y cálidos, con un brillo que los hace "flotar".
- **Shape:** píldora completa.
- **Primary (naranja):** `sun` con texto `ink` (oscuro), semibold, padding 1rem × 2rem (versión grande 1.25rem × 2.5rem, texto `lg`). Sombra naranja.
- **Hover / Focus:** pasa a `sun-deep`, sube 2px y la sombra crece. Transición de 300ms.
- **Secondary (oliva):** misma forma en `olive` → `olive-deep` con sombra oliva.
- **Glass (sobre oscuro):** `white/10` con borde `white/25` y `backdrop-blur`, con un puntito naranja o lima delante del texto.

### Chips
- **Chip de hero:** píldora de vidrio (`white/8`, borde `white/15`, blur) con un punto lima que late (`animate-ping`) y texto eyebrow en `white/90`.

### Cards / Containers
- **Corner Style:** 1.75rem.
- **Background:** blanco, sobre secciones `surface`.
- **Shadow Strategy:** ver Lift On Intent.
- **Border:** anillo `black/5` + una línea superior de 1px tintada con el acento de la tarjeta.
- **Internal Padding:** 2rem.

### Inputs / Fields
- **Style:** fondo blanco, borde de 1px `line`, radio 0.75rem, padding 0.75rem × 1rem, texto `ink`, placeholder `ink-muted`.
- **Focus:** borde `olive` con anillo de 2px oliva al 25%.
- **Deuda conocida:** `RegistroCongresoForm.js` todavía usa `gray-200`, `green-500` y texto negro puro. Al tocarlo, migrarlo a este estilo.

### Navigation
Barra pegajosa blanca translúcida (80% → 95% al hacer scroll) con blur y un borde `line`. El logo se reduce al hacer scroll. Links en Sora 0.9rem, `ink-soft` en reposo, `ink` al hover, `olive` cuando están activos. Un subrayado oliva de 2px crece de izquierda a derecha al hover y queda completo en la página actual. Oferta Académica abre un desplegable; en móvil todo va a un menú de pantalla completa con el scroll del cuerpo bloqueado. Incluye link "Saltar al contenido".

### Hero institucional (componente firma)
Sección `night` a sangre: fotografía con zoom lento, overlay de tres paradas, dos radiales de marca, tres partículas flotantes (blanca, naranja, lima), chip de vidrio con punto lima, `<h1>` display con una palabra en naranja, barra de luz de 10rem (gradiente oliva → naranja → transparente con brillo que la recorre), subtítulo en `white/85` y de 1 a 3 botones.

### Blockquote editorial
Borde izquierdo de 2px naranja, texto Sora `xl`–`2xl` medium en `ink`.

## Do's and Don'ts

### Do:
- **Do** abrir cada página institucional con el Hero institucional y cerrarla con un CTA oscuro y un botón naranja.
- **Do** alternar el fondo de las secciones entre blanco y `surface`.
- **Do** usar solo las animaciones definidas en `globals.css` (`slow-zoom`, `float-*`, `shimmer`, `fade-in-up`, `fade-in`, `pulse-slow`, `marquee`, `ping`) y respetar `prefers-reduced-motion`.
- **Do** usar `text-balance` en titulares y `text-pretty` en párrafos largos.
- **Do** levantar tarjetas con `-translate-y-1` + `--shadow-card-hover` al hover.

### Don't:
- **Don't** usar colores genéricos de Tailwind (`gray-*`, `green-*`, `blue-*`, `emerald-*`).
- **Don't** usar degradados saturados de varios pasos en fondos ni en botones (`from-green-600 to-orange-600`); los botones son de un solo color con su sombra.
- **Don't** poner resplandores borrosos decorativos ni más de dos manchas de color por sección (máx. 10% de opacidad).
- **Don't** escalar tarjetas al hover (`hover:scale-105`) ni usar bordes gruesos (`border-4 border-white`).
- **Don't** centrar titulares con decoradores horizontales; la composición es editorial alineada a la izquierda.
- **Don't** crear keyframes locales ni `<style jsx>` que dupliquen las animaciones globales.
