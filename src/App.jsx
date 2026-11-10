import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Snowfall from './components/Snowfall'
import { SplashProvider } from './context/SplashContext'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function MainLayout({ theme, toggleTheme }) {
  return (
    <div className="portfolio-app-root">
      <ScrollToTop />
      <Snowfall theme={theme} />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<WorkPage />} />
          <Route path="/projects/:id" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('subhash-portfolio-theme')
    if (saved === 'dark' || saved === 'light') return saved
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light' // Default is Light Mode
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('subhash-portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SplashProvider>
        <MainLayout theme={theme} toggleTheme={toggleTheme} />
      </SplashProvider>
    </BrowserRouter>
  )
}
