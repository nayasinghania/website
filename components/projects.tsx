import Project from "@/components/project";
import type { ProjectType } from "@/lib/types";

const projects: ProjectType[] = [
  {
    title: "Accuguide",
    start: "Dec 2024",
    end: "Present",
    url: "https://accuguide.org",
    github: "https://github.com/accuguide/accuguide",
    description:
      "Accuguide is an open-source project designed to help people with disabilities find, review, and better understand the accessibility of public spaces.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Google Cloud",
      "RAG",
      "LLMs",
    ],
  },
  {
    title: "Spartan Score",
    start: "Jan 2025",
    end: "Present",
    url: "https://spartan-score.netlify.app",
    github: "https://github.com/nayasinghania/spartan-score",
    description:
      "Spartan Score is a web app for SJSU students to be able to easily calculate their current GPA and see how their grades will affect their GPA in the future.",
    skills: ["Next.js", "MongoDB", "Logistic Regression", "Web Scraping"],
  },
  {
    title: "Scrobble Quiz",
    start: "Feb 2025",
    end: "Present",
    github: "https://github.com/nayasinghania/scrobble-quiz",
    description:
      "Test your music knowledge based on your Last.fm (music service) history! This project uses both traditional ML and generative AI to generate relevant quiz questions for the user.",
    skills: ["Next.js", "LLM Integration", "Last.FM API"],
  },
  {
    title: "Portfolio Website",
    start: "Jan 2022",
    end: "Present",
    github: "https://github.com/nayasinghania/website",
    description:
      "My personal website (the one you are currently on) that utilizes Next.js with Tailwind CSS, with some CSS animations as well.",
    skills: ["Next.js", "Tailwind CSS", "Shadcn", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="-mb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
