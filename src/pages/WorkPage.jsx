import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import PreviewArtwork from '../components/PreviewArtwork'
import { useSplash } from '../context/SplashContext'

const CARD_WIDTH = 340
const CARD_HEIGHT = 350
const HALF_WIDTH = CARD_WIDTH / 2
const HALF_HEIGHT = CARD_HEIGHT / 2
const VIEWPORT_MARGIN = 24

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
import {
  LayoutGrid,
  List,
  ExternalLink,
  Github,
  ArrowUpRight,
  CheckCircle2,
  X
} from 'lucide-react'

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredListIndex, setHoveredListIndex] = useState(null)
  const { triggerProjectSplash } = useSplash()

  const handleOpenProject = (project) => {
    triggerProjectSplash()
    setSelectedProject(project)
  }

  // Smooth cursor tracking with physics springs for list view
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.2 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (e.pointerType === 'touch') return
      const { x, y } = clampToViewport(e.clientX, e.clientY)
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [mouseX, mouseY])

  const handleRowPointerEnter = (e, index) => {
    if (e.pointerType === 'touch') return
    const { x, y } = clampToViewport(e.clientX, e.clientY)
    if (hoveredListIndex === null) {
      mouseX.jump(x)
      mouseY.jump(y)
      if (typeof springX.jump === 'function') springX.jump(x)
      if (typeof springY.jump === 'function') springY.jump(y)
    } else {
      mouseX.set(x)
      mouseY.set(y)
    }
    setHoveredListIndex(index)
  }

  const handleRowPointerMove = (e, index) => {
    if (e.pointerType === 'touch') return
    const { x, y } = clampToViewport(e.clientX, e.clientY)
    mouseX.set(x)
    mouseY.set(y)
    if (hoveredListIndex !== index) {
      setHoveredListIndex(index)
    }
  }

  const handleListPointerLeave = () => {
    setHoveredListIndex(null)
  }

  const filterOptions = [
    { label: 'All', key: 'All' },
    { label: 'Machine Learning', key: 'Machine Learning' },
    { label: 'Deep Learning', key: 'Deep Learning' },
    { label: 'Generative AI', key: 'Generative AI' },
    { label: 'Computer Vision', key: 'Computer Vision' },
    { label: 'Full Stack', key: 'Full Stack' },
  ]

  // Filter computation
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true
    return (
      project.filterCategory === activeFilter ||
      (project.secondaryCategories && project.secondaryCategories.includes(activeFilter))
    )
  })

  // Count items for each filter
  const getFilterCount = (key) => {
    if (key === 'All') return projectsData.length
    return projectsData.filter(
      (p) => p.filterCategory === key || (p.secondaryCategories && p.secondaryCategories.includes(key))
    ).length
  }

  // Modal body scroll locking
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

  return (
    <div className="work-page-wrapper">
      <div className="container">
        {/* SECTION A: Work Introduction (From Reference Screenshot 3) */}
        <section className="work-header-section">
          <h1 className="work-hero-headline">
            Creating practical AI solutions
          </h1>
          <p className="work-hero-subtext">
            A comprehensive index of machine learning models, retrieval-augmented generation systems,
            computer vision applications, and autonomous agent architectures I have engineered.
          </p>
        </section>

        {/* SECTION B: Filter Controls & View Toggle Bar (From Reference Screenshot 3) */}
        <div className="work-controls-bar">
          <div className="work-filter-pills-row">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.key
              const count = getFilterCount(filter.key)
              return (
                <button
                  key={filter.key}
                  type="button"
                  className={`filter-pill-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <span>{filter.label}</span>
                  <sup className="filter-pill-count">{count}</sup>
                </button>
              )
            })}
          </div>

          {/* List vs Grid View Toggle */}
          <div className="work-view-toggle-wrap">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'list' ? 'is-active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="Switch to list view"
              title="List view"
            >
              <List size={18} />
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Switch to grid view"
              title="Grid view"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        <div className="editorial-divider-line" style={{ margin: '24px 0 48px' }} />

        {/* SECTION C & D: Gallery Views */}
        {viewMode === 'grid' ? (
          /* GRID VIEW (From Reference Screenshot 4: Two-column cards with banner artwork) */
          <div className="work-grid-gallery">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="work-grid-card"
                onClick={() => handleOpenProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleOpenProject(project)
                }}
              >
                {/* Large Preview Visual Banner */}
                <div
                  className="grid-card-visual-banner"
                  style={{ background: project.gradient }}
                >
                  <div className="grid-card-tag-badge">
                    <span>{project.microTag}</span>
                  </div>

                  <div className="grid-card-artwork">
                    <PreviewArtwork type={project.artworkType} />
                  </div>

                  {/* Circular View Button Overlay */}
                  <div className="grid-card-hover-overlay">
                    <span className="grid-card-view-circle">View</span>
                  </div>
                </div>

                {/* Project Details Below Card */}
                <div className="grid-card-meta-wrap">
                  <h3 className="grid-card-title">{project.title}</h3>
                  <div className="grid-card-divider" />
                  <div className="grid-card-sub-row">
                    <span className="grid-card-desc">{project.shortDesc}</span>
                    <span className="grid-card-tech">
                      {project.tech.slice(0, 3).join(' · ')}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* LIST VIEW: Editorial Large Rows */
          <div
            className="editorial-projects-list"
            onPointerLeave={handleListPointerLeave}
          >
            {filteredProjects.map((project, idx) => {
              const isHovered = hoveredListIndex === idx
              const isDimmed = hoveredListIndex !== null && !isHovered

              return (
                <div key={project.id} className="editorial-project-row-wrapper">
                  <div
                    className={`editorial-project-row ${isHovered ? 'is-active-hover' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                    onPointerEnter={(e) => handleRowPointerEnter(e, idx)}
                    onPointerMove={(e) => handleRowPointerMove(e, idx)}
                    onClick={() => handleOpenProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleOpenProject(project)
                    }}
                  >
                    <h3 className="editorial-project-title">{project.title}</h3>
                    <span className="editorial-project-category">{project.category}</span>
                  </div>
                  <div className="editorial-divider-line" />
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Floating Interactive Preview Card for List View */}
      {viewMode === 'list' && (
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
          aria-hidden="true"
        >
          <AnimatePresence>
            {hoveredListIndex !== null && filteredProjects[hoveredListIndex] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.86, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                exit={{ opacity: 0, scale: 0.86, x: '-50%', y: '-50%' }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="floating-preview-card"
                style={{ background: filteredProjects[hoveredListIndex].gradient }}
              >
                <div className="card-top-tag">
                  {filteredProjects[hoveredListIndex].microTag}
                </div>
                <div className="card-artwork-container">
                  <PreviewArtwork type={filteredProjects[hoveredListIndex].artworkType} />
                </div>
                <div className="card-center-view-btn" aria-hidden="true">
                  <span>View</span>
                </div>
                <div className="card-bottom-title">
                  {filteredProjects[hoveredListIndex].title}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* SECTION E: Project Details Modal Dialog */}
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
            >
              <div className="modal-header-row">
                <div className="modal-header-text">
                  <span className="modal-category-chip">{selectedProject.category}</span>
                  <h2 className="modal-project-title">{selectedProject.title}</h2>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body-content">
                <div className="modal-problem-box">
                  <span className="modal-sub-label">Problem Solved & Objective</span>
                  <p className="modal-problem-text">{selectedProject.problem}</p>
                </div>

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
    </div>
  )
}
