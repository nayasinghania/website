import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Title from "@/components/title";

export default function Page() {
  return (
    <div>
      <Title />
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <Hero />
        <Skills />
      </div>

      <Projects />
      <Footer />
    </div>
  );
}
