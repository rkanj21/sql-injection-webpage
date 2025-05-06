"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import BackButton from "../../components/BackButton";

export default function SignupPage() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-gray-900 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Create Account</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Join the MediScan platform to enhance quality assessment and patient safety at your healthcare facility.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif text-blue-300 mb-8">Create Your Account</h2>
              <p className="text-lg text-gray-300 mb-8">
                Register with MediScan to get started with intelligent quality assessment for your healthcare facility.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Work Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="jane.doe@healthcare.org"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">Organization Name *</label>
                  <input 
                    type="text" 
                    id="organization" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Memorial Healthcare"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="job-title" className="block text-sm font-medium text-gray-300 mb-1">Job Title *</label>
                  <input 
                    type="text" 
                    id="job-title" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Quality Manager"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password *</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="••••••••"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    Must be at least 8 characters with 1 uppercase letter, 1 number, and 1 special character
                  </p>
                </div>

                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password *</label>
                  <input 
                    type="password" 
                    id="confirm-password" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded mt-1"
                      checked={agreeTerms}
                      onChange={() => setAgreeTerms(!agreeTerms)}
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                      I agree to the <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link> *
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded mt-1"
                      checked={agreePrivacy}
                      onChange={() => setAgreePrivacy(!agreePrivacy)}
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-300">
                      I agree to the <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link> *
                    </label>
                  </div>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-all hover:scale-105 flex justify-center items-center"
                  >
                    Create Account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-400 hover:text-blue-300">
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side Info */}
            <div className="lg:w-1/2 space-y-10">
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif text-blue-300 mb-6">Account Benefits</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Dashboard Access</h4>
                      <p>Access your customized monitoring dashboard from any device, anywhere.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Team Management</h4>
                      <p>Assign roles and permissions to team members for coordinated quality control.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Analytics & Reports</h4>
                      <p>Generate detailed reports and analytics to guide quality improvement initiatives.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Premium Support</h4>
                      <p>Access to our dedicated healthcare quality specialists for implementation assistance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 rounded-xl p-8 border border-blue-800/50">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                    🔒
                  </div>
                  <h3 className="text-2xl font-serif text-blue-200">Data Security</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  MediScan prioritizes the security and privacy of your healthcare data:
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-400">✓</span> 
                    HIPAA-compliant data storage
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-400">✓</span> 
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-400">✓</span> 
                    SOC 2 Type II certified
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-400">✓</span> 
                    Regular security audits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-950 py-16 text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-serif mb-12">Trusted by Healthcare Leaders</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-900 rounded-xl p-6 max-w-sm shadow-lg">
              <div className="mb-4">
                <div className="flex justify-center mb-3">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#EAB308" className="mx-0.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "MediScan has transformed our quality control process. We've reduced medication incidents by 78% since implementation."
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-3 text-lg font-bold">
                  JD
                </div>
                <div className="text-left">
                  <p className="font-medium text-blue-300">Dr. James Davidson</p>
                  <p className="text-sm text-gray-400">Chief Medical Officer, Pacific Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}