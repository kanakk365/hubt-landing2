import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import { Providers } from "@/components/site/Providers";
import { CalEmbed } from "@/components/site/CalEmbed";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hubts.io"),
  title: {
    default: "HubTech · AI and software studio",
    template: "%s · HubTech",
  },
  description:
    "HubTech designs, builds and runs AI systems, web platforms and mobile apps. The team behind Battle's Lounge, YSN, Connected Athlete, Rivalis, OnePlace and Xura.",
  openGraph: {
    title: "HubTech · AI and software studio",
    description:
      "Six platforms, one hub. HubTech is the AI and software studio behind Battle's Lounge, YSN, Connected Athlete, Rivalis, OnePlace and Xura.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} ${monaSans.variable}`}>
      <body className="grain antialiased">
        <a
          href="#main"
          className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main" className="overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
        <CalEmbed />
      </body>
    </html>
  );
}
