import Image from "next/image";

const projects = [
  {
    title: "Accuguide",
    link: "https://accuguide.org",
    description:
      "Accuguide is an open-source project designed to help people with disabilities find, review, and better understand the accessibility of public spaces.",
    image: "/projects/accuguide.png",
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
    title: "Cal Ignite",
    link: "https://github.com/nayasinghania/cal-ignite",
    description:
      "Cal Ignite is a project that aims to use a 6 year span of daily California weather data to predict wildfire risk for 4km regions",
    image: "/projects/cal.png",
    skills: ["Python", "XGBoost", "PyTorch"],
  },
  {
    title: "Spartan Score",
    link: "https://spartan-score.netlify.app",
    description:
      "Spartan Score is a web app for SJSU students to be able to easily calculate their current GPA and see how their grades will affect their GPA in the future.",
    image: "/projects/spartan.png",
    skills: ["Next.js", "OCR"],
  },
  {
    title: "Scrobble Quiz",
    link: "https://github.com/nayasinghania/scrobble-quiz",
    description:
      "Test your music knowledge based on your Last.fm (music service) history! This project uses both traditional ML and generative AI to generate relevant quiz questions for the user.",
    image: "/projects/scrobble.png",
    skills: ["Next.js", "LLM Integration", "Last.FM API"],
  },
  {
    title: "Portfolio Website",
    link: "https://nayasinghania.com",
    description:
      "My personal website (the one you are currently on) that utilizes Next.js with Tailwind CSS, with some CSS animations as well.",
    image: "/projects/website.png",
    skills: ["Next.js", "Tailwind CSS", "Shadcn", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <li key={project.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200  group/link text-base"
                    >
                      <span>
                        <span> {project.title}</span>
                        <svg
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <title>
                            {`${project.title}link to${project.link}`}
                          </title>
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {project.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image}
                  alt={project.title}
                  width={128}
                  height={128}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
