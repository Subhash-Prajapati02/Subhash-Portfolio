import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'

const experienceList = [
  {
    role: 'Python Data Science Intern',
    organization: 'Null Class Technology',
    period: 'Oct 2025 — Nov 2025',
    location: 'Bhopal, Madhya Pradesh',
    summary: 'Focused on Machine Learning model training, dataset augmentation pipelines, and software quality assurance.',
    highlights: [
      'Trained Machine Learning facial expression recognition models and performed data augmentation',
      'Conducted code reviews, debugging, and implemented performance enhancements'
    ],
    skills: ['Python', 'Machine Learning', 'Computer Vision', 'Data Augmentation', 'Model Training', 'Debugging']
  }
]

export default function Experience() {
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-eyebrow">04 / Experience</span>
        <h2 className="section-heading">Industry Work Experience.</h2>
        <p className="section-subtext">
          Applied experience building and debugging machine learning models in production and team environments.
        </p>
      </div>

      <div className="experience-timeline-container">
        {experienceList.map((item, idx) => (
          <div key={idx} className="minimal-card experience-card">
            <div className="experience-top-meta">
              <div className="role-and-org">
                <span className="experience-badge">Internship</span>
                <h3 className="experience-title">{item.role}</h3>
                <span className="experience-company-name">{item.organization}</span>
              </div>

              <div className="experience-time-loc">
                <span className="meta-pill">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </span>
                <span className="meta-pill">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </span>
              </div>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <ul className="experience-bullet-list">
              {item.highlights.map((highlight, hIdx) => (
                <li key={hIdx}>
                  <CheckCircle2 size={15} className="feature-check-icon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="experience-tech-row">
              {item.skills.map((skill, sIdx) => (
                <span key={sIdx} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
