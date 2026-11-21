export const seo = {
  title: "Naya Singhania",
  description:
    "Naya Singhania's personal website showcasing projects, skills, and contact information.",
};

export const about = {
  description:
    "I'm an aspiring software engineer specializing in backend development and applied machine learning! I am passionate about building reliable, data-driven products that solve real-world problems. I am currently in my last year studying Computer Science at SJSU, working on a ML industry challenge in the healthcare domain at Break Through Tech, and building projects focusing on accessibility and public transit. I'm actively looking for new grad roles and open to connect!",
};

export const hero = {
  name: "Naya",
  title: "Backend Engineer specializing in Applied Machine Learning",
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
      { name: "Database Management Systems", shortName: "Databases" },
      { name: "Linear Algebra", shortName: "Linear Algebra" },
      { name: "Probability and Statistics", shortName: "Probability & Stats" },
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
    company: "Break Through Tech",
    title: "AI Studio Fellow",
    location: "Remote",
    start: "Aug 2026",
    end: "Present",
    period: "Fall",
    year: "2026",
    image: "/work/btt.png",
    description:
      "Working on an industry challenge to predict organ-transplant waitlist outcomes and optimize allocation using machine learning techniques. I was responsible for building full data pipeline with over 500k records and training tree ensemble models, achieving a cross-validates 0.74 ROC-AUC and 0.71 recall. I also maintained much of the project's documentation",
    link: "https://www.breakthroughtech.org",
  },
  {
    company: "Yottasecure",
    title: "Software Engineer Intern",
    location: "Remote",
    start: "Dec 2025",
    end: "Apr 2026",
    period: "Spring",
    year: "2026",
    image: "/work/ys.jpg",
    description:
      "I integrated our Rasa chatbot with backend risk analysis workflows and improved NLU intent classifiers, and expanded backend security worflows to support scanning additional targets, including Git repositories and SBOM files. I also resolved AWS S3 and EC2 infrastructure and Docker issues across our backend services and deployment environment, reducing build failures by 40%.",
    link: "https://www.yottasecure.com",
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
      "I developed and tuned dynamic pricing regression models using over 100K records, achieving an R² of 0.95. I also owned application authentication and the admin dashboard, leveraging AWS Lambda and API Gateway to build and refine backend logic. Using Cypress, I developed end-to-end tests that validated the full user flow and reduced QA time by 90%. I also collaborated directly with the CTO to discuss feature direction and priorities.",
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
      "I reduced platform latency by 30% for over 10k users by redesigning React-Express data pipelines and optimizing backend and MongoDB queries. I also enabled real-time chess gameplay with scalable WebSocket systems and under 100ms of latency.",
    link: "https://www.ystemandchess.com/mu",
  },
];

export const projects = [
  {
    name: "Caltrain Delay Predictor",
    url: "https://caltrain-delay.netlify.app",
    github: "https://github.com/nayasinghania/caltrain-delay",
    description:
      "I developed a machine learning model to predict Caltrain delays across 31 stations using historical transit and weather data. I deployed it on FastAPI and am currently working to enable real-time delay information.",
    images: ["/projects/caltrain.jpg"],
    skills: ["Python", "PyTorch", "XGBoost", "FastAPI", "React"],
    start: "Mar 2026",
    end: "Present",
  },
  {
    name: "Accuguide",
    url: "https://accuguide.org",
    github: "https://github.com/nayasinghania/accuguide",
    description:
      "I built a Next.js platform that helps disabled users discover and review accessibility of public locations, serving 100+ users. I built out the full-stack application, designed the database, and integrated the Google Maps API, LLM APIs, and PostgreSQL full-text search to efficiently get users the data they need. I also maintained this project as open source, attracting over 20 contributors.",
    images: ["/projects/accuguide.png"],
    skills: ["Next.js", "PostgreSQL", "React", "AWS", "Docker", "CI/CD"],
    start: "Dec 2024",
    end: "Present",
  },
  {
    name: "Spartan Score",
    url: "https://spartan-score.netlify.app",
    github: "https://github.com/nayasinghania/spartan-score",
    description:
      "I Built a GPA calculator that can quickly calculate GPA based on a screenshot of grades from Canvas. I used React for the interface and Tesseract for OCR features.",
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
    icon: "https://www.svgrepo.com/show/349540/typescript.svg",
  },
  {
    name: "SQL",
    icon: "https://www.svgrepo.com/show/374093/sql.svg",
  },
  {
    name: "Javascript",
    icon: "https://www.svgrepo.com/show/349419/javascript.svg",
  },
  {
    name: "Java",
    icon: "https://www.svgrepo.com/show/452234/java.svg",
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
    name: "PyTorch",
    icon: "https://www.svgrepo.com/show/354240/pytorch.svg",
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
    name: "REST APIs",
    icon: "https://www.svgrepo.com/show/447473/rest-api.svg",
  },
  {
    name: "Postman API",
    icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Next.js",
    icon: "/skills/next.svg",
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
    name: "DynamoDB",
    icon: "https://www.svgrepo.com/show/353450/aws-dynamodb.svg",
  },
  {
    name: "MySQL",
    icon: "https://www.svgrepo.com/show/373848/mysql.svg",
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
