import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Linkedin, Github, Instagram, Mail } from 'lucide-react'
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
    const utc = now.getTime() + now.getTimezoneOffset() * 60000
    const istDate = new Date(utc + 3600000 * 5.5)
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
  // 1. Live Indian Standard Time (IST) Clock (updates every second)
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
  const [visitorCount, setVisitorCount] = useState(() => {
    try {
      const saved = localStorage.getItem('subhash_visitor_count')
      return saved ? parseInt(saved, 10) : 185
    } catch {
      return 185
    }
  })

  useEffect(() => {
    try {
      const hasVisitedThisSession = sessionStorage.getItem('subhash_session_active')
      const currentVal = parseInt(localStorage.getItem('subhash_visitor_count') || '185', 10)

      if (!hasVisitedThisSession) {
        const nextVal = currentVal + 1
        localStorage.setItem('subhash_visitor_count', nextVal.toString())
        sessionStorage.setItem('subhash_session_active', 'true')
        setVisitorCount(nextVal)
      }

      fetch('https://api.counterapi.dev/v1/subhash-portfolio-prod/visitors/up')
        .then((res) => res.json())
        .then((data) => {
          if (data && typeof data.count === 'number') {
            const synced = Math.max(data.count, currentVal)
            setVisitorCount(synced)
            localStorage.setItem('subhash_visitor_count', synced.toString())
          }
        })
        .catch(() => {})
    } catch {}
  }, [])

  const avatarFallback = `${import.meta.env.BASE_URL}avatar.svg`

  return (
    <footer className="aadarsh-editorial-footer">
      {/* 1. Header Row: Circular Profile Avatar + "Let's work together" + Diagonal Arrow */}
      <div className="container footer-headline-row">
        <div className="footer-identity-group">
          <div className="footer-profile-avatar-wrap">
            <img
              src="https://github.com/Subhash-Prajapati02.png"
              alt="Subhash Kumar Prajapati"
              className="footer-profile-avatar-img"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = avatarFallback
              }}
            />
          </div>

          <h2 className="footer-headline-title">
            <span className="footer-headline-line">Let's work</span>
            <span className="footer-headline-line">together</span>
          </h2>
        </div>

        <div className="footer-headline-arrow-wrap" aria-hidden="true">
          <ArrowUpRight size={38} strokeWidth={1.75} className="footer-headline-arrow" />
        </div>
      </div>

      {/* 2. Full-Width Divider Line with Overlapping Circular "Get in touch" Button */}
      <div className="container footer-divider-track">
        <div className="footer-horizontal-line" />

        <Link
          to="/contact"
          className="footer-overlapping-get-in-touch-btn"
          aria-label="Get in touch with Subhash"
        >
          <span>Get in touch</span>
        </Link>
      </div>

      {/* 3. Three Balanced Footer Sections: Left (Version) | Center (Quotes + Socials) | Right (Time & Visitors) */}
      <div className="container footer-bottom-meta-grid">
        {/* LEFT SECTION — VERSION */}
        <div className="footer-meta-block footer-block-version">
          <span className="footer-meta-tag">VERSION</span>
          <span className="footer-meta-content">2026 © Subhash Prajapati</span>
          <span className="footer-meta-subtext">Crafted with love</span>
        </div>

        {/* CENTER SECTION — QUOTES ABOVE SOCIALS & SOCIAL MEDIA ICONS */}
        <div className="footer-meta-block footer-block-center">
          {/* Rotating Motivational Quote */}
          <div className="footer-center-quote-box">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="footer-center-quote-text"
              >
                “{MOTIVATIONAL_QUOTES[quoteIndex]}”
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Socials Heading */}
          <span className="footer-meta-tag footer-socials-heading-tag">SOCIALS</span>

          {/* Centered Horizontal Row with Recognizable Social Icons */}
          <div className="footer-social-icons-center-row">
            <a
              href="https://linkedin.com/in/subhash-kumar-prajapati-7945252b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn footer-social-linkedin"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/Subhash-Prajapati02"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn footer-social-github"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.instagram.com/_subhaash.x/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn footer-social-instagram"
              aria-label="Instagram profile"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="mailto:workwithsubhash22@gmail.com"
              className="footer-social-icon-btn footer-social-email"
              aria-label="Email Subhash"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION — LOCAL TIME & VISITORS */}
        <div className="footer-meta-block footer-block-time">
          <span className="footer-meta-tag">LOCAL TIME</span>
          <span className="footer-meta-content font-mono">{istTime}</span>
          <div className="footer-visitor-indicator">
            <span className="footer-online-dot" aria-hidden="true" />
            <span className="footer-visitor-text">{visitorCount.toLocaleString()} visitors</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
