"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";
import {
  validateContact,
  sendContact,
  mailtoUrl,
  WEB3FORMS_KEY,
} from "@/lib/contact";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const empty = { name: "", email: "", subject: "", message: "" };

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1.5"
      >
        {label} <span className="text-[var(--color-accent)]">*</span>
      </label>
      {children}
      {error && (
        <span
          id={`${id}-error`}
          className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
        >
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </span>
      )}
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle"
  );
  const [failure, setFailure] = useState("");

  const update = (field: keyof typeof empty, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    // Clear the error the moment the visitor starts fixing that field.
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const found = validateContact(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Without a configured key there is no backend to post to, so hand the
    // message to the visitor's mail client rather than pretend to deliver it.
    if (!WEB3FORMS_KEY) {
      window.location.href = mailtoUrl(personal.social.email, formData);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await sendContact(formData, WEB3FORMS_KEY);
      setFormData(empty);
      setStatus("sent");
    } catch (error) {
      setFailure(error instanceof Error ? error.message : "Something broke");
      setStatus("failed");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="Get In Touch" id="contact-heading" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="card">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: how to reach me directly */}
              <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-bg-0)]">
                <div>
                  <h3 className="font-headline text-xl font-bold text-[var(--color-ink)] mb-2">
                    Let&apos;s build something together.
                  </h3>
                  <p className="font-body text-sm text-[var(--color-ink-2)] mb-6 leading-relaxed">
                    Open to full-stack roles, freelance work, and technical
                    collaboration. I read every message.
                  </p>

                  <div className="space-y-2.5 font-code text-xs">
                    <a
                      href={personal.social.email}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="truncate">{personal.email}</span>
                    </a>

                    <a
                      href={personal.social.phone}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span>{personal.phone}</span>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)]">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span>{personal.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--color-border)]">
                  <span className="block font-code text-xs text-[var(--color-ink-3)] uppercase tracking-wider mb-2.5">
                    Connect
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="GitHub profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: the form */}
              <div className="lg:col-span-3 p-6 sm:p-8">
                {status === "sent" ? (
                  <div className="text-center py-10" role="status">
                    <div className="w-12 h-12 bg-[var(--color-accent-wash)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--color-accent)]">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-headline text-lg font-bold text-[var(--color-ink)] mb-1">
                      {WEB3FORMS_KEY
                        ? "Message sent"
                        : "Your email app should be open"}
                    </h3>
                    <p className="text-[var(--color-ink-2)] text-sm">
                      {WEB3FORMS_KEY ? (
                        "Thanks for reaching out — I'll reply soon."
                      ) : (
                        <>
                          Hit send there and it reaches me. Nothing came up?
                          Write to{" "}
                          <a
                            href={personal.social.email}
                            className="text-[var(--color-accent)] underline"
                          >
                            {personal.email}
                          </a>
                          .
                        </>
                      )}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field id="name" label="Name" error={errors.name}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          value={formData.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Your name"
                          className="field"
                        />
                      </Field>

                      <Field id="email" label="Email" error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="your.email@example.com"
                          className="field"
                        />
                      </Field>
                    </div>

                    <Field id="subject" label="Subject" error={errors.subject}>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        value={formData.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        placeholder="Role, project, or collaboration"
                        className="field"
                      />
                    </Field>

                    <Field id="message" label="Message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        value={formData.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="What are you working on?"
                        className="field resize-none"
                      />
                    </Field>

                    {status === "failed" && (
                      <p
                        role="alert"
                        className="text-xs text-red-400 flex items-start gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-px" />
                        <span>
                          Could not send ({failure}). Email me directly at{" "}
                          <a
                            href={personal.social.email}
                            className="underline text-[var(--color-accent)]"
                          >
                            {personal.email}
                          </a>
                          .
                        </span>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary w-full text-xs disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
