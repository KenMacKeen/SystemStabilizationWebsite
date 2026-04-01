import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function RetailPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">
            System Stabilization
          </a>
          <div className="flex gap-6">
            <a href="/" className="text-foreground hover:text-primary transition">
              Home
            </a>
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
              <span className="text-primary font-semibold text-sm">For Retail Businesses</span>
            </div>
            <h1 className="text-foreground mb-6">
              Your POS System is Crashing.<br />
              <span className="text-primary">Your Revenue is Bleeding.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Retail businesses depend on flawless point-of-sale systems, inventory tracking, and payment processing. When these systems fail—even for minutes—you lose sales, frustrate customers, and damage your reputation. We specialize in rapid diagnosis and stabilization of the critical systems retail businesses can't afford to lose.
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

      {/* Retail-Specific Pain Points */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">
            The Retail Systems Crisis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🔴",
                title: "POS Integration Failures",
                description: "Payment processors timing out, inventory not syncing, receipt printers jamming—customers waiting in line while you scramble to fix it."
              },
              {
                icon: "📊",
                title: "Inventory Tracking Breakdown",
                description: "Excel or Access inventory files corrupted, showing wrong stock levels, leading to overselling or missed sales opportunities."
              },
              {
                icon: "💳",
                title: "Payment Processing Errors",
                description: "Transactions failing, duplicate charges, reconciliation nightmares that create customer disputes and accounting headaches."
              },
              {
                icon: "📉",
                title: "Sales Reporting Chaos",
                description: "Daily/weekly sales reports broken or delayed, making it impossible to track performance or spot trends in real-time."
              },
              {
                icon: "🔗",
                title: "Multi-Location Sync Issues",
                description: "Inventory, pricing, or sales data not syncing across locations, creating inconsistencies and lost visibility."
              },
              {
                icon: "⏱️",
                title: "System Downtime Costs",
                description: "Every minute your systems are down costs you money. We get you back online fast—not in days, but in hours."
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

      {/* Retail-Specific Solutions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">
            Our Retail-Focused Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                POS Emergency Response
              </h3>
              <p className="text-muted-foreground mb-6">
                When your POS system crashes during peak hours, we respond immediately to diagnose and stabilize payment processing, inventory sync, and customer-facing systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">1-hour response time</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Root cause diagnosis</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Temporary workarounds if needed</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$300 - $1,000</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Help Now
              </Button>
            </Card>

            {/* Solution 2 */}
            <Card className="p-8 border-border hover:shadow-lg transition ring-2 ring-primary/20">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Retail Systems Optimization
              </h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive audit and optimization of your POS, inventory, and sales reporting systems to eliminate recurring failures and improve reliability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Full system audit</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Performance tuning & fixes</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Staff training included</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$2,000 - $6,000</div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsContactModalOpen(true)}
              >
                Schedule Audit
              </Button>
            </Card>

            {/* Solution 3 */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Preventative Maintenance Plan
              </h3>
              <p className="text-muted-foreground mb-6">
                Monthly monitoring and maintenance to catch issues before they become crises. Proactive support for ongoing peace of mind.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Monthly system checks</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Priority support access</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Quarterly optimization</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$299/month</div>
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
              Stop Losing Money to System Failures
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation to diagnose your most urgent retail system issue. We'll tell you exactly what's wrong and how to fix it.
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

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Retail System Emergency Support"
        description="Tell us about your POS or inventory system issue, and we'll get back to you within 1 hour."
      />
    </div>
  );
}
