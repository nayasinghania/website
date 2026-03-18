import { education } from "@/lib/content";
import ExperienceHeader from "@/components/experience-header";

export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.school} className="flex flex-col gap-4">
            <ExperienceHeader
              image={edu.image}
              imageAlt={edu.school}
              title={edu.degree}
              subtitle1={edu.school}
              subtitle2={edu.location}
              start={edu.start}
              end={edu.end}
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="hidden sm:block font-semibold mb-2">Relevant Coursework</p>
                <p className="block sm:hidden font-semibold mb-2 text-center">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <div
                      key={course.name}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-xs font-semibold"
                    >
                      <span className="sm:hidden">{course.shortName}</span>
                      <span className="hidden sm:inline">{course.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="hidden sm:block font-semibold mb-2">Organizations</p>
                <p className="block sm:hidden text-center font-semibold mb-2">
                  Organizations
                </p>

                <div className="space-y-2">
                  {edu.orgs.map((org) => (
                    <div
                      key={org.name}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50"
                    >
                      <p className="text-xs font-semibold">{org.name}</p>
                      <p className="text-xs text-slate-400 font-semibold">{org.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
