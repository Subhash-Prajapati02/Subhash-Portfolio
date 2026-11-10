import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="page-home-wrapper">
      {/* 1. Hero Section with updated introductory text and main heading */}
      <Hero />

      {/* 2. Narrative Intro with Circular "About Me" Button (From Reference Screenshot 1) */}
      <section className="home-narrative-section">
        <div className="container home-narrative-grid">
          <div className="narrative-left-col">
            <h2 className="narrative-statement-title">
              Building practical AI that solves real-world problems.
            </h2>
          </div>

          <div className="narrative-right-col">
            <p className="narrative-lead-paragraph">
              I'm an aspiring AI and Machine Learning Engineer focused on building
              production-oriented machine learning systems and intelligent applications —
              from data collection and preprocessing to model training, evaluation, API
              development and deployment.
            </p>

            <Link to="/about" className="circular-about-me-btn" aria-label="Learn more on About page">
              <span>About Me</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Editorial Showcase with Floating Preview Cards) */}
      <section className="home-featured-work-section">
        <Projects />

        {/* Centered "More work" Pill Button (From Reference Screenshot 2) */}
        <div className="container more-work-cta-wrap">
          <Link to="/work" className="more-work-pill-btn" aria-label="Explore all projects on Work page">
            <span>More work</span>
            <sup className="more-work-counter">5</sup>
            <ArrowUpRight size={14} className="more-work-arrow" />
          </Link>
        </div>
      </section>
    </div>
  )
}
