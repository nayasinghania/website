import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { seo } from "@/lib/content";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans dark", inter.variable)}>
      <body
        className={`${inter.variable} antialiased my-8 lg:my-16 mx-auto px-4 md:px-32 lg:px-48 max-w-7xl`}
      >
        {children}
      </body>
    </html>
  );
}
