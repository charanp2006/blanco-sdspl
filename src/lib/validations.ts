import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters"),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const quoteRequestSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().min(2, "Enter your company name"),
  service: z.string().min(1, "Select a service"),
  projectDetails: z.string().min(10, "Tell us a bit about the project"),
});
export type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;

export const jobApplicationSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(8, "Enter a valid phone number"),
  position: z.string().min(1, "Select a position"),
  coverNote: z.string().max(1000, "Keep it under 1000 characters").optional(),
  // File handled separately client-side (resume upload); validated for
  // presence/type/size in the form component, not in this schema.
});
export type JobApplicationValues = z.infer<typeof jobApplicationSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;
