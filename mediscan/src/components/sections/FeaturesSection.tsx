import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      id: "sensor-integration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary h-8 w-8"
        >
          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
          <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
          <path d="M5 18v2" />
          <path d="M19 18v2" />
        </svg>
      ),
      title: "Sensor Integration",
      description:
        "Advanced AI technologies monitor temperature, humidity, packaging integrity, and other critical quality parameters in real-time."
    },
    {
      id: "compliance-verification",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary h-8 w-8"
        >
          <rect width="8" height="8" x="2" y="2" rx="2" />
          <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
          <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
          <path d="M2 14c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
          <path d="M2 20c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
          <rect width="8" height="8" x="14" y="14" rx="2" />
        </svg>
      ),
      title: "Compliance Verification",
      description:
        "Automated verification against regulatory standards (FDA, CE, ISO) to ensure all supplies meet necessary compliance requirements."
    },
    {
      id: "real-time-monitoring",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary h-8 w-8"
        >
          <path d="M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
          <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
          <path d="M16 2v4" />
          <path d="M3 10h7" />
          <path d="M21 10h-5.5" />
          <path d="M2 19h8.5" />
          <path d="M12 16l2-2-2-2" />
          <path d="M16 14h-4" />
        </svg>
      ),
      title: "Real-Time Monitoring",
      description:
        "Continuous monitoring throughout the supply chain with instant alerts for any deviations from predefined quality parameters."
    },
    {
      id: "intelligent-analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary h-8 w-8"
        >
          <path d="M21 12c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8" />
          <polyline points="17 8 21 12 17 16" />
          <line x1="12" x2="21" y1="12" y2="12" />
          <line x1="3" x2="7" y1="12" y2="12" />
        </svg>
      ),
      title: "Intelligent Analytics",
      description:
        "Machine learning algorithms analyze historical data to identify patterns, predict potential issues, and optimize quality control processes."
    }
  ];
  

  



  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Advanced Quality Assurance Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            MediScan combines cutting-edge technology with intuitive design to deliver
            a comprehensive quality control system for healthcare supplies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="feature-card border-none shadow-lg bg-gray-800 hover:bg-gray-700">
              <CardHeader>
                <div className="feature-icon mb-4 p-3 bg-blue-700 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-800 to-blue-900 p-8 md:p-12 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ensuring Patient Safety Through Supply Quality
              </h3>
              <p className="text-gray-200">
                By automating the quality assessment process, MediScan ensures that
                only supplies meeting the strictest quality standards reach patients,
                significantly reducing the risk of adverse events and improving
                healthcare outcomes.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-green-600"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Reduces manual inspection time by 82%</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-green-600"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Improves defect detection by 95%</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-green-600"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Minimizes human error in quality control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
