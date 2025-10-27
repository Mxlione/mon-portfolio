import { useState } from 'react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Abitech Store",
      emoji: "🧩",
      description: "Plateforme e-commerce complète avec site web, API Laravel et application mobile Angular/Ionic pour les fabricants et vendeurs.",
      technologies: ["Laravel", "Angular", "Ionic", "MySQL", "API REST"],
      features: ["Boutiques personnalisées", "Système de sponsoring", "Gestion multi-vendeurs", "Paiements sécurisés"],
      githubLink: "#",
      liveLink: "https://abitech-store.com",
      category: "E-commerce"
    },
    {
      title: "CashArena",
      emoji: "🎮",
      description: "Application de quiz interactive avec gains réels, comprenant une API Laravel et une app mobile Angular/Ionic.",
      technologies: ["Laravel", "Angular", "Ionic", "JWT", "MySQL"],
      features: ["Quiz chronométrés", "Classements temps réel", "Système de récompenses", "Paiements intégrés"],
      githubLink: "#",
      liveLink: "#",
      category: "Gaming"
    },
    {
      title: "Football Manager",
      emoji: "⚽",
      description: "Application full-stack de gestion complète de club de football avec recrutement, tactiques et statistiques.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
      features: ["Recrutement joueurs", "Gestion tactiques", "Statistiques détaillées", "Classements temps réel"],
      githubLink: "#",
      liveLink: "#",
      category: "Sport"
    },
    {
      title: "E-Service UCAO",
      emoji: "🏛️",
      description: "Plateforme de gestion documentaire universitaire pour la délivrance de documents administratifs.",
      technologies: ["Laravel", "Angular", "MySQL", "PDF Generation"],
      features: ["Demandes en ligne", "Gestion documents", "Workflow automatisé", "Interface admin"],
      githubLink: "#",
      liveLink: "#",
      category: "Education"
    },
    {
      title: "HealthTracker",
      emoji: "🩺",
      description: "Application de diagnostic médical avec API Laravel et app Flutter pour l'analyse des symptômes.",
      technologies: ["Laravel", "Flutter", "MySQL", "API Médicale"],
      features: ["Diagnostic symptômes", "Suivi patients", "Interface médecin", "Base données médicale"],
      githubLink: "#",
      liveLink: "#",
      category: "Santé"
    },
    {
      title: "SpeakChat TV",
      emoji: "📱",
      description: "Application mobile de streaming TV éducative avec lecture de flux HLS et interface intuitive.",
      technologies: ["Ionic", "Angular", "HLS", "m3u8"],
      features: ["Streaming TV", "Contenu éducatif", "Interface fluide", "Lecture HLS"],
      githubLink: "#",
      liveLink: "#",
      category: "Media"
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 font-orbitron">
          <span className="gradient-text">MES</span> RÉALISATIONS
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          Découvrez une sélection de mes projets les plus innovants, 
          alliant design futuriste et technologies de pointe.
        </p>
        
        {/* Navigation par Catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...new Set(projects.map(p => p.category))].map(category => (
            <button
              key={category}
              className="futurist-card px-6 py-3 text-sm font-medium hover:glow-animation transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des Projets */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="futurist-card p-6 group cursor-pointer slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* En-tête du Projet */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.emoji}</div>
                <span className="text-xs text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>

              {/* Titre et Description */}
              <h3 className="text-xl font-bold mb-3 text-neon-blue group-hover:neon-text transition-all">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neon-purple mb-2">FONCTIONNALITÉS :</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1 h-1 bg-neon-blue rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <a 
                  href={project.githubLink}
                  className="text-gray-400 hover:text-neon-blue transition flex items-center text-sm"
                >
                  <span className="mr-1">👨‍💻</span> Code
                </a>
                <a 
                  href={project.liveLink}
                  className="text-gray-400 hover:text-green-400 transition flex items-center text-sm"
                >
                  <span className="mr-1">🚀</span> Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="futurist-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Un projet en tête ?</h3>
            <p className="text-gray-300 mb-6">
              Discutons de votre vision et créons ensemble quelque chose d'extraordinaire.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🚀 Commencer un Projet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects