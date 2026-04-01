import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  urgentIssue: string;
  message?: string;
}

interface UseFormSubmissionReturn {
  isSubmitting: boolean;
  submitForm: (data: FormData) => Promise<boolean>;
}

export function useFormSubmission(): UseFormSubmissionReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (data: FormData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const submissionData = {
        timestamp: new Date().toISOString(),
        ...data,
      };

      console.log("Form submission:", submissionData);

      const emailPayload = {
        to: "contact@systemstabilization.com",
        subject: `New Lead: ${data.name} from ${data.company}`,
        body: `
New lead submission:

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}
Urgent Issue: ${data.urgentIssue}
Message: ${data.message || "N/A"}

Submitted at: ${new Date().toISOString()}
        `,
      };

      console.log("Email notification:", emailPayload);

      const submissions = JSON.parse(
        localStorage.getItem("formSubmissions") || "[]"
      );
      submissions.push(submissionData);
      localStorage.setItem("formSubmissions", JSON.stringify(submissions));

      toast.success("Thank you! We'll be in touch within 24 hours.");
      return true;
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm,
  };
}
