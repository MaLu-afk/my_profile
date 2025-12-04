import { Code2, Database, Cloud, Brain, Wrench, Package, BarChart3 } from 'lucide-react';

type SkillLevel = 'Básico' | 'Básico-Intermedio' | 'Intermedio' | 'Intermedio-Avanzado' | 'Avanzado';

interface Skill {
    name: string;
    level: SkillLevel;
}

interface SkillCategory {
    title: string;
    icon: typeof Code2;
    skills: Skill[];
    gradient: string;
}

export const TechnicalSkills = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Lenguajes de Programación',
            icon: Code2,
            gradient: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'Python', level: 'Intermedio-Avanzado' },
                { name: 'TypeScript', level: 'Intermedio' },
                { name: 'JavaScript', level: 'Intermedio' },
                { name: 'SQL', level: 'Intermedio-Avanzado' },
            ],
        },
        {
            title: 'Frameworks & Librerías',
            icon: Package,
            gradient: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'React', level: 'Intermedio' },
                { name: 'FastAPI', level: 'Intermedio' },
                { name: 'Django', level: 'Básico-Intermedio' },
                { name: 'Node.js', level: 'Básico-Intermedio' },
            ],
        },
        {
            title: 'Bases de Datos',
            icon: Database,
            gradient: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'PostgreSQL', level: 'Intermedio-Avanzado' },
                { name: 'MongoDB', level: 'Intermedio' },
                { name: 'Redis', level: 'Intermedio' },
            ],
        },
        {
            title: 'Cloud & DevOps',
            icon: Cloud,
            gradient: 'from-orange-500 to-red-500',
            skills: [
                { name: 'AWS', level: 'Intermedio-Avanzado' },
                { name: 'Docker', level: 'Intermedio' },
                { name: 'Git', level: 'Intermedio' },
                { name: 'Linux', level: 'Intermedio' },
            ],
        },
        {
            title: 'Data Science & ML',
            icon: Brain,
            gradient: 'from-indigo-500 to-purple-500',
            skills: [
                { name: 'TensorFlow', level: 'Intermedio' },
                { name: 'PyTorch', level: 'Intermedio' },
                { name: 'Pandas', level: 'Intermedio' },
                { name: 'NumPy', level: 'Intermedio' },
                { name: 'Scikit-learn', level: 'Intermedio' },
            ],
        },
        {
            title: 'Visualización de Datos',
            icon: BarChart3,
            gradient: 'from-pink-500 to-rose-500',
            skills: [
                { name: 'Power BI', level: 'Básico-Intermedio' },
                { name: 'Excel', level: 'Intermedio' },
                { name: 'Matplotlib', level: 'Intermedio' },
                { name: 'Seaborn', level: 'Intermedio' },
            ],
        },
        {
            title: 'Herramientas',
            icon: Wrench,
            gradient: 'from-yellow-500 to-orange-500',
            skills: [
                { name: 'Vite', level: 'Intermedio' },
                { name: 'Firebase', level: 'Intermedio' },
                { name: 'Railway', level: 'Intermedio' },
            ],
        },
    ];

    const getLevelColor = (level: SkillLevel): string => {
        switch (level) {
            case 'Básico':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Básico-Intermedio':
                return 'bg-cyan-100 text-cyan-700 border-cyan-200';
            case 'Intermedio':
                return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Intermedio-Avanzado':
                return 'bg-lime-100 text-lime-700 border-lime-200';
            case 'Avanzado':
                return 'bg-green-100 text-green-700 border-green-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <section id="technical-skills" className="py-20 bg-linear-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-4">
                    <span className="bg-linear-to-r from-[#ef2b41] via-[#ee9b57] to-[#ffcd37] bg-clip-text text-transparent">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Tecnologías y herramientas que domino para desarrollar soluciones innovadoras
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={idx}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity`}></div>

                                <div className="relative bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-12 h-12 bg-linear-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-3 flex-1">
                                        {category.skills.map((skill, skillIdx) => (
                                            <div
                                                key={skillIdx}
                                                className="flex justify-between items-center gap-3"
                                            >
                                                <span className="text-sm font-medium text-gray-700 flex-1">{skill.name}</span>
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                    {skill.level}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
