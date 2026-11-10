import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, ArrowUpRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Reliable passive scroll detection with requestAnimationFrame
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu upon route navigation & sync scroll state
  useEffect(() => {
    setMenuOpen(false)
    setIsScrolled(window.scrollY > 25)
  }, [location.pathname])

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { path: '/', label: 'Home', number: '01' },
    { path: '/about', label: 'About', number: '02' },
    { path: '/work', label: 'Work', number: '03' },
    { path: '/contact', label: 'Contact', number: '04' },
  ]

  return (
    <>
      <header className={`global-navbar ${isScrolled ? 'is-scrolled' : 'at-top'}`}>
        <div className="container nav-content-row">
          {/* Brand Logo: @ Subhash.AI */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className={`nav-brand-code ${isScrolled ? 'mobile-hidden' : 'mobile-visible'}`}
            aria-label="Subhash Prajapati Homepage"
          >
            <span className="brand-name-text">@ Subhash.AI</span>
          </Link>

          {/* Desktop Direct Links */}
          <nav
            className={`nav-desktop-links ${isScrolled ? 'is-hidden-scrolled' : 'is-visible-top'}`}
            aria-label="Main Navigation"
          >
            <Link
              to="/work"
              className={`nav-text-link ${location.pathname === '/work' ? 'is-active' : ''}`}
            >
              <span>Work</span>
              {location.pathname === '/work' && <span className="active-dot" aria-hidden="true" />}
            </Link>

            <Link
              to="/about"
              className={`nav-text-link ${location.pathname === '/about' ? 'is-active' : ''}`}
            >
              <span>About</span>
              {location.pathname === '/about' && <span className="active-dot" aria-hidden="true" />}
            </Link>

            <Link
              to="/contact"
              className={`nav-text-link ${location.pathname === '/contact' ? 'is-active' : ''}`}
            >
              <span>Contact</span>
              {location.pathname === '/contact' && <span className="active-dot" aria-hidden="true" />}
            </Link>

            <button
              type="button"
              className="nav-theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </nav>
        </div>
      </header>

      {/* SINGLE SIGNATURE FLOATING CIRCULAR MENU BUTTON */}
      <div
        className={`floating-circular-trigger-wrap ${
          isScrolled || menuOpen ? 'is-visible' : 'is-hidden'
        }`}
      >
        <button
          type="button"
          className={`circular-menu-btn ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={20} className="menu-btn-icon" />
          ) : (
            <div className="hamburger-icon-lines" aria-hidden="true">
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
            </div>
          )}
        </button>
      </div>

      {/* FULLSCREEN EDITORIAL OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fullscreen-nav-overlay"
            role="dialog"
            aria-modal="true"
          >
            <div className="overlay-inner-container">
              <div className="overlay-top-bar">
                <span className="overlay-nav-label">Navigation</span>
              </div>

              <div className="overlay-links-list">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`overlay-nav-link ${isActive ? 'is-current' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="overlay-link-num">{link.number}</span>
                      <span className="overlay-link-text">{link.label}</span>
                      {isActive && <span className="overlay-active-pill">Current</span>}
                    </Link>
                  )
                })}
              </div>

              <div className="overlay-footer-row">
                <div className="overlay-socials">
                  <span className="overlay-subhead">Socials</span>
                  <div className="overlay-social-links">
                    <a
                      href="https://github.com/Subhash-Prajapati02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-social-item"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <a
                      href="https://linkedin.com/in/subhash-kumar-prajapati-7945252b9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-social-item"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <a
                      href="mailto:workwithsubhash22@gmail.com"
                      className="overlay-social-item"
                    >
                      <span>Email</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="overlay-theme-box">
                  <span className="overlay-subhead">Theme</span>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="overlay-theme-btn"
                  >
                    {theme === 'light' ? (
                      <>
                        <Sun size={16} />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={16} />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
