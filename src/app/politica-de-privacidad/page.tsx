import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Cegeo Ucentral",
  description:
    "Política de privacidad del sitio web CEGEO UCENTRAL - Centro de Estudiantes de Geología de la Universidad Central de Chile.",
};

export default function PoliticaPrivacidad() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#9A4D2D] text-white py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Política de Privacidad
          </h1>
        </div>
      </section>

      {/* Aviso legal */}
      <section className="bg-[#FBF6F1] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Aviso legal
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-6">
            Las explicaciones e información proporcionadas en esta página son
            solo explicaciones e información generales y a grandes rasgos sobre
            cómo redactar tu propio documento de Política de Privacidad. No
            debes considerar este artículo como asesoramiento legal o
            recomendaciones sobre lo que realmente debes hacer, porque no
            podemos saber de antemano cuáles son las políticas de privacidad
            específicas que deseas establecer entre tu negocio y tus clientes y
            visitantes. Te recomendamos que busques asesoramiento legal para
            entender y elaborar tu propia Política de Privacidad.
          </p>
        </div>
      </section>

      {/* Fundamentos */}
      <section className="bg-[#F2E3D5] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Política de Privacidad: fundamentos
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            Dicho esto, una Política de Privacidad es una declaración que
            divulga una parte o la totalidad de las prácticas de recopilación,
            uso, divulgación, procesos y gestión de datos de los usuarios y
            clientes de un sitio web. También suele incluir una declaración
            sobre el compromiso del sitio web de proteger la privacidad de sus
            visitantes o clientes, y una explicación sobre los diferentes
            mecanismos que el sitio web aplica para proteger la privacidad.
          </p>
          <p className="text-[#6B5344] leading-relaxed">
            Las distintas jurisdicciones tienen diferentes obligaciones legales
            sobre lo que debe incluirse en una Política de Privacidad. Tú eres
            responsable de asegurarte de que cumples con la legislación
            pertinente a tus actividades y ubicación.
          </p>
        </div>
      </section>

      {/* Qué debe incluirse */}
      <section className="bg-[#FBF6F1] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Qué debe incluirse en el documento de Política de Privacidad
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-4">
            En términos generales, una Política de Privacidad suele abordar este
            tipo de cuestiones: los tipos de información que el sitio web
            recopila y la forma en que recopila los datos, una explicación sobre
            por qué el sitio web recopila este tipo de información, cuáles son
            las prácticas del sitio web para compartir la información con
            terceros, las formas en que tus visitantes y clientes pueden ejercer
            sus derechos de acuerdo con la legislación de privacidad pertinente,
            las prácticas específicas relacionadas con la recopilación de datos
            de menores y mucho más.
          </p>
          <p className="text-[#6B5344] leading-relaxed">
            Para obtener más información, lee nuestro artículo{" "}
            <a
              href="https://support.wix.com/es/article/creando-una-pol%C3%ADtica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9A4D2D] hover:underline"
            >
              Cómo crear una Política de Privacidad
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
