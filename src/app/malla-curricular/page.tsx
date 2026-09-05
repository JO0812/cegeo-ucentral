import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malla Curricular | Cegeo Ucentral",
  description:
    "Malla curricular de la carrera de Geología de la Universidad Central de Chile. Resoluciones de estudios 2017 y 2025.",
};

export default function MallaCurricular() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-[#9A4D2D] text-white py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Malla Curricular Geología
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FBF6F1] py-8">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B5344] leading-relaxed max-w-3xl">
            A continuación se presenta la malla curricular junto a la resolución
            de estudios, correspondientes a los años 2017 y 2025, de la carrera
            de Geología de la Universidad Central de Chile.
          </p>
        </div>
      </section>

      {/* Malla 2025 */}
      <section className="bg-[#FBF6F1] py-12">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Malla Geología 2025
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <Image
              src="/cegeo-ucentral/images/malla-2025.jpg"
              alt="Malla Curricular Geología 2025 - Universidad Central de Chile"
              width={821}
              height={436}
              className="w-full h-auto rounded-md"
              priority
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="bg-[#FBF6F1] py-4">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#D6BCA8]"></div>
        </div>
      </section>

      {/* Malla 2017 */}
      <section className="bg-[#FBF6F1] py-12">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-6">
            Malla Geología 2017
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <Image
              src="/cegeo-ucentral/images/malla-2017.png"
              alt="Malla Curricular Geología 2017 - Universidad Central de Chile"
              width={821}
              height={467}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Resolución de Estudios */}
      <section className="bg-[#F2E3D5] py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#3D2B1F] mb-4">
            Acceso a la resolución de Estudios
          </h2>
          <p className="text-[#6B5344] leading-relaxed mb-6 max-w-3xl">
            A continuación se presenta la resolución general de estudios de las
            dos mallas (2017 y 2025) en formato PDF, en la cual podrán ver los
            requisitos de cada ramo, los créditos SCT, las horas pedagógicas
            destinadas y los códigos correspondientes a cada asignatura.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center px-5 py-2.5 border border-[#9A4D2D] text-sm font-medium rounded-full text-[#9A4D2D] hover:bg-[#9A4D2D] hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar Resolución 2025 (PDF)
            </a>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2.5 border border-[#9A4D2D] text-sm font-medium rounded-full text-[#9A4D2D] hover:bg-[#9A4D2D] hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar Resolución 2017 (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
