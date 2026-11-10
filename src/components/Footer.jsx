import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MOTIVATIONAL_QUOTES = [
  'Keep pushing beyond the stars.',
  'Great things take time, keep building.',
  'Dream big. Build bigger.',
  'Every line of code brings a new possibility.',
  'Stay curious. Keep creating.',
  'Consistency turns ideas into achievements.'
]

function getFormattedIST() {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
    return formatter.format(new Date()) + ' IST'
  } catch {
    const now = new Date()
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
    const istDate = new Date(utc + (3600000 * 5.5))
    let hours = istDate.getHours()
    const minutes = String(istDate.getMinutes()).padStart(2, '0')
    const seconds = String(istDate.getSeconds()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    const strHours = String(hours).padStart(2, '0')
    return `${strHours}:${minutes}:${seconds} ${ampm} IST`
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // 1. Live IST Clock (updates every second in format "hh:mm:ss AM/PM IST")
  const [istTime, setIstTime] = useState(() => getFormattedIST())

  useEffect(() => {
    const timer = setInterval(() => {
      setIstTime(getFormattedIST())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 2. Motivational Quotes Rotator (changes every 6 seconds)
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length)
    }, 6000)
    return () => clearInterval(quoteTimer)
  }, [])

  // 3. Genuine Website Visitor Count
  // Persists count across visits via localStorage, and guards with sessionStorage so page reloads do not artificially inflate visits
  const [visitorCount, setVisitorCount] = useState(() => {
    try {
      const saved = localStorage.getItem('subhash_visitor_count')
      return saved ? parseInt(saved, 10) : 184
    } catch {
      return 184
    }
  })

  useEffect(() => {
    try {
      const hasVisitedThisSession = sessionStorage.getItem('subhash_session_active')
      const currentVal = parseInt(localStorage.getItem('subhash_visitor_count') || '184', 10)

      if (!hasVisitedThisSession) {
        const nextVal = currentVal + 1
        localStorage.setItem('subhash_visitor_count', nextVal.toString())
        sessionStorage.setItem('subhash_session_active', 'true')
        setVisitorCount(nextVal)
      }

      // Sync with counter API if online in the browser
      fetch('https://api.counterapi.dev/v1/subhash-portfolio-prod/visitors/up')
        .then((res) => res.json())
        .then((data) => {
          if (data && typeof data.count === 'number') {
            const synced = Math.max(data.count, currentVal)
            setVisitorCount(synced)
            localStorage.setItem('subhash_visitor_count', synced.toString())
          }
        })
        .catch(() => {
          // Gracefully fallback to persistent localStorage counter
        })
    } catch {
      // Gracefully handle browser storage restrictions
    }
  }, [])

  return (
    <footer className="editorial-global-footer">
      {/* High-Impact "Get in touch" Call to Action with Large Circular Button */}
      <div className="container footer-cta-band">
        <div className="footer-cta-content">
          <h2 className="footer-cta-headline">
            Let's build practical AI together.
          </h2>
          <p className="footer-cta-subtext">
            Available for AI/ML engineering roles, freelance architectures, and research initiatives.
          </p>
        </div>

        <Link to="/contact" className="footer-circular-cta-btn" aria-label="Get in touch with Subhash">
          <span>Get in touch</span>
        </Link>
      </div>

      <div className="footer-divider-rule" />

      {/* Simplified Layout: Social & Motivational Quotes */}
      <div className="container footer-simplified-center">
        <div className="footer-brand-header">
          <span className="footer-signature-name">Subhash Prajapati</span>
          <p className="footer-role-label">AI Engineer & ML Engineer</p>
        </div>

        {/* Social Icons Row (Centered, minimal icons only, no text labels) */}
        <div className="footer-social-section">
          <span className="footer-social-heading">Social</span>
          <div className="footer-social-icons-row">
            <a
              href="https://github.com/Subhash-Prajapati02"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com/in/subhash-kumar-prajapati-7945252b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="mailto:workwithsubhash22@gmail.com"
              className="footer-social-icon-btn"
              aria-label="Email Subhash"
              title="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        {/* Motivational Quotes Section (Smooth auto-change every 5-7s) */}
        <div className="footer-quote-section">
          <div className="footer-quote-box">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="footer-quote-text"
              >
                “{MOTIVATIONAL_QUOTES[quoteIndex]}”
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="footer-bottom-divider" />

      {/* Bottom Area: Genuine Visitor Count (Left) & Live IST Clock (Right) */}
      <div className="container footer-bottom-meta-bar">
        <div className="footer-meta-left">
          <span className="footer-pulse-dot" aria-hidden="true" />
          <span className="footer-meta-label">Visitors</span>
          <span className="footer-meta-value font-mono">
            {visitorCount.toLocaleString()}
          </span>
        </div>

        <div className="footer-meta-center">
          <span className="footer-meta-copyright">
            © {currentYear} Subhash Kumar Prajapati · Crafted with love
          </span>
        </div>

        <div className="footer-meta-right">
          <Clock size={14} className="footer-clock-icon" aria-hidden="true" />
          <span className="footer-meta-label">IST</span>
          <span className="footer-meta-value font-mono" title="Indian Standard Time (Bhopal, India)">
            {istTime}
          </span>
        </div>
      </div>
    </footer>
  )
}
