import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro Propósito | Cegeo Ucentral",
  description:
    "Conoce al Centro de Estudiantes de Geología de la Universidad Central de Chile. Nuestro equipo, visión y propósito.",
};

const teamMembers = [
  {
    name: "Raquel Labrin",
    role: "Presidenta",
    image: "/cegeo-ucentral/images/raquel.jpg",
  },
  {
    name: "Víctor Vilches",
    role: "Administrador",
    image: "/cegeo-ucentral/images/victor.jpg",
  },
  {
    name: "Renato Labarca",
    role: "Vicepresidente",
    image: "/cegeo-ucentral/images/renato.jpg",
  },
  {
    name: "Belén Zepeda",
    role: "Comunicación y Redes Sociales",
    image: "/cegeo-ucentral/images/belen.jpg",
  },
  {
    name: "Alondra Moraga",
    role: "Secretaria",
    image: "/cegeo-ucentral/images/alondra.jpg",
  },
  {
    name: "Ángel Fuentes",
    role: "Deportes y Extracurriculares",
    image: "/cegeo-ucentral/images/angel.jpg",
  },
  {
    name: "Diego Aguiar",
    role: "Tesorero",
    image: "/cegeo-ucentral/images/diego.jpg",
  },
  {
    name: "Javiera Núñez",
    role: "Género y Diversidad",
    image: "/cegeo-ucentral/images/javiera.jpg",
  },
  {
    name: "Vicente Bonilla",
    role: "Vocero",
    image: "/cegeo-ucentral/images/vicente.jpg",
  },
];

export default function NuestroProposito() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#9A4D2D] text-white py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Nuestro Propósito
          </h1>
        </div>
      </section>

      {/* ¿Quiénes somos? */}
      <section className="bg-[#FBF6F1] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            ¡Hola! Somos la Lista postulante al Centro de estudiantes de Geología
            de la Universidad Central de Chile: &quot;Hipocentro&quot;.
          </p>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            En nuestro equipo se abarcan áreas clave que van desde el apoyo
            académico continuo y una gestión y administración eficiente de los
            recursos, hasta el fortalecimiento de la vinculación con el medio.
            Asimismo, trabajamos bajo un estricto compromiso con la
            transparencia, potenciando la difusión de oportunidades para el
            desarrollo estudiantil e integrando de manera transversal la
            perspectiva de género y diversidad en cada una de nuestras acciones.
          </p>
        </div>
      </section>

      {/* Nuestra visión */}
      <section className="bg-[#F2E3D5] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Nuestra visión
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            Compartimos ideas y motivaciones similares, con la intención de
            construir un ambiente universitario mucho más participativo, donde se
            fomente el aprendizaje, la colaboración y la buena convivencia, tanto
            dentro como fuera de clases.
          </p>
          <p className="text-[#6B5344] leading-relaxed">
            Si bien cada integrante posee motivaciones personales, nos une un
            mismo objetivo: aportar desde nuestras propias habilidades y
            experiencias, escuchando las distintas voces del estudiantado,
            especialmente aquellas que suelen no ser tomadas en cuenta. Es por
            esto que asumimos roles específicos dentro del centro, potenciando los
            intereses y fortalezas de cada uno para trabajar en equipo por la
            carrera.
          </p>
        </div>
      </section>

      {/* ¿Por qué crear un sitio web? */}
      <section className="bg-[#FBF6F1] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            ¿Por qué crear un sitio web?
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            Contar con un sitio web oficial es fundamental para fortalecer la
            conexión con nuestra comunidad. Por ello, este espacio fue diseñado
            para proporcionarle a los estudiantes información, documentos,
            proyectos, detalles de talleres y tutorías de manera centralizada.
          </p>
          <p className="text-[#6B5344] leading-relaxed">
            Será nuestro canal oficial de divulgación, facilitando el acceso
            oportuno a la información y promoviendo la participación activa de
            todas y todos.
          </p>
        </div>
      </section>

      {/* ¿Qué esperamos? */}
      <section className="bg-[#F2E3D5] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            ¿Qué esperamos?
          </h2>
          <p className="text-[#6B5344] leading-relaxed">
            Nuestro principal objetivo es que el centro de estudiantes no funcione
            como algo aislado, sino como un espacio abierto donde cualquiera pueda
            proponer, preguntar o plantear problemas. Esperamos establecer espacios
            reales de participación, donde las decisiones se basen en las
            necesidades del conjunto del estudiantado y no únicamente en las
            opiniones de un grupo reducido.
          </p>
        </div>
      </section>

      {/* ¿Qué proponemos? */}
      <section className="bg-[#FBF6F1] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            ¿Qué proponemos?
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            Para promover el bienestar, impulsaremos actividades que apoyen la
            salud mental y el equilibrio académico, incluyendo tutorías,
            deportes, talleres y un acompañamiento continuo para facilitar la
            integración de los estudiantes nuevos desde su llegada a la carrera.
          </p>
          <p className="text-[#6B5344] leading-relaxed">
            Buscamos generar un fuerte sentido de pertenencia mediante actividades
            periódicas con toda la comunidad, potenciando espacios de convivencia
            que fortalezcan la cohesión y colaboración. Queremos construir este
            camino en conjunto, haciendo que cada voz importe.
          </p>
        </div>
      </section>

      {/* ¿Para qué? */}
      <section className="bg-[#F2E3D5] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            ¿Para qué?
          </h2>
          <p className="text-[#6B5344] leading-relaxed">
            Estas iniciativas buscan construir un sentido de pertenencia sólido
            que apoye el desarrollo académico, social y personal, constituyendo
            un pilar fundamental para el éxito y bienestar de toda la comunidad
            estudiantil. Al final, se trata de consolidar un espacio donde cada
            estudiante se sienta acompañado, representado y preparado para
            enfrentar los desafíos de la geología de forma unida.
          </p>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="bg-[#FBF6F1] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-8">
            Detrás de cada propuesta, actividad y gestión hay un grupo de
            compañeras y compañeros comprometidos con la carrera.
          </p>
          <p className="text-[#6B5344] leading-relaxed mb-10">
            Actualmente conformamos un equipo diverso y comprometido, unidos por
            el objetivo de fortalecer la vida universitaria de nuestra comunidad
            y con el propósito es ser un puente activo entre los estudiantes y
            la carrera. A continuación nos presentamos para que sepan quiénes
            formamos parte de esta lista y con quién puedes contar durante este
            periodo.
          </p>

          {/* Team photo */}
          <div className="mb-12">
            <Image
              src="/cegeo-ucentral/images/team-group.jpg"
              alt="Equipo CEGEO UCENTRAL"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          <h3 className="text-xl font-semibold text-[#3D2B1F] mb-8 text-center">
            ¡Conócenos!
          </h3>

          {/* Team grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-[#3D2B1F]">{member.name}</h4>
                <p className="text-sm text-[#9A4D2D]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F2E3D5] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Complete el siguiente formulario si desea contactarnos:
          </h2>
          <form className="max-w-lg space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#3D2B1F] mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-md border border-[#D6BCA8] bg-white text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#9A4D2D] focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#3D2B1F] mb-1"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md border border-[#D6BCA8] bg-white text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#9A4D2D] focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#3D2B1F] mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-[#D6BCA8] bg-white text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#9A4D2D] focus:border-transparent"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-[#9A4D2D] hover:bg-[#7A3D22] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
