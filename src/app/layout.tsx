import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Portfolio`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Aayush Bindal",
    "Aayush bindal portfolio",
    "Ayush Bindal",
    "Bindal",
    "Ayush",
    "Aayush",
    "Portfolio",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name} | Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Portfolio`,
    description: DATA.description,
    card: "summary_large_image",
    creator: "@Aayush_00_",
  },
  icons: {
    icon: [
      {
        url: "https://img.icons8.com/?size=64&id=6705&format=png&color=000000",
        type: "image/png",
      },
    ],
    shortcut: ["https://img.icons8.com/?size=64&id=6705&format=png&color=000000"],
    apple: ["https://img.icons8.com/?size=180&id=6705&format=png&color=000000"],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
