import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Courier_Prime } from "next/font/google";
import ToasterProvider from "@/provider/ToasterProvider";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/v2/Header";
import AppProvider from "@/provider/AppProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const courier_Prime = Courier_Prime({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier_prime",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Thuancafe Portfolio",
  description: "This is my portfolio page",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${courier_Prime.variable} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <AppProvider>
          <ParticlesBackground />
          <ToasterProvider />
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
