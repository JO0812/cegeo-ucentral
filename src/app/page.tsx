import Image from "next/image";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "Taller de Cartografía Geológica",
    date: "15 de Octubre, 2025",
    location: "Sala de Clases A-302",
    description:
      "Taller práctico sobre técnicas de cartografía y mapeo geológico para estudiantes de primer año.",
  },
  {
    id: 2,
    title: "Salida de Campo - Cordillera de los Andes",
    date: "22-24 de Octubre, 2025",
    location: "Región Metropolitana",
    description:
      "Salida de campo de tres días para estudiar la geología de la zona central de Chile.",
  },
  {
    id: 3,
    title: "Seminario: Recursos Hídricos Subterráneos",
    date: "5 de Noviembre, 2025",
    location: "Auditorio Central",
    description:
      "Seminario especializado sobre gestión y evaluación de recursos hídricos subterráneos.",
  },
];

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
                src="/images/logo.png"
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

      {/* Eventos Próximos */}
      <section className="bg-[#F2E3D5] py-16 md:py-20">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3D2B1F] mb-10 text-center">
            Eventos Próximos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-[#FBF6F1] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-medium text-[#9A4D2D] mb-2">
                  {event.date}
                </div>
                <h3 className="text-lg font-semibold text-[#3D2B1F] mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-[#6B5344] mb-3">
                  <span className="inline-flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </span>
                </p>
                <p className="text-sm text-[#6B5344] leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/nuestro-proposito"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-[#9A4D2D] hover:bg-[#7A3D22] transition-colors"
            >
              Conoce más sobre nosotros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
