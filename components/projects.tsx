import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-slate-700 bg-slate-800/50 overflow-hidden flex flex-col"
          >
            <Image
              src={project.images[0]}
              alt={project.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-slate-400 font-semibold text-xs">
                    {project.start} - {project.end}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-md border border-slate-600 bg-slate-700/50 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
