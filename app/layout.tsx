import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ConstellationBackground from "@/components/constellation-background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Naya Singhania - Portfolio",
  description:
    "Naya Singhania | Computer Science @ San Jose State University | Software Engineer Specializing in Applied AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.className} ${spaceGrotesk.variable}`}
    >
      <body className="container mx-auto px-4 md:mx-8 bg-background mb-12">
        <div className="hidden md:block">
          <ConstellationBackground />
        </div>
        {children}
      </body>
    </html>
  );
}
