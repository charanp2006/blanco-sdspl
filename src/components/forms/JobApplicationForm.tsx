"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationSchema, type JobApplicationValues } from "@/lib/validations";
import { FormField, inputStyles } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import type { JobOpening } from "@/types";

const MAX_RESUME_SIZE_MB = 5;

export function JobApplicationForm({ openings }: { openings: JobOpening[] }) {
  const { showToast } = useToast();
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationValues>({ resolver: zodResolver(jobApplicationSchema) });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setResumeError(`File must be under ${MAX_RESUME_SIZE_MB}MB`);
      setResumeFile(null);
      return;
    }
    setResumeError(null);
    setResumeFile(file);
  };

  const onSubmit = async (values: JobApplicationValues) => {
    if (!resumeFile) {
      setResumeError("Attach your resume");
      return;
    }
    try {
      // 🔶 Wire to real endpoint/ATS in a later phase.
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("Job application submission", { ...values, resume: resumeFile.name });
      showToast("Application submitted — thank you for applying!");
      reset();
      setResumeFile(null);
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="job-name" error={errors.name?.message}>
          <input id="job-name" className={inputStyles(!!errors.name)} {...register("name")} />
        </FormField>
        <FormField label="Email" htmlFor="job-email" error={errors.email?.message}>
          <input id="job-email" type="email" className={inputStyles(!!errors.email)} {...register("email")} />
        </FormField>
      </div>
      <FormField label="Phone" htmlFor="job-phone" error={errors.phone?.message}>
        <input id="job-phone" type="tel" className={inputStyles(!!errors.phone)} {...register("phone")} />
      </FormField>
      <FormField label="Position" htmlFor="job-position" error={errors.position?.message}>
        <select id="job-position" className={inputStyles(!!errors.position)} defaultValue="" {...register("position")}>
          <option value="" disabled>
            Select a position
          </option>
          {openings.map((job) => (
            <option key={job.slug} value={job.slug}>
              {job.title}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Cover note (optional)" htmlFor="job-cover">
        <textarea id="job-cover" rows={4} className={inputStyles()} {...register("coverNote")} />
      </FormField>
      <FormField label="Resume" htmlFor="job-resume" error={resumeError ?? undefined}>
        <input
          id="job-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={onFileChange}
          className="block w-full text-sm text-neutral-600 file:mr-4 file:rounded-pill file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand hover:file:bg-brand-100"
        />
      </FormField>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
