import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text font-orbitron">
            LIONEL.ADOKO
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-gray-300 hover:text-neon-blue transition-all duration-300 hover:neon-text font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden text-2xl "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 futurist-card p-6">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="block text-gray-300 hover:text-neon-blue transition py-2 border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header