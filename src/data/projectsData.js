export const projectsData = [
  {
    id: 'ai-disease-diagnosis',
    title: 'AI Disease Diagnosis',
    category: 'Machine Learning & Computer Vision',
    filterCategory: 'Machine Learning',
    secondaryCategories: ['Computer Vision', 'Deep Learning'],
    microTag: 'DEEP LEARNING · MEDICAL DIAGNOSTICS',
    shortDesc: 'Clinical assistance image screening & symptom classification model',
    gradient: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 45%, #0f172a 100%)',
    accentColor: '#818cf8',
    problem: 'Early clinical screening bottlenecks delay patient triage. This diagnostic assistance model analyzes medical imagery and patient physiological metrics to flag anomalies for clinical review.',
    features: [
      'Convolutional neural network classification architecture with data augmentation techniques',
      'Rigorous ROC-AUC evaluation and confusion matrix diagnostics to minimize false negative rates',
      'Automated symptom feature normalization pipeline with statistical distribution validation',
      'Interpretable feature attribution highlighting diagnostic regions of interest'
    ],
    tech: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
    githubUrl: 'https://github.com/Subhash-Prajapati02',
    demoUrl: null,
    artworkType: 'medical'
  },
  {
    id: 'apni-class',
    title: 'ApniClass – AI-Based Attendance System',
    category: 'AI & Facial Recognition',
    filterCategory: 'Computer Vision',
    secondaryCategories: ['Full Stack', 'Machine Learning'],
    microTag: 'COMPUTER VISION · ATTENDANCE AUTOMATION',
    shortDesc: 'Face & voice-based real-time biometric attendance system',
    gradient: 'linear-gradient(145deg, #064e3b 0%, #065f46 45%, #022c22 100%)',
    accentColor: '#34d399',
    problem: 'Manual roll-call is time-consuming and vulnerable to proxy attendance. ApniClass automates attendance logging via real-time multi-modal face and voice biometric verification.',
    features: [
      'Built a full-stack attendance system using Streamlit and Supabase with separate dashboards for students and teachers',
      'Implemented secure authentication with hashed passwords and session management',
      'Designed join-code based enrollment system allowing students to enroll via shareable links',
      'Developed real-time attendance tracking and subject management with database integration',
      'Integrated face and voice-based attendance features (ML-based) and deployed the application publicly on Streamlit Cloud'
    ],
    tech: ['Python', 'Streamlit', 'Supabase', 'OpenCV', 'Machine Learning', 'SQL'],
    githubUrl: 'https://github.com/Subhash-Prajapati02',
    demoUrl: 'https://streamlit.io',
    artworkType: 'vision'
  },
  {
    id: 'intellicast',
    title: 'RAG-based Chatbot',
    category: 'NLP, LLM & RAG',
    filterCategory: 'Generative AI',
    secondaryCategories: ['Full Stack'],
    microTag: 'KNOWLEDGE RETRIEVAL · RAG & LLM',
    shortDesc: 'Context-grounded RAG chatbot with vector embeddings & FastAPI',
    gradient: 'linear-gradient(145deg, #1e3a8a 0%, #2563eb 50%, #0f172a 100%)',
    accentColor: '#60a5fa',
    problem: 'Off-the-shelf LLMs hallucinate and lack private organizational context. This RAG system indexes documents into high-dimensional vector embeddings to retrieve relevant context before prompt synthesis.',
    features: [
      'Built a Retrieval-Augmented Generation system to answer user queries from documents',
      'Implemented document chunking, embeddings, and semantic vector search',
      'Integrated LLM for contextual, grounded answer generation',
      'Developed backend using FastAPI for low-latency, real-time interaction'
    ],
    tech: ['Python', 'FastAPI', 'FAISS', 'LangChain', 'OpenAI API', 'Pydantic', 'RAG'],
    githubUrl: 'https://github.com/Subhash-Prajapati02',
    demoUrl: null,
    artworkType: 'rag'
  },
  {
    id: 'cattle-breed-prediction',
    title: 'Cattle Breed Prediction',
    category: 'Deep Learning & Computer Vision',
    filterCategory: 'Deep Learning',
    secondaryCategories: ['Computer Vision'],
    microTag: 'IMAGE CLASSIFICATION · CONVOLUTIONAL NETWORKS',
    shortDesc: 'Livestock breed identification using CNNs and transfer learning',
    gradient: 'linear-gradient(145deg, #78350f 0%, #451a03 50%, #1c0a00 100%)',
    accentColor: '#fb923c',
    problem: 'Manual livestock breed identification in agricultural surveying requires specialized veterinary knowledge. This model classifies breeds automatically from camera photographs.',
    features: [
      'Deep Convolutional Neural Network fine-tuned on multi-class livestock imagery',
      'Data augmentation pipeline with random rotations, brightness adjustments, and scaling transformations',
      'Classification precision evaluated across diverse photographic conditions',
      'Lightweight inference export structured for field devices and mobile platforms'
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Data Augmentation', 'Scikit-learn'],
    githubUrl: 'https://github.com/Subhash-Prajapati02',
    demoUrl: null,
    artworkType: 'detection'
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI (Agno)',
    category: 'Agentic Workflows & Multi-Agent LLMs',
    filterCategory: 'Generative AI',
    secondaryCategories: ['Full Stack'],
    microTag: 'AUTONOMOUS AGENTS · REASONING & TOOLS',
    shortDesc: 'Multi-agent orchestration with autonomous tool-calling pipelines',
    gradient: 'linear-gradient(145deg, #4c1d95 0%, #311042 50%, #0f0728 100%)',
    accentColor: '#c084fc',
    problem: 'Single-turn prompts cannot autonomously orchestrate complex multi-step objectives requiring dynamic web research, translation, video indexing, and verification.',
    features: [
      'Built multiple AI agents using Agno to demonstrate agentic AI concepts and LLM workflows',
      'Developed Finance, YouTube Analysis, Translation, and Travel agents for task automation',
      'Implemented prompt engineering, tool usage, and multi-step reasoning',
      'Explored agent architecture, task decomposition, and LLM orchestration'
    ],
    tech: ['Python', 'Agno', 'OpenAI API', 'LangChain', 'Tool Calling', 'Agentic AI'],
    githubUrl: 'https://github.com/Subhash-Prajapati02',
    demoUrl: null,
    artworkType: 'agentic'
  }
]
