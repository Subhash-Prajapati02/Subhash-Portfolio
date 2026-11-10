import {
  Code,
  BrainCircuit,
  Bot,
  Layers,
  LineChart,
  Database,
  Terminal
} from 'lucide-react'

const skillGroups = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Foundational and modern predictive modeling',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Transformers',
      'Reinforcement Learning',
      'OpenAI API'
    ]
  },
  {
    icon: Bot,
    title: 'Generative AI & LLMs',
    description: 'Modern prompt, context, and autonomous agent architectures',
    skills: [
      'RAG Pipelines',
      'Agentic AI',
      'Generative AI',
      'LangChain',
      'Agno Agents'
    ]
  },
  {
    icon: Layers,
    title: 'Frameworks & Tools',
    description: 'Core ML computation and backend inference engines',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'FastAPI',
      'Streamlit'
    ]
  },
  {
    icon: Code,
    title: 'Programming Languages',
    description: 'Core languages for AI systems and software engineering',
    skills: ['Python', 'JavaScript']
  },
  {
    icon: LineChart,
    title: 'Data Analysis & Libraries',
    description: 'Statistical analysis, preprocessing, and validation',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Pydantic'
    ]
  },
  {
    icon: Database,
    title: 'Databases & Storage',
    description: 'Relational data management and cloud vector/relational sync',
    skills: ['SQL', 'Supabase']
  },
  {
    icon: Terminal,
    title: 'Developer Environment',
    description: 'Version control and development toolchains',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'PyCharm',
      'Jupyter Notebook'
    ]
  }
]

export default function Skills() {
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-eyebrow">02 / Technical Skills</span>
        <h2 className="section-heading">Architectural & Applied Stack.</h2>
        <p className="section-subtext">
          A focused collection of tools, libraries, and frameworks verified through my project work and internship experience.
        </p>
      </div>

      <div className="skills-category-grid">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="minimal-card skill-card">
            <div className="skill-card-top">
              <div className="card-icon-wrap">
                <group.icon size={19} className="card-icon" />
              </div>
              <div>
                <h3 className="skill-card-title">{group.title}</h3>
                <span className="skill-card-meta">{group.description}</span>
              </div>
            </div>

            <div className="skill-pills-wrap">
              {group.skills.map((skill, sIdx) => (
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
