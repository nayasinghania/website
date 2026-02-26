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
          <li key={skill} className="bg-secondary p-2 text-xs rounded-md">
            {skill}{" "}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {project.url && <Button variant="outline">Live Demo</Button>}
        <Button variant="outline">Github</Button>
      </div>
    </div>
  );
}
