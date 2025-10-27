import profile from '../assets/images/pro.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Photo de Profile */}
        <div className="relative inline-block mb-8">
          <div className="w-48 h-48 mx-auto rounded-full border-4 border-neon-blue glow-animation overflow-hidden">
            <img 
               src={profile} 
              alt="Lionel Adoko"
              className="w-full h-full object-cover float-animation"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-bg"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron">
          LIONEL <span className="gradient-text">ADOKO</span>
        </h1>
        
        <div className="text-2xl md:text-3xl mb-8">
          <span className="gradient-text neon-text">DÉVELOPPEUR FULLSTACK</span>
        </div>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Je crée des <span className="text-neon-blue">expériences digitales innovantes</span> en alliant 
          design futuriste et technologies de pointe. Passionné par le développement d'applications 
          web et mobile qui repoussent les limites du possible.
        </p>
        
        <div className="space-x-6">
          <a 
            href="#projects" 
            className="futurist-card px-8 py-4 text-lg font-semibold inline-block hover:glow-animation transition-all duration-300"
          >
            🚀 Explorer mes Projets
          </a>
          <a 
            href="#contact" 
            className="border-2 border-neon-blue text-neon-blue px-8 py-4 text-lg font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
          >
            📱 Me Contacter
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero