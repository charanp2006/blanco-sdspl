"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteRequestSchema, type QuoteRequestValues } from "@/lib/validations";
import { FormField, inputStyles } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { services } from "@/content/services";

export function QuoteRequestForm() {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequestValues>({ resolver: zodResolver(quoteRequestSchema) });

  const onSubmit = async (values: QuoteRequestValues) => {
    try {
      // 🔶 Wire to real endpoint/CRM in a later phase.
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("Quote request submission", values);
      showToast("Quote request received — our team will reach out soon.");
      reset();
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="quote-name" error={errors.name?.message}>
          <input id="quote-name" className={inputStyles(!!errors.name)} {...register("name")} />
        </FormField>
        <FormField label="Email" htmlFor="quote-email" error={errors.email?.message}>
          <input id="quote-email" type="email" className={inputStyles(!!errors.email)} {...register("email")} />
        </FormField>
      </div>
      <FormField label="Company" htmlFor="quote-company" error={errors.company?.message}>
        <input id="quote-company" className={inputStyles(!!errors.company)} {...register("company")} />
      </FormField>
      <FormField label="Service needed" htmlFor="quote-service" error={errors.service?.message}>
        <select id="quote-service" className={inputStyles(!!errors.service)} defaultValue="" {...register("service")}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Project details" htmlFor="quote-details" error={errors.projectDetails?.message}>
        <textarea
          id="quote-details"
          rows={5}
          placeholder="Project type, tonnage/scope, timeline…"
          className={inputStyles(!!errors.projectDetails)}
          {...register("projectDetails")}
        />
      </FormField>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting…" : "Request a Quote"}
      </Button>
    </form>
  );
}
