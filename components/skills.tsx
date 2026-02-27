import Image from "next/image";
import type { SkillType } from "@/lib/types";

const skills: SkillType[] = [
  // ML/AI
  { name: "AWS", logo: "https://www.svgrepo.com/show/448266/aws.svg" },
  {
    name: "Rasa AI",
    logo: "https://striking-kindness-e0d93214bb.media.strapiapp.com/Rasa_logo_5a1c2bbe65.png",
  },
  // Programming Languages
  {
    name: "TypeScript",
    logo: "https://www.svgrepo.com/show/374144/typescript.svg",
  },
  {
    name: "JavaScript",
    logo: "https://www.svgrepo.com/show/353925/javascript.svg",
  },
  { name: "Python", logo: "https://www.svgrepo.com/show/374016/python.svg" },
  { name: "SQL", logo: "https://www.svgrepo.com/show/471315/database-02.svg" },
  { name: "Java", logo: "https://www.svgrepo.com/show/184143/java.svg" },
  { name: "HTML", logo: "https://www.svgrepo.com/show/452228/html-5.svg" },
  { name: "CSS", logo: "https://www.svgrepo.com/show/452185/css-3.svg" },
  // Frameworks & Libraries
  { name: "Next.js", logo: "https://www.svgrepo.com/show/342062/next-js.svg" },
  { name: "React", logo: "https://www.svgrepo.com/show/452092/react.svg" },
  { name: "FastAPI", logo: "https://www.svgrepo.com/show/330413/fastapi.svg" },
  { name: "Vite", logo: "https://www.svgrepo.com/show/374167/vite.svg" },
  {
    name: "Tailwind CSS",
    logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  // Databases
  {
    name: "PostgreSQL",
    logo: "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
  { name: "MongoDB", logo: "https://www.svgrepo.com/show/373845/mongo.svg" },
  // Cloud & DevOps
  { name: "Docker", logo: "https://www.svgrepo.com/show/452192/docker.svg" },
  { name: "GCP", logo: "https://www.svgrepo.com/show/353805/google-cloud.svg" },
  { name: "Linux", logo: "https://www.svgrepo.com/show/354004/linux-tux.svg" },
  {
    name: "Git",
    logo: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
  },
  { name: "Cypress", logo: "https://www.svgrepo.com/show/373542/cypress.svg" },
  { name: "Jupyter", logo: "https://www.svgrepo.com/show/373718/jupyter.svg" },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-4 mb-4 lg:mb-0">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-primary text-primary-foreground  p-1 rounded-md flex flex-col items-center min-w-12 lg:min-w-24"
        >
          <p className="font-semibold mb-1 text-xs lg:text-sm hidden lg:block">
            {skill.name}
          </p>
          <Image
            src={skill.logo}
            height={24}
            width={24}
            alt={`${skill.name}logo`}
            className=""
          />
        </div>
      ))}
    </div>
  );
}
