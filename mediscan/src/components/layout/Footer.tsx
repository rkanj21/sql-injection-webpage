import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and CTA */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-white/10" />
                <div className="absolute inset-[2px] rounded-full bg-zinc-900 flex items-center justify-center border border-white/20">
                  <div className="text-white font-bold text-sm">M</div>
                </div>
              </div>
              <span className="font-bold text-lg text-white">MediScan</span>
            </div>
            <p className="text-sm text-zinc-400">
              Ensuring Purity, Powering Care.
            </p>
            <Button
              variant="outline"
              className="border-white/20 text-black hover:bg-white hover:text-zinc-900 mt-2"
            >
              <a href="http://localhost:8501" target="" rel="noopener noreferrer">
              Talk to our AI assistant
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
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              </a>
            </Button>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              {[
                ["Sensor Integration", "/solutions/sensor-integration"],
                ["Compliance Verification", "/solutions/compliance-verification"],
                ["Real-Time Monitoring", "/solutions/real-time-monitoring"],
                ["Data Analytics", "/solutions/data-analytics"],
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {[
                ["About Us", "/about"],
                ["Case Studies", "/case-study"],
                ["Resources", "/resources"],
                ["Contact", "/contact"],
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials and Copyright */}
        <div className="pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {[
              ["LinkedIn", "#"],
              ["Twitter", "#"],
              ["GitHub", "#"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label={label}
              >
                {/* Replace with dynamic icons if desired */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  {/* Icons same as in original */}
                  {label === "LinkedIn" && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  )}
                  {label === "Twitter" && (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  )}
                  {label === "GitHub" && (
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.099-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.835c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} MediScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
