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
    default: "${DATA.name} | Portfolio",
    template: `%s | ${DATA.name}`,
  },
  description:DATA.metaDescription,
  keywords: [
    "Aayush Bindal",
    "Aayush Bindal portfolio",
    "Aayush Bindal developer",
    "Thapar University developer",
    "CS student portfolio India",
    "full stack developer India",
    "React developer India",
    "Next.js developer",
    "React Native developer",
    "Python developer",
    "AI ML developer India",
    "LLM developer",
    "hackathon winner India",
    "IEEE BIOS winner",
    "GKDC DAQ engineer",
    "NutriAI",
    "Atlas AI scrapbook",
    "software engineer student",
    "open source contributor India",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  category: "technology",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} — Full Stack Developer & CS Student`,
    description: DATA.metaDescription,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "profile",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${DATA.name} — Full Stack Developer` }],
  },
  twitter: {
    title: `${DATA.name} — Full Stack Developer & CS Student`,
    description: DATA.metaDescription,
    card: "summary_large_image",
    creator: DATA.contact.social.X.url,
    images: ["/og.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  sameAs: Object.values(DATA.contact.social).map((s) => s.url),
  jobTitle: "CS Student",
  description: DATA.metaDescription,
  knowsAbout: DATA.skills,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: DATA.education[0].school,
    url: DATA.education[0].href,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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