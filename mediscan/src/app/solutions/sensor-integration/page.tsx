import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../../../components/BackButton";

export default function SensorMonitoringPage() {
  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Sensor Monitoring</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Real-time tracking of storage conditions to maintain product integrity and safety.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Monitoring Overview */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-blue-300 mb-6">End-to-End Visibility</h2>
            <p className="text-lg leading-relaxed mb-4">
              Instantly view temperature, humidity, and location data streamed from AI technologies accessible anywhere.
            </p>
            <Link 
              href="/about" 
              target=""
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Learn More about us
            </Link>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1553341640-6b28ff92098a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI sensors in a lab"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sensor Features */}
      <section className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Key Sensor Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Temperature Control',
                desc: 'Continuous monitoring with alert thresholds for out-of-range conditions.',
                iconPath: 'M12 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8zm0 2h8v12h-8V4zm2 2v2h4V6h-4zm0 4v2h4v-2h-4zm0 4v2h4v-2h-4z'
              },
              {
                title: 'Humidity Tracking',
                desc: 'Precise RH readings to safeguard moisture-sensitive pharmaceuticals.',
                iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'
              },
              {
                title: 'Geo-Fencing',
                desc: 'GPS-enabled alerts when shipments move outside designated zones.',
                iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
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

      {/* AI-Driven Analytics */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6 text-center">Predictive Insights</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our AI models analyze historical sensor streams to forecast deviations before they occur. Access detailed reports on <Link 
              href="/case-study" 
              className="text-blue-400 hover:underline" 
              target="" 
              rel="noopener noreferrer"
            >
              click here
            </Link>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-8">
            <li>Anomaly detection using time-series algorithms</li>
            <li>Automated alerts via SMS, email, or webhook</li>
            <li>Dashboard visualizations with trend lines and heatmaps</li>
          </ul>
          <div className="text-center">
            <a
              href="http://localhost:8501" 
              target=""
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Talk to our AI assistant
      
            </a>
          </div>
        </div>
      </section>

      {/* Advanced Sensor Capabilities */}
      <section className="py-20 bg-gray-950 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Advanced Monitoring Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Real-Time Monitoring</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Continuous temperature monitoring with 0.1°C precision</li>
                  <li>Humidity tracking with ±2% accuracy</li>
                  <li>Light exposure monitoring for light-sensitive products</li>
                  <li>Vibration and shock detection during transport</li>
                  <li>Battery life monitoring and low-power alerts</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Data Security</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>End-to-end encryption for all sensor data</li>
                  <li>Secure cloud storage with audit trails</li>
                  <li>Role-based access control</li>
                  <li>Compliance with HIPAA and GDPR</li>
                  <li>Automated backup and disaster recovery</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Integration Capabilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Seamless integration with existing ERP systems</li>
                  <li>API access for custom applications</li>
                  <li>Mobile app for on-the-go monitoring</li>
                  <li>Webhook support for custom alerts</li>
                  <li>Batch tracking and inventory management</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Compliance Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Automated compliance reporting</li>
                  <li>Audit trail generation</li>
                  <li>Regulatory documentation support</li>
                  <li>Quality control integration</li>
                  <li>Batch release verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Developments */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Future Sensor Developments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Predictive Analytics',
                desc: 'Next-generation sensors with built-in AI capabilities for predictive maintenance and quality assurance.',
                features: [
                  'Machine learning for pattern recognition',
                  'Predictive maintenance alerts',
                  'Quality degradation prediction',
                  'Automated optimization suggestions'
                ]
              },
              {
                title: 'Advanced Environmental Monitoring',
                desc: 'Enhanced environmental sensors for comprehensive product protection.',
                features: [
                  'Air quality monitoring',
                  'Pressure and altitude tracking',
                  'Chemical exposure detection',
                  'Radiation level monitoring'
                ]
              },
              {
                title: 'Smart Supply Chain Integration',
                desc: 'Blockchain-enabled sensors for end-to-end supply chain visibility.',
                features: [
                  'Blockchain-based tracking',
                  'Smart contract integration',
                  'Automated compliance verification',
                  'Real-time supply chain optimization'
                ]
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {item.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 text-gray-200 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6">Secure Your Supply Chain</h2>
          <p className="text-lg mb-8">
            Experience full-spectrum monitoring—start with a free sensor trial and keep every batch compliant and safe.
          </p>
          <a
            href="/login"
            target=""
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Your Trial
          </a>
        </div>
      </section>
    </>
  )
}