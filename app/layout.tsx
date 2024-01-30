import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ako's Developer Journal",
  description: "Read all about Ako's journey to learning to web development and beyond. Focused on React, Next.js and TypeScript.",
};

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
};