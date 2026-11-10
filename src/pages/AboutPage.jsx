import { ArrowRight, FileText, Download, ExternalLink, Award, GraduationCap, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  const serviceCategories = [
    {
      num: '01',
      title: 'Machine Learning',
      desc: 'From statistical predictive modeling and classification to feature engineering and validation pipelines that ensure reliable inference.',
      tech: 'Scikit-learn · Pandas · NumPy · Python'
    },
    {
      num: '02',
      title: 'Deep Learning & Vision',
      desc: 'Designing and fine-tuning convolutional networks, biometric recognition models, data augmentation, and visual screening algorithms.',
      tech: 'PyTorch · TensorFlow · OpenCV · Keras'
    },
    {
      num: '03',
      title: 'Generative AI & LLMs',
      desc: 'Constructing robust Retrieval-Augmented Generation (RAG) pipelines, semantic vector search, and autonomous multi-agent tool-calling workflows.',
      tech: 'LangChain · FAISS · OpenAI API · Agno'
    },
    {
      num: '04',
      title: 'AI App Engineering',
      desc: 'Bridging model inference with low-latency backend APIs, real-time relational databases, and interactive deployment dashboards.',
      tech: 'FastAPI · Streamlit · Supabase · SQL'
    }
  ]

  const certifications = [
    {
      name: 'Programming in Python Data Science',
      issuer: 'RICR',
      period: 'Verified Credential',
      desc: 'Scientific computation, Exploratory Data Analysis, Pandas data manipulation, Scikit-learn modeling, and ML pipelines.'
    },
    {
      name: 'Full Stack Development',
      issuer: 'Apna College',
      period: 'Completed',
      desc: 'End-to-end full stack architecture, frontend state design, REST APIs, database schemas, and web deployments.'
    }
  ]

  return (
    <div className="about-page-wrapper">
      {/* SECTION A: Introduction (Follows Reference Screenshot 5) */}
      <section className="about-hero-intro-section">
        <div className="container about-intro-container">
          <div className="about-intro-arrow-lead">
            <span className="editorial-arrow-glyph" aria-hidden="true">→</span>
            <div className="about-intro-lead-text">
              <h1 className="about-main-lead-quote">
                I help engineering teams and product builders create tailor-made AI solutions and
                production-ready intelligent systems. With each project, I push technology to new horizons,
                always putting quality and mathematical rigor first.
              </h1>
              <span className="about-sub-phrase">Always exploring the frontiers of ML...</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="editorial-divider-line" /></div>

      {/* SECTION B: What I Work With (Numbered Columns from Reference Screenshot 5) */}
      <section className="about-services-section">
        <div className="container">
          <div className="about-section-header">
            <h2 className="about-section-title">What I Can Help You With</h2>
          </div>

          <div className="about-services-grid">
            {serviceCategories.map((cat) => (
              <div key={cat.num} className="service-column-item">
                <span className="service-index-number">{cat.num}</span>
                <div className="service-divider" />
                <h3 className="service-column-title">{cat.title}</h3>
                <p className="service-column-desc">{cat.desc}</p>
                <span className="service-column-tech">{cat.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="editorial-divider-line" /></div>

      {/* SECTION C: Education & Background (Two-Column Layout from Reference Screenshot 6) */}
      <section className="about-education-section">
        <div className="container about-two-col-layout">
          {/* Left Column: Heading */}
          <div className="about-left-sticky-col">
            <h2 className="about-large-sticky-heading">
              Education &<br />Background
            </h2>
          </div>

          {/* Right Column: Educational History & Details */}
          <div className="about-right-content-col">
            <p className="about-bio-statement">
              I am an AI and Machine Learning Engineer based in Bhopal, Madhya Pradesh,
              dedicated to building production-ready machine learning pipelines, fine-tuned LLM
              workflows, and intelligent software systems.
            </p>

            {/* Degree */}
            <div className="about-entry-group">
              <span className="about-entry-type-tag">DEGREE</span>
              <h3 className="about-entry-title">Bachelor of Technology – Computer Science</h3>
              <p className="about-entry-org">Sagar Institute of Research & Technology (SIRT)</p>
              <span className="about-entry-duration">Graduation: July 2026 • CGPA: 7.04 • Bhopal, Madhya Pradesh</span>
              <p className="about-entry-notes">
                Core Coursework: Data Structures & Algorithms, Database Management Systems, Machine Learning,
                Operating Systems, Deep Learning, and Software Engineering.
              </p>
            </div>

            <div className="editorial-divider-line" />

            {/* Foundation */}
            <div className="about-entry-group">
              <span className="about-entry-type-tag">FOUNDATION</span>
              <h3 className="about-entry-title">Higher Secondary Education (Class XII), Mathematics & Science</h3>
              <p className="about-entry-org">Douglas Higher Secondary School</p>
              <span className="about-entry-duration">2021 — 2022 • Percentage: 77.6% • Bhopal, Madhya Pradesh</span>

              <div style={{ marginTop: '18px' }}>
                <h4 className="about-entry-subheading">Secondary Education (Class X)</h4>
                <p className="about-entry-org">Douglas Higher Secondary School</p>
                <span className="about-entry-duration">2019 — 2020 • Percentage: 89% • Bhopal, Madhya Pradesh</span>
              </div>
            </div>

            <div className="editorial-divider-line" />

            {/* Core Competencies */}
            <div className="about-entry-group">
              <span className="about-entry-type-tag">CORE COMPETENCIES</span>
              <div className="about-skills-tag-cloud">
                {[
                  'Python', 'Machine Learning', 'Deep Learning', 'PyTorch',
                  'TensorFlow', 'FastAPI', 'RAG Pipelines', 'Transformers',
                  'LangChain', 'Agno Agents', 'OpenCV', 'Scikit-learn',
                  'SQL', 'Supabase', 'Streamlit', 'Git'
                ].map((skill, sIdx) => (
                  <span key={sIdx} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="editorial-divider-line" /></div>

      {/* SECTION D: Achievements & Certifications */}
      <section className="about-certifications-section">
        <div className="container about-two-col-layout">
          <div className="about-left-sticky-col">
            <h2 className="about-large-sticky-heading">
              Credentials &<br />Certifications
            </h2>
          </div>

          <div className="about-right-content-col">
            <div className="about-certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="about-cert-row">
                  <div className="about-cert-main">
                    <h3 className="about-cert-name">{cert.name}</h3>
                    <span className="about-cert-issuer">{cert.issuer}</span>
                    <p className="about-cert-desc">{cert.desc}</p>
                  </div>
                  <span className="about-cert-status">{cert.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="editorial-divider-line" /></div>

      {/* SECTION E: Dedicated Resume Presentation Area */}
      <section className="about-resume-section">
        <div className="container about-two-col-layout">
          <div className="about-left-sticky-col">
            <h2 className="about-large-sticky-heading">
              Curriculum<br />Vitae
            </h2>
          </div>

          <div className="about-right-content-col">
            <div className="about-resume-box">
              <div className="resume-icon-wrap">
                <FileText size={26} className="text-accent" />
              </div>
              <div className="resume-text-meta">
                <h3 className="resume-box-title">Subhash Kumar Prajapati — Official Resume</h3>
                <p className="resume-box-desc">
                  Complete technical CV documenting engineering projects, machine learning competencies,
                  educational qualifications, and industry data science internship.
                </p>
              </div>

              <div className="resume-actions-row">
                <a
                  href="/subhash_kumar_prajapati_resume.pdf"
                  download="Subhash_Kumar_Prajapati_Resume.pdf"
                  className="btn-primary"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>

                <a
                  href="/subhash_kumar_prajapati_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>View PDF in Browser</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
