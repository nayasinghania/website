import { footer } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="text-xs font-semibold mt-12">
        Copyright {currentYear} {footer.holder}
      </p>
    </footer>
  );
}
