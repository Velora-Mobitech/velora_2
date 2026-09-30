import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velora — Mobility Intelligence for the Enterprise",
  description:
    "Velora turns fragmented transport, vendor and financial data into actionable mobility intelligence — helping enterprises identify cost leakage, operational inefficiencies and reliability risks before they become expensive.",
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
    title: "Velora — Mobility Intelligence for the Enterprise",
    description:
      "Velora turns fragmented transport, vendor and financial data into actionable mobility intelligence — helping enterprises identify cost leakage, operational inefficiencies and reliability risks before they become expensive.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${plexMono.variable} dark`}>
      <body className="min-h-screen bg-black text-[#f5f6f7] font-sans antialiased selection:bg-[#2fe583] selection:text-[#06170d]">
        {children}
      </body>
    </html>
  );
}
