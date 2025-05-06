"use client";
import React from 'react';
import BackButton from "../../components/BackButton";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // At the top of your file

export default function LoginPage() {
  // Inside your component:
    const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <BackButton /> {/* Add the BackButton here */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-gray-900 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-white mb-6">Login</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Access your MediScan account to manage your quality assessment tools and data securely.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z" />
          </svg>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-20 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6 max-w-md">
          <div className="bg-gray-800 p-10 rounded-xl shadow-xl">
            <h2 className="text-3xl font-serif text-blue-300 mb-6 text-center">Welcome Back</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="you@example.com"
                  required
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
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-gray-300">Remember me</label>
                </div>
                <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
              </div>

              <button 
                type="button" // Changed from "submit" to "button"
                onClick={() => router.push('/')}  // Redirects to home page
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-transform hover:scale-105"
              >
                Login
              </button>

              <p className="text-sm text-gray-500 text-center">
                Don’t have an account? <a href="sign-up" className="text-blue-400 hover:underline">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}