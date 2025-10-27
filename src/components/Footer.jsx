const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À Propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/lionel-prudhome-n-adoko", icon: "💼" },
    { name: "GitLab", href: "https://gitlab.com/mxprudhome" , icon: "👨‍💻" },
    { name: "Email", href: "mailto:adokolionel8@gmail.com", icon: "📧" }
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-black to-gray-900">
      {/* Effets de fond */}
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Principale */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-3xl font-bold gradient-text font-orbitron">
                LIONEL.ADOKO
              </div>
              <p className="text-gray-400 leading-relaxed">
                Développeur Fullstack passionné par la création d'expériences digitales 
                innovantes et futuristes. Transformons vos idées en réalité.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all duration-300 border border-gray-700 hover:border-neon-blue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Liens Rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-neon-blue font-orbitron">
                NAVIGATION
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:pl-2 flex items-center"
                    >
                      <span className="mr-2">▸</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-neon-purple font-orbitron">
                CONTACT
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <a href="mailto:adokolionel8@gmail.com" className="hover:text-neon-blue transition-colors">
                    adokolionel8@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📱</span>
                  <a href="tel:+2290151476309" className="hover:text-neon-blue transition-colors">
                    +229 01 51 47 63 09
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span>Cotonou, Bénin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <span className="text-neon-blue">© {currentYear} Lionel Prudhome N. ADOKO.</span> 
              <span className="ml-2">Tous droits réservés.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Disponible pour nouveaux projets
              </span>
            </div>
          </div>
        </div>

        {/* Message Caché Futuriste */}
        <div className="text-center py-4 border-t border-gray-800">
          <p className="text-xs text-gray-600 font-orbitron">
            [ SYSTEM_READY ] - [ PORTFOLIO_ACTIVE ] - [ INNOVATION_MODE: ON ]
          </p>
        </div>
      </div>

      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>
    </footer>
  )
}

export default Footer