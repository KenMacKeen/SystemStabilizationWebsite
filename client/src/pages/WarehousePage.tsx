import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Package, BarChart3 } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function WarehousePage() {
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
              <span className="text-primary font-semibold text-sm">For Warehouse & Distribution</span>
            </div>
            <h1 className="text-foreground mb-6">
              Your Inventory System is Down.<br />
              <span className="text-primary">Your Orders Are Stuck.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Warehouse and distribution businesses operate on precision and speed. When your inventory management, order tracking, or shipping systems fail, entire operations grind to a halt. We specialize in rapid stabilization of the mission-critical systems that keep your warehouse running 24/7.
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

      {/* Warehouse-Specific Pain Points */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">
            The Warehouse Systems Crisis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "📦",
                title: "Inventory Management Failure",
                description: "Excel or Access inventory databases corrupted or crashing, showing inaccurate stock levels, leading to picking errors and shipment delays."
              },
              {
                icon: "📋",
                title: "Order Tracking System Down",
                description: "Order management systems offline, preventing you from tracking shipments, managing fulfillment, or communicating with customers."
              },
              {
                icon: "🔌",
                title: "Integration Breakdowns",
                description: "Connections between your WMS, ERP, and shipping platforms failing, creating data silos and manual workarounds."
              },
              {
                icon: "📊",
                title: "Reporting & Analytics Broken",
                description: "Daily/weekly inventory reports not generating, making it impossible to forecast demand or optimize stock levels."
              },
              {
                icon: "⚙️",
                title: "Picking & Packing Delays",
                description: "System errors slowing down picking operations, leading to missed shipping deadlines and customer complaints."
              },
              {
                icon: "💰",
                title: "Cost Control Loss",
                description: "Unable to track costs, labor hours, or shipping expenses accurately, making profitability analysis impossible."
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

      {/* Warehouse-Specific Solutions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">
            Our Warehouse-Focused Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Inventory System Emergency Response
              </h3>
              <p className="text-muted-foreground mb-6">
                When your inventory database crashes, we respond immediately to recover data, restore system integrity, and get you back to picking and packing.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">1-hour response time</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Data recovery & validation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">System restoration</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$400 - $1,500</div>
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
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-bold mb-3">
                Warehouse Systems Optimization
              </h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive audit and optimization of your inventory, order tracking, and integration systems to eliminate recurring failures and improve throughput.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Full system audit</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Integration fixes & optimization</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Team training & documentation</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$2,500 - $7,000</div>
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
                24/7 Managed Support Plan
              </h3>
              <p className="text-muted-foreground mb-6">
                Round-the-clock monitoring and support to ensure your warehouse systems stay online and optimized, with priority response to emergencies.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">24/7 monitoring & alerts</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">30-minute emergency response</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Quarterly optimization reviews</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">$499/month</div>
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
              Keep Your Warehouse Running 24/7
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation to diagnose your inventory and order tracking system issues. We'll show you how to prevent future downtime.
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
        title="Warehouse System Emergency Support"
        description="Tell us about your inventory or order tracking system issue, and we'll get back to you within 1 hour."
      />
    </div>
  );
}
