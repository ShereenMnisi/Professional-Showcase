import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Shereen Mokone | Front-end Developer | Web Developer | Digital Marketing | CMS & E-Commerce",
  description:
    "Shereen Mokone is a front-end developer, web developer, digital marketing, CMS and e-commerce professional based in Johannesburg / Midrand, South Africa.",
  openGraph: {
    title:
      "Shereen Mokone | Front-end Developer | Web Developer | Digital Marketing | CMS & E-Commerce",
    description:
      "Creating responsive, user-focused digital experiences with React, TypeScript, SEO, and modern CMS platforms.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
