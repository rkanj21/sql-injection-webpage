import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../../components/BackButton";

export default function DataAnalyticsPage() {
  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Data Analytics</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Unlock insights from your healthcare data with interactive charts and real-time metrics.
          </p>
        </div>
        {/* decorative blob SVG (same as AboutPage) */}
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-blue-300 mb-6">Our Insights</h2>
            <p className="text-lg leading-relaxed">
              We track trends in usage, patient outcomes, and supply chain efficiency—all in one dashboard.
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800"
              alt="Data chart visualisation"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quality Control & Testing Section */}
      <section className="py-20 bg-gray-950 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Quality Control & Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Smart Sensor Integration</h3>
                <p className="text-gray-300">
                  Our advanced AI technology continuously monitor critical parameters of medicines and medical consumables:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>Real-time temperature monitoring</li>
                  <li>Humidity level tracking</li>
                  <li>Storage condition verification</li>
                  <li>Expiry date management</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Quality Assurance</h3>
                <p className="text-gray-300">
                  Comprehensive quality metrics and automated testing protocols ensure:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>Batch consistency verification</li>
                  <li>Compliance with regulatory standards</li>
                  <li>Early detection of quality deviations</li>
                  <li>Automated quality reporting</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Testing Analytics</h3>
                <p className="text-gray-300">
                  Our analytics platform provides detailed insights into:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>Test result trends and patterns</li>
                  <li>Quality control performance metrics</li>
                  <li>Compliance status tracking</li>
                  <li>Predictive quality analysis</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Sensor Data Intelligence</h3>
                <p className="text-gray-300">
                  Leverage sensor data to optimize operations:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>Predictive maintenance alerts</li>
                  <li>Storage condition optimization</li>
                  <li>Supply chain efficiency insights</li>
                  <li>Quality trend analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plots Gallery */}
      <section className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Patient Admissions',
                img: 'https://images.unsplash.com/photo-1710503913397-df9bfea7e50b?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Supply Usage',
                img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800'
              },
              {
                title: 'Temperature',
                img: 'https://images.unsplash.com/photo-1553341640-6b28ff92098a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
            ].map((plot, i) => (
              <div key={i} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                {/* each plot card */}
                <img
                  src={plot.img}
                  alt={plot.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-blue-200">{plot.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
