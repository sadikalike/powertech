// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons"; // <-- ಇದನ್ನು ಸೇರಿಸಿ

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PowerTech Buildcare | Home Maintenance & Building Solutions",
  description: "Expert Electrical, Plumbing, Gas Pipeline, Waterproofing & Home Design Services in Puttur, D.K.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons /> {/* <-- ಇದನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಿ */}
      </body>
    </html>
  );
}