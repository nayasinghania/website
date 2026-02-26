"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div>
      <div className="fixed bg-black w-[90%] py-4">
        <h1 className="bg-linear-to-r from-blue-500 via-purple-500 bg-clip-text text-transparent pb-2">
          Naya Singhania
        </h1>
        <h2>
          Computer Science @ San Jose State University ~ Software Engineer
          Specializing in Applied AI/ML
        </h2>
      </div>
      <div className="lg:h-28 md:h-36 h-44"></div>

      <h2></h2>
      <div className="flex gap-4 my-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
          className="shrink-0"
        >
          <Image
            src="/portrait.jpg"
            width={128}
            height={128}
            alt="portrait of naya singhania"
            className="rounded-md border-2 border-white"
          />
        </motion.div>

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
