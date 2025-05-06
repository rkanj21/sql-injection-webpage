import type React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Dark Theme Body */}
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}
