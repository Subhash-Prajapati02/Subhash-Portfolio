export default function PreviewArtwork({ type }) {
  switch (type) {
    case 'medical':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          <circle cx="140" cy="100" r="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="140" cy="100" r="45" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <line x1="140" y1="20" x2="140" y2="180" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="60" y1="100" x2="220" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
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
          <ellipse cx="140" cy="100" rx="55" ry="68" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 65 50 L 65 35 L 85 35" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 215 50 L 215 35 L 195 35" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 65 150 L 65 165 L 85 165" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 215 150 L 215 165 L 195 165" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="120" cy="85" r="3" fill="#ffffff" />
          <circle cx="160" cy="85" r="3" fill="#ffffff" />
          <circle cx="140" cy="108" r="3" fill="#34d399" />
          <path d="M 125 135 Q 140 145 155 135" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )

    case 'rag':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
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
          <line x1="50" y1="140" x2="50" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
          <line x1="185" y1="65" x2="185" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
          <line x1="230" y1="45" x2="230" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
        </svg>
      )

    case 'detection':
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
          <rect x="70" y="45" width="140" height="110" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M 60 70 L 60 40 L 90 40" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 220 70 L 220 40 L 190 40" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 60 130 L 60 160 L 90 160" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 220 130 L 220 160 L 190 160" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="100" r="6" fill="#fb923c" />
          <circle cx="140" cy="100" r="14" stroke="rgba(251,146,60,0.5)" strokeWidth="1.5" />
        </svg>
      )

    case 'agentic':
    default:
      return (
        <svg viewBox="0 0 280 200" fill="none" className="preview-svg-artwork" aria-hidden="true">
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
