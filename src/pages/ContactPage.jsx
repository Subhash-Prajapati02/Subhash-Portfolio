import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check, ArrowUpRight, MessageSquare, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)
  const [formNotice, setFormNotice] = useState(null)

  const copyEmail = () => {
    navigator.clipboard.writeText('workwithsubhash22@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your full name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      setFormNotice(null)
      return
    }

    setErrors({})
    const mailtoSubject = encodeURIComponent(formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio Inquiry] from ${formData.name}`)
    const mailtoBody = encodeURIComponent(`Sender Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:workwithsubhash22@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`

    setFormNotice('Your email client is opening with your formatted message. You can also write directly to workwithsubhash22@gmail.com.')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="contact-page-wrapper">
      <div className="container">
        {/* Large Typography Headline */}
        <section className="contact-page-hero">
          <span className="editorial-eyebrow">Get In Touch</span>
          <h1 className="contact-page-headline">
            Let's build something meaningful together.
          </h1>
          <p className="contact-page-subtext">
            I am currently open to full-time AI/ML Engineering roles, research internships,
            and collaborations on production machine learning pipelines.
          </p>
        </section>

        <div className="editorial-divider-line" style={{ margin: '36px 0 64px' }} />

        {/* Two-Column Contact Layout */}
        <div className="contact-page-grid">
          {/* Left Column: Direct Channels & Availability Notice */}
          <div className="contact-page-left">
            {/* Availability Notice Card */}
            <div className="contact-availability-box">
              <div className="availability-indicator-row">
                <span className="status-indicator-dot" aria-hidden="true" />
                <span className="availability-status-label">CURRENT STATUS</span>
              </div>
              <h3 className="availability-status-title">Actively Seeking Opportunities</h3>
              <p className="availability-status-text">
                Available for on-site roles in Bhopal, hybrid positions, and remote international engineering teams.
                Typically responding to professional inquiries within 24 hours.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="contact-direct-card">
              <span className="contact-channel-micro">PRIMARY CONTACT</span>
              <a href="mailto:workwithsubhash22@gmail.com" className="contact-email-link">
                workwithsubhash22@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="btn-secondary btn-compact"
                style={{ marginTop: '14px', alignSelf: 'flex-start' }}
              >
                {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Social Network Links */}
            <div className="contact-social-channels-stack">
              <a
                href="https://linkedin.com/in/subhash-kumar-prajapati-7945252b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-channel-item"
              >
                <div className="channel-icon-pill"><Linkedin size={18} /></div>
                <div className="channel-text-col">
                  <span className="channel-title">LinkedIn</span>
                  <span className="channel-url-handle">in/subhash-kumar-prajapati-7945252b9</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow-out" />
              </a>

              <a
                href="https://github.com/Subhash-Prajapati02"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-channel-item"
              >
                <div className="channel-icon-pill"><Github size={18} /></div>
                <div className="channel-text-col">
                  <span className="channel-title">GitHub</span>
                  <span className="channel-url-handle">github.com/Subhash-Prajapati02</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow-out" />
              </a>

              <div className="contact-social-channel-item is-static">
                <div className="channel-icon-pill"><MapPin size={18} /></div>
                <div className="channel-text-col">
                  <span className="channel-title">Location</span>
                  <span className="channel-url-handle">Bhopal, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-page-right">
            <form className="contact-form-editorial" onSubmit={handleSubmit} noValidate>
              <h2 className="form-editorial-title">Send a Direct Message</h2>

              {formNotice && (
                <div className="form-notification-banner" role="status">
                  <p>{formNotice}</p>
                </div>
              )}

              <div className="form-row-2col">
                <div className="form-input-group">
                  <label htmlFor="contact-page-name" className="field-label">Name *</label>
                  <input
                    id="contact-page-name"
                    type="text"
                    name="name"
                    className={`field-input ${errors.name ? 'field-error' : ''}`}
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && <span className="field-error-message">{errors.name}</span>}
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-page-email" className="field-label">Email Address *</label>
                  <input
                    id="contact-page-email"
                    type="email"
                    name="email"
                    className={`field-input ${errors.email ? 'field-error' : ''}`}
                    placeholder="e.g. sarah@organization.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <span className="field-error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-input-group">
                <label htmlFor="contact-page-subject" className="field-label">Subject</label>
                <input
                  id="contact-page-subject"
                  type="text"
                  name="subject"
                  className="field-input"
                  placeholder="e.g. AI/ML Engineering Position / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input-group">
                <label htmlFor="contact-page-message" className="field-label">Message *</label>
                <textarea
                  id="contact-page-message"
                  name="message"
                  rows="6"
                  className={`field-textarea ${errors.message ? 'field-error' : ''}`}
                  placeholder="Tell me about your team, project requirements, or discussion topic..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="field-error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary btn-full-width" style={{ marginTop: '12px' }}>
                <span>Send via Mail Client</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
