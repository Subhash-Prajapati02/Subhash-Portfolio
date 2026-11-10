import { useState } from 'react'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  Compass,
  Sparkles,
  ExternalLink
} from 'lucide-react'
import IndiaMap from '@svg-maps/india'

// Pinpoint coordinate mapping for Bhopal (23.2599° N, 77.4126° E) in 612x696 canvas
const BHOPAL_COORDS = { x: 246.4, y: 290.0 }

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [hoveredState, setHoveredState] = useState(null)

  const copyEmail = () => {
    navigator.clipboard.writeText('workwithsubhash22@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <div className="contact-page-wrapper">
      <div className="container">
        {/* Page Editorial Header */}
        <section className="contact-page-hero">
          <span className="editorial-eyebrow">04 / CONTACT</span>
          <h1 className="contact-page-headline">
            Let's build something meaningful together.
          </h1>
          <p className="contact-page-subtext">
            I am currently open to full-time AI/ML Engineering roles, research internships,
            and collaborations on production machine learning pipelines.
          </p>
        </section>

        <div className="editorial-divider-line" style={{ margin: '36px 0 48px' }} />

        {/* Top Layout Grid: Left (Status & Primary Contact) vs Right (Current Location & India Map) */}
        <div className="contact-main-grid">
          {/* Left Column: Current Status & Primary Contact Cards */}
          <div className="contact-info-col">
            {/* 1. Current Status Card */}
            <div className="contact-card contact-status-card">
              <div className="status-header-row">
                <span className="status-live-beacon" aria-hidden="true">
                  <span className="beacon-ping" />
                  <span className="beacon-dot-indicator" />
                </span>
                <span className="status-badge-text">CURRENT STATUS</span>
              </div>
              <h2 className="status-title-text">Actively Seeking Opportunities</h2>
              <p className="status-desc-text">
                Available for on-site roles in Bhopal, hybrid positions, and remote international engineering teams.
                Typically responding to professional inquiries within 24 hours.
              </p>
            </div>

            {/* 2. Primary Contact Section Heading */}
            <div className="contact-section-label-row">
              <span className="contact-micro-label">PRIMARY CONTACT</span>
            </div>

            {/* 3. Email Contact Card */}
            <div className="contact-card contact-channel-card">
              <div className="channel-card-top">
                <div className="channel-icon-avatar">
                  <Mail size={20} />
                </div>
                <div className="channel-meta-col">
                  <span className="channel-type-label">EMAIL ADDRESS</span>
                  <a
                    href="mailto:workwithsubhash22@gmail.com"
                    className="channel-value-link"
                    title="Send an email to workwithsubhash22@gmail.com"
                  >
                    workwithsubhash22@gmail.com
                  </a>
                </div>
              </div>
              <div className="channel-card-actions">
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`contact-copy-btn ${copied ? 'is-copied' : ''}`}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check size={14} className="copy-icon-success" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            {/* 4. Phone Contact Card */}
            <div className="contact-card contact-channel-card">
              <div className="channel-card-top">
                <div className="channel-icon-avatar">
                  <Phone size={20} />
                </div>
                <div className="channel-meta-col">
                  <span className="channel-type-label">PHONE NUMBER</span>
                  <a
                    href="tel:+917000239226"
                    className="channel-value-link"
                    title="Call +91 70002 39226"
                  >
                    +91 70002 39226
                  </a>
                </div>
              </div>
              <div className="channel-card-footer">
                <span className="channel-sub-info">Direct line & WhatsApp · Tap to connect</span>
                <a
                  href="tel:+917000239226"
                  className="channel-call-cta"
                  aria-label="Call +91 70002 39226 directly"
                >
                  <span>Call Direct</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Current Location & Interactive India Map */}
          <div className="contact-location-col">
            <div className="contact-card contact-location-card">
              {/* Location Card Header */}
              <div className="location-card-header">
                <div className="location-title-wrap">
                  <div className="location-icon-avatar">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="location-eyebrow">CURRENT LOCATION</span>
                    <h2 className="location-city-heading">Bhopal, Madhya Pradesh, India</h2>
                  </div>
                </div>

                <div className="location-tags-wrap">
                  <span className="location-pill-tag">
                    <Compass size={12} />
                    <span>23.2599° N, 77.4126° E</span>
                  </span>
                  <span className="location-pill-tag">
                    <Clock size={12} />
                    <span>IST (UTC +5:30)</span>
                  </span>
                </div>
              </div>

              {/* Vector India Map Visualizer Container */}
              <div className="india-map-visualizer">
                {/* Ambient glow backdrop for dark mode */}
                <div className="map-ambient-glow" aria-hidden="true" />

                {/* Hover state badge */}
                <div className="map-hover-badge">
                  <span className="badge-bullet">📍</span>
                  <span className="badge-state-name">
                    {hoveredState ? `${hoveredState}` : 'Madhya Pradesh · Bhopal HQ'}
                  </span>
                </div>

                <svg
                  viewBox={IndiaMap.viewBox || '0 0 612 696'}
                  className="india-vector-svg"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Map of India showing Bhopal in Madhya Pradesh"
                >
                  <defs>
                    <radialGradient id="bhopalPulseGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.7" />
                      <stop offset="60%" stopColor="#6366f1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                    </radialGradient>
                    <filter id="mpGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#818cf8" floodOpacity="0.6" />
                    </filter>
                  </defs>

                  {/* All Indian States */}
                  <g className="india-states-layer">
                    {IndiaMap.locations.map((loc) => {
                      const isMP = loc.id === 'mp'
                      return (
                        <path
                          key={loc.id}
                          id={`state-${loc.id}`}
                          d={loc.path}
                          className={`state-vector-path ${isMP ? 'is-madhya-pradesh' : 'is-base-state'}`}
                          onMouseEnter={() => setHoveredState(loc.name)}
                          onMouseLeave={() => setHoveredState(null)}
                        >
                          <title>{loc.name}</title>
                        </path>
                      )
                    })}
                  </g>

                  {/* Bhopal Pulsating Marker & Beacon */}
                  <g
                    className="bhopal-beacon-group"
                    transform={`translate(${BHOPAL_COORDS.x}, ${BHOPAL_COORDS.y})`}
                  >
                    {/* Radiating Beacon Pulses */}
                    <circle r="22" className="beacon-radar beacon-radar-outer" />
                    <circle r="13" className="beacon-radar beacon-radar-inner" />
                    <circle r="26" fill="url(#bhopalPulseGlow)" className="beacon-glow-disc" />

                    {/* Center Beacon Dot */}
                    <circle r="5.5" className="beacon-center-ring" />
                    <circle r="2.2" className="beacon-center-dot" />

                    {/* Floating Bhopal Label Badge */}
                    <g className="bhopal-pin-tag" transform="translate(12, -10)">
                      <rect
                        x="0"
                        y="-13"
                        width="92"
                        height="22"
                        rx="6"
                        className="pin-tag-surface"
                      />
                      <circle cx="10" cy="-2" r="3" className="pin-tag-dot" />
                      <text x="18" y="2" className="pin-tag-label">
                        Bhopal, India
                      </text>
                    </g>
                  </g>
                </svg>

                {/* Map Bottom Metadata Footer */}
                <div className="map-caption-footer">
                  <span className="caption-text">
                    Accurate geographic boundaries of India · Madhya Pradesh state highlight
                  </span>
                  <span className="caption-badge">Central Engineering Base</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="editorial-divider-line" style={{ margin: '56px 0 36px' }} />

        {/* Bottom Section: Dedicated Social Profiles Grid */}
        <section className="contact-socials-section">
          <div className="socials-section-header">
            <span className="socials-micro-label">SOCIAL PROFILES</span>
            <h2 className="socials-section-title">Connect & Explore My Work</h2>
            <p className="socials-section-desc">
              Follow my research implementations, explore production code repositories,
              and connect across professional networks.
            </p>
          </div>

          <div className="contact-social-grid">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/subhash-kumar-prajapati-7945252b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-profile-card"
              title="Open Subhash's LinkedIn profile in a new tab"
            >
              <div className="profile-card-top">
                <div className="profile-icon-pill linkedin-icon-pill">
                  <Linkedin size={22} />
                </div>
                <ArrowUpRight size={18} className="profile-external-arrow" />
              </div>
              <div className="profile-card-content">
                <h3 className="profile-platform-name">LinkedIn</h3>
                <span className="profile-handle-text">in/subhash-kumar-prajapati-7945252b9</span>
                <p className="profile-card-bio">
                  Professional updates, research achievements, engineering network & endorsements.
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Subhash-Prajapati02"
              target="_blank"
              rel="noopener noreferrer"
              className="social-profile-card"
              title="Open Subhash's GitHub profile in a new tab"
            >
              <div className="profile-card-top">
                <div className="profile-icon-pill github-icon-pill">
                  <Github size={22} />
                </div>
                <ArrowUpRight size={18} className="profile-external-arrow" />
              </div>
              <div className="profile-card-content">
                <h3 className="profile-platform-name">GitHub</h3>
                <span className="profile-handle-text">Subhash-Prajapati02</span>
                <p className="profile-card-bio">
                  Open-source AI/ML architectures, fine-tuning scripts, and end-to-end data pipelines.
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/_subhaash.x/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-profile-card"
              title="Open Subhash's Instagram profile in a new tab"
            >
              <div className="profile-card-top">
                <div className="profile-icon-pill instagram-icon-pill">
                  <Instagram size={22} />
                </div>
                <ArrowUpRight size={18} className="profile-external-arrow" />
              </div>
              <div className="profile-card-content">
                <h3 className="profile-platform-name">Instagram</h3>
                <span className="profile-handle-text">_subhaash.x</span>
                <p className="profile-card-bio">
                  Visual designs, creative coding experiments, tech thoughts & personal moments.
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
