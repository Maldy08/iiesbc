"use client";

import Image from "next/image";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <main id="main" className="relative isolate">
      {/* Hero Section Mejorado */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background con parallax effect */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sobre-nosotros/hero-sobre-nosotros.jpg"
            alt="Campus IIESBC"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradiente mejorado */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-orange-900/70" />
          
          {/* Efectos de luz animados */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl animate-float-medium" />
          </div>

          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center w-full">
          {/* Badge animado */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Nuestra Historia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 inline-block hover:scale-[1.03] transition-transform duration-300">Nosotros</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed font-light">
            Conoce nuestra historia, misión y el compromiso que nos impulsa cada día
          </p>
          
          {/* Decorador inferior */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-orange-400 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <div className="w-40 h-0.5 bg-gradient-to-r from-orange-400 to-green-400 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 via-green-400 to-transparent rounded-full" />
          </div>

          {/* Botón de scroll */}
          <div className="mt-16 animate-bounce">
            <svg className="w-8 h-8 mx-auto text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ¿Quiénes Somos? - Diseño mejorado */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background mejorado */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-green-50/30 to-orange-50/20">
          <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Header de sección mejorado */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-100 to-green-100 mb-4">
              <span className="text-sm font-bold text-orange-700 uppercase tracking-wider">Conócenos</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-gray-900">¿Quiénes</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Somos?</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full" />
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full" />
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen mejorada */}
            <div className="relative group order-2 lg:order-1">
              {/* Efectos decorativos */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-orange-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-br from-green-600/30 to-orange-600/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sobre-nosotros/quienes-somos.jpg"
                  alt="Estudiantes IIESBC"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent" />
                
                {/* Badge flotante */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-orange-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Excelencia Académica</p>
                        <p className="text-sm text-gray-600">Certificada y Reconocida</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido mejorado */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Tarjeta principal */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                  {/* Barra lateral decorativa */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 via-orange-500 to-green-600 rounded-full" />
                  
                  <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6">
                    Somos una{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 relative">
                      universidad comprometida
                      <span className="absolute bottom-0 left-0 right-0 h-2 bg-green-100 -z-10" />
                    </span>{" "}
                    con la comunidad estudiantil.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fundada con la misión de desarrollar la competitividad y la preparación de sus alumnos para un entorno profesional demandante.
                  </p>
                </div>
              </div>

              {/* Stats mejorados */}
              <div className="grid grid-cols-3 gap-4">
                <StatCard
                  number="25+"
                  label="Años"
                  gradient="from-green-600 to-green-700"
                  delay="0"
                />
                <StatCard
                  number="1000+"
                  label="Egresados"
                  gradient="from-orange-500 to-orange-600"
                  delay="100"
                />
                <StatCard
                  number="98%"
                  label="Empleabilidad"
                  gradient="from-green-700 to-orange-600"
                  delay="200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenida del Director - Rediseñado */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background con imagen */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sobre-nosotros/bienvenida-director.jpg"
            alt="Biblioteca IIESBC"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
          
          {/* Efectos de luz */}
          <div className="absolute top-40 left-40 w-[500px] h-[500px] bg-green-300/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-40 w-[500px] h-[500px] bg-orange-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-100 to-green-100 mb-4">
              <span className="text-sm font-bold text-orange-700 uppercase tracking-wider">Mensaje del Director</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Bienvenida</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full" />
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
            </div>
          </div>

          {/* Contenido de bienvenida */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 via-green-600 to-orange-600 rounded-3xl opacity-20 blur-2xl" />
            
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-200/50">
              {/* Quote decorativa */}
              <svg className="w-16 h-16 text-orange-200 absolute top-8 left-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg relative z-10">
                <p className="text-xl md:text-2xl font-light text-gray-800 first-letter:text-7xl first-letter:font-bold first-letter:text-green-700 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  A través de este medio deseo dar la bienvenida al <strong className="text-green-700 font-semibold">Instituto Interamericano de Estudios Superiores de Baja California</strong>, a aquellas personas quienes han tomado una de las decisiones más importantes de su vida, iniciar una carrera universitaria, felicidades.
                </p>
                
                <p>
                  Quiero que sepas que es un honor para mi pertenecer y estar al frente de esta joven institución que al igual que yo, tiene el compromiso ético y social de formar seres humanos íntegros, responsables, con liderazgo, con valores y conocimientos profesionales que sean para el servicio y ejemplo de nuestra sociedad.
                </p>
                
                <p>
                  Debo decirte que en el <strong className="text-green-700 font-semibold">IIESBC</strong> te ayudaremos a forjar un buen futuro, por lo tanto te encontrarás con retos, conocerás tu potencial, tus debilidades, y desarrollarás tus habilidades, lograrás crecer como persona y apreciar a los demás, nuestra excelente planta docente exigirá lo mejor de ti, pero siempre estará contigo siendo tu guía en el proceso.
                </p>
                
                {/* Destacado especial */}
                <div className="relative my-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-100 via-orange-50 to-green-100 rounded-2xl" />
                  <div className="relative bg-gradient-to-r from-green-50/80 via-white to-orange-50/80 border-l-4 border-orange-500 p-6 md:p-8 rounded-xl shadow-lg">
                    <p className="text-lg md:text-xl italic text-gray-700">
                      Te ofrecemos una educación de alta calidad, tus docentes tienen la experiencia y aptitudes para guiarte y mostrarte lo que necesitas para llegar a tu meta. Ten la certeza que en el <strong className="text-green-700 font-semibold">IIESBC</strong> tu ahora casa, confiamos en tus capacidades y por ello hoy, nuestra prioridad es lograr tu grandeza personal y profesional.
                    </p>
                  </div>
                </div>
                
                <p>
                  Te invito a que adoptes hoy la actitud y el compromiso de un estudiante universitario que aprovecha las oportunidades para aprender y crecer en respeto y armonía.
                </p>
                
                {/* Firma */}
                <div className="pt-8 border-t border-gray-200 mt-8">
                  <p className="text-2xl md:text-3xl font-semibold text-green-700 mb-6">
                    En el IIESBC <span className="text-orange-600">"Tu éxito es el nuestro"</span>.<br />
                    Caminemos juntos.
                  </p>
                  
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-xl md:text-2xl">Dr. Rafael López Oñate</p>
                      <p className="text-sm md:text-base text-gray-600">Director General IIESBC</p>
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-600 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-2xl md:text-3xl font-bold text-white">RL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Rediseñado */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sobre-nosotros/mision-vision.jpg"
            alt="Graduación IIESBC"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/85 to-green-50/90 backdrop-blur-sm" />
          
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-green-300/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-orange-300/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 mb-4">
              <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Nuestros Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-gray-900">Misión &</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">Visión</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <MisionVisionCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              }
              title="Nuestra Misión"
              gradient="from-green-500 via-green-600 to-green-700"
              hoverGradient="from-green-600 to-green-400"
              tone="green"
            >
              El Instituto Interamericano de Estudios Superiores de Baja California tiene como esencia de su misión, filosofía y responsabilidad social, la formación de seres morales, virtuosos e íntegros en el pensar y en el hacer.
            </MisionVisionCard>

            {/* Visión */}
            <MisionVisionCard
              icon={
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </>
              }
              title="Nuestra Visión"
              gradient="from-orange-500 via-orange-600 to-orange-700"
              hoverGradient="from-orange-600 to-orange-400"
              tone="orange"
            >
              El Instituto orienta sus acciones hacia la combinación de conocimientos teóricos y prácticos de nivel licenciatura y Posgrado; a partir de un desarrollo de ideas que se presentan en forma ordenada y disciplinada, consolidando propuestas que se suscitan de un proceso de investigación que de acuerdo a los requerimientos invita a trabajar en forma colaborativa a diversas disciplinas y tiende redes con enfoque al impacto de crecimiento social y económico; tanto en los ámbitos locales, nacionales como internacionales.
            </MisionVisionCard>
          </div>
        </div>
      </section>

      {/* Beneficios - Rediseñado */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sobre-nosotros/beneficios-estudiantes.jpg"
            alt="Estudiantes IIESBC"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 backdrop-blur-sm" />
          
          <div className="absolute top-40 right-40 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-40 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 mb-4">
              <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Por qué elegirnos</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Beneficios{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">IIESBC</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las ventajas que te ofrecemos para tu desarrollo académico y profesional
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full" />
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full" />
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
              title="Horarios Flexibles"
              gradient="from-green-500 to-green-700"
              tone="green"
            >
              Por qué sabemos que tu formación es muy importante, tenemos horarios flexibles para que elijas el que más te convenga.
            </BenefitCard>

            <BenefitCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              }
              title="Equivalencia de Materias"
              gradient="from-orange-500 to-orange-700"
              tone="orange"
            >
              Si deseas continuar tus estudios con nosotros y ya tienes materias cursadas hacemos una equivalencia o revalidación en el programa que elijas.
            </BenefitCard>

            <BenefitCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
              title="Plan de Becas"
              gradient="from-green-500 via-green-600 to-orange-600"
              tone="green"
            >
              Tanto para licenciatura como para los cursos de posgrado existe la posibilidad de ser recipiente de una beca y de obtener facilidades de pago de colegiaturas.
            </BenefitCard>

            <BenefitCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              }
              title="Vinculación"
              gradient="from-orange-500 via-orange-600 to-green-600"
              tone="orange"
            >
              Contamos con Convenios con dependencias de Gobierno, empresas privadas instituciones educativas del sector público y privado, con fines de vincular proyectos de investigación, así como realizar intercambios, prácticas profesionales y estancias de aprendizaje.
            </BenefitCard>
          </div>
        </div>
      </section>

      {/* Información Institucional - CTA Final */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-green-200/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-orange-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-green-600 via-orange-500 to-green-600 rounded-3xl opacity-20 blur-2xl" />
            
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-200/50">
              {/* Badge superior */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-600 to-orange-600 px-8 py-3 rounded-full shadow-xl">
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Institución Certificada</p>
                </div>
              </div>

              {/* Ícono central */}
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 bg-gradient-to-br from-green-600 via-green-700 to-orange-600 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-orange-600 rounded-full animate-ping opacity-20" />
                <svg className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-8 text-center">
                Información <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Institucional</span>
              </h2>

              <div className="flex items-center justify-center gap-2 mb-10">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full" />
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full" />
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
              </div>

              <div className="space-y-6 mb-10">
                <div className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-6 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-700">Clave institucional:</span>{" "}
                    <span className="text-2xl md:text-3xl font-black text-gray-800">02PSU0128P</span>
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 border-l-4 border-orange-600 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Reconocimiento de Validez Oficial de Estudios<br />
                    por Baja California. <span className="font-black text-gray-800">RVOE-BC (229 a la 235) M1/13</span>
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <Link
                  href="/contacto"
                  className="group relative w-full sm:w-auto mx-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 via-green-700 to-orange-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:from-green-700 hover:via-green-800 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Solicita Información
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.08); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

// Componente para estadísticas
function StatCard({ number, label, gradient, delay }) {
  return (
    <div
      className={`group bg-gradient-to-br ${gradient} rounded-2xl p-6 text-center shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ring-1 ring-black/5`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-3xl md:text-4xl font-black text-white mb-1">{number}</p>
      <p className="text-sm text-white/90">{label}</p>
    </div>
  );
}

// Componente para Misión/Visión
function MisionVisionCard({ icon, title, gradient, hoverGradient, tone = 'green', children }) {
  const toneClasses = {
    green: {
      bar: 'via-green-500',
      headingHover: 'group-hover:text-green-700',
      lineLeft: 'to-green-500',
      lineMid: 'from-green-500',
      lineRight: 'from-green-500',
    },
    orange: {
      bar: 'via-orange-500',
      headingHover: 'group-hover:text-orange-700',
      lineLeft: 'to-orange-500',
      lineMid: 'from-orange-500',
      lineRight: 'from-orange-500',
    },
  };

  const t = toneClasses[tone] ?? toneClasses.green;

  return (
    <div className="group relative">
      <div className={`absolute -inset-2 bg-gradient-to-br ${hoverGradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
      
      <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-[1.02] p-8 md:p-10 overflow-hidden border border-gray-200/50">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${t.bar} to-transparent`} />
        
        <div className="relative">
          <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {icon}
            </svg>
          </div>

          <h3 className={`text-3xl md:text-4xl font-black text-gray-800 mb-6 text-center ${t.headingHover} transition-colors duration-300`}>
            {title}
          </h3>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`w-8 h-1 bg-gradient-to-r from-transparent ${t.lineLeft} rounded-full`} />
            <div className={`w-16 h-1 bg-gradient-to-r ${t.lineMid} to-orange-500 rounded-full`} />
            <div className={`w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full`} />
          </div>

          <p className="text-gray-700 leading-relaxed text-center text-lg">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente para Beneficios
function BenefitCard({ icon, title, gradient, tone = 'green', children }) {
  const toneClasses = {
    green: {
      glow: 'from-green-600 to-green-400',
      titleHover: 'group-hover:text-green-700',
    },
    orange: {
      glow: 'from-orange-600 to-orange-400',
      titleHover: 'group-hover:text-orange-700',
    },
  };

  const t = toneClasses[tone] ?? toneClasses.green;

  return (
    <div className="group relative">
      <div className={`absolute -inset-1 bg-gradient-to-r ${t.glow} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icon}
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${t.titleHover} transition-colors duration-300`}>
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}