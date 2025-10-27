const Experience = () => {
  const experiences = [
    {
      title: "🚀 Fullstack Developer",
      company: "CAVE TECH",
      period: "Sept 2024 - Present",
      location: "Cotonou, Benin",
      type: "Full-time",
      description: "Design and development of innovative web and mobile solutions",
      projects: [
        "🏗️ CICA-VOYAGE Platform - Bus station management and ticket sales",
        "📦 CICA-GESTOCK App - Inventory management solution for SMEs",
        "⚡ Scalable microservices architecture",
        "🔒 API REST security"
      ],
      technologies: ["Laravel", "React", "Ionic", "MySQL", "Docker"]
    },
    {
      title: "💫 Freelance Developer",
      company: "Abitech Solution",
      period: "Mar 2024 - Present",
      location: "Abomey-Calavi, Benin",
      type: "Freelance",
      description: "E-commerce platforms and mobile applications development",
      projects: [
        "🛒 Abitech-Store Platform (abitech-store.com)",
        "📱 Abitech-Store Mobile App",
        "🎯 Marketing and sponsorship system",
        "💳 Online payments integration"
      ],
      technologies: ["Laravel", "Angular", "Ionic", "MySQL", "API REST"]
    },
    {
      title: "🔧 Web Developer",
      company: "HE SYSTEMS",
      period: "Dec 2023 - Jun 2024",
      location: "Cotonou, Benin",
      type: "Professional Internship",
      description: "Backoffice and enterprise applications development",
      projects: [
        "💼 BISOU BISOU FINANCE Backoffice",
        "🛍️ Owomi Backoffice & Point of Sale",
        "📊 PACOFIDE - Project management",
        "⚪ Or Blanc - Business solution"
      ],
      technologies: ["PHP", "CodeIgniter", "JavaScript", "jQuery", "MySQL"]
    },
    {
      title: "🌐 IT Network Technician",
      company: "BUBEDRA",
      period: "Mar 2023 - Nov 2023",
      location: "Cotonou, Benin",
      type: "Internship",
      description: "Network infrastructure maintenance and system configuration",
      projects: [
        "🖥️ Data server and infrastructure maintenance",
        "🔌 LAN network sizing and configuration",
        "🔧 IT maintenance and technical support",
        "📡 Network performance optimization"
      ],
      technologies: ["LAN Networks", "Server Maintenance", "Router Configuration", "Technical Support"]
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-bold text-center mb-4 font-orbitron">
          <span className="gradient-text">MON</span> PARCOURS
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          Un voyage à travers l'innovation technologique et le développement d'applications modernes
        </p>
        
        {/* Grille 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="futurist-card p-6 hover:glow-animation transition-all duration-300 slide-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* En-tête */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neon-blue mb-1">{exp.title}</h3>
                  <p className="text-lg text-neon-purple font-semibold">{exp.company}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/30">
                    {exp.type}
                  </span>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-gray-300 font-semibold">{exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{exp.description}</p>
              
              {/* Projets */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neon-purple mb-3 flex items-center">
                  <span className="mr-2">🎯</span>
                  KEY PROJECTS
                </h4>
                <ul className="space-y-2">
                  {exp.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <span className="text-neon-blue mr-2 mt-1">▸</span>
                      <span className="flex-1">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-neon-purple mb-2 flex items-center">
                  <span className="mr-2">⚡</span>
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-neon-blue transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visuelle alternative */}
        <div className="mt-16 text-center">
          <div className="futurist-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 gradient-text">📈 Career Progression</h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>Network Technician</span>
              <span className="text-neon-blue">→</span>
              <span>Web Developer</span>
              <span className="text-neon-blue">→</span>
              <span>Freelance Developer</span>
              <span className="text-neon-blue">→</span>
              <span className="text-neon-green font-semibold">Fullstack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience