import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "MediScan: Automated Quality Assurance System for Hospital Supplies",
  description: "MediScan is an intelligent, AI enabled platform designed to assess the quality assessment of medicines and consumables upon their arrival at healthcare facilities.",
  keywords: "medical supplies, quality assurance, hospital, healthcare, automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
