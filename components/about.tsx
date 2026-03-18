import { about } from "@/lib/content";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p className="font-semibold">{about.description}</p>
    </div>
  );
}
