"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { FormField, inputStyles } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export function ContactForm() {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // 🔶 Wire to real endpoint/CRM in a later phase.
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("Contact form submission", values);
      showToast("Message sent — we'll be in touch shortly.");
      reset();
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <FormField label="Full name" htmlFor="contact-name" error={errors.name?.message}>
        <input id="contact-name" className={inputStyles(!!errors.name)} {...register("name")} />
      </FormField>
      <FormField label="Email" htmlFor="contact-email" error={errors.email?.message}>
        <input id="contact-email" type="email" className={inputStyles(!!errors.email)} {...register("email")} />
      </FormField>
      <FormField label="Company (optional)" htmlFor="contact-company">
        <input id="contact-company" className={inputStyles()} {...register("company")} />
      </FormField>
      <FormField label="Message" htmlFor="contact-message" error={errors.message?.message}>
        <textarea id="contact-message" rows={5} className={inputStyles(!!errors.message)} {...register("message")} />
      </FormField>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
