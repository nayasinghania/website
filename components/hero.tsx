import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
      <div className="flex gap-8 items-center sm:items-start w-full sm:w-auto">
        <Image
          src="/avatar.jpg"
          width={124}
          height={124}
          alt="vercel logo"
          className="rounded-lg w-24 h-24 sm:w-[124px] sm:h-[124px] object-cover flex-shrink-0"
        />
        <div className="sm:hidden">
          <h1 className="mb-2">Hi, I'm Naya</h1>
        </div>
      </div>
      <div className="hidden sm:block">
        <h1 className="mb-4 mt-2 md:mb-4">Hi, I'm Naya</h1>
        <p className="font-semibold text-lg">
          Backend Software Engineer specializing in Applied ML/AI
        </p>
      </div>
      <div className="sm:hidden w-full">
        <p className="font-semibold text-lg">
          Backend Software Engineer specializing in Applied ML/AI
        </p>
      </div>
    </div>
  );
}
