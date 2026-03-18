export const seo = {
  title: "Naya Singhania",
  description:
    "Naya Singhania's personal website showcasing projects, skills, and contact information.",
};

export const about = {
  description:
    "I'm a backend software engineer specializing in applied machine learning and AI. I have experience building scalable systems, developing ML models, and working with cloud technologies. I'm passionate about using technology to solve real-world problems and create impactful solutions.",
};

export const hero = {
  name: "Naya",
  title: "Backend Software Engineer specializing in Applied ML/AI",
  avatar: "/avatar.jpg",
  links: [
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/nayasinghania",
      icon: "https://www.svgrepo.com/show/448234/linkedin.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/nayasinghania",
      icon: "/skills/github.svg",
    },
  ],
};

export const education = [
  {
    school: "San José State University",
    degree: "B.S. Computer Science",
    location: "San José, CA",
    start: "Aug 2023",
    end: "May 2027",
    period: "Expected Grad",
    year: "May 2027",
    image: "/sjsu.png",
    link: "https://sjsu.edu",
    coursework: [
      {
        name: "Data Structures and Algorithms",
        shortName: "Data Struct & Alg",
      },
      { name: "Object Oriented Programming", shortName: "OOP" },
      { name: "Machine Learning", shortName: "ML" },
      { name: "Operating Systems", shortName: "OS" },
    ],
    orgs: [
      {
        name: "ACM @ SJSU",
        role: "Workshop Lead",
      },
      { name: "Spartan Disability Alliance", role: "President" },
    ],
  },
];

export const work = [
  {
    company: "Yottasecure",
    title: "AI Software Engineer Intern",
    location: "Remote",
    start: "Dec 2025",
    end: "Present",
    period: "Spring",
    year: "2026",
    image: "/work/ys.jpg",
    description:
      "Built RAG-based vulnerability analysis using AWS Bedrock to improve detection quality, patched ~50 high-severity CVEs across dependencies, and expanded Trivy scanning to support filesystem, Kubernetes, and SBOM targets.",
    link: "https://ai.yottasecure.com",
  },
  {
    company: "Mundoprints",
    title: "Software Engineer Intern",
    location: "Remote",
    start: "Aug 2025",
    end: "Dec 2025",
    period: "Fall",
    year: "2025",
    image: "/work/mp.jpg",
    description:
      "Developed serverless backend systems with AWS Lambda and API Gateway, improved authentication performance by 50%+ using Cognito and DynamoDB, automated Cypress testing to reduce QA time by 90%, and built pricing models on 100k+ records (R² = 0.95).",
    link: "https://mundoprints.in/about",
  },
  {
    company: "Y Stem and Chess Inc",
    title: "Software Engineer Intern",
    location: "Remote",
    start: "May 2024",
    end: "Aug 2024",
    period: "Summer",
    year: "2024",
    image: "/work/ystem.jpg",
    description:
      "Improved platform performance by redesigning React–Express data pipelines and optimizing MongoDB queries, reducing latency by 30% for 10k+ users, and enabled real-time gameplay with scalable WebSocket systems (<100ms latency).",
    link: "https://www.ystemandchess.com/mu",
  },
];

export const projects = [
  {
    name: "Caltrain Delay Predictor",
    url: "https://github.com/nayasinghania/caltrain-delay",
    github: "https://github.com/nayasinghania/caltrain-delay",
    description:
      "Developed a machine learning system to predict Caltrain delays across 31 stations using historical transit and weather data. Deployed on FastAPI and Next.js for public availability.",
    images: ["/projects/caltrain.jpg"],
    skills: ["Python", "PyTorch", "XGBoost", "FastAPI", "Docker"],
    start: "Mar 2026",
    end: "Present",
  },
  {
    name: "Accuguide",
    url: "https://accuguide.org",
    github: "https://github.com/nayasinghania/accuguide",
    description:
      "Built a Next.js platform that helps disabled users discover and review accessibility of public locations, serving 100+ users.",
    images: ["/projects/accuguide.png"],
    skills: [
      "Next.js",
      "PostgreSQL",
      "FastAPI",
      "XGBoost",
      "React",
      "AWS",
      "LLMs",
      "RAG",
      "CI/CD",
    ],
    start: "Dec 2024",
    end: "Present",
  },
  {
    name: "Restroom Finder",
    url: "https://github.com/nayasinghania/restroom-finder",
    github: "https://github.com/nayasinghania/restroom-finder",
    description:
      "Built an application using Express and React that helps people locate accessible restrooms that are stocked with supplies. Developed backend endpoints and computer vision features. Built for SJHacks 2025.",
    images: ["/projects/sjhacks.jpg"],
    skills: ["Next.js", "React", "PyTorch", "LLMs"],
    start: "Feb 2025",
    end: "August 2025",
  },
  {
    name: "Spartan Score",
    url: "https://spartan-score.netlify.app",
    github: "https://github.com/nayasinghania/spartan-score",
    description:
      "Built a GPA calculator that works off of a screenshot of grades from Canvas. Uses Tesseract OCR to parse images.",
    images: ["/projects/score.png"],
    skills: ["Next.js", "React", "OCR"],
    start: "Feb 2025",
    end: "August 2025",
  },
];

export const skills = [
  {
    name: "Python",
    icon: "https://www.svgrepo.com/show/452091/python.svg",
  },
  {
    name: "TypeScript",
    icon: "https://www.svgrepo.com/show/374144/typescript.svg",
  },
  {
    name: "SQL",
    icon: "https://www.svgrepo.com/show/374093/sql.svg",
  },
  {
    name: "Java",
    icon: "https://www.svgrepo.com/show/452234/java.svg",
  },
  {
    name: "C",
    icon: "https://www.svgrepo.com/show/373482/c.svg",
  },
  {
    name: "PyTorch",
    icon: "https://www.svgrepo.com/show/354240/pytorch.svg",
  },
  {
    name: "XGBoost",
    icon: "/skills/xgb.svg",
  },
  {
    name: "scikit-learn",
    icon: "/skills/sci.ico",
  },
  {
    name: "LLMs",
    icon: "/skills/groq.png",
  },
  {
    name: "RAG",
    icon: "/skills/rag.svg",
  },
  {
    name: "FastAPI",
    icon: "/skills/fastapi.svg",
  },
  {
    name: "Express",
    icon: "/skills/express.svg",
  },
  {
    name: "Node.js",
    icon: "https://www.svgrepo.com/show/452075/node-js.svg",
  },
  {
    name: "Next.js",
    icon: "/skills/next.svg",
  },
  {
    name: "Cypress",
    icon: "/skills/cypress.svg",
  },
  {
    name: "React",
    icon: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
  {
    name: "MongoDB",
    icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "AWS",
    icon: "/skills/aws.svg",
  },
  {
    name: "Docker",
    icon: "https://www.svgrepo.com/show/452192/docker.svg",
  },
  {
    name: "CI/CD",
    icon: "/skills/github.svg",
  },
  {
    name: "Linux",
    icon: "https://www.svgrepo.com/show/448236/linux.svg",
  },
  {
    name: "Git",
    icon: "https://www.svgrepo.com/show/452210/git.svg",
  },
];

export const footer = {
  holder: "Naya Singhania",
};
