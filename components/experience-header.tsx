import Image from "next/image";

interface ExperienceHeaderProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  start: string;
  end: string;
}

export default function ExperienceHeader({
  image,
  imageAlt,
  title,
  subtitle1,
  subtitle2,
  start,
  end,
}: ExperienceHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={image}
        alt={imageAlt}
        width={36}
        height={36}
        className="rounded-sm hidden sm:block"
      />
      <div className="flex-1">
        <h3>{title}</h3>
        <p className="text-slate-400 font-semibold">
          <span className="sm:hidden">{subtitle1}</span>
          <span className="hidden sm:inline">
            {subtitle1} • {subtitle2}
          </span>
        </p>
      </div>
      <p className="text-slate-400 font-semibold text-xs">
        <span className="sm:hidden flex flex-col">
          <span className="text-right">{start}</span>
          <span className="text-right">-</span>
          <span className="text-right">{end}</span>
        </span>
        <span className="hidden sm:inline">
          {start} - {end}
        </span>
      </p>
    </div>
  );
}
