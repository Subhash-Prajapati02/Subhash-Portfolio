import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const educationHistory = [
  {
    qualification: 'Bachelor of Technology – Computer Science',
    institution: 'Sagar Institute of Research & Technology (SIRT)',
    timeline: 'Graduation: July 2026',
    location: 'Bhopal, Madhya Pradesh',
    details: 'Rigorous coursework in Data Structures, Algorithms, Database Management Systems, Machine Learning, Operating Systems, and Deep Learning.',
    highlight: 'CGPA: 7.04'
  },
  {
    qualification: 'Higher Secondary Education (Class XII), Mathematics & Science',
    institution: 'Douglas Higher Secondary School',
    timeline: '2021 — 2022',
    location: 'Bhopal, Madhya Pradesh',
    details: 'Concentration in Mathematics and Science curriculum.',
    highlight: 'Percentage: 77.6%'
  },
  {
    qualification: 'Secondary Education (Class X)',
    institution: 'Douglas Higher Secondary School',
    timeline: '2019 — 2020',
    location: 'Bhopal, Madhya Pradesh',
    details: 'Secondary school education with high academic achievement across Science and Mathematics.',
    highlight: 'Percentage: 89%'
  }
]

export default function Education() {
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-eyebrow">05 / Education</span>
        <h2 className="section-heading">Academic Foundation.</h2>
      </div>

      <div className="education-cards-stack">
        {educationHistory.map((item, idx) => (
          <div key={idx} className="minimal-card education-item-card">
            <div className="education-icon-col">
              <div className="card-icon-wrap">
                <GraduationCap size={20} className="card-icon" />
              </div>
            </div>

            <div className="education-info-col">
              <div className="education-headline-wrap">
                <h3 className="education-degree-title">{item.qualification}</h3>
                <span className="education-score-badge">{item.highlight}</span>
              </div>

              <div className="education-meta-row">
                <span className="education-institution">{item.institution}</span>
                <span className="meta-separator">•</span>
                <span className="meta-inline">
                  <Calendar size={13} />
                  <span>{item.timeline}</span>
                </span>
                <span className="meta-separator">•</span>
                <span className="meta-inline">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </span>
              </div>

              <p className="education-notes">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
