import { Github, ExternalLink } from 'lucide-react'
import project1 from '../../assets/project/vision-text.png'
import project2 from '../../assets/project/e-commerce.jpg'
import project3 from '../../assets/project/ecopure_harvest.png'

import type { Project } from "../../types/portfolio"
import { ProjectType } from "../../types/portfolio"

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Búsqueda de imágenes con texto e imágenes",
      description: "Plataforma web para la búsqueda de imágenes con texto e imágenes.",
      technologies: ["FastApi", "React", "TypeScript", "PyTorch", "TensorFlow", "PostgreSQL"],
      githubUrl: "https://github.com/example/project1",
      demoUrl: "https://demo.com/project1",
      demoAvailable: false,
      projectType: ProjectType.ACADEMIC,
      dateRange: "Agosto 2025 – Diciembre 2025",
      image: project1,
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Plataforma web de una e-commerce, con sistema de recomendación.",
      technologies: ["Railway", "React", "TypeScript", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com/example/project1",
      demoUrl: "https://demo.com/project1",
      demoAvailable: false,
      projectType: ProjectType.ACADEMIC,
      dateRange: "Agosto 2025 – Diciembre 2025",
      image: project2,
    },
    {
      id: 3,
      title: "Ecopure Harvest",
      description: "Proyecto que consistió en el desarrollo de un prototipo para el monitoreo de cultivos de papa utilizando tecnologías de IoT.",
      technologies: ["Firebase", "React", "TypeScript", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/example/project1",
      demoUrl: "https://demo.com/project1",
      demoAvailable: false,
      projectType: ProjectType.ACADEMIC,
      dateRange: "Agosto 2024 – Febrero 2025",
      image: project3,
    },
  ]

  const techColors: { [key: string]: string } = {
    'React': 'from-blue-100 to-blue-200 text-blue-800',
    'TypeScript': 'from-blue-100 to-indigo-200 text-indigo-800',
    'Node.js': 'from-green-100 to-green-200 text-green-800',
    'PostgreSQL': 'from-cyan-100 to-cyan-200 text-cyan-800',
    'React Native': 'from-purple-100 to-purple-200 text-purple-800',
    'Firebase': 'from-yellow-100 to-orange-200 text-orange-800',
    'Stripe': 'from-indigo-100 to-purple-200 text-purple-800',
    'Python': 'from-blue-100 to-yellow-200 text-blue-800',
    'Django': 'from-green-100 to-emerald-200 text-emerald-800',
    'D3.js': 'from-orange-100 to-red-200 text-red-800',
    'MongoDB': 'from-green-100 to-teal-200 text-teal-800',
    'FastApi': 'from-green-100 to-teal-200 text-teal-800',
    'TensorFlow': 'from-green-100 to-teal-200 text-teal-800',
    'PyTorch': 'from-green-100 to-teal-200 text-teal-800',
    'Redis': 'from-green-100 to-teal-200 text-teal-800',
    'Railway': 'from-green-100 to-teal-200 text-teal-800',
  }

  return (
    <section id="projects" className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Proyectos</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Algunos proyectos que reflejan mis habilidades técnicas
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="group relative h-full">
              <div className="absolute inset-0 bg-linear-to-br from-[#ef2b41] to-[#ffcd37] rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity" />

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">

                {/* Imagen con altura fija */}
                <div className="h-48 w-full overflow-hidden">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>

                <div className="h-2 bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37]" />

                {/* Contenido que crece para igualar alturas */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Esto se queda igual... */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {project.projectType === ProjectType.ACADEMIC ? "Académico" : "Personal"}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-2 text-sm italic">{project.dateRange}</p>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-700">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className={`bg-linear-to-r ${techColors[tech] || 'from-gray-100 to-gray-200 text-gray-800'} px-3 py-1 rounded-full text-sm font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones abajo alineados */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300
                        hover:border-[#ef2b41] transition-colors group/btn"
                      >
                        <Github size={18} className="text-gray-600 group-hover/btn:text-[#ef2b41]" />
                        <span className="text-gray-700 group-hover/btn:text-[#ef2b41] font-medium">
                          GitHub
                        </span>
                      </a>
                    )}

                    <button
                      disabled={!project.demoAvailable}
                      onClick={() => project.demoAvailable && project.demoUrl && window.open(project.demoUrl, "_blank")}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg shadow-lg
                      transition-transform duration-300
                      ${project.demoAvailable
                          ? "bg-linear-to-r from-[#ef2b41] to-[#ee9b57] text-white hover:scale-105"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium">Demo</span>
                    </button>
                  </div>


                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}