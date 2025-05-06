import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../../../components/BackButton";


export default function ComplianceVerificationPage() {
  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Compliance Verification</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Ensure every medical batch meets global standards—automatically, comprehensively, in real time.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          {/* same decorative blob SVG for brand consistency */}
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-blue-300 mb-6">Why Compliance Matters</h2>
            <p className="text-lg leading-relaxed mb-4">
              Healthcare regulations evolve constantly. Our system maps your product data against <a href="https://mediscan.ai/compliance#regulations" target="" rel="noopener noreferrer" className="text-blue-400 hover:underline">FDA, CE, ISO</a>, and local guidelines automatically.
            </p>
            <Link href="/solutions/data-analytics" className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              View Data Analytics
            </Link>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://media.istockphoto.com/id/543578400/photo/portrait-of-two-friendly-pharmacists-working.jpg?s=612x612&w=0&k=20&c=wrzRQoVSrYGbca8s9Q_hVNvBE66r-t6iDINJUeWcmEw="
              alt="Compliance check interface"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Compliance Processes */}
      <section className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Our Verification Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Mapping',
                desc: 'Auto-match attributes like compound, concentration, and packaging to current standards.',
                iconPath: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2zm0 2h2V3h4v2h2v12H7V7h2z'
              },
              {
                title: 'Automated Audits',
                desc: 'Run batch-level audits with AI-powered rule engines, catching deviations instantly.',
                iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Report Generation',
                desc: 'Generate PDF certificates and compliance summaries on demand.',
                iconPath: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-700 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-blue-200 mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Compliance Standards */}
      <section className="py-20 bg-gray-950 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Medical Compliance Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Global Standards</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>FDA 21 CFR Part 820 (Quality System Regulation)</li>
                  <li>ISO 13485:2016 (Medical Devices)</li>
                  <li>EU MDR (Medical Device Regulation)</li>
                  <li>MDSAP (Medical Device Single Audit Program)</li>
                  <li>GDP (Good Distribution Practice)</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Documentation Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Technical documentation and design files</li>
                  <li>Risk management documentation</li>
                  <li>Clinical evaluation reports</li>
                  <li>Post-market surveillance plans</li>
                  <li>Quality management system records</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Verification Processes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Batch release testing and documentation</li>
                  <li>Sterility validation and monitoring</li>
                  <li>Material biocompatibility testing</li>
                  <li>Performance testing and validation</li>
                  <li>Environmental monitoring</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Quality Control Measures</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>In-process quality checks</li>
                  <li>Final product inspection</li>
                  <li>Stability testing protocols</li>
                  <li>Calibration and maintenance records</li>
                  <li>Supplier quality management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Verification */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6 text-center">AI-Powered Assurance</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our AI engine continuously learns from new regulations and past audit data. It flags anomalies—like unexpected ingredient ranges or documentation gaps—by comparing against a live compliance knowledge base hosted at <a href="https://mediscan.ai/ai-engine" target="" rel="noopener noreferrer" className="text-blue-400 hover:underline">mediscan.ai/ai-engine</a>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-8">
            <li>Adaptive rule creation based on regulatory updates</li>
            <li>Natural language processing of batch records</li>
            <li>Confidence scoring and risk-level alerts</li>
          </ul>
          
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 text-gray-200 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6">Ready to Simplify Compliance?</h2>
          <p className="text-lg mb-8">
            Join companies already using MediScan to automate their regulatory workflows—and never miss a standard again.
          </p>
          <a
            href="/"
            target=""
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-500 transition"
          >
            Get Started for Free
          </a>
        </div>
      </section>
    </>
  )
}
