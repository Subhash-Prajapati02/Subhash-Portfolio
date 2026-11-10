import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('workwithsubhash22@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const contactCards = [
    {
      id: 'email',
      tag: 'PRIMARY CONTACT',
      title: 'Direct Email',
      value: 'workwithsubhash22@gmail.com',
      desc: 'Open for AI/ML engineering roles, RAG architectures, technical discussions, and collaborative projects.',
      icon: Mail,
      actionType: 'email',
      link: 'mailto:workwithsubhash22@gmail.com',
      actionLabel: 'Send Email'
    },
    {
      id: 'linkedin',
      tag: 'PROFESSIONAL NETWORK',
      title: 'LinkedIn',
      value: 'subhash-kumar-prajapati-7945252b9',
      desc: 'Connect for career updates, industry networking, and collaborative engineering discussions.',
      icon: Linkedin,
      actionType: 'external',
      link: 'https://linkedin.com/in/subhash-kumar-prajapati-7945252b9/',
      actionLabel: 'Connect on LinkedIn'
    },
    {
      id: 'github',
      tag: 'CODE & REPOSITORIES',
      title: 'GitHub',
      value: 'Subhash-Prajapati02',
      desc: 'Explore open-source machine learning models, RAG pipelines, and autonomous agent implementations.',
      icon: Github,
      actionType: 'external',
      link: 'https://github.com/Subhash-Prajapati02',
      actionLabel: 'View GitHub Profile'
    },
    {
      id: 'location',
      tag: 'LOCATION & AVAILABILITY',
      title: 'Bhopal, India',
      value: 'Open to On-Site, Hybrid & Remote Roles',
      desc: 'Available for immediate opportunities in Bhopal, across India, and remote international engineering teams.',
      icon: MapPin,
      actionType: 'static',
      link: null,
      actionLabel: null
    }
  ]

  return (
    <div className="container">
      <div className="section-header">
        <span className="section-eyebrow">07 / Contact</span>
        <h2 className="section-heading">Initiate a Conversation.</h2>
        <p className="section-subtext">
          Available for AI/ML engineering roles, research collaborations, and production machine learning initiatives.
        </p>
      </div>

      {/* Redesigned Showcase Grid (Projects-Card Aesthetic) */}
      <div className="contact-showcase-grid">
        {contactCards.map((card) => {
          const IconComponent = card.icon

          if (card.actionType === 'email') {
            return (
              <div key={card.id} className="contact-premium-card contact-featured-card">
                <div className="contact-card-top-row">
                  <div className="contact-card-badge-wrap">
                    <span className="contact-card-badge">{card.tag}</span>
                  </div>
                  <div className="contact-card-icon-wrap">
                    <IconComponent size={20} className="contact-card-icon" />
                  </div>
                </div>

                <div className="contact-card-body">
                  <h3 className="contact-card-title">{card.title}</h3>
                  <a
                    href={card.link}
                    className="contact-card-value email-highlight"
                    title="Click to write email"
                  >
                    {card.value}
                  </a>
                  <p className="contact-card-desc">{card.desc}</p>
                </div>

                <div className="contact-card-actions-row">
                  <a
                    href={card.link}
                    className="btn-primary btn-compact"
                  >
                    <span>{card.actionLabel}</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="btn-secondary btn-compact copy-btn"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )
          }

          if (card.actionType === 'external') {
            return (
              <a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-premium-card contact-interactive-card"
                aria-label={card.actionLabel}
              >
                <div className="contact-card-top-row">
                  <div className="contact-card-badge-wrap">
                    <span className="contact-card-badge">{card.tag}</span>
                  </div>
                  <div className="contact-card-icon-wrap">
                    <IconComponent size={20} className="contact-card-icon" />
                  </div>
                </div>

                <div className="contact-card-body">
                  <div className="contact-card-title-flex">
                    <h3 className="contact-card-title">{card.title}</h3>
                    <ArrowUpRight size={18} className="contact-card-external-arrow" />
                  </div>
                  <span className="contact-card-value">{card.value}</span>
                  <p className="contact-card-desc">{card.desc}</p>
                </div>
              </a>
            )
          }

          // Static card (Location & Availability)
          return (
            <div key={card.id} className="contact-premium-card contact-static-card">
              <div className="contact-card-top-row">
                <div className="contact-card-badge-wrap">
                  <span className="contact-card-badge">{card.tag}</span>
                </div>
                <div className="contact-card-icon-wrap">
                  <IconComponent size={20} className="contact-card-icon" />
                </div>
              </div>

              <div className="contact-card-body">
                <h3 className="contact-card-title">{card.title}</h3>
                <span className="contact-card-value accent-text">{card.value}</span>
                <p className="contact-card-desc">{card.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
