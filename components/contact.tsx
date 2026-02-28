import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="https://linkedin.com/in/nayasinghania" target="_blank">
        <Button variant="outline">
          <Linkedin className="size-5" />
        </Button>
      </Link>
      <Link href="https://github.com/nayasinghania" target="_blank">
        <Button variant="outline">
          <Github className="size-5" />
        </Button>
      </Link>
    </div>
  );
}
