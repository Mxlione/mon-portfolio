const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-radial from-neon-blue/10 to-transparent rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 font-orbitron">
            <span className="gradient-text">PRÊT</span> À INNOVER ?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
            Discutons de votre prochain projet et créons ensemble le futur numérique
            </p>

        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informations de Contact */}
            <div className="futurist-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">💬 Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-blue/10 rounded-full flex items-center justify-center mr-4 group-hover:glow-animation transition-all">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300">Email</p>
                    <a href="mailto:adokolionel8@gmail.com" className="text-neon-blue hover:neon-text transition-all">
                      adokolionel8@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-purple/10 rounded-full flex items-center justify-center mr-4 group-hover:glow-animation transition-all">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300">Phone</p>
                    <a href="tel:+2290151476309" className="text-neon-purple hover:neon-text transition-all">
                      +229 01 51 47 63 09
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-pink/10 rounded-full flex items-center justify-center mr-4 group-hover:glow-animation transition-all">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300">Location</p>
                    <p className="text-gray-400">Cotonou, Benin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="futurist-card p-8">
              <h4 className="text-xl font-semibold mb-6 text-neon-blue">🌐 Follow Me</h4>
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/lionel-prudhome-n-adoko" 
                  className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-neon-blue/10 hover:border-neon-blue border border-gray-700 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💼</span>
                    <span className="text-gray-300 group-hover:text-neon-blue">LinkedIn</span>
                  </div>
                  <span className="text-neon-blue group-hover:neon-text">→</span>
                </a>
                <a 
                  href="https://gitlab.com/mxprudhome" 
                  className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-neon-purple/10 hover:border-neon-purple border border-gray-700 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👨‍💻</span>
                    <span className="text-gray-300 group-hover:text-neon-purple">GitLab</span>
                  </div>
                  <span className="text-neon-purple group-hover:neon-text">→</span>
                </a>
                <a 
                  href="https://github.com/mxlione" 
                  className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-neon-pink/10 hover:border-neon-pink border border-gray-700 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🐙</span>
                    <span className="text-gray-300 group-hover:text-neon-pink">GitHub</span>
                  </div>
                  <span className="text-neon-pink group-hover:neon-text">→</span>
                </a>
              </div>
            </div>
          </div>

            {/* Appel à l'action */}
            <div className="futurist-card p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">🚀 Travaillons Ensemble</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Je suis toujours enthousiaste à l'idée de relever de nouveaux défis et de concrétiser des idées innovantes. 
                Que vous ayez besoin d'une application web, d'une application mobile ou d'une solution logicielle sur mesure, 
                faisons-le ensemble !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                href="mailto:adokolionel8@gmail.com"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white py-3 px-8 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                <span className="mr-2">📧</span>
                Envoyer un Email
                </a>
                <a 
                href="tel:+2290151476309"
                className="border-2 border-neon-blue text-neon-blue py-3 px-8 rounded-lg font-bold hover:bg-neon-blue hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                <span className="mr-2">📞</span>
                Appeler Maintenant
                </a>
            </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Contact