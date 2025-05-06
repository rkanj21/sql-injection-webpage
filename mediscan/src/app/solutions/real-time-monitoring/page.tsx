import React from 'react';
import BackButton from "../../../components/BackButton";

export default function RealTimeMonitoring() {
  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-gray-800 to-gray-900 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Real-Time Monitoring</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Monitor patient data and system performance in real-time to improve response times and patient outcomes.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="prose prose-lg max-w-none prose-invert">
            <h2 className="text-3xl font-serif text-blue-300 mb-6">Immediate Insights When They Matter Most</h2>
            <p className="text-lg text-gray-300 mb-6">
              MediScan's real-time monitoring provides immediate alerts and insights, enabling faster response times and improved patient outcomes.
            </p>

            <div className="mb-12">
              <img 
                src="https://mindray.scene7.com/is/image/mindray/kv-BeneVision%20CMS%20Viewer_Dr_phone_1920px-wide?$1915-748$" 
                alt="Hospital monitoring center" 
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-4"
              />
              <p className="text-sm text-gray-400 text-center">
                Our comprehensive monitoring dashboard provides at-a-glance visibility of all critical systems
              </p>
            </div>

            <h3 className="text-2xl font-serif text-blue-300 mb-4">Key Benefits</h3>
            <ul className="space-y-4 mb-10">
              {[
                "Instant Alerts: Receive immediate notifications when parameters exceed thresholds or anomalies are detected.",
                "Comprehensive Dashboards: View all critical metrics in intuitive, customizable displays designed for healthcare environments.",
                "Response Automation: Configure automated responses to specific conditions, improving reaction time to critical events.",
                "Mobile Access: Monitor systems from anywhere with secure mobile access for authorized personnel.",
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">
                    <strong className="font-medium text-blue-300">{text.split(':')[0]}:</strong> {text.split(':')[1]}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-serif text-blue-300 mb-4">Sensor Integration</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-300 mb-6">
                  MediScan's real-time monitoring system seamlessly integrates with our comprehensive sensor network to provide complete visibility across your facility:
                </p>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "Temperature and humidity sensors",
                    "Pressure and flow monitors",
                    "Motion and proximity detection",
                    "Light and sound level meters",
                    "Air quality and particulate monitors",
                    "Equipment performance sensors",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-blue-300">✓</span> 
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Medical sensors network" 
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-serif text-blue-300 mb-4">Real-Time Analytics</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our AI-powered analytics engine processes sensor data in milliseconds, transforming raw information into actionable intelligence:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                ["Trend Analysis", "Identify patterns and trends over time to predict potential issues before they become critical."],
                ["Anomaly Detection", "Automatically identify unusual patterns that may indicate equipment failure or quality concerns."],
                ["Performance Metrics", "Track system efficiency and utilization to optimize resources and reduce operational costs."]
              ].map(([title, desc], i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-medium text-blue-300 mb-2">{title}</h4>
                  <p className="text-gray-300">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <img 
                src="https://pixelplex.io/wp-content/uploads/2023/12/big-data-analytics-healthcare-examples-meta.jpg" 
                alt="Healthcare data analytics" 
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-4"
              />
              <p className="text-sm text-gray-400 text-center">Our advanced analytics platform provides deep insights into operational data</p>
            </div>

            <h3 className="text-2xl font-serif text-blue-300 mb-4">Case Study: Memorial Healthcare</h3>
            <div className="bg-gray-800 border-l-4 border-blue-300 p-6 rounded-r-xl mb-12">
              <p className="text-gray-300 mb-4">
                Memorial Healthcare implemented MediScan's real-time monitoring system to oversee critical storage conditions for sensitive medications and biological samples.
              </p>
              <p className="text-gray-300 mb-4">
                Within the first month, the system detected and alerted staff to a failing refrigeration unit, preventing the loss of over $120,000 in specialized medications.
              </p>
              <p className="text-gray-300">
                Additionally, automated compliance reporting reduced administrative burden by approximately 15 hours per week, allowing staff to focus on patient care rather than documentation.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif text-blue-300 mb-4">Ready to transform your healthcare facility?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Talk to one of our specialists about how Real-Time Monitoring can benefit your organization.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-transform hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}