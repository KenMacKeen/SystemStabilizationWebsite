import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const posts = [
  {
    slug: "excel-corruption-prevention",
    title: "5 Ways to Prevent Excel File Corruption Before It Happens",
    date: "March 28, 2026",
    readTime: "5 min read",
    excerpt:
      "Excel corruption doesn't happen randomly. Learn the top triggers and how to harden your mission-critical spreadsheets against them.",
    tag: "Excel",
  },
  {
    slug: "access-database-performance",
    title: "Why Your Access Database Is Slowing Down (And How to Fix It)",
    date: "March 14, 2026",
    readTime: "7 min read",
    excerpt:
      "Bloated tables, unindexed queries, and linked table sprawl are the hidden culprits behind sluggish Access performance. Here's the diagnostic checklist we use.",
    tag: "Access",
  },
  {
    slug: "pos-integration-checklist",
    title: "The 10-Point POS Integration Health Checklist",
    date: "February 27, 2026",
    readTime: "6 min read",
    excerpt:
      "Before your next busy season, run through this checklist to catch integration issues before they become costly outages.",
    tag: "POS Systems",
  },
  {
    slug: "when-to-migrate-excel-to-database",
    title: "When to Stop Using Excel and Move to a Real Database",
    date: "February 10, 2026",
    readTime: "8 min read",
    excerpt:
      "Excel is a powerful tool — until it isn't. We break down the warning signs that your business has outgrown spreadsheet-based operations.",
    tag: "Strategy",
  },
];

export default function BlogPage() {
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
            <Link href="/blog" className="text-primary font-semibold transition">
              Blog
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-foreground mb-4">Resources & Insights</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Practical guides to keep your business systems stable and your
            operations running smoothly.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="p-6 border-border hover:border-primary/50 hover:shadow-lg transition group"
              >
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-4">
                  {post.tag}
                </span>
                <h3 className="text-foreground text-lg font-bold mb-3 group-hover:text-primary transition leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
