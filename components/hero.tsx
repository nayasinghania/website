import About from "@/components/about";
import Contact from "@/components/contact";
import Portrait from "@/components/portrait";

export default function Hero() {
  return (
    <div>
      {" "}
      <div className="hidden sm:block">
        <div className="flex gap-4 mb-4">
          <Portrait />
          <About />
        </div>
        <Contact />
      </div>
      <div className="block sm:hidden">
        <div className="flex gap-4">
          <Portrait />
          <Contact />
        </div>
        <div className="h-4" />
        <About />
      </div>
    </div>
  );
}
