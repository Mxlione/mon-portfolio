import { useState, useEffect } from 'react'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([])
  const [animatedLanguages, setAnimatedLanguages] = useState(false)

  useEffect(() => {
    const skillsTimer = setTimeout(() => {
      setAnimatedSkills([...skills.flatMap(cat => cat.items)])
    }, 500)
    
    const languagesTimer = setTimeout(() => {
      setAnimatedLanguages(true)
    }, 1000)
    
    return () => {
      clearTimeout(skillsTimer)
      clearTimeout(languagesTimer)
    }
  }, [])

  const skills = {
    "🚀 Backend & API": ["Laravel", "Django", "API RESTful", "Python", "PHP", "Node.js"],
    "💫 Frontend & Mobile": ["React", "Ionic", "Angular", "JavaScript", "Flutter", "Vue.js"],
    "🔧 Langages": ["Python", "JavaScript", "PHP", "C", "Dart", "TypeScript"],
    "🌐 Réseaux & DevOps": ["Réseaux LAN", "GNS3", "Linux", "Git", "Docker", "AWS"],
    "🎨 Outils & Design": ["Tailwind CSS", "Figma", "Adobe XD", "Webpack", "Vite"]
  }

  const languages = [
    { name: "Français", level: 80, color: "from-green-400 to-blue-500" },
    { name: "Anglais", level: 30, color: "from-yellow-400 to-orange-500" }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 font-orbitron">
          <span className="gradient-text">MES</span> COMPÉTENCES
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          Une palette technologique diversifiée pour transformer vos idées en réalité digitale
        </p>
        
        {/* Grille des Compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, items], index) => (
            <div 
              key={category}
              className="futurist-card p-6 slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-neon-blue flex items-center">
                <span className="mr-2">{category.split(' ')[0]}</span>
                <span>{category.split(' ').slice(1).join(' ')}</span>
              </h3>
              <div className="space-y-3">
                {items.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center group">
                    <div className={`w-3 h-3 rounded-full mr-3 transition-all duration-500 ${
                      animatedSkills.includes(skill) 
                        ? 'bg-neon-blue glow-animation' 
                        : 'bg-gray-600'
                    }`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Barres de Langues CORRIGÉES */}
        <div className="futurist-card p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text font-orbitron">
            🌍 LANGUES
          </h3>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <div key={lang.name} className="slide-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">{lang.name}</span>
                  <span className="text-neon-blue font-bold">{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animatedLanguages ? `${lang.level}%` : '0%', // ← CORRECTION ICI
                      transitionDelay: `${index * 0.5}s`
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {lang.name === 'Français' ? 'Langue maternelle' : 'Niveau intermédiaire - En progression'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills