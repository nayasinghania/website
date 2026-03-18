import { work } from "@/lib/content";
import ExperienceHeader from "@/components/experience-header";

export default function Work() {
  return (
    <div>
      <h2>Work Experience</h2>
      <div className="space-y-6">
        {work.map((job, index) => (
          <div key={index} className="flex flex-col gap-4">
            <ExperienceHeader
              image={job.image}
              imageAlt={job.company}
              title={job.title}
              subtitle1={job.company}
              subtitle2={job.location}
              start={job.start}
              end={job.end}
            />
            <p className="text-slate-300 leading-relaxed">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
