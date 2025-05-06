import React from "react";
import Link from "next/link";

export default function WorkflowSection() {
  const workflowSteps = [
    {
      number: "01",
      title: "Arrival & Initial Scan",
      description:
        "Supplies arrive at healthcare facility where MediScan conducts an initial assessment using computer vision and AI advancements."
    },
    {
      number: "02",
      title: "Verification & Analysis",
      description:
        "Quality parameters are measured against predefined standards, with advanced algorithms checking for compliance requirements."
    },
    {
      number: "03",
      title: "Quality Decision",
      description:
        "Based on comprehensive data analysis, MediScan determines whether supplies meet quality standards for patient use."
    },
    {
      number: "04",
      title: "Inventory Integration",
      description:
        "Approved supplies are seamlessly integrated into inventory management systems with full quality assurance documentation."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamlined Quality Assurance Workflow
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            MediScan simplifies complex quality control processes into an
            efficient, automated workflow that ensures medical supplies meet the
            highest standards.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 hidden md:block -translate-x-1/2 z-0" />

          <div className="space-y-16 relative z-10">
            {workflowSteps.map((step, index) => (
              <div
                key={`workflow-${index}`}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4 md:gap-8`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg z-20">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-primary flex-1 max-w-lg ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-blue-100 text-primary font-medium px-3 py-1 rounded-full text-sm mb-3">
            Get Started
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Supply Quality Assurance?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join healthcare facilities worldwide in adopting MediScan's innovative
            approach to medical supply quality control.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            <a 
              href="http://localhost:8501" 
              target=""
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Talk to our AI assistant
            </a>
            </button>

            
            <Link href="/case-study">
              <button 
              className="bg-gray-700 border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-lg transition-colors">
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
