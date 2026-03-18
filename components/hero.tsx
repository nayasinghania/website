import Image from "next/image";
import { hero } from "@/lib/content";

function HeroSub() {
  return (
    <div>
      <p className="font-semibold text-lg">{hero.title}</p>
      <div className="flex gap-2 mt-2">
        {hero.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-xs font-semibold"
          >
            <Image
              src={link.icon}
              width={20}
              height={20}
              alt={`${link.name} icon`}
              className="w-4 h-4"
            />
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
      <div className="flex gap-8 items-center sm:items-start w-full sm:w-auto">
        <Image
          src={hero.avatar}
          width={128}
          height={128}
          alt="vercel logo"
          className="rounded-lg w-24 h-24 sm:w-32 sm:h-32 object-cover shrink-0"
        />
        <div className="sm:hidden">
          <h1 className="mb-2">Hi, I'm {hero.name}</h1>
        </div>
      </div>
      <div className="hidden sm:block">
        <h1 className="mb-4 mt-2 md:mb-4">Hi, I'm {hero.name}</h1>
        <HeroSub />
      </div>
      <div className="sm:hidden w-full">
        <HeroSub />
      </div>
    </div>
  );
}
