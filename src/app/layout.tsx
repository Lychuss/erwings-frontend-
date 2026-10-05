import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Navbar from "@/src/components/layouts/navbar";
import Footer from "../components/layouts/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://erwings.vercel.app"),
  title: "Erwings",
  description: "Erwings Restaurant: Chicken wings in Lucban City. View our menu, hours, and location.",
  alternates: { canonical: "https://erwings.vercel.app" },
  openGraph: {
    title: "Erwings",
    description: "A landing page for Erwings Restaurant",
    url: "https://erwings.vercel.app",
    images: ["/icons/erwings.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden;">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
