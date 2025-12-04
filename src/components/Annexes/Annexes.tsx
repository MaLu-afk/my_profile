import { Quote, Award } from 'lucide-react';
import pronabecLogo from '../../assets/logos/Pronabec.png';

export const Annexes = () => {
  return (
    <section id="annexes" className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Anexos</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Testimonios y reconocimientos que validan mi trayectoria
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonios */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-xl flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-semibold">Testimonios</h3>
            </div>

            <div className="space-y-6">

              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#ee9b57] to-[#ffcd37] rounded-full flex items-center justify-center text-white font-bold">
                    GQ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Gian Quezada</p>
                    <p className="text-sm text-gray-600">Compañero de Proyecto</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Trabajar con Magno ha sido una experiencia excelente. Destaca por su capacidad
                  para resolver problemas con rapidez, su compromiso con la calidad y su habilidad
                  para trabajar en equipo. Siempre aporta ideas claras y bien fundamentadas y demuestra
                  un alto nivel de responsabilidad en cada proyecto. Sin duda, es un profesional en quien
                  se puede confiar".
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#ee9b57] to-[#ffcd37] rounded-full flex items-center justify-center text-white font-bold">
                    EA
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Edithson Aybar</p>
                    <p className="text-sm text-gray-600">Compañero de Proyecto</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Quiero reconocer a Magno por su dedicación ejemplar. Es un compañero muy aplicado,
                  siempre dispuesto a aprender y a dar más de lo esperado. En los trabajos grupales,
                  su apoyo constante marca una gran diferencia, aporta ideas, organiza cuando es requerido
                  y nunca duda en ayudar a quien lo necesite. Su compromiso y responsabilidad lo convierten
                  en un compañero invaluable".
                </p>
              </div>
            </div>
          </div>

          {/* Reconocimientos */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#ee9b57] to-[#ffcd37] rounded-xl flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-semibold">Reconocimientos</h3>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex flex-col items-center text-center gap-6">
                {/* Logo PRONABEC */}
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={pronabecLogo}
                    alt="PRONABEC Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Título */}
                <div>
                  <h4 className="text-2xl font-bold bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent mb-2">
                    Beca 18 - PRONABEC
                  </h4>
                  <p className="text-lg font-semibold text-gray-700 mb-1">
                    Beca Integral de Educación Superior
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    Convocatoria 2022
                  </p>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Beneficiario de la Beca 18, programa del Programa Nacional de Becas y Crédito Educativo (PRONABEC)
                  del Ministerio de Educación del Perú, que otorga becas integrales a estudiantes con alto rendimiento
                  académico y bajos recursos económicos para cursar estudios superiores.
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] text-white rounded-full font-semibold text-sm shadow-lg">
                  <Award size={18} />
                  <span>Becario PRONABEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}