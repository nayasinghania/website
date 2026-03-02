import { Github, Linkedin } from "lucide-react";

export default function Left() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Naya Singhania
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          SWE + Applied AI/ML
        </h2>
        <p className="mt-4 max-w-xs leading-normal font-semibold">
          I build software with real impact
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 active"
                href="#projects"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block"
            href="https://linkedin.com/in/nayasinghania"
            target="_blank"
            rel="noopener"
          >
            <Linkedin />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block"
            href="https://github.com/nayasinghania"
            target="_blank"
            rel="noopener"
          >
            <Github />
          </a>
        </li>
      </ul>
    </header>
  );
}
