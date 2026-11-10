import { Brain, Layers, Cpu, Compass } from 'lucide-react'

const principles = [
  {
    icon: Brain,
    title: 'Research to Production',
    description: 'Transforming theoretical machine learning papers and algorithms into fast, reliable production pipelines.'
  },
  {
    icon: Layers,
    title: 'End-to-End Architecture',
    description: 'From vector database indexing and chunking strategies to backend API deployment and monitoring.'
  },
  {
    icon: Cpu,
    title: 'Agentic Workflows',
    description: 'Designing autonomous multi-agent systems with tool use, memory decomposition, and structured reasoning.'
  },
  {
    icon: Compass,
    title: 'Impact-Oriented ML',
    description: 'Prioritizing tangible problem-solving over vanity metrics — building systems that serve practical human needs.'
  }
]

export default function About() {
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-eyebrow">01 / About</span>
        <h2 className="section-heading">Translating Complex Models into Working Systems.</h2>
      </div>

      <div className="about-content-layout">
        <div className="about-narrative">
          <p className="lead-paragraph">
            I am <strong>Subhash Kumar Prajapati</strong>, an AI/ML Engineer based in
            Bhopal, India. Pursuing a Bachelor of Technology in Computer Science from
            Sagar Institute of Research & Technology (SIRT), my focus centers on the
            convergence of <strong>Machine Learning</strong>, <strong>Generative AI</strong>,
            and <strong>scalable software engineering</strong>.
          </p>
          <p>
            My practical experience spans building end-to-end applications powered by
            Transformers, Retrieval-Augmented Generation (RAG) architectures, and deep neural networks.
            From developing computer vision face-recognition models during my internship at
            <strong> Null Class Technology</strong> to engineering full-stack attendance systems and
            document intelligence chatbots with <strong>FastAPI</strong> and <strong>Supabase</strong>,
            I focus on robust implementations.
          </p>
          <p>
            Currently, I am actively exploring <strong>Agentic AI</strong> and multi-agent coordination
            frameworks like Agno. My professional goal is to work alongside collaborative engineering
            teams building next-generation AI infrastructure and intelligent products.
          </p>
        </div>

        <div className="about-cards-grid">
          {principles.map((item, idx) => (
            <div key={idx} className="minimal-card about-card">
              <div className="card-icon-wrap">
                <item.icon size={20} className="card-icon" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
