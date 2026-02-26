import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div>
      <div className="fixed bg-black w-full py-4">
        <h1 className="bg-linear-to-r from-blue-500 via-purple-500 bg-clip-text text-transparent pb-2 max-w-xl">
          Naya Singhania
        </h1>
        <h2 className="hidden lg:block">
          Computer Science @ San Jose State University ~ Software Engineer
          Specializing in Applied AI/ML
        </h2>
        <h2 className="hidden md:block lg:hidden">
          Computer Science @ San Jose State University
        </h2>
        <h2 className="hidden md:block lg:hidden">
          Software Engineer Specializing in Applied AI/ML
        </h2>
        <h2 className="block md:hidden">Computer Science @ SJSU</h2>
        <h2 className="block md:hidden">Software Engineer | Applied AI/ML</h2>
      </div>
      <div className="h-36 lg:h-28"></div>

      <div className="flex gap-4 my-4 items-start">
        <Image
          src="/portrait.jpg"
          width={128}
          height={128}
          alt="portrait of naya singhania"
          className="rounded-md border-2 border-white"
        />

        <p>
          Hi, I'm Naya Singhania! I've been passionate about CS since I was 12,
          and that enthusiasm has driven me to explore various technologies and
          frameworks since then. I'm currently working towards a Computer
          Science degree as well as a Computational Linguistics certificate at
          SJSU, where I've deepened my understanding of CS fundamentals and
          honed my skills in Next.js and React. I mainly create dynamic
          fullstack applications with AI integration and seamless user
          experiences, and I'm always eager to learn and adapt to new
          challenges.
        </p>
      </div>

      <div className="flex gap-2 mb-4">
        <Button>Linkedin</Button>
        <Button>Github</Button>
      </div>
    </div>
  );
}
