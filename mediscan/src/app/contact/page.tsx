"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import BackButton from "../../components/BackButton";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-gray-900 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Have questions about MediScan? Our team is ready to help you implement intelligent quality assessment in your healthcare facility.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif text-blue-300 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                Fill out the form, and one of our healthcare quality specialists will contact you within 24 hours 
                to discuss how MediScan can benefit your organization.
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="jane.doe@example.com"
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
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">Your Position</label>
                  <input 
                    type="text" 
                    id="position" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Quality Manager"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300 mb-1">Type of Inquiry *</label>
                  <select 
                    id="inquiry" 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-300">
                    I consent to MediScan processing my data to respond to my inquiry. *
                  </label>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-transform hover:scale-105"
                  >
                    Submit Inquiry
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  * Required fields
                </p>
              </form>
            </div>

            {/* Contact Info + FAQ */}
            <div className="lg:w-1/2 space-y-10">
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif text-blue-300 mb-6">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      📧
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Email</h4>
                      <a href="mailto:info@mediscan.com" className="hover:text-blue-400">info@mediscan.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      📞
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Phone</h4>
                      <a href="tel:+18005551234" className="hover:text-blue-400">+1 (800) 555-1234</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      📍
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-200">Address</h4>
                      <address className="not-italic">
                        123 Innovation Drive<br />
                        Suite 500<br />
                        Boston, MA 02108
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif text-blue-300 mb-6">FAQ</h3>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h4 className="text-lg font-medium text-blue-200 mb-2">How quickly can MediScan be implemented?</h4>
                    <p>Most healthcare facilities can have MediScan fully operational within 2-4 weeks.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-blue-200 mb-2">Is MediScan HIPAA compliant?</h4>
                    <p>Yes, MediScan follows strict data privacy and HIPAA compliance.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-blue-200 mb-2">Do you offer training for our staff?</h4>
                    <p>Absolutely. Full onboarding and support are provided with every implementation.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-blue-200 mb-2">Can MediScan integrate with our existing EHR system?</h4>
                    <p>Yes, MediScan supports integration with Epic, Cerner, Allscripts, and other major EHRs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-950 py-16 text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-serif mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-400 mb-8 max-w-2xl mx-auto">
            Stay updated on the latest healthcare quality assessment trends and MediScan product updates.
          </p>

          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              className="flex-1 px-4 py-3 rounded-l-md bg-gray-800 text-white focus:outline-none border border-gray-700" 
              placeholder="Your email address"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-r-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
