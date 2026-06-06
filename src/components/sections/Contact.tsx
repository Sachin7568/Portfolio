"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      // Use FormSubmit for completely keyless serverless email sending
      const response = await fetch("https://formsubmit.co/ajax/sachinportfoliowebdev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Message from ${formData.name} (Portfolio)`,
          _template: "box",
        }),
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
      }

      if (response.ok && (!result || result.success === "true" || result.success === true)) {
        setStatus("success");
        setFormData(initialFormData);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Form submission failed:", result || response.statusText);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

    const inputClasses = (field: keyof FormData) =>
    cn(
      "w-full px-5 py-4 rounded-xl bg-surface-container-lowest/50 dark:bg-zinc-950/50 border text-on-surface text-sm font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-0 focus:border-primary transition-all duration-300 shadow-sm hover:bg-surface-container-lowest",
      errors[field]
        ? "border-error focus:border-error"
        : "border-outline-variant/30"
    );

  return (
    <section
      id="contact"
      className="py-12 md:py-24 border-b border-outline-variant/50 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* 3D Background Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <SectionHeader title="Get In Touch" id="contact-heading" align="center" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-[var(--bg-1)] backdrop-blur-md p-1 md:p-2 rounded-[2rem] border border-[var(--b1)] shadow-[0_0_40px_rgba(0,0,0,0.05)]">
            <div className="bg-surface dark:bg-zinc-950/50 rounded-[1.8rem] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left Side: Contact Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-tertiary/10 p-5 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
                  
                  <div className="relative z-10">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-4">
                      Let&apos;s build something great together.
                    </h3>
                    <p className="font-body text-base text-on-surface-variant mb-12 leading-relaxed">
                      Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shadow-sm">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:sachinportfoliowebdev@gmail.com" className="text-on-surface font-semibold hover:text-primary transition-colors text-[13px] sm:text-base">
                            sachinportfoliowebdev@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-3 p-5 sm:p-8 md:p-12">
                  {status === "success" ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-on-surface-variant text-lg">
                        Thank you for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-sm font-semibold text-on-surface mb-2 ml-1"
                          >
                            Name <span className="text-error">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={inputClasses("name")}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                          {errors.name && (
                            <p id="name-error" className="mt-2 text-xs font-semibold text-error flex items-center gap-1.5 ml-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-semibold text-on-surface mb-2 ml-1"
                          >
                            Email <span className="text-error">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={inputClasses("email")}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-2 text-xs font-semibold text-error flex items-center gap-1.5 ml-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-sm font-semibold text-on-surface mb-2 ml-1"
                        >
                          Subject <span className="text-error">*</span>
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          className={inputClasses("subject")}
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                        {errors.subject && (
                          <p id="subject-error" className="mt-2 text-xs font-semibold text-error flex items-center gap-1.5 ml-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-semibold text-on-surface mb-2 ml-1"
                        >
                          Message <span className="text-error">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, opportunity, or just say hi..."
                          rows={6}
                          className={cn(inputClasses("message"), "resize-none")}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-2 text-xs font-semibold text-error flex items-center gap-1.5 ml-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Error banner */}
                      {status === "error" && (
                        <div className="p-4 rounded-xl bg-error-container/50 border border-error/20 text-on-surface text-sm flex items-center gap-3 font-semibold">
                          <AlertCircle className="w-5 h-5 shrink-0 text-error" />
                          Submission failed. Please check your Access Key or try emailing directly.
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-body text-sm font-bold tracking-[0.02em] px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
