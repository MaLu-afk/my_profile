import { Linkedin, Github, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative-linear blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-gray-300">magno.luque@upch.pe</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-linear-to-br from-[#ee9b57] to-[#ffcd37] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-white" />
                </div>
                <span className="text-gray-300">Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] rounded-full group-hover:scale-150 transition-transform"></span>
                Acerca de Mí
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] rounded-full group-hover:scale-150 transition-transform"></span>
                Proyectos
              </a>
              <a href="#professional" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] rounded-full group-hover:scale-150 transition-transform"></span>
                Desarrollo Prof.
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] rounded-full group-hover:scale-150 transition-transform"></span>
                Competencias
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Conectemos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/magno-luque-409a02329/"
                className="w-12 h-12 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white" />
              </a>
              <a
                href="https://github.com/Magno-Luque"
                className="w-12 h-12 bg-linear-to-br from-[#ee9b57] to-[#ffcd37] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="mailto:magno.luque@upch.pe"
                className="w-12 h-12 bg-linear-to-br from-[#ef2b41] to-[#ffcd37] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Email"
              >
                <Mail size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-center">
              <p className="text-gray-400">
                &copy; {currentYear} Magno Luque. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};