import { Award, CheckCircle, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: 'Programming in Python Data Science',
    issuer: 'RICR',
    credentialType: 'Professional Certification',
    description: 'Comprehensive curriculum covering scientific computing, exploratory data analysis, NumPy, Pandas, Scikit-learn, and machine learning pipelines.',
    status: 'Verified Credential'
  },
  {
    title: 'Full Stack Development',
    issuer: 'Apna College',
    credentialType: 'Software Engineering Program',
    description: 'Practical training on end-to-end full stack architecture, frontend systems, RESTful APIs, database modeling, and deployment strategies.',
    status: 'Completed'
  }
]

export default function Certifications() {
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-eyebrow">06 / Credentials</span>
        <h2 className="section-heading">Certifications & Training.</h2>
        <p className="section-subtext">
          Recognized technical courses validating competencies in Python data science and full-stack software development.
        </p>
      </div>

      <div className="certifications-cards-grid">
        {certificates.map((cert, idx) => (
          <div key={idx} className="minimal-card cert-item-card">
            <div className="cert-top-row">
              <div className="card-icon-wrap">
                <Award size={20} className="card-icon" />
              </div>
              <span className="cert-status-badge">
                <CheckCircle size={13} />
                <span>{cert.status}</span>
              </span>
            </div>

            <div className="cert-body-meta">
              <span className="cert-type-label">{cert.credentialType}</span>
              <h3 className="cert-item-title">{cert.title}</h3>
              <p className="cert-issuer-name">{cert.issuer}</p>
              <p className="cert-desc-text">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
