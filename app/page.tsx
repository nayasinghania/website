import About from "@/components/about";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
