import React from "react";
import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thusala.me"),
  title: {
    default: "Thusala Piyarisi - Software Engineer",
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
    title: "Thusala Piyarisi - Software Engineer",
    description:
      "Transform complex ideas into elegant, scalable solutions. Specializing in modern web development and microservices architecture.",
    siteName: "Thusala Piyarisi",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Thusala Piyarisi - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thusala Piyarisi - Full-Stack Developer",
    description: "Transform complex ideas into elegant, scalable solutions.",
    creator: "@thusalapov",
    images: ["/profile.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
