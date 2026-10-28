import type { Metadata } from "next";
import {
  Fraunces,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const frauncesItalic = Fraunces({
  subsets: ["latin"],
  style: "italic",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces-italic",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kyle Ando | Personal Portfolio",
    template: "%s | Kyle Ando",
  },
  description:
    "Explore the projects, skills, and tech blogs of Kyle Ando, a student developer passionate about modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${frauncesItalic.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
