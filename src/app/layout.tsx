import type { Metadata } from "next";
import { Climate_Crisis, Geist, Geist_Mono, Oi, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const climatecrisis = Climate_Crisis({
  subsets: ['latin'],
  variable: "--font-climate-crisis"
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400','500','700'],
  variable: "--font-roboto",
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
        className={`${geistSans.variable} ${geistMono.variable} ${climatecrisis.variable} ${roboto.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
