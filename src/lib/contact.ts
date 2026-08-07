export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(form: ContactForm): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL.test(form.email.trim())) {
    errors.email = "Please enter a valid email address";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required";
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

/**
 * Web3Forms access keys are public by design — they live in the markup of
 * every Web3Forms integration — so NEXT_PUBLIC_ is the correct prefix here.
 */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const ENDPOINT = "https://api.web3forms.com/submit";

export function web3formsPayload(
  form: ContactForm,
  accessKey: string
): Record<string, string> {
  return {
    access_key: accessKey,
    name: form.name.trim(),
    email: form.email.trim(),
    subject: form.subject.trim(),
    message: form.message.trim(),
    from_name: "Portfolio contact form",
    // Web3Forms silently drops a submission when this hidden field is filled,
    // which is what most bots do to every input they find.
    botcheck: "",
  };
}

/** Resolves on delivery, throws with a readable reason otherwise. */
export async function sendContact(
  form: ContactForm,
  accessKey: string
): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(web3formsPayload(form, accessKey)),
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success) {
    throw new Error(result?.message ?? `Request failed (${response.status})`);
  }
}

/**
 * Fallback for when no access key is configured. Percent-encoded by hand
 * rather than with URLSearchParams, which encodes spaces as "+" — mail
 * clients render that literally instead of as a space.
 */
export function mailtoUrl(to: string, form: ContactForm): string {
  const body = `${form.message.trim()}\n\n—\n${form.name.trim()} <${form.email.trim()}>`;
  return `${to}?subject=${encodeURIComponent(
    form.subject.trim()
  )}&body=${encodeURIComponent(body)}`;
}
