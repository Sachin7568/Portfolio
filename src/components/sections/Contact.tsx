"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="Get In Touch" id="contact-heading" align="left" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-[var(--color-bg-1)] rounded-xl border border-[var(--color-border)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side: Contact Details */}
              <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-bg-0)]">
                <div>
                  <h3 className="font-headline text-xl font-bold text-[var(--color-ink)] mb-2">
                    Let&apos;s build something together.
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[var(--color-ink-2)] mb-6 leading-relaxed">
                    Interested in full-stack engineering, web development, or technical collaboration? Feel free to reach out.
                  </p>

                  <div className="space-y-3 font-code text-xs">
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

                {/* Profiles */}
                <div className="pt-6 mt-6 border-t border-[var(--color-border)]">
                  <span className="block font-code text-xs text-[var(--color-ink-3)] uppercase tracking-wider mb-2.5">
                    Connect
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lg:col-span-3 p-6 sm:p-8">
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 bg-[var(--color-accent-wash)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--color-accent)]">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-headline text-lg font-bold text-[var(--color-ink)] mb-1">
                      Message Sent
                    </h3>
                    <p className="text-[var(--color-ink-2)] text-xs">
                      Thank you for reaching out. I will respond promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-bg-0)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm placeholder-[var(--color-ink-3)] focus:outline-none focus:border-[var(--color-border-active)] transition-colors"
                        />
                        {errors.name && <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-bg-0)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm placeholder-[var(--color-ink-3)] focus:outline-none focus:border-[var(--color-border-active)] transition-colors"
                        />
                        {errors.email && <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Inquiry or Project Discussion"
                        className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-bg-0)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm placeholder-[var(--color-ink-3)] focus:outline-none focus:border-[var(--color-border-active)] transition-colors"
                      />
                      {errors.subject && <span className="text-xs text-red-400 mt-1 block">{errors.subject}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message details..."
                        className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-bg-0)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm placeholder-[var(--color-ink-3)] focus:outline-none focus:border-[var(--color-border-active)] transition-colors resize-none"
                      />
                      {errors.message && <span className="text-xs text-red-400 mt-1 block">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg-0)] font-body text-xs font-semibold hover:bg-[var(--color-accent-dim)] active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
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
