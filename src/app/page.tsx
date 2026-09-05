import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#9A4D2D] text-white py-16 md:py-24">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
              Geología Universidad Central de Chile
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 font-light">
              ¡Bienvenido al sitio web oficial CEGEO UCENTRAL!
            </p>
            <p className="text-white/80 leading-relaxed">
              Página dedicada a los estudiantes de Geología de la Universidad
              Central de Chile. Accede a información sobre nuestros documentos
              oficiales y proyectos en desarrollo, anuncios de prácticas o
              cursos, la Biblioteca Para Todos, además de información sobre
              talleres y tutorías.
            </p>
          </div>
        </div>
      </section>

      {/* Carrera de Geología */}
      <section className="bg-[#FBF6F1] py-16 md:py-20">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3D2B1F] mb-6">
                Carrera de Geología
              </h2>
              <h3 className="text-lg font-medium text-[#9A4D2D] mb-4">
                ¿Por qué estudiar en la Universidad Central?
              </h3>
              <p className="text-[#6B5344] leading-relaxed mb-4">
                En nuestra universidad, estudiar geología es considerado como una
                puerta abierta a comprender el planeta y redescubrirlo desde una
                perspectiva científica y crítica, junto a una sólida formación en
                Ciencias de la Tierra para comprender e investigar los procesos
                geológicos endógenos y exógenos de nuestro planeta.
              </p>
              <p className="text-[#6B5344] leading-relaxed">
                El perfil del egresado combina el manejo de herramientas
                digitales, ciencias básicas e ingeniería para modelar, evaluar y
                gestionar proyectos enfocados en recursos minerales, hídricos y
                la mitigación de riesgos naturales, preparándonos para enfrentar
                los desafíos reales de la industria y la investigación.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/cegeo-ucentral/images/logo.png"
                alt="Logo CEGEO Universidad Central de Chile"
                width={322}
                height={322}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
