import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown, FileText, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container container">
        {/* 1. Name and Designation (Introductory Text + Main Heading) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-headline-wrap"
        >
          <span className="hero-intro-text">Hi, I'm Subhash Prajapati</span>
          <h1 className="hero-display-title">
            <span className="hero-line">AI Engineer</span>
            <span className="hero-line">& ML Engineer</span>
          </h1>
        </motion.div>

        {/* 2. Availability Badge (Placed immediately below name & designation) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hero-badge-wrapper"
        >
          <div className="hero-status-pill">
            <span className="status-indicator-dot" aria-hidden="true" />
            <span className="status-text">AVAILABLE FOR HIRE</span>
          </div>
        </motion.div>

        {/* 3. Professional Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hero-description"
        >
          AI/ML Engineer bridging the gap between theoretical machine learning research
          and scalable production systems. Specializing in <strong>Large Language Models</strong>,{' '}
          <strong>RAG Pipelines</strong>, and <strong>Deep Learning Solutions</strong>.
        </motion.p>

        {/* 4. Action Buttons (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hero-actions-row"
        >
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="btn-primary"
          >
            <span>Explore My Work</span>
            <ArrowDown size={16} />
          </button>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="View Resume in new tab"
          >
            <FileText size={16} />
            <span>View Resume</span>
            <ArrowUpRight size={14} className="btn-external-icon" />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Subhash_Kumar_Prajapati_Resume.pdf"
            className="btn-secondary"
            aria-label="Download Resume"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* 5. Social Links Strip (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="hero-social-strip"
        >
          <span className="social-label">Connect:</span>
          <a
            href="https://github.com/Subhash-Prajapati02"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-pill"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/subhash-kumar-prajapati-7945252b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-pill"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:workwithsubhash22@gmail.com"
            className="hero-social-pill"
            aria-label="Send Email"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
