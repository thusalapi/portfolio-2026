import React from "react";
import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/structured-data";
import { GradientBubbles } from "@/components/gradient-bubbles";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thusala.me"),
  title: {
    default: "Thusala Piyarisi - Full-Stack Developer & Problem Solver",
    template: "%s | Thusala Piyarisi",
  },
  description:
    "Full-Stack Developer specializing in modern web development, microservices architecture, and scalable solutions. Based in Sri Lanka. Currently at Rootcode.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Development",
    "Microservices",
    "React",
    "Node.js",
    "Sri Lanka",
  ],
  authors: [{ name: "Thusala Piyarisi", url: "https://thusala.me" }],
  creator: "Thusala Piyarisi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thusala.me",
    title: "Thusala Piyarisi - Full-Stack Developer & Problem Solver",
    description:
      "Transform complex ideas into elegant, scalable solutions. Specializing in modern web development and microservices architecture.",
    siteName: "Thusala Piyarisi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thusala Piyarisi - Full-Stack Developer",
    description: "Transform complex ideas into elegant, scalable solutions.",
    creator: "@thusalapov",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://thusala.me" />
        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        <GradientBubbles />
        {children}
      </body>
    </html>
  );
}
