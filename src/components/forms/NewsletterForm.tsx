"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { inputStyles } from "@/components/forms/FormField";

export function NewsletterForm() {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (values: NewsletterValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Newsletter signup", values);
      showToast("You're subscribed!");
      reset();
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 sm:flex-row" noValidate>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email"
        className={inputStyles(!!errors.email)}
        {...register("email")}
      />
      <Button type="submit" disabled={isSubmitting} className="flex-shrink-0">
        {isSubmitting ? "Subscribing…" : "Subscribe"}
      </Button>
      {errors.email && <p className="text-xs text-error">{errors.email.message}</p>}
    </form>
  );
}
