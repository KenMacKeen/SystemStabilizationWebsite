import { useState, useEffect } from "react";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  variant?: "modal" | "inline";
  onSuccess?: () => void;
}

export default function ContactForm({ variant = "inline", onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    urgentIssue: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { isSubmitting, submitForm } = useFormSubmission();
  const { trackFormStart, trackFormSubmission } = useAnalytics();

  useEffect(() => {
    trackFormStart("contact_form");
  }, []);

  const urgentIssues = [
    "Excel file corruption or crashes",
    "POS system integration failures",
    "Access database performance issues",
    "Inventory tracking problems",
    "Data sync errors between systems",
    "Payroll reconciliation issues",
    "Other (describe below)",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.urgentIssue) {
      newErrors.urgentIssue = "Please select your most urgent issue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    const success = await submitForm(formData);

    if (success) {
      trackFormSubmission("contact_form", formData.urgentIssue);
      setIsSuccess(true);

      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          urgentIssue: "",
          message: "",
        });
        setIsSuccess(false);
        onSuccess?.();
      }, 3000);
    }
  };

  if (isSuccess) {
    return (
      <Card className="p-8 border-border text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="text-foreground text-xl font-bold mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-4">
          We've received your request and will contact you within 24 hours to discuss your system stabilization needs.
        </p>
        <p className="text-sm text-muted-foreground">
          In the meantime, feel free to reach out directly at{" "}
          <span className="font-semibold text-foreground">(617) 555-0123</span>
        </p>
      </Card>
    );
  }

  return (
    <Card className={`border-border ${variant === "modal" ? "p-8" : "p-6 md:p-8"}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-semibold">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`bg-background border-border ${
                errors.name ? "border-destructive" : ""
              }`}
            />
            {errors.name && (
              <p className="text-sm text-destructive flex gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground font-semibold">
              Company Name *
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="ABC Retail Co."
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className={`bg-background border-border ${
                errors.company ? "border-destructive" : ""
              }`}
            />
            {errors.company && (
              <p className="text-sm text-destructive flex gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.company}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`bg-background border-border ${
                errors.email ? "border-destructive" : ""
              }`}
            />
            {errors.email && (
              <p className="text-sm text-destructive flex gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-semibold">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(617) 555-0123"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={`bg-background border-border ${
                errors.phone ? "border-destructive" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-sm text-destructive flex gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="issue" className="text-foreground font-semibold">
            Your Most Urgent System Issue *
          </Label>
          <Select value={formData.urgentIssue} onValueChange={(value) =>
            setFormData({ ...formData, urgentIssue: value })
          }>
            <SelectTrigger
              id="issue"
              className={`bg-background border-border ${
                errors.urgentIssue ? "border-destructive" : ""
              }`}
            >
              <SelectValue placeholder="Select the issue that's causing the most pain..." />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              {urgentIssues.map((issue) => (
                <SelectItem key={issue} value={issue}>
                  {issue}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.urgentIssue && (
            <p className="text-sm text-destructive flex gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.urgentIssue}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground font-semibold">
            Additional Details (Optional)
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us more about your situation, timeline, or any other relevant details..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-background border-border min-h-32 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
        >
          {isSubmitting ? "Submitting..." : "Get Your Free Consultation"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Your information will only be used to contact you about your system stabilization needs.
        </p>
      </form>
    </Card>
  );
}
