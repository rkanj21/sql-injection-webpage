"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();  // Go back to the previous page
  };

  return (
    <>
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={handleGoBack}
          className="bg-darkblue-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-500 transition"
        >
          &#8592; Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">About MediScan</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover how we're revolutionizing healthcare delivery with cutting-edge technology
            and a patient-first approach.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-blue-300 mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              At MediScan, we're dedicated to ensuring safety in medical supplies through
              AI technology and automated quality assessment. We believe that precision,
              transparency, and accessibility are essential to modern healthcare.
            </p>
            <Link 
              href="/solutions/sensor-integration" 
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Explore Our Solutions
            </Link>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
              alt="Medical professional using technology"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Precision Diagnostics',
                desc: 'AI-powered analytics with 99.8% accuracy for reliable medical supply monitoring.',
                iconPath: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2zm0 2h2V3h4v2h2v12H7V7h2z'
              },
              {
                title: 'Expert Care',
                desc: 'Partnering with top-tier professionals to ensure the highest standards of healthcare delivery.',
                iconPath: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Patient-Centric Approach',
                desc: 'Putting patients first at every step, ensuring their safety and well-being is our top priority.',
                iconPath: 'M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z'
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-gray-700 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-blue-200 mb-4">{pillar.title}</h3>
                <p className="text-gray-300">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-950 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Intelligent Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Real-Time Monitoring</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Temperature conditions verification</li>
                  <li>Packaging integrity confirmation</li>
                  <li>Expiration date validation</li>
                  <li>Compliance assurance</li>
                  <li>Quality control automation</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Performance Metrics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>99.8% accuracy rate</li>
                  <li>Real-time data processing</li>
                  <li>Automated quality checks</li>
                  <li>Instant alert system</li>
                  <li>Comprehensive reporting</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Quality Standards</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>FDA compliance</li>
                  <li>CE certification</li>
                  <li>ISO standards</li>
                  <li>Industry best practices</li>
                  <li>Regular audits</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Technology Integration</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  
                  <li>Cloud-based monitoring</li>
                  <li>AI-powered analytics</li>
                  <li>Mobile accessibility</li>
                  <li>API integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 text-gray-200 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-lg mb-8">
            Join us in revolutionizing healthcare delivery with cutting-edge technology and a patient-first approach.
          </p>
          <Link 
            href="/home"
            target=""
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-500 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
