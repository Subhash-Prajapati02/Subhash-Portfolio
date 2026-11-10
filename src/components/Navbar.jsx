import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'home', label: 'Index' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`nav-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-pill" role="navigation" aria-label="Main Navigation">
        {/* Brand identity with purple dot like in reference */}
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
          aria-label="Subhash AI Index"
        >
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-text">@ Subhash.AI</span>
        </a>

        <div className="nav-divider" aria-hidden="true" />

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.id)
                }}
              >
                <span>{link.label}</span>
                {isActive && <span className="nav-active-dot" aria-hidden="true" />}
              </a>
            )
          })}
        </div>

        <div className="nav-divider" aria-hidden="true" />

        {/* Theme Switcher */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Sun size={17} className="theme-icon sun-icon" />
            ) : (
              <Moon size={17} className="theme-icon moon-icon" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="nav-mobile-dropdown">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-mobile-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.id)
                }}
              >
                <span>{link.label}</span>
                {isActive && <span className="mobile-active-indicator" />}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
