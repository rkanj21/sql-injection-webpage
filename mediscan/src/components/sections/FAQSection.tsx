"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does MediScan integrate with existing inventory systems?",
      answer:
        "MediScan offers seamless integration with most major healthcare inventory management systems through our secure API. Our implementation team provides tailored integration solutions to ensure compatibility with your specific infrastructure, typically completing the integration process within 2-3 weeks."
    },
    {
      question: "What types of medical supplies can MediScan analyze?",
      answer:
        "MediScan is designed to assess a wide range of medical supplies including pharmaceuticals, consumables, medical devices, and specialized equipment. Our system can be configured to monitor specific parameters relevant to each supply category, such as temperature sensitivity, packaging integrity, expiration dates, and regulatory compliance."
    },
    {
      question: "How accurate is MediScan's quality assessment?",
      answer:
        "MediScan achieves a 99.8% accuracy rate in quality assessment through our advanced sensor technology and machine learning algorithms. The system continuously learns and improves based on historical data, with regular updates to enhance precision. Each facility undergoes a calibration period to optimize accuracy for specific supply categories."
    },
    {
      question: "What happens when MediScan identifies a quality issue?",
      answer:
        "When MediScan detects a quality issue, it immediately triggers a customizable alert protocol. This can include real-time notifications to designated staff, automatic quarantine tagging in the inventory system, and detailed documentation of the specific parameters that failed to meet standards. This comprehensive approach ensures swift resolution of potential problems."
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "The implementation timeframe depends on the size and complexity of your facility, but typically ranges from 4-8 weeks. This includes hardware installation, software integration, staff training, and a calibration period. Our implementation team works closely with your staff to create a customized deployment plan that minimizes disruption to your operations."
    },
    {
      question: "Does MediScan offer compliance reporting for regulatory audits?",
      answer:
        "Yes, MediScan includes comprehensive compliance reporting capabilities designed to support regulatory requirements. The system automatically generates documentation for FDA, Joint Commission, and other regulatory standards. Reports can be customized based on your facility's specific compliance needs and can be scheduled or generated on-demand."
    }
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-700 text-primary font-medium px-3 py-1 rounded-full text-sm mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400">
              Find answers to common questions about MediScan's quality
              assurance system for hospital supplies.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-white">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Our team is ready to help you implement MediScan in your healthcare facility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:info@mediscan.example.com"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-lg transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Contact Support
              </a>
              <a
                href="/solutions/data-analytics"
                className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-2 px-5 rounded-lg transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                View Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
