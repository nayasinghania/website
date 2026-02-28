import Link from "next/link";
import type { ProjectType } from "@/lib/types";
import Dates from "./dates";
import { Button } from "./ui/button";
export default function Project({ project }: { project: ProjectType }) {
  const date = {
    start: project.start,
    end: project.end,
  };
  return (
    <div>
      <h3 className="mt-4">{project.title}</h3>
      <Dates date={date} />
      <p className="my-2">{project.description}</p>
      <ul className="flex flex-wrap gap-2 my-2">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="bg-primary/30 text-primary-background backdrop-blur-xs border border-primary/30 shadow-lg p-2 text-xs rounded-md"
          >
            {skill}{" "}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {project.url && (
          <Link href={project.url} target="_blank">
            <Button variant="outline">Live Demo</Button>
          </Link>
        )}
        <Link href={project.github} target="_blank">
          <Button variant="outline">Github</Button>
        </Link>{" "}
      </div>
    </div>
  );
}
