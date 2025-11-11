import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Playwrite_DE_SAS, Roboto, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import ProgressBar from "@/components/common/ProgressBar";
import BackToTop from "@/components/common/BackToTop";
import { Analytics } from "@vercel/analytics/next";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-bebas"
})

const playwrite = Playwrite_DE_SAS({
  weight: ['400'],
  variable: "--font-playwrite"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-playfair"
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
        className={`${bebasNeue.variable} ${playwrite.variable} ${playfair.variable} antialiased`}
      >
        <ProgressBar />
        <Navbar />
        <BackToTop />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
