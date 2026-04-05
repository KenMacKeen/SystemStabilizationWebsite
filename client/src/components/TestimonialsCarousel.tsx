import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Owner, Metro Retail Group",
    text: "Our Excel inventory system was crashing daily. Breakwater had it stable within 24 hours and documented everything so our team could maintain it. Incredible response time.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Operations Manager, FastFreight Logistics",
    text: "We were losing hours every week to Access database errors. Breakwater not only fixed the immediate issues but rebuilt the core queries for long-term stability. Worth every penny.",
    rating: 5,
  },
  {
    name: "Linda K.",
    role: "CFO, Cornerstone Distribution",
    text: "Professional, fast, and they actually explained what was wrong in plain English. Our POS integration hasn't had a single failure since they fixed it three months ago.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Director, Sunrise Warehouse Co.",
    text: "The Diagnostic Sprint was exactly what we needed. Clear findings, clear recommendations, and they fixed the critical issue on the spot. No upselling, just results.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <h2 className="text-foreground text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card border border-border rounded-xl px-12 py-8 md:px-16 md:py-10">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              &ldquo;{t.text}&rdquo;
            </p>
            <div>
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
