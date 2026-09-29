import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velora — Enterprise Mobility Intelligence",
  description:
    "Velora turns fragmented enterprise mobility data into actionable intelligence for cost, utilization, vendor performance and operational reliability.",
  keywords: [
    "enterprise mobility intelligence",
    "ETMS analytics",
    "transport cost leakage",
    "mobility failure economics",
    "fleet utilization",
    "corporate transport optimization",
    "vendor SLA benchmarking",
  ],
  authors: [{ name: "Velora Mobitech" }],
  openGraph: {
    title: "Velora — Enterprise Mobility Intelligence",
    description:
      "Velora turns fragmented enterprise mobility data into actionable intelligence for cost, utilization, vendor performance and operational reliability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
