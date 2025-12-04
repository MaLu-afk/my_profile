import { useState } from 'react';
import { FileText, Linkedin, Award, X, Download, Github } from 'lucide-react';

// Import certificates
import awsDataEngineering from '../../assets/certificate/AWS_Academy_Data_Engineering.pdf';
import awsCloudSemester1 from '../../assets/certificate/AWS_Academy_Introduction_to_Cloud_Semester_1.pdf';
import awsCloudSemester2 from '../../assets/certificate/AWS_Academy_Introduction_to_Cloud_Semester_2.pdf';
import oracleFoundations from '../../assets/certificate/Oracle_Foudations.pdf';

// Import logos
import awsLogo from '../../assets/logos/AWS.png';
import oracleLogo from '../../assets/logos/Oracle.png';

interface Certificate {
  id: string;
  name: string;
  description: string;
  file: string;
  logo: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Academy Data Engineering',
    description: 'Certificación en ingeniería de datos con AWS',
    file: awsDataEngineering,
    logo: awsLogo
  },
  {
    id: '2',
    name: 'AWS Cloud Computing - Semestre 1',
    description: 'Introducción a Cloud Computing con AWS',
    file: awsCloudSemester1,
    logo: awsLogo
  },
  {
    id: '3',
    name: 'AWS Cloud Computing - Semestre 2',
    description: 'Cloud Computing avanzado con AWS',
    file: awsCloudSemester2,
    logo: awsLogo
  },
  {
    id: '4',
    name: 'Oracle Foundations',
    description: 'Fundamentos de Oracle Database',
    file: oracleFoundations,
    logo: oracleLogo
  }
];

// Kaggle icon component (custom SVG since lucide-react doesn't have it)
const KaggleIcon = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M18.5 11.5l-6.5 6.5 6.5 6.5 3.5-3.5-3-3 3-3-3.5-3.5zM8 8h4v16H8V8z" />
  </svg>
);

export const Professional = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const downloadCertificate = (certificate: Certificate) => {
    const link = document.createElement('a');
    link.href = certificate.file;
    link.download = `${certificate.name}.pdf`;
    link.click();
  };

  return (
    <>
      <section id="professional" className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">Desarrollo Profesional</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recursos y logros que demuestran mi crecimiento profesional
          </p>

          {/* First Row: CV, LinkedIn, GitHub, Kaggle */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* CV */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-linear-to-br from-[#ef2b41] to-[#ee9b57] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <FileText className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Currículum Vitae</h3>
                <p className="mb-4 text-gray-600 text-center text-sm grow">CV actualizado en Ingeniería Informática</p>
                <button className="w-full bg-linear-to-r from-[#ef2b41] to-[#ee9b57] text-white px-4 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm">
                  Descargar CV
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#0077b5] to-[#00a0dc] rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-linear-to-br from-[#0077b5] to-[#00a0dc] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Linkedin className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">LinkedIn</h3>
                <p className="mb-4 text-gray-600 text-center text-sm grow">Perfil profesional optimizado</p>
                <a
                  href="https://www.linkedin.com/in/magno-luque-409a02329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-linear-to-r from-[#0077b5] to-[#00a0dc] text-white px-4 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm"
                >
                  Ver perfil →
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#24292e] to-[#444d56] rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-linear-to-br from-[#24292e] to-[#444d56] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Github className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">GitHub</h3>
                <p className="mb-4 text-gray-600 text-center text-sm grow">Repositorios y proyectos</p>
                <a
                  href="https://github.com/Magno-Luque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-linear-to-r from-[#24292e] to-[#444d56] text-white px-4 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm"
                >
                  Ver perfil →
                </a>
              </div>
            </div>

            {/* Kaggle */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#20beff] to-[#1a8ccc] rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-linear-to-br from-[#20beff] to-[#1a8ccc] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <KaggleIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Kaggle</h3>
                <p className="mb-4 text-gray-600 text-center text-sm grow">Competencias y datasets</p>
                <a
                  href="https://www.kaggle.com/liondbdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-linear-to-r from-[#20beff] to-[#1a8ccc] text-white px-4 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm"
                >
                  Ver perfil →
                </a>
              </div>
            </div>
          </div>

          {/* Second Row: Certificaciones */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#ef2b41] to-[#ffcd37] rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-linear-to-br from-[#ef2b41] to-[#ffcd37] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Certificaciones</h3>
              <p className="mb-6 text-gray-600 text-center text-sm">Haz clic en cualquier certificado para previsualizar</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => openCertificate(cert)}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-[#ef2b41] hover:bg-linear-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300 group/cert"
                  >
                    <img
                      src={cert.logo}
                      alt={`${cert.name} logo`}
                      className="h-12 w-auto object-contain group-hover/cert:scale-110 transition-transform"
                    />
                    <span className="text-center text-sm font-medium text-gray-700 group-hover/cert:text-[#ef2b41] transition-colors line-clamp-2">
                      {cert.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeCertificate}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedCertificate.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedCertificate.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => downloadCertificate(selectedCertificate)}
                  className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#ef2b41] to-[#ee9b57] text-white rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Download size={20} />
                  <span className="font-semibold">Descargar</span>
                </button>
                <button
                  onClick={closeCertificate}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={28} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedCertificate.file}
                className="w-full h-full"
                title={selectedCertificate.name}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}