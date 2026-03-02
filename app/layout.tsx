import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="bg-indigo-950 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
