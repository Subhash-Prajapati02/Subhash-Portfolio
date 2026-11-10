import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { X, ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import { useSplash } from '../context/SplashContext'

// Custom artwork renderers for each project preview card
const CARD_WIDTH = 340
const CARD_HEIGHT = 350
const HALF_WIDTH = CARD_WIDTH / 2
const HALF_HEIGHT = CARD_HEIGHT / 2
const VIEWPORT_MARGIN = 20

function clampToViewport(clientX, clientY) {
  if (typeof window === 'undefined') return { x: clientX, y: clientY }
  const vw = window.innerWidth
  const vh = window.innerHeight

  const minX = HALF_WIDTH + VIEWPORT_MARGIN
  const maxX = Math.max(minX, vw - HALF_WIDTH - VIEWPORT_MARGIN)
  const minY = HALF_HEIGHT + VIEWPORT_MARGIN
  const maxY = Math.max(minY, vh - HALF_HEIGHT - VIEWPORT_MARGIN)

  return {
    x: Math.min(Math.max(clientX, minX), maxX),
    y: Math.min(Math.max(clientY, minY), maxY)
  }
}

function PreviewArtwork({ type }) {
  switch (type) {
    case 'medical':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          {/* Diagnostic Crosshair Scanner */}
          <circle cx="140" cy="100" r="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="140" cy="100" r="45" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <line x1="140" y1="20" x2="140" y2="180" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="60" y1="100" x2="220" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          {/* ECG Waveform Pulse */}
          <path
            d="M 40 100 L 95 100 L 110 75 L 125 125 L 140 50 L 155 140 L 170 85 L 185 100 L 240 100"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <circle cx="140" cy="50" r="4" fill="#ffffff" />
          <circle cx="155" cy="140" r="4" fill="#818cf8" />
        </svg>
      )

    case 'vision':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          {/* Face outline / biometric contour */}
          <ellipse cx="140" cy="100" rx="55" ry="68" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Bounding brackets */}
          <path d="M 65 50 L 65 35 L 85 35" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 215 50 L 215 35 L 195 35" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 65 150 L 65 165 L 85 165" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 215 150 L 215 165 L 195 165" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          {/* Landmark nodes */}
          <circle cx="120" cy="85" r="3" fill="#ffffff" />
          <circle cx="160" cy="85" r="3" fill="#ffffff" />
          <circle cx="140" cy="108" r="3" fill="#34d399" />
          <path d="M 125 135 Q 140 145 155 135" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )

    case 'rag':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          {/* Line graph and query projection rays */}
          <path
            d="M 50 140 L 95 105 L 140 120 L 185 65 L 230 45"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="140" r="5" fill="#60a5fa" />
          <circle cx="95" cy="105" r="5" fill="#ffffff" />
          <circle cx="140" cy="120" r="5" fill="#60a5fa" />
          <circle cx="185" cy="65" r="5" fill="#ffffff" />
          <circle cx="230" cy="45" r="5" fill="#38bdf8" />
          {/* Radiant vector grid */}
          <line x1="50" y1="140" x2="50" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
          <line x1="185" y1="65" x2="185" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
          <line x1="230" y1="45" x2="230" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
        </svg>
      )

    case 'detection':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          {/* Object detection target box */}
          <rect x="70" y="45" width="140" height="110" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Corner focus brackets */}
          <path d="M 60 70 L 60 40 L 90 40" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 220 70 L 220 40 L 190 40" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 60 130 L 60 160 L 90 160" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 220 130 L 220 160 L 190 160" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          {/* Classification anchor marker */}
          <circle cx="140" cy="100" r="6" fill="#fb923c" />
          <circle cx="140" cy="100" r="14" stroke="rgba(251,146,60,0.5)" strokeWidth="1.5" />
        </svg>
      )

    case 'agentic':
    default:
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          {/* Multi-agent orchestrator constellation */}
          <line x1="80" y1="120" x2="140" y2="70" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="200" y1="120" x2="140" y2="70" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="80" y1="120" x2="200" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="140" y1="70" x2="140" y2="155" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <circle cx="140" cy="70" r="10" fill="#c084fc" />
          <circle cx="80" cy="120" r="7" fill="#ffffff" />
          <circle cx="200" cy="120" r="7" fill="#ffffff" />
          <circle cx="140" cy="155" r="6" fill="#818cf8" />
        </svg>
      )
  }
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const containerRef = useRef(null)
  const { triggerProjectSplash } = useSplash()

  const handleOpenProject = (project) => {
    triggerProjectSplash()
    setSelectedProject(project)
  }

  // Smooth cursor tracking with physics springs (higher stiffness & optimal damping)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 280, mass: 0.25 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Track cursor position smoothly across window with edge clamping
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const { x, y } = clampToViewport(e.clientX, e.clientY)
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [mouseX, mouseY])

  // Center immediately around pointer when hovering without jumping from (0,0)
  const handleRowMouseEnter = (e, index) => {
    const { x, y } = clampToViewport(e.clientX, e.clientY)
    if (hoveredIndex === null) {
      mouseX.jump(x)
      mouseY.jump(y)
      if (typeof springX.jump === 'function') springX.jump(x)
      if (typeof springY.jump === 'function') springY.jump(y)
    } else {
      mouseX.set(x)
      mouseY.set(y)
    }
    setHoveredIndex(index)
  }

  const handleRowMouseMove = (e) => {
    const { x, y } = clampToViewport(e.clientX, e.clientY)
    mouseX.set(x)
    mouseY.set(y)
  }

  // Body scroll locking when project modal is opened
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedProject(null)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const activeProject = hoveredIndex !== null ? projectsData[hoveredIndex] : null

  return (
    <section className="editorial-projects-section" id="projects" ref={containerRef}>
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-projects-header">
          <span className="editorial-recent-work-label">RECENT WORK</span>
        </div>

        {/* Top Border Line */}
        <div className="editorial-divider-line" />

        {/* Project List Rows */}
        <div
          className="editorial-projects-list"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index
            const isDimmed = hoveredIndex !== null && !isHovered

            return (
              <div key={project.id} className="editorial-project-row-wrapper">
                <div
                  className={`editorial-project-row ${isHovered ? 'is-active-hover' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                  onMouseEnter={(e) => handleRowMouseEnter(e, index)}
                  onMouseMove={handleRowMouseMove}
                  onClick={() => handleOpenProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleOpenProject(project)
                    }
                  }}
                  aria-label={`View ${project.title} project details`}
                >
                  {/* Left: Large Project Title */}
                  <h3 className="editorial-project-title">
                    {project.title}
                  </h3>

                  {/* Right: Category Label */}
                  <span className="editorial-project-category">
                    {project.category}
                  </span>
                </div>

                {/* Thin Horizontal Separator */}
                <div className="editorial-divider-line" />
              </div>
            )
          })}
        </div>
      </div>

      {/* FLOATING INTERACTIVE PREVIEW CARD (Matches Aadarsh Rai Reference) */}
      <motion.div
        className="floating-preview-card-portal"
        style={{
          x: springX,
          y: springY,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 900
        }}
      >
        <AnimatePresence>
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.86, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.86, x: '-50%', y: '-50%' }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="floating-preview-card"
              style={{ background: activeProject.gradient }}
            >
              {/* Card Top: Micro Category Tag */}
              <div className="card-top-tag">
                {activeProject.microTag}
              </div>

              {/* Card Center: Graphic Illustration */}
              <div className="card-artwork-container">
                <PreviewArtwork type={activeProject.artworkType} />
              </div>

              {/* Card Centerpiece: Interactive Circular "View" Button */}
              <button
                type="button"
                className="card-center-view-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpenProject(activeProject)
                }}
                aria-label={`View ${activeProject.title}`}
                style={{ pointerEvents: 'auto' }}
              >
                <span>View</span>
              </button>

              {/* Card Bottom: Project Title */}
              <div className="card-bottom-title">
                {activeProject.title}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* DETAILED PROJECT MODAL (Opened upon clicking View button or row) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="project-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              {/* Modal Header */}
              <div className="modal-header-row">
                <div className="modal-header-text">
                  <span className="modal-category-chip">{selectedProject.category}</span>
                  <h2 id="modal-project-title" className="modal-project-title">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body-content">
                {/* Problem Statement Box */}
                <div className="modal-problem-box">
                  <span className="modal-sub-label">Problem Solved & Objective</span>
                  <p className="modal-problem-text">{selectedProject.problem}</p>
                </div>

                {/* Key Architectural Features */}
                <div className="modal-features-section">
                  <span className="modal-sub-label">Key Highlights & Architecture</span>
                  <ul className="modal-features-list">
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className="modal-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="modal-tech-section">
                  <span className="modal-sub-label">Verified Technologies</span>
                  <div className="modal-tech-pills">
                    {selectedProject.tech.map((tItem, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="modal-actions-row">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={16} />
                    <span>GitHub Repository</span>
                    <ArrowUpRight size={14} />
                  </a>

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="modal-dismiss-link"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
