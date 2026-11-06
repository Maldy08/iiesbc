---
target: src/app/congreso/page.js
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/carlosmaldonado/Projects/iiesbc/src/app/congreso/page.js"
target_fingerprint: "sha256:669c3b060aa396928ad74df145ef6bc4fa50720e38f617885bf14c0f1a0b4974"
target_path: /Users/carlosmaldonado/Projects/iiesbc/src/app/congreso/page.js
timestamp: 2026-11-06T16-35-11Z
slug: src-app-congreso-page-js
---
Method: dual-agent (A: revisión de diseño · B: detector). Sin navegador (extensión de Chrome desconectada); revisión sobre código + HTML servido.

## Design Health Score — 21/32 (66%, Aceptable). n/a: 7, 10.
1 Estado del sistema 3 · 2 Lenguaje real 3 · 3 Control 3 · 4 Consistencia 3 · 5 Prevención de errores 2 · 6 Reconocer vs recordar 2 · 7 n/a · 8 Estética/minimalismo 3 · 9 Recuperación 2 · 10 n/a

## Especificidad
Fiel a los tokens pero con estructura genérica de evento. El tema IA/cumplimiento normativo no conecta con los 8 ejes; el h1 "II Congreso Multidisciplinario" no dice de qué trata. Detector: código limpio; HTML servido: 4 pares de contraste (naranja sobre blanco 2.4:1, sobre #fef6ed 2.3:1, oliva sobre #f2f5ee 4.0:1, oliva sobre blanco 4.4:1). flat-type-hierarchy = falso positivo (CSS no cargado).

## Priority issues
- [P1] Faltan costo, modalidad, constancia y "qué sigue" en el momento de registrarse → clarify (solo datos confirmados).
- [P1] CTA de registro inalcanzable en móvil: solo en hero y al final → layout/adapt (barra fija móvil, CTA intermedio).
- [P2] Naranja decorativo + contraste: eyebrows naranjas (l.243, 388) 2.4:1; horarios oliva text-sm (l.344) 4.4:1; texto blanco sobre botón naranja 2.4:1 (sistémico) → colorize/audit.
- [P2] Ejes: 8 tarjetas con número + "Eje N" redundantes, acentos alternos sin significado → distill/layout.
- [P2] Retratos de conferencistas escalados 2–3x (278–384 px fuente) → adapt/polish.

## Personas
Jordan: no sabe si es público/gratuito ni cómo presentar trabajo. Casey: CTA bajo el pliegue, QR inútil en el mismo celular, og:image vertical se recorta en WhatsApp. Riley: banner hidrata con registroAbierto:true; página congelada en "registro cerrado" desde el 6 dic; hueco 11:00–12:30 día 2; QR estático puede divergir de FORM_URL. Maestra Lupita: ¿tiene que faltar el viernes? ¿puede ir solo un día? ¿constancia con horas? ¿costo? correo gmail en vez de congreso@iiesbc.mx.

## Minor
h1 con clamp propio; enlaces externos sin aviso de pestaña nueva; punto lima "en vivo" sigue latiendo con registro cerrado; FORO_TEXTO repetido; alt del hero duplica el h1; programa abre con fotografía de generaciones/graduación (interno).

## Preguntas
¿Congreso de derecho e IA o de educación? ¿Para externos o para la comunidad IIESBC? ¿Por qué no prometer "constancia verificable" junto al botón?
