import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen'

const SplashContext = createContext({
  triggerProjectSplash: () => {},
  isSplashing: false
})

export function SplashProvider({ children }) {
  const [splashConfig, setSplashConfig] = useState(null)
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)
  const isInitialLoadRef = useRef(true)

  // Trigger project splash when opening an individual project
  const triggerProjectSplash = (onDone) => {
    // Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (onDone) onDone()
      return
    }

    setSplashConfig({
      words: ['• Project'],
      duration: 1250,
      onComplete: () => {
        setSplashConfig(null)
        if (onDone) onDone()
      }
    })
  }

  // Handle Initial Load (Home) and Route navigation (Work)
  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isInitialLoadRef.current = false
      prevPathRef.current = location.pathname
      return
    }

    // 1. Initial page load / refresh
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false
      if (location.pathname === '/') {
        // Home splash: "• Hello" -> "• Namaste" -> "• Welcome" (~2.4s total)
        setSplashConfig({
          words: ['• Hello', '• Namaste', '• Welcome'],
          duration: 2400,
          onComplete: () => setSplashConfig(null)
        })
      } else if (location.pathname === '/work') {
        // Direct visit or refresh on /work
        setSplashConfig({
          words: ['• Work'],
          duration: 1300,
          onComplete: () => setSplashConfig(null)
        })
      }
      prevPathRef.current = location.pathname
      return
    }

    // 2. Navigation between routes
    if (prevPathRef.current !== location.pathname) {
      if (location.pathname === '/work') {
        // Only trigger Work splash when navigating into /work
        setSplashConfig({
          words: ['• Work'],
          duration: 1300,
          onComplete: () => setSplashConfig(null)
        })
      }
      // Do not trigger Home splash when navigating to other sections or back to Home
      prevPathRef.current = location.pathname
    }
  }, [location.pathname])

  return (
    <SplashContext.Provider value={{ triggerProjectSplash, isSplashing: !!splashConfig }}>
      {splashConfig && (
        <SplashScreen
          key={Array.isArray(splashConfig.words) ? splashConfig.words.join('-') : splashConfig.words}
          words={splashConfig.words}
          duration={splashConfig.duration}
          onComplete={splashConfig.onComplete}
        />
      )}
      {children}
    </SplashContext.Provider>
  )
}

export function useSplash() {
  return useContext(SplashContext)
}
