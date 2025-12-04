import { Download, ArrowRight } from 'lucide-react';
import profileImage from '../../assets/profile/photo.jpg';

import cv from '../../assets/cv/CV-Magno_Luque.pdf';

export const Hero = () => {
  // Función para descargar el CV - igual que en Professional
  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Magno-Luque-CV.pdf'; // Nombre que tendrá al descargarse
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-orange-50 to-red-50"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-red-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 flex flex-col relative z-10">
        {/* Contenedor principal para imagen y texto */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-10 mt-16">
          {/* Columna izquierda - Foto de perfil */}
          <div className="lg:w-2/5 flex lg:justify-start pl-4 lg:pl-12">
            <div className="w-96 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative group">
              <img
                src={profileImage}
                alt="Foto de perfil de Magno Luque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Columna derecha - Contenido de presentación */}
          <div className="lg:w-3/5 flex flex-col items-center justify-center text-center lg:text-left my-auto">
            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hola, soy <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Magno Luque</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Soy estudiante de <span className="font-semibold bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent">Ingeniería Informática</span>,
              apasionado por el mundo de los datos y su capacidad para impulsar decisiones inteligentes.
              Exploro el procesamiento, análisis y modelado de datos en áreas como Ingeniería de Datos,
              Data Science y Machine Learning, con el objetivo de transformar datos en conocimiento
              y generar impacto real.
            </p>
          </div>
        </div>

        {/* Contenedor para estadísticas, botones y scroll indicator */}
        <div className="w-full flex flex-col items-center mt-12 mb-12">
          {/* Estadísticas rápidas */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl font-bold bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent text-center mx-auto">
                3+
              </div>
              <div className="text-sm text-gray-600">Proyectos Académicos y Personales</div>
            </div>
            <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl font-bold bg-linear-to-r from-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent text-center mx-auto">
                1+
              </div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl font-bold bg-linear-to-r from-[#ef2b41] to-[#ffcd37] bg-clip-text text-transparent text-center mx-auto">
                5+
              </div>
              <div className="text-sm text-gray-600">Tecnologías Dominadas</div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
            <a
              href="#projects"
              className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] text-white px-8 py-4 rounded-xl font-semibold hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Ver Mis Proyectos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              onClick={descargarCV}
              className="bg-white/70 backdrop-blur-md px-8 py-4 rounded-xl font-semibold hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group border-2 border-transparent hover:border-[#ee9b57]"
            >
              <span className="bg-linear-to-r from-[#ef2b41] to-[#ee9b57] bg-clip-text text-transparent">Descargar CV</span>
              <Download size={20} className="text-[#ee9b57] group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce flex justify-center lg:justify-start">
            <a
              href="#about"
              className="text-gray-500 hover:text-[#ef2b41] transition-colors inline-block"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm mb-2 font-medium">Conoce más</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-[#ef2b41] transition-colors">
                  <div className="w-1 h-3 bg-linear-to-b from-[#ef2b41] to-[#ee9b57] rounded-full mt-2"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};