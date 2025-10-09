import type { Metadata } from "next";
import { Climate_Crisis, Geist, Geist_Mono, Oi, Poppins } from "next/font/google";
import "./globals.css";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400','500','700'],
  variable: "--font-poppins",
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
        className={`${geistSans.variable} ${geistMono.variable} ${climatecrisis.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
