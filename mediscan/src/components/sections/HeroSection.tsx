"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
       {/* Login Button */}
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 py-4 md:py-6 flex justify-end shadow-md">
      <Link
        href="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition mr-4"
      >
        Login
      </Link>
    </div>

    <section className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-gray-700 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-primary rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slideUpFade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
              Ensuring Safety in{" "}
              <span style={{ color: "#4266B4" }}>Medical Supplies</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              MediScan automates quality assessment of medicines and consumables
              upon arrival at healthcare facilities, ensuring compliance and
              patient safety through intelligent AI monitoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-all"
              >
                <a 
                  href="http://localhost:8501" 
                  target=""
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                Talk to our AI assistant
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                </a>
              </Button>

              <Link href="/solutions/sensor-integration" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-transparent hover:text-white transition-colors"
              >
                Explore Solutions
              </Button>
              </Link>
            </div>
            

            {/* Stats */}
            <div className="mt-12 flex items-center gap-x-8">
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-100">99.8%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-100">78%</div>
                  <div className="text-sm text-gray-400">Efficiency Boost</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-300/30 z-10 mix-blend-overlay" />
              <div className="relative z-20 h-full w-full flex flex-col items-center justify-center p-8">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-100">Quality Scan Results</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">PASSED</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Temperature</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-100">18.2°C</span>
                        <div className="ml-2 h-2 w-16 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Packaging Integrity</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-100">98%</span>
                        <div className="ml-2 h-2 w-16 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Expiration Check</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-100">Valid</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-green-500">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Compliance</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-100">FDA/CE/ISO</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-green-500">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Scanned: Today, 09:45 AM</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-5 -right-4 bg-gray-800 p-3 rounded-lg shadow-lg rotate-6 animate-pulse-slow hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gray-800 p-3 rounded-lg shadow-lg -rotate-6 animate-pulse-slow hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
