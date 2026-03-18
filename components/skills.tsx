import Image from "next/image";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/50"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="font-semibold text-xs">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
