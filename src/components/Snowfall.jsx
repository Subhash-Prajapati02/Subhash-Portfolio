import { useEffect, useRef } from 'react'

export default function Snowfall({ theme }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    // Respect user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const setSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    setSize()

    // Subtle, elegant particle count (desktop: ~36-40, tablet: ~26, mobile: ~16)
    const particleCount = Math.max(16, Math.min(Math.floor(width / 32), 40))

    // Initialize particles only if empty, so they don't jump when theme updates
    if (particlesRef.current.length === 0) {
      const particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.8, // 0.8px to 2.3px
          opacity: Math.random() * 0.45 + 0.25, // 0.25 to 0.70
          speedY: Math.random() * 0.65 + 0.35, // 0.35 to 1.0 px/frame (gentle, natural fall)
          speedX: (Math.random() - 0.5) * 0.22, // subtle horizontal drift
          phase: Math.random() * Math.PI * 2,
          phaseStep: Math.random() * 0.015 + 0.008, // gentle sway oscillation
          swayAmplitude: Math.random() * 0.5 + 0.3
        })
      }
      particlesRef.current = particles
    }

    let isRunning = true

    const render = () => {
      if (!isRunning) return
      ctx.clearRect(0, 0, width, height)

      // Theme-aware particle coloration
      const isDark = theme === 'dark' || document.documentElement.getAttribute('data-theme') === 'dark'
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update sway and natural drifting
        p.phase += p.phaseStep
        const sway = Math.sin(p.phase) * p.swayAmplitude
        p.y += p.speedY
        p.x += p.speedX + sway

        // Respawn smoothly when exiting the viewport
        if (p.y > height + 8) {
          p.y = -8
          p.x = Math.random() * width
        }
        if (p.x > width + 8) {
          p.x = -8
        } else if (p.x < -8) {
          p.x = width + 8
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)

        if (isDark) {
          // Dark Theme: soft white with subtle transparency
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        } else {
          // Light Theme: subtle cool-slate / light-grey with gentle contrast against white
          ctx.fillStyle = `rgba(100, 116, 139, ${p.opacity * 0.62})`
        }

        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)

    const handleResize = () => {
      setSize()
      particlesRef.current.forEach((p) => {
        if (p.x > width) p.x = Math.random() * width
        if (p.y > height) p.y = Math.random() * height
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      isRunning = false
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="snowfall-canvas"
      aria-hidden="true"
    />
  )
}
