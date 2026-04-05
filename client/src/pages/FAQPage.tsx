import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What exactly does 'system stabilization' mean?",
    answer:
      "System stabilization is the process of diagnosing why a business-critical tool — like an Excel workbook, Access database, or POS integration — is failing, crashing, or producing bad data, and then fixing it so it runs reliably. We focus on stopping the bleeding first, then making sure it stays fixed.",
  },
  {
    question: "How quickly can you respond to an urgent system failure?",
    answer:
      "For our Diagnostic & Stabilization Sprint, we typically begin within one business day of your inquiry. In many cases we can start the same day. If your situation is an active emergency — systems down, business halted — tell us that upfront and we'll prioritize accordingly.",
  },
  {
    question: "What types of systems do you work with?",
    answer:
      "Our core expertise is Excel workbooks (including complex VBA/macro-driven files), Microsoft Access databases, and POS system integrations common in retail and distribution. We also work with related data pipelines, CSV/import workflows, and legacy reporting tools that connect to these systems.",
  },
  {
    question: "Do I need to be technical to work with you?",
    answer:
      "Not at all. We work with business owners and operations managers every day who aren't technical — that's actually who we're built for. We explain everything in plain language, document what we did clearly, and make sure your team can maintain things going forward without needing us for every small change.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "We offer three tiers: a fixed-fee Diagnostic & Stabilization Sprint ($250–$750) for urgent issues, a System Optimization & Preventative Maintenance project ($1,500–$5,000+) for deeper work, and custom-priced Operational Efficiency Consulting for ongoing or strategic engagements. You'll always know the cost before work begins — no surprise invoices.",
  },
  {
    question: "What does the Diagnostic Sprint include?",
    answer:
      "The Sprint is a focused 1–2 day engagement. We assess your most urgent system issue, identify the root cause, provide a written diagnosis and recommendations, and stabilize the issue where possible within the engagement. You receive a clear summary of findings whether or not a full fix is completed in scope.",
  },
  {
    question: "Can you work remotely, or do you need to come on-site?",
    answer:
      "The vast majority of our work is done remotely via secure screen share and file transfer. This keeps costs down and lets us start immediately. On-site visits are available for clients in the Greater Boston area when the situation genuinely requires it.",
  },
  {
    question: "Will you need access to our sensitive business data?",
    answer:
      "We typically need access to the affected files or database to diagnose and fix them — yes. We treat all client data as strictly confidential, work under NDAs when requested, and never retain copies of your data after an engagement closes. We can discuss specific security requirements before starting.",
  },
  {
    question: "What if the problem comes back after you fix it?",
    answer:
      "We stand behind our work. If the same issue recurs within 30 days of a completed engagement, we'll investigate and resolve it at no additional charge. We also document the root cause and what was done so you understand why it broke and how to avoid it in the future.",
  },
  {
    question: "We've been using the same Excel file for years — is it too far gone to fix?",
    answer:
      "Rarely. Most legacy files — even heavily corrupted or structurally messy ones — can be stabilized or rebuilt in a way that preserves your data and existing workflows. We'll tell you honestly during the diagnostic if a full rebuild is more practical than a repair, and what that would cost.",
  },
  {
    question: "Do you offer ongoing support after a project is complete?",
    answer:
      "Yes. Our Preventative Maintenance tier includes an ongoing maintenance schedule. We also offer retainer arrangements for clients who want a consistent point of contact for system issues, questions, and periodic check-ins. Ask about this during your initial consultation.",
  },
  {
    question: "How is Breakwater Technologies different from a general IT company?",
    answer:
      "General IT companies focus on networks, hardware, and software licensing. We focus exclusively on the operational data systems that run your business day-to-day — the spreadsheets, databases, and integrations your team actually relies on. That specialization means faster diagnosis, more practical fixes, and advice grounded in real retail and distribution operations.",
  },
  {
    question: "What industries do you primarily serve?",
    answer:
      "Our deepest experience is in small and mid-size retail, wholesale distribution, and warehousing operations. These businesses often run on tightly integrated legacy systems that general IT consultants don't fully understand. We also work with transportation and logistics companies facing similar operational data challenges.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way is to schedule a free consultation through our contact form or call us directly at (617) 555-0123. We'll spend 20–30 minutes understanding your situation, then recommend the right engagement type. There's no obligation and no hard sell — just an honest assessment of what's going on and what it would take to fix it.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-secondary/50 transition"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-card border-t border-border">
          <p className="text-muted-foreground leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <Link href="/" className="text-2xl font-bold text-primary">
            Breakwater Technologies
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="/retail" className="text-foreground hover:text-primary transition">
              Retail
            </Link>
            <Link href="/warehouse" className="text-foreground hover:text-primary transition">
              Warehouse
            </Link>
            <Link href="/transportation" className="text-foreground hover:text-primary transition">
              Transportation
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition">
              Blog
            </Link>
            <Link href="/faq" className="text-primary font-semibold">
              FAQ
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Everything you need to know before reaching out. Don't see your question?{" "}
            <Link href="/" className="text-primary hover:text-primary/80 underline underline-offset-4">
              Contact us directly.
            </Link>
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
