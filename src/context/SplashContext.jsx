import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen'

const SplashContext = createContext({
  triggerProjectSplash: () => {},
  isSplashing: false
})

function normalizePath(rawPath) {
  if (!rawPath) return '/'
  return (
    rawPath
      .replace(/^\/Subhash-Portfolio/i, '')
      .replace(/\/+$/, '') || '/'
  )
}

function getSplashConfigForPath(pathname) {
  const clean = normalizePath(pathname)
  if (clean === '/' || clean === '') {
    return {
      words: ['• Hello', '• Namaste', '• Welcome'],
      duration: 2300
    }
  }
  if (clean === '/work') {
    return {
      words: ['• Work'],
      duration: 1300
    }
  }
  if (clean === '/about') {
    return {
      words: ['• About'],
      duration: 1300
    }
  }
  if (clean === '/contact') {
    return {
      words: ['• Contact'],
      duration: 1300
    }
  }
  return null
}

export function SplashProvider({ children }) {
  const location = useLocation()

  // Synchronous initial state from current window.location.pathname
  const [splashConfig, setSplashConfig] = useState(() => {
    try {
      const initialPath = (typeof window !== 'undefined' && window.location?.pathname) || location?.pathname || '/'
      const cfg = getSplashConfigForPath(initialPath)
      if (cfg) {
        return {
          ...cfg,
          id: 'initial-' + Date.now()
        }
      }
    } catch {
      // Fallback
    }
    return null
  })

  const prevNormalizedPathRef = useRef(normalizePath(location.pathname))
  const isFirstMountRef = useRef(true)

  // Trigger project splash when opening an individual project
  const triggerProjectSplash = (onDone) => {
    setSplashConfig({
      words: ['• Project'],
      duration: 1250,
      id: 'project-' + Date.now(),
      onComplete: () => {
        setSplashConfig(null)
        if (onDone) onDone()
      }
    })
  }

  // Handle route navigation (Work, About, Contact, Home)
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false
      return
    }

    const currentNormalized = normalizePath(location.pathname)
    if (prevNormalizedPathRef.current !== currentNormalized) {
      prevNormalizedPathRef.current = currentNormalized

      const cfg = getSplashConfigForPath(location.pathname)
      if (cfg) {
        setSplashConfig({
          ...cfg,
          id: 'nav-' + currentNormalized.replace(/[^a-z0-9]/gi, '_') + '-' + Date.now(),
          onComplete: () => setSplashConfig(null)
        })
      }
    }
  }, [location.pathname])

  const handleComplete = () => {
    if (splashConfig && splashConfig.onComplete) {
      splashConfig.onComplete()
    }
    setSplashConfig(null)
  }

  return (
    <SplashContext.Provider value={{ triggerProjectSplash, isSplashing: !!splashConfig }}>
      {splashConfig && (
        <SplashScreen
          key={splashConfig.id || (Array.isArray(splashConfig.words) ? splashConfig.words.join('-') : splashConfig.words)}
          words={splashConfig.words}
          duration={splashConfig.duration}
          onComplete={handleComplete}
        />
      )}
      {children}
    </SplashContext.Provider>
  )
}

export function useSplash() {
  return useContext(SplashContext)
}
