"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventosAcademicos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const getGridColsClass = (columns) => {
    switch (columns) {
      case 3:
        return 'md:grid-cols-3';
      case 4:
        return 'md:grid-cols-4';
      case 5:
        return 'md:grid-cols-5';
      default:
        return 'md:grid-cols-4';
    }
  };

  // Datos de eventos y sus imágenes
  const eventos = [
    {
      id: 7,
      titulo: "JORNADA DE TITULACIÓN DE DOCTORADO- V GENERACIÓN",
      fecha: "2026",
      descripcion: "Fotografías de la Jornada de Titulación de Doctorado - V Generación.",
      basePath: "/images/eventos-academicos/doctorado-v-generacion",
      imagenes: [
        "603885208_122109426945188063_8655985352952789879_n.jpg",
        "615800295_122109434511188063_5694071365749056093_n.jpg",
        "616714346_122109425985188063_337092453519066866_n.jpg",
        "617106723_122109432093188063_8974093060068549840_n.jpg",
        "617118856_122109430911188063_1753160512635770337_n.jpg",
        "617922003_122109425073188063_8475575517602405362_n.jpg",
        "617981551_122109429285188063_3145762011188015630_n.jpg",
        "618788550_122109427647188063_2931669487872840102_n.jpg",
        "618903890_122109429825188063_8043376427996943525_n.jpg",
        "619564793_122109433257188063_3876449901147692038_n.jpg",
        "622377979_122110796589188063_1807560842643767013_n.jpg",
        "622753733_122110803267188063_117409804957591136_n.jpg",
        "622800032_122110798335188063_7633648966723032550_n.jpg",
        "623362432_122110797549188063_7065530049765810446_n.jpg",
        "623686531_122110800567188063_2473777460116375281_n.jpg",
        "623809202_122110799781188063_8794517351127467984_n.jpg",
        "Dr. Cesar O. Cintora.jpg",
        "Dr. Erick Alcaraz.jpg",
        "Dr. Francisco Yañez.jpg",
        "Dr. Gerardo López.jpg",
        "Dr. Luis Mascareño.jpg",
        "Dr. Michelet Carrillo.jpg",
        "Dr. Octavio Cintora.jpg",
        "Dr. René Reyes.jpg",
        "Dr. Ricardo Gutierrez.jpg",
        "Dra. Alejandra Bojorquez.jpg",
        "Dra. Beatriz Torres.jpg",
        "Dra. Claudia Núñez.jpg",
        "Dra. Dora Arredondo.jpg",
        "Dra. Gabriela Garcia.jpg",
        "Dra. Laura Olivares.jpg",
        "Dra. Nadia Cintora.jpg"
      ],
      columns: 4
    },
    {
      id: 6,
      titulo: "GRADUACIÓN IV GENERACIÓN DOCTORADO EN ADMINISTRACIÓN DE INSTITUCIONES EDUCATIVAS 2023-2025",
      fecha: "2025",
      descripcion: "Ceremonia de graduación de la Quinta Generación 2023-2025 del Doctorado en Administración de Instituciones Educativas.",
      basePath: "/images/eventos-academicos/grad-23-25-d",
      imagenes: [
        "04a12873-f59e-4e8b-ba1f-1167e3c659f3.jpg",
        "49a55ec7-5e84-4a7a-b52f-b48bb4e934d8.jpg",
        "4f0f6185-1f67-4d99-8232-8571df53f41c.jpg",
        "5c2a1a3c-3ddf-42bc-9b4d-835d94f757d5.jpg",
        "7a443493-62aa-4c43-9e55-64078091124a.jpg",
        "7e23c770-fd61-4dbc-9526-5595196f0644.jpg",
        "7e9a6ead-41c8-45fd-87fd-d454692049f9.jpg",
        "7fdbc538-95b2-479f-bdb3-54dd3048cd18.jpg",
        "85a2e63d-4890-437a-a6eb-726444aaf190.jpg",
        "a5e573ff-e19e-4b8a-97e1-e590025fd346.jpg",
        "b835d6ec-ace8-462f-a58a-4c7f30336ab9.jpg",
        "e56378af-a005-431c-89a6-02fac4cec101.jpg"
      ],
      columns: 4
    },
    {
      id: 5,
      titulo: "CONGRESO MULTIDISCIPLINARIO DE GESTIÓN DIRECTIVA: \"IMPACTO, COMPROMISOS Y ACCIONES COLABORATIVAS EN UN CONTEXTO EDUCATIVO GLOBAL\"",
      fecha: "2025",
      descripcion: "Fotografías destacadas de nuestro Congreso.",
      basePath: "/images/congreso-2025",
      imagenes: [
        "052189bc-3043-40c0-b739-c860091cb514.jpg",
        "1a6d7c6f-8da2-4d76-9c7c-49d51cbf2b58.jpg",
        "224b872a-1fe0-4655-88fb-2f2b2c1772a5.jpg",
        "2ac49dd5-ab98-4f7f-b64a-8971ef2a1608.jpg",
        "2cb94d76-6d1b-4462-9188-5b515187331e.jpg",
        "2de064e8-12f3-4ab4-be9c-175c39ca16cb.jpg",
        "3176b57d-3f72-440b-8f51-6ded7524c917.jpg",
        "3bc97a6a-de1d-4168-aa4e-282b34fc39e4.jpg",
        "3e1ea3dd-a32b-464e-8054-377ab4b38857.jpg",
        "488d68df-21c8-4c44-8d9e-3edce5d5aea7.jpg",
        "4ba53be6-87df-495a-bfbc-942a04bc7104.jpg",
        "4baab798-d2ba-419b-b326-c2ec9e6e2f17.jpg",
        "6a63a469-5b73-432b-9b28-974827321236.jpg",
        "6fc0a283-9454-4b63-82e6-ae6e20b0e27c.jpg",
        "7de1ee53-dbae-4cfb-ac0f-db2f39b0829a.jpg",
        "8f8c5b42-b983-456f-a5cf-5865dc45d1b5.jpg",
        "90d52c0b-5d25-4c4f-871e-4e437ea06cbd.jpg",
        "9cb45544-a31f-456e-86f0-1eb309d6f21e.jpg",
        "b566e8cb-7bea-47f4-8abf-a01335aac1e2.jpg",
        "b7d9e5c9-faa3-46a0-b069-640512d5afdd.jpg",
        "f425537d-206b-4b9c-806f-228449e21783.jpg",
        "ffad7f09-57a3-47ae-a796-52a4e0f11584.jpg"
      ],
      columns: 4
    },
    {
      id: 1,
      titulo: "GRADUACIÓN II GENERACIÓN 2017-2019",
      fecha: "09.11.2019",
      descripcion: "Ceremonia de graduación de la segunda generación de nuestros estudiantes.",
      imagenes: [
        "DSC_0198.jpg",
        "DSC_0197.jpg",
        "DSC_0191.jpg",
        "DSC_0190.jpg",
        "DSC_0184.jpg",
        "DSC_0009.jpg",
        "DSC_0029.jpg",
        "DSC_0027.jpg",
        "DSC_0026.jpg",
        "DSC_0023.jpg",
        "DSC_0181.jpg",
        "DSC_0180.jpg",
        "DSC_0179.jpg",
        "DSC_0169.jpg"
      ],
      columns: 4
    },
    {
      id: 2,
      titulo: "IV COLOQUIO DE INVESTIGACIÓN",
      fecha: "19.10.2019",
      descripcion: "Cuarto coloquio de investigación con la participación de estudiantes y docentes.",
      imagenes: [
        "76900426_540086626803716_1900193024667811840_n.jpg",
        "76747380_1010641499267823_5408325829618827264_n.jpg",
        "76638824_608014943278027_3379043839133089792_n.jpg",
        "76613122_428815111159472_2399678664422719488_n.jpg",
        "75625233_587705135121936_8691684055164387328_n.jpg",
        "75610830_786842555088662_4614455877196316672_n.jpg",
        "75580472_2551933751562098_7933416989328932864_n.jpg",
        "75474089_541644713070217_7542098219728109568_n.jpg",
        "75446480_735082600324542_2439652324478550016_n.jpg",
        "75339490_568089130613309_4225539480372641792_n.jpg",
        "75311436_2443248515772848_2589600821171716096_n.jpg",
        "75233427_776375312817156_3383440326571065344_n.jpg",
        "74634646_2390983964552050_4262277359312306176_n.jpg",
        "74632441_738908606584402_6113201547112349696_n.jpg",
        "74624143_2877327369161279_6536089198217134080_n.jpg",
        "74615525_2226595480972251_2149811026353192960_n.jpg",
        "74278241_2208308949274959_6576732576818397184_n.jpg",
        "74209795_2515771491871714_9143184804164927488_n.jpg",
        "73261240_2159497117686557_4697974080362512384_n.jpg",
        "73243588_1010206716024936_8769368357007785984_n.jpg",
        "73122219_692913924564427_9066132974910570496_n.jpg",
        "72705457_742537066259033_5167094662111952896_n.jpg",
        "72680112_759084407908000_6277658791223754752_n.jpg"
      ],
      columns: 4
    },
    {
      id: 3,
      titulo: "3ER. COLOQUIO DE INVESTIGACIÓN",
      fecha: "2018",
      descripcion: "Tercer coloquio de investigación con presentaciones académicas destacadas.",
      imagenes: [
        "52276895_2003163526477262_158449705850765312_n.jpg",
        "DSC_0572.jpg",
        "DSC_0574.jpg",
        "DSC_0576.jpg",
        "DSC_0577.jpg",
        "DSC_0580.jpg",
        "DSC_0582.jpg",
        "DSC_0631.jpg",
        "DSC_0637.jpg",
        "DSC_0640.jpg",
        "DSC_0643.jpg",
        "DSC_0644.jpg",
        "DSC_0647.jpg",
        "DSC_0651.jpg",
        "DSC_0653.jpg"
      ],
      columns: 5
    },
    {
      id: 4,
      titulo: "TOMA DE PROTESTA LIC. EN CRIMINOLOGÍA",
      fecha: "2018",
      descripcion: "Ceremonia de toma de protesta de la Licenciatura en Criminología.",
      imagenes: [
        "52766751_2057172227704354_6294279915227316224_n.jpg",
        "52771821_545202249305660_7595218839101505536_n.jpg",
        "52633896_1860005274105568_1750931568123183104_n.jpg",
        "52991353_2350649301652816_2783360501134917632_n.jpg",
        "53323389_618285908592500_4331115119447638016_n.jpg",
        "53365808_1370643446434435_6060473534994448384_n.jpg",
        "53563782_2817637415128150_6989016211367395328_n.jpg",
        "52923179_1090040267869553_2861391643062304768_n.jpg",
        "52963046_2362681373751249_5311476670736105472_n.jpg",
        "52816677_1191685657660065_946159244946702336_n.jpg",
        "52976490_446449716121072_2385854878388846592_n.jpg"
      ],
      columns: 3
    }
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/eventos-academicos/eventos-academicos.jpg"
            alt="Eventos Académicos IIESBC"
            fill
            priority
            className="object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/85 via-[#0c1208]/60 to-[#0c1208]/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(102,130,44,0.22),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[24%] left-[18%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute top-[42%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
          <span className="absolute bottom-[30%] left-[44%] w-1.5 h-1.5 rounded-full bg-[#a5c94c]/60 animate-float-fast" style={{ animationDelay: "0.6s" }} />
        </div>

        <div className="relative min-h-[72vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                  <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
                </span>
                <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                  Galería institucional
                </span>
              </div>

              <h1 className="font-display font-extrabold text-white text-display-xl tracking-display-tight text-balance mb-8">
                Eventos <span className="text-[#f68c24]">Académicos</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty">
                Momentos memorables que marcan nuestra historia institucional: graduaciones,
                coloquios y congresos que dan vida a la comunidad IIESBC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Eventos ─────────────────── */}
      {eventos.map((evento, index) => {
        const isGreen = index % 2 === 0;
        const accent = isGreen ? '#66822c' : '#f68c24';
        const bg = isGreen ? 'bg-white' : 'bg-[var(--color-surface)]';
        const orderNum = String(index + 1).padStart(2, '0');

        return (
          <section
            key={evento.id}
            className={`relative py-24 lg:py-32 overflow-hidden ${bg}`}
          >
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div
                className={`absolute ${isGreen ? 'top-20 right-20' : 'top-20 left-20'} w-[500px] h-[500px] rounded-full blur-3xl`}
                style={{ backgroundColor: `${accent}0D` }}
              />
              <div
                className={`absolute ${isGreen ? 'bottom-20 left-20' : 'bottom-20 right-20'} w-[400px] h-[400px] rounded-full blur-3xl`}
                style={{ backgroundColor: isGreen ? '#f68c240D' : '#66822c0D' }}
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
              {/* Encabezado editorial */}
              <div className="max-w-4xl mb-14 lg:mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-display font-bold text-xs tabular-nums tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    #{orderNum}
                  </span>
                  <span className="h-px w-10" style={{ backgroundColor: accent }} />
                  <span className="text-eyebrow" style={{ color: accent }}>
                    {evento.fecha}
                  </span>
                </div>

                <h2 className="font-display text-display-md font-bold text-[#1a1f14] tracking-display-tight text-balance mb-6">
                  {evento.titulo}
                </h2>

                <p className="text-lg text-[#4a5240] leading-relaxed max-w-2xl text-pretty">
                  {evento.descripcion}
                </p>
              </div>

              {/* Galería */}
              <div className={`grid grid-cols-2 ${getGridColsClass(evento.columns)} gap-3 lg:gap-4`}>
                {evento.imagenes.map((imagen, imgIndex) => {
                  const src = evento.basePath
                    ? `${evento.basePath}/${imagen}`
                    : `/images/eventos-academicos/${imagen}`;

                  return (
                    <button
                      key={imgIndex}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2"
                      style={{ '--tw-ring-color': `${accent}66` }}
                      onClick={() => setSelectedImage(src)}
                      aria-label={`Ampliar foto ${imgIndex + 1} de ${evento.titulo}`}
                    >
                      <div className="aspect-square relative bg-[var(--color-surface-alt)]">
                        <Image
                          src={src}
                          alt={`${evento.titulo} - Foto ${imgIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1208]/80 via-[#0c1208]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <span
                          className="absolute top-3 left-3 font-display text-[11px] font-semibold text-white tabular-nums tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          {String(imgIndex + 1).padStart(2, '0')}
                        </span>

                        <span className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ─────────────────── Modal de imagen ─────────────────── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c1208]/92 backdrop-blur-md p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white ring-1 ring-white/25 transition-all duration-300 hover:scale-110"
            onClick={closeModal}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-6xl w-full h-[90vh] relative">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* ─────────────────────────── CTA ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/eventos-academicos/eventos-academicos-2.jpg"
            alt="Únete a nuestros eventos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/80 via-[#0c1208]/70 to-[#0c1208]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.22),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute bottom-[32%] right-[24%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.4s" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f68c24]" />
              <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                Próximos eventos
              </span>
            </div>

            <h2 className="font-display font-extrabold text-white text-display-lg tracking-display-tight text-balance mb-8">
              ¿Quieres ser parte de nuestros próximos{" "}
              <span className="text-[#f68c24]">eventos</span>?
            </h2>

            <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty mb-10">
              Mantente informado sobre nuestras actividades académicas y culturales, y vive
              de cerca la comunidad IIESBC.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
              >
                Contáctanos
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/sobre-nosotros"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Conoce más sobre nosotros
                <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[#a5c94c]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
