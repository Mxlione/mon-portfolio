import { useState, useEffect } from 'react'

const About = () => {
  const [animatedStats, setAnimatedStats] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { number: "15+", label: "Projets Réalisés", icon: "🚀" },
    { number: "3", label: "Années d'Expérience", icon: "💫" },
    { number: "10+", label: "Technologies Maîtrisées", icon: "⚡" },
    { number: "100%", label: "Satisfaction Client", icon: "🎯" }
  ]

  const formations = [
    {
      degree: "🎓 Licence Professionnelle Génie Télécoms et TIC",
      school: "Université Catholique de l'Afrique de l'Ouest (UCAO)",
      period: "2020 - 2023",
      details: ["Réseaux Informatique & Télécoms", "Graphisme", "Développement Web & Mobile", "Infographie"]
    },
    {
      degree: "🌐 Formations Certifiantes en Ligne",
      school: "OpenClassrooms & Coursera",
      period: "2021 - 2023",
      details: ["Django & Python", "Développement Back-End", "Intelligence Artificielle", "Systèmes Linux", "Bases de Données", "Mobile Development"]
    }
  ]

  const interests = [
    { icon: "🎮", name: "Jeux Vidéo", description: "Source d'inspiration créative et d'innovation" },
    { icon: "💻", name: "Programmation", description: "Passion pour l'apprentissage et les projets innovants" },
    { icon: "⚽", name: "Football", description: "Pratique régulière et suivi des compétitions" }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 font-orbitron">
          <span className="gradient-text">À PROPOS</span> DE MOI
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          Passionné par l'innovation technologique et la création d'expériences digitales mémorables
        </p>

        {/* Section Présentation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="futurist-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-blue flex items-center">
              <span className="mr-3">👨‍💻</span>
              Mon Profil
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-neon-blue font-semibold">Développeur Fullstack passionné</span> diplômé en Génie Télécoms et TIC, 
                je me spécialise dans la création d'applications web et mobile innovantes.
              </p>
              <p>
                Mon expertise s'étend du <span className="text-neon-purple">développement backend avec Laravel et Django</span> 
                au <span className="text-neon-pink">frontend moderne avec React, Angular et Ionic</span>.
              </p>
              <p>
                Chaque projet est pour moi une opportunité de repousser les limites de la créativité 
                et de la performance technique.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-neon-blue transition-all"
                >
                  <div className="text-2xl font-bold text-neon-blue mb-1">
                    {stat.icon} {animatedStats ? stat.number : "0"}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="futurist-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple flex items-center">
              <span className="mr-3">🎯</span>
              Ma Vision
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <span className="text-neon-blue text-2xl mr-3">⚡</span>
                <div>
                  <h4 className="font-semibold text-white">Innovation Continue</h4>
                  <p className="text-sm">Toujours à la pointe des dernières technologies et tendances</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-neon-purple text-2xl mr-3">🎨</span>
                <div>
                  <h4 className="font-semibold text-white">Design Futuriste</h4>
                  <p className="text-sm">Crée des interfaces qui anticipent l'avenir du digital</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-neon-pink text-2xl mr-3">🚀</span>
                <div>
                  <h4 className="font-semibold text-white">Performance Optimale</h4>
                  <p className="text-sm">Des applications rapides, sécurisées et évolutives</p>
                </div>
              </div>
            </div>

            {/* Centres d'Intérêt */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-neon-pink">🎭 Centres d'Intérêt</h4>
              <div className="grid grid-cols-1 gap-3">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-neon-purple transition-all"
                  >
                    <span className="text-2xl mr-3">{interest.icon}</span>
                    <div>
                      <div className="font-semibold text-white">{interest.name}</div>
                      <div className="text-xs text-gray-400">{interest.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Formations */}
        <div className="futurist-card p-8">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text font-orbitron">
            📚 PARCOURS ACADÉMIQUE
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <div 
                key={index}
                className="slide-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-neon-blue transition-all h-full">
                  <h4 className="text-xl font-bold text-neon-blue mb-2">
                    {formation.degree}
                  </h4>
                  <p className="text-neon-purple font-semibold mb-3">{formation.school}</p>
                  <p className="text-gray-400 text-sm mb-4">{formation.period}</p>
                  
                  <div className="space-y-2">
                    {formation.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About