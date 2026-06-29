import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IV Clinic LA | Premium Mobile IV Therapy in Los Angeles",
  description:
    "Premium mobile IV therapy delivered to your door in Los Angeles. Fast hydration, immunity, hangover, beauty, and energy drips administered by registered nurses at your home, office, or hotel. Founded by Sharlot.",
  keywords: [
    "Mobile IV Therapy Los Angeles",
    "At-Home IV Drip LA",
    "IV Drip Therapy Los Angeles",
    "IV Hydration Los Angeles",
    "Mobile IV Nurse LA",
    "Vitamin IV Drip Los Angeles",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-800" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
