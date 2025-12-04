import { Target, Heart, BookOpen, Music, Dumbbell } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Acerca de Mí</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conoce más sobre mi trayectoria, objetivos y pasiones
        </p>

        <div className="space-y-8">
          {/* Información Personal */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-semibold">Información Personal</h3>
            </div>

            <p className="text-lg mb-4">
              <strong className="bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent">Nombre completo:</strong> Magno Ricardo Luque Mamani
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Este portafolio muestra mi crecimiento profesional en Ingeniería Informática,
              destacando proyectos académicos y competencias desarrolladas durante mi formación
              universitaria. Mi objetivo es crear soluciones tecnológicas innovadoras que generen
              un impacto positivo en la sociedad.
            </p>

            {/* Plan de Carrera */}
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200">
              <h4 className="text-xl font-semibold mb-4 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent">Plan de Carrera</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Corto Plazo (2025-2026)</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ef2b41] font-bold">→</span>
                      <span>Certificaciones técnicas (Oracle, AWS) y soft skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ef2b41] font-bold">→</span>
                      <span>Certificación de inglés ICPNA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ef2b41] font-bold">→</span>
                      <span>Grado de Bachiller y Título Profesional</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Mediano Plazo (2027-2032)</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ef2b41] font-bold">→</span>
                      <span>Especializaciones en Ciencia de Datos y Arquitectura de Datos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ef2b41] font-bold">→</span>
                      <span>Especialización en Machine Learning Operations (MLOps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ef2b41] font-bold">→</span>
                      <span>Maestría en Ciencia de Datos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pasatiempos */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#ee9b57] to-[#ffcd37] rounded-xl flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-semibold">Pasatiempos</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Lectura */}
              <div className="bg-linear-to-br from-orange-100 to-orange-200 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md flex flex-col items-center text-center">
                <BookOpen size={36} className="text-orange-600 mb-3" />
                <span className="font-semibold text-gray-900 text-lg">Lectura</span>
                <p className="text-sm text-gray-700 mt-1">
                  Me gusta leer noticias y papers sobre las últimas tendencias en tecnología.
                </p>
              </div>

              {/* Música */}
              <div className="bg-linear-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md flex flex-col items-center text-center">
                <Music size={36} className="text-yellow-600 mb-3" />
                <span className="font-semibold text-gray-900 text-lg">Música</span>
                <p className="text-sm text-gray-700 mt-1">
                  Toco saxofón y practico guitarra acústica. Disfruto explorar diferentes géneros musicales.
                </p>
              </div>

              {/* Deportes */}
              <div className="bg-linear-to-br from-amber-100 to-amber-200 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md flex flex-col items-center text-center">
                <Dumbbell size={36} className="text-amber-600 mb-3" />
                <span className="font-semibold text-gray-900 text-lg">Deportes</span>
                <p className="text-sm text-gray-700 mt-1">
                  Me apasiona el futsal, el básquetbol y el tenis de mesa.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}