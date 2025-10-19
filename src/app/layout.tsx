import type { Metadata } from "next";
import { Bebas_Neue, Climate_Crisis, Geist, Geist_Mono, Knewave, Petit_Formal_Script, Playwrite_DE_SAS, Roboto, Syne_Mono, The_Nautigal, Zen_Dots } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ProgressBar from "@/components/ui/ProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const climatecrisis = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-climate-crisis"
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-roboto",
})

const fancy = Playwrite_DE_SAS({
  // subsets: ["latin"],
  weight: ['400'],
  variable: "--font-fancy"
})

export const metadata: Metadata = {
  title: "Prakash B - Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${climatecrisis.variable} ${roboto.variable} ${fancy.variable} antialiased`}
      >
        <ProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
