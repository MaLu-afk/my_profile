import { Lightbulb, Users, Clock, MessageCircle, Puzzle, Zap, Brain, Palette } from 'lucide-react';

export const Skills = () => {
  const skillIcons = {
    'Liderazgo': Lightbulb,
    'Trabajo en equipo': Users,
    'Gestión del tiempo': Clock,
    'Comunicación': MessageCircle,
    'Resolución de problemas': Puzzle,
    'Adaptabilidad': Zap,
    'Pensamiento crítico': Brain,
    'Creatividad': Palette,
  }

  return (
    <section id="skills" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Competencias Blandas</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Habilidades interpersonales desarrolladas a lo largo de mi formación
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Reflexión */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl font-semibold mb-6 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent">Reflexión Personal</h3>
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200">
              <p className="text-gray-700 leading-relaxed">
                Durante mi formación en Ingeniería Informática, he fortalecido mi capacidad de
                trabajo en equipo mediante proyectos grupales, aprendiendo a comunicarme efectivamente
                y resolver conflictos de manera constructiva. La gestión del tiempo se ha vuelto
                fundamental para balancear múltiples proyectos académicos, desarrollando habilidades
                de priorización y organización que serán invaluables en mi carrera profesional.
              </p>
            </div>
          </div>

          {/* Ejemplo Práctico */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl font-semibold mb-6 bg-linear-to-r from-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Ejemplo Práctico</h3>
            <div className="bg-linear-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="font-semibold mb-3 text-lg bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent">Caso: Proyecto de Base de Datos Distribuida</h4>
              <p className="text-gray-700 leading-relaxed">
                En el proyecto de base de datos del semestre anterior, asumí un rol de liderazgo
                cuando el equipo enfrentaba dificultades de coordinación. Organicé reuniones de
                seguimiento semanales, establecí metas claras y distribuí tareas según las fortalezas
                de cada miembro. Esta experiencia resultó en la entrega exitosa del proyecto con una
                calificación sobresaliente y fortaleció mis habilidades de liderazgo y comunicación.
              </p>
            </div>
          </div>
        </div>

        {/* Habilidades específicas */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8">Habilidades Desarrolladas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skillIcons).map(([skill, Icon]) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}