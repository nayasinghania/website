import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function Right() {
  return (
    <main className="pt-24 lg:w-[52%] lg:py-24">
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
