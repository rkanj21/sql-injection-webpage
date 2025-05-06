import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import BackButton from "../../components/BackButton";

export default function CaseStudiesPage() {
  const studies = [
    {
      
      title: 'Apollo Hospitals - Cold Chain Optimization',
      subtitle: 'Reducing vaccine spoilage by 40%',
      img: 'https://ishtargate.in/wp-content/uploads/2019/06/max-Saket-1.jpg',
      href: '/case-studies/apollo-cold-chain',
      location: 'Chennai, India',
      impact: '40% reduction in vaccine spoilage, ₹2.5Cr annual savings'
    },
    {
      title: 'Max Healthcare - Patient Safety',
      subtitle: 'AI-driven medication verification',
      img: 'https://medicaldialogues.in/h-upload/2024/04/03/235566-max-hospital.webp',
      href: '/case-studies/max-healthcare',
      location: 'Delhi NCR, India',
      impact: '99.9% medication accuracy, 60% faster verification'
    },
    {
      title: 'Fortis Healthcare - Compliance Automation',
      subtitle: 'Streamlining audits across 15+ locations',
      img: 'https://content.jdmagicbox.com/comp/kolkata/z4/033pxx33.xx33.130627171946.i5z4/catalogue/fortis-hospital-east-kolkata-township-kolkata-private-hospitals-lsbt8.jpg',
      href: '/case-studies/fortis-compliance',
      location: 'Mumbai, India',
      impact: '85% reduction in audit time, 100% compliance rate'
    },
    {
      title: 'Manipal Hospitals - Supply Chain',
      subtitle: 'Real-time inventory tracking',
      img: 'https://www.apollopowersystems.com/case-study/img/Manipal-hospital.webp',
      href: '/case-studies/manipal-supply',
      location: 'Bangalore, India',
      impact: '30% inventory optimization, ₹1.8Cr cost savings'
    },
    {
      title: 'AIIMS Delhi - Research Integration',
      subtitle: 'AI-powered clinical trials',
      img: 'https://images.moneycontrol.com/static-mcnews/2019/08/AIIMS_all_india_institute-770x433.jpg?impolicy=website&width=770&height=431',
      href: '/case-studies/aiims-research',
      location: 'New Delhi, India',
      impact: '50% faster data analysis, 45% improved accuracy'
    },
    {
      title: 'Narayana Health - Quality Control',
      subtitle: 'Automated quality monitoring',
      img: 'https://images.jdmagicbox.com/v2/comp/bangalore/x4/080PXX80.XX80.160511174017.Z4X4/catalogue/narayana-health-city-bommasandra-industrial-area-bangalore-ent-doctors-2rf7dcp.jpg',
      href: '/case-studies/narayana-quality',
      location: 'Bangalore, India',
      impact: '95% quality compliance, 70% faster inspections'
    }
  ]

  return (
    <>

      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Real-world success stories from leading Indian healthcare institutions showcasing how MediScan drives efficiency, compliance, and safety.
          </p>
          
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-blue-300 mb-6">Why Case Studies Matter</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our success stories demonstrate real-world applications of MediScan's solutions in Indian healthcare. Each case study showcases measurable improvements in efficiency, compliance, and patient safety.
            </p>
            <Link 
              href="/solutions" 
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Explore Our Solutions
            </Link>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://news.harvard.edu/wp-content/uploads/2023/04/AI-cardiologist-heart-diagnostics_1200x800.jpg"
              alt="Healthcare professionals reviewing data"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studies.map((study, i) => (
              <Link 
                key={i} 
                href={study.href}
                className="block bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image
                    src={study.img}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-blue-200 mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-2">{study.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-2">📍 {study.location}</p>
                  <p className="text-green-400 text-sm mb-4">✨ {study.impact}</p>
                  <span className="text-blue-400 font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-950 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-8 text-center">Measurable Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Efficiency Improvements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>40% reduction in vaccine spoilage</li>
                  <li>60% faster medication verification</li>
                  <li>85% reduction in audit time</li>
                  <li>30% inventory optimization</li>
                  <li>50% faster data analysis</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Cost Savings</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>₹2.5Cr annual savings in cold chain</li>
                  <li>₹1.8Cr inventory optimization</li>
                  <li>Reduced compliance costs</li>
                  <li>Lower operational expenses</li>
                  <li>Improved resource utilization</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Quality Improvements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>99.9% medication accuracy</li>
                  <li>100% compliance rate</li>
                  <li>95% quality compliance</li>
                  <li>45% improved accuracy</li>
                  <li>70% faster inspections</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-200 mb-4">Patient Safety</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Zero medication errors</li>
                  <li>Improved treatment outcomes</li>
                  <li>Enhanced patient monitoring</li>
                  <li>Better resource allocation</li>
                  <li>Faster response times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Insights */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6 text-center">AI-Powered Success</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our AI engine has processed over 100 million data points across Indian healthcare institutions—detecting issues 24 hours ahead and reducing manual review time by over 50%.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Data Processing',
                value: '100M+',
                desc: 'Data points analyzed'
              },
              {
                title: 'Time Savings',
                value: '50%',
                desc: 'Reduction in manual review'
              },
              {
                title: 'Accuracy',
                value: '99.9%',
                desc: 'Detection rate'
              }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-300 mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-medium">{stat.title}</p>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/about"
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Explore Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 text-gray-200 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif text-blue-300 mb-6">Want Your Success Story Here?</h2>
          <p className="text-lg mb-8">
            Partner with us to leverage AI-driven monitoring and compliance—see how we can transform your healthcare operations.
          </p>
          <Link 
            href="https://mediscan.ai/contact"
            target=""
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-500 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
