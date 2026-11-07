# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias principales con el mismo peso (confirmado 2026-11-06):

- **Adultos que trabajan**: profesionistas, docentes, servidores públicos y empresarios de Baja California que buscan licenciatura, maestría, doctorado o diplomado sin dejar su empleo. Necesitan saber rápido si el horario, la modalidad (en línea o presencial), el costo y la validez oficial (RVOE) les acomodan.
- **Egresados de bachillerato y sus familias**: eligen su primera licenciatura (Derecho, Criminología, Ciencias de la Educación). La familia suele participar en la decisión y pesa costo, becas y seriedad de la institución.

Audiencias secundarias que el sitio ya atiende:

- **Comunidad académica y ponentes** del Congreso Multidisciplinario (II Congreso, 4–5 dic 2026).
- **Terceros que validan una constancia**: un empleador o institución que escanea el QR de una constancia y llega a `/validar/{folio}`.
- **Personal del Instituto** (Dirección y asistentes) que emite constancias en `/constancias`.

## Product Purpose

Sitio institucional del Instituto Interamericano de Estudios Superiores de Baja California (IIESBC), Mexicali. Existe para que un aspirante entienda la oferta académica, confíe en la institución y la contacte o se inscriba. También aloja la vida académica del Instituto (congreso, eventos, normativa) y el servicio de emisión y validación de constancias.

Éxito: un aspirante encuentra su programa, confirma que se ajusta a su horario y presupuesto, y da el siguiente paso (contacto, inscripción, registro).

## Positioning

Lo que distingue al IIESBC, según la institución:

1. **Flexibilidad para quien trabaja**: horarios pensados para estudiantes que trabajan tiempo completo, más modalidad en línea.
2. **Becas y facilidades de pago**: hay becas y pagos flexibles de colegiatura tanto en licenciatura como en posgrado.

Los convenios institucionales y la vida académica (congreso, diplomados) existen, pero no son el diferenciador principal.

## Operating Context

- Sitio en español, audiencia regional (Mexicali y Baja California). La mayor parte del tráfico es móvil.
- El registro al congreso corre actualmente por **Google Forms**, no por la plataforma propia del sitio.
- Las constancias son PDF generados al vuelo con un QR de verificación. La validación es pública y se hace en `/validar`.
- Avisos puntuales en el inicio (`ComunicadoModal`), p. ej. condolencias.

## Capabilities and Constraints

- Next.js 15 (App Router, JS) + Tailwind 4, desplegado en Vercel desde `master`.
- Programas con reconocimiento oficial RVOE (p. ej. "RVOE-BC · 02PSU0128P"). Cada página de programa muestra su RVOE.
- Supabase solo aloja el esquema de constancias. La plataforma de ponencias/inscripciones/Stripe está **caída** (sus tablas no existen), así que ninguna superficie futura debe suponer que la inscripción o el pago en línea funcionan hasta que se reconstruya el esquema.
- Correo transaccional por Resend (`contacto@iiesbc.mx`, `congreso@iiesbc.mx`).

## Brand Commitments

- Nombre completo: Instituto Interamericano de Estudios Superiores de Baja California. Nombre corto: IIESBC.
- Logos en `public/images/` (`ICO.png`, `NOMBRE.png`, `LINEA.png`).
- Voz formal e institucional, firmada por la Dirección (Dr. Rafael López Oñate, Rector).

## Evidence on Hand

- Oferta académica real: 3 licenciaturas, 3 maestrías, 1 doctorado y diplomados, cada uno con su RVOE.
- Programa del II Congreso (ponentes, ejes, horario) tomado del PDF oficial; fotos en `public/images/congreso-2026/`.
- Reglamento de Derechos de Autor y Propiedad Intelectual: PDF en `public/documentos/`.
- **Ausente / no inventar:** no hay testimonios ni cifras de logros reales. Los de relleno que tenía el inicio (+1,000 egresados, 98% de empleabilidad, testimonios inventados) se quitaron el 2026-11-06. No crear testimonios, cifras, rankings ni conteos de alumnos nuevos sin una fuente real de la institución.

## Product Principles

1. **Responder primero lo que decide la inscripción:** modalidad, horario, costo/becas y RVOE antes que cualquier retórica.
2. **Dos audiencias iguales:** hablarle al adulto que trabaja y a la familia del egresado de bachillerato sin dejar fuera a ninguno.
3. **Seriedad que se puede verificar:** la validez oficial (RVOE, constancias verificables por QR) pesa más que las promesas. No afirmar nada que la institución no pueda respaldar.
4. **Nunca prometer un flujo que está caído:** si la inscripción o el pago en línea no funcionan, el siguiente paso es el contacto o el formulario externo.

## Accessibility & Inclusion

No se ha fijado un estándar específico. Entre las audiencias hay adultos mayores y tráfico móvil: texto legible y áreas táctiles cómodas.
