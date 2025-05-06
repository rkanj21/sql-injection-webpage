"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/temp.png" alt="MediScan Logo" className="h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <div className="relative group px-3 py-2">
            <span className="text-sm font-medium text-white hover:text-blue-400 cursor-pointer flex items-center">
              Solutions
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link href="/solutions/sensor-integration" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
                Sensor Integration
              </Link>
              <Link href="/solutions/compliance-verification" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
                Compliance Verification
              </Link>
              <Link href="/solutions/real-time-monitoring" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
                Real-Time Monitoring
              </Link>
              <Link href="/solutions/data-analytics" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
                Data Analytics
              </Link>
            </div>
          </div>
          <Link
            href="/case-study"
            className="px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <Button size="sm" className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => window.open('http://localhost:8501', '_blank')}>
        </Button>

        <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-gray-800 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="container-custom flex flex-col space-y-3">
          {["/", "/about", "/case-studies", "/contact"].map((path, idx) => (
            <Link
              key={idx}
              href={path}
              className="px-3 py-2 text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </Link>
          ))}
          <div className="px-3 py-2">
            <div className="text-sm font-medium text-white">Solutions</div>
            <div className="pl-4 mt-2 flex flex-col space-y-2">
              {[
                "sensor-integration",
                "compliance-verification",
                "real-time-monitoring",
                "data-analytics",
              ].map((sub, idx) => (
                <Link
                  key={idx}
                  href={`/solutions/${sub}`}
                  className="text-sm text-white hover:text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {sub.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
          <Button
  size="sm"
  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white mt-2"
  onClick={() => setIsMobileMenuOpen(false)}
>
  <img
    src="/logo.png"
    alt="MediScan Logo"
    className="w-5 h-5 mr-2"
  />
  Talk to our AI assistant
</Button>

        </div>
      </div>
    </header>
  );
}
