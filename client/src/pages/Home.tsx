import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Link } from "wouter";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { trackCTAClick, trackServiceSelection } = useAnalytics();

  const handleGetStartedClick = () => {
    trackCTAClick("Get Started", "hero");
    setIsContactModalOpen(true);
  };

  const handleServiceClick = (serviceName: string) => {
    trackServiceSelection(serviceName, "home");
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Breakwater Technologies
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <Link href="/retail" className="text-foreground hover:text-primary transition">
              Retail
            </Link>
            <Link href="/warehouse" className="text-foreground hover:text-primary transition">
              Warehouse
            </Link>
            <Link href="/transportation" className="text-foreground hover:text-primary transition">
              Transportation
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/95505277/3WFmVBo9upnVTFjyKLjVRe/hero-background-hyj7PrVj2zE3toFTWGwMQu.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20 z-10" />

        <div className="container relative z-20 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-foreground mb-6">
              Stop System Failures.<br />
              <span className="text-primary">Start Thriving.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your legacy Excel and Access files are mission-critical. When they break, your business stops. We specialize in rapid diagnosis and stabilization of the systems small retail and distribution businesses depend on.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleGetStartedClick}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">The Problem You're Facing</h2>
            <p className="text-lg text-muted-foreground">
              Your systems are breaking down. Your team is frustrated. Your business is losing money. And you don't know who to call.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Excel Files Crashing",
                description: "Mission-critical spreadsheets corrupted, slow, or completely broken—costing you hours and accuracy."
              },
              {
                title: "POS System Failures",
                description: "Integration issues, intermittent glitches, and data sync problems that halt your sales."
              },
              {
                title: "Access Database Issues",
                description: "Legacy databases running slow, crashing daily, or showing duplicate/corrupted data."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-border">
                <h3 className="text-foreground font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear path from crisis to stability to growth. Choose the service that fits your immediate need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/95505277/3WFmVBo9upnVTFjyKLjVRe/service-card-1-VyVCvgJ6TwVLaSYH3HEAhh.webp"
                alt="Diagnostic & Stabilization Sprint"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-foreground text-xl font-bold mb-3">
                Diagnostic & Stabilization Sprint
              </h3>
              <p className="text-muted-foreground mb-6">
                Rapid, fixed-fee engagement to diagnose and stabilize your most urgent system issue.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">1-2 day turnaround</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Clear diagnosis & recommendations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Immediate stabilization if possible</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$250 - $750</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleServiceClick("Diagnostic & Stabilization Sprint")}
              >
                Schedule Now
              </Button>
            </Card>

            {/* Service 2 */}
            <Card className="p-8 border-border hover:shadow-lg transition ring-2 ring-primary/20">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/95505277/3WFmVBo9upnVTFjyKLjVRe/service-card-2-BRDkQFQ7yx95wSnnGAnWnR.webp"
                alt="System Optimization & Preventative Maintenance"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-foreground text-xl font-bold mb-3">
                System Optimization & Preventative Maintenance
              </h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive project to optimize, refactor, and prevent future failures.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Full system optimization</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Staff training & documentation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Ongoing maintenance schedule</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$1,500 - $5,000+</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleServiceClick("System Optimization & Preventative Maintenance")}
              >
                Schedule Now
              </Button>
            </Card>

            {/* Service 3 */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/95505277/3WFmVBo9upnVTFjyKLjVRe/service-card-3-5J4UHw3bXwReJvXEAowXqA.webp"
                alt="Operational Efficiency Consulting"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-foreground text-xl font-bold mb-3">
                Operational Efficiency Consulting
              </h3>
              <p className="text-muted-foreground mb-6">
                Strategic guidance to transform systems into competitive advantages.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Workflow automation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Data analytics & insights</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Technology roadmap planning</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">Custom Pricing</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleServiceClick("Operational Efficiency Consulting")}
              >
                Schedule Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Deep Retail & Distribution Expertise",
                  description: "We understand your industry's unique challenges—from POS integration to inventory management to payroll reconciliation."
                },
                {
                  title: "Rapid Response",
                  description: "When your systems break, you need help fast. We prioritize urgent diagnostics and stabilization."
                },
                {
                  title: "Problem-First Approach",
                  description: "We lead with your pain points, not our solutions. We diagnose before we prescribe."
                },
                {
                  title: "Long-Term Partnership",
                  description: "We don't just fix problems—we help you prevent them and build systems that support growth."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/15 via-background to-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-foreground mb-6">Ready to Stabilize Your Systems?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's start with a quick conversation about your most urgent system challenge. No obligation, no pressure—just expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  trackCTAClick("Schedule Free Consultation", "footer");
                  setIsContactModalOpen(true);
                }}
              >
                Schedule a Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <div className="flex gap-2 items-center">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contact@systemstabilization.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(617) 555-0123</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © 2026 System Stabilization Services. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
}
