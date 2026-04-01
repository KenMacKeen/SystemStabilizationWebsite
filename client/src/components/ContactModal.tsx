import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function ContactModal({
  isOpen,
  onOpenChange,
  title = "Schedule Your Free Consultation",
  description = "Tell us about your most urgent system challenge, and we'll get back to you within 24 hours.",
}: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <ContactForm
          variant="modal"
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
