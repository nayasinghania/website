import Project from "@/components/project";
import type { ProjectType } from "@/lib/types";

const projects: ProjectType[] = [
  {
    title: "Accuguide",
    start: "Dec 2024",
    end: "Present",
    url: "https://accuguide.app",
    github: "https://github.com/nayasinghania/accuguide",
    description:
      "Accuguide is an open-source project designed to help people with disabilities find, review, and better understand the accessibility of public spaces. Users can search for and rate locations based on detailed accessibility indicators, such as wheelchair access, sensory-friendly environments, and more, making it easier for others to navigate the world with confidence.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "GCP",
      "RAG",
      "LLM",
    ],
  },
  {
    title: "Spartan Score",
    start: "Jan 2025",
    end: "Present",
    url: "https://spartanscore.app",
    github: "https://github.com/nayasinghania/spartan-score",
    description:
      "Spartan Score is a web app for SJSU students to be able to easily calculate their current GPA and see how their grades will affect their GPA in the future.",
    skills: ["Next.js"],
  },
  {
    title: "Scrobble Quiz",
    start: "Feb 2025",
    end: "Present",
    url: "https://scrobblequiz.app",
    github: "https://github.com/nayasinghania/scrobble-quiz",
    description:
      "Test your music knowledge based on your Last.fm (music service) history! This project uses both traditional ML and generative AI to generate relevant quiz questions for the user.",
    skills: ["ML", "Generative AI"],
  },
  {
    title: "Technical Portfolio Website",
    start: "Jan 2022",
    end: "Present",
    github: "https://github.com/nayasinghania/website",
    description:
      "My personal website (the one you are currently on) that utilizes Astro with Tailwind CSS, with some CSS animations as well.",
    skills: ["Astro", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="-mb-2">Projects</h2>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}
