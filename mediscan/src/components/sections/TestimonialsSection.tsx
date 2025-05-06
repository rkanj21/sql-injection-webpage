"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MediScan has revolutionized our quality assurance process. We've reduced inspection time by 85% while improving our detection of substandard supplies.",
      name: "Dr. Sarah Chen",
      title: "Chief of Pharmacy, Metro General Hospital",
      avatarFallback: "SC"
    },
    {
      quote:
        "The implementation of MediScan has been seamless. The real-time monitoring capabilities have given us confidence that we're providing patients with the safest, highest-quality medications.",
      name: "Michael Roberts",
      title: "Director of Supply Chain, Northeast Healthcare Network",
      avatarFallback: "MR"
    },
    {
      quote:
        "As a safety officer, I appreciate how MediScan provides comprehensive documentation for regulatory compliance. It's made audit preparation significantly more efficient.",
      name: "Amara Washington",
      title: "Quality Assurance Manager, Lakeside Medical Center",
      avatarFallback: "AW"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Navigate to previous testimonial
  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Navigate to next testimonial
  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-900 text-primary font-medium px-3 py-1 rounded-full text-sm mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from healthcare facilities that have transformed their quality
            assurance processes with MediScan.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${testimonials.length * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="bg-gray-800 border-none shadow-lg">
                    <CardContent className="pt-8">
                      <div className="mb-4">
                        {/* Quote Icon */}
                        <svg
                          className="h-8 w-8 text-primary opacity-50"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                    <CardFooter className="border-t border-gray-700 pt-4">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarFallback className="bg-primary text-white">
                            {testimonial.avatarFallback}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-800 border border-gray-700 shadow-sm hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2 px-2">
              {testimonials.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-primary"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-800 border border-gray-700 shadow-sm hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20">
          
          <div>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
