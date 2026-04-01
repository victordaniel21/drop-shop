import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Optimize Google Fonts automatically!
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Drop&Shop | Curated Marketplace",
  description: "A minimalist multi-vendor marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {/* The 'children' prop is whatever page the user is currently on */}
        <main className="grow max-w-6xl mx-auto w-full px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}