import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Truck, MapPin } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";

export default function TransportationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            System Stabilization
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">For Transportation & Logistics</span>
            </div>
            <h1 className="text-foreground mb-6">
              Your Dispatch System is Down.<br />
              <span className="text-primary">Your Fleet is Idle.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Transportation and logistics companies operate on tight schedules and razor-thin margins. When your dispatch, route optimization, or tracking systems fail, you lose revenue and damage customer relationships. We specialize in rapid stabilization of the critical systems that keep your fleet moving and deliveries on time.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get Emergency Help <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Transportation-Specific Pain Points */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">
            The Transportation Systems Crisis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "📡",
                title: "GPS & Route Tracking Failure",
                description: "GPS tracking systems down, route optimization broken, unable to track vehicle locations or communicate with drivers in real-time."
              },
              {
                icon: "📋",
                title: "Dispatch System Breakdown",
                description: "Dispatch software crashing, preventing you from assigning routes, managing deliveries, or communicating with drivers efficiently."
              },
              {
                icon: "💾",
                title: "Delivery Data Loss",
                description: "Delivery records, proof of delivery, or customer signatures not syncing, creating disputes and payment delays."
              },
              {
                icon: "⏰",
                title: "Fuel & Maintenance Tracking Down",
                description: "Unable to track fuel costs, maintenance schedules, or vehicle diagnostics, making cost control and compliance impossible."
              },
              {
                icon: "📱",
                title: "Driver Communication Breakdown",
                description: "Communication systems offline, preventing you from reaching drivers with urgent updates or handling customer service issues."
              },
              {
                icon: "📈",
                title: "Reporting & Analytics Broken",
                description: "Unable to generate delivery reports, track KPIs, or analyze fleet performance for optimization and profitability."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-border">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-foreground font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation-Specific Solutions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">
            Our Transportation-Focused Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Dispatch System Emergency Response
              </h3>
              <p className="text-muted-foreground mb-6">
                When your dispatch or routing systems crash, we respond immediately to restore operations, get drivers back on the road, and minimize lost revenue.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">30-minute response time</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">System restoration & validation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Driver communication restored</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$350 - $1,200</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Help Now
              </Button>
            </Card>

            <Card className="p-8 border-border hover:shadow-lg transition ring-2 ring-primary/20">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Fleet Systems Optimization
              </h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive audit and optimization of your dispatch, GPS tracking, and delivery management systems to eliminate recurring failures and improve efficiency.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Full system audit</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Integration & performance tuning</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Driver & staff training</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$2,000 - $6,500</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsContactModalOpen(true)}
              >
                Schedule Audit
              </Button>
            </Card>

            <Card className="p-8 border-border hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Fleet Operations Support Plan
              </h3>
              <p className="text-muted-foreground mb-6">
                Ongoing monitoring and support to keep your fleet systems running smoothly, with priority response to emergencies and regular optimization.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Continuous system monitoring</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Priority emergency response</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Monthly performance reviews</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$399/month</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsContactModalOpen(true)}
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-foreground mb-6">
              Keep Your Fleet Moving Forward
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation to diagnose your dispatch and routing system issues. We'll show you how to prevent costly downtime.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsContactModalOpen(true)}
            >
              Schedule Your Free Consultation
            </Button>
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
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition">
                Home
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Transportation System Emergency Support"
        description="Tell us about your dispatch or fleet tracking system issue, and we'll get back to you within 30 minutes."
      />
    </div>
  );
}
