// Run: npm test  (node --test, no framework)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validateContact,
  mailtoUrl,
  web3formsPayload,
  type ContactForm,
} from "./contact.ts";

const valid: ContactForm = {
  name: "Ada",
  email: "ada@example.com",
  subject: "Hello",
  message: "Hi there",
};

test("a complete form has no errors", () => {
  assert.deepEqual(validateContact(valid), {});
});

test("whitespace-only fields are rejected", () => {
  const errors = validateContact({ ...valid, name: "   ", message: "\n" });
  assert.ok(errors.name);
  assert.ok(errors.message);
});

test("malformed email is rejected", () => {
  assert.ok(validateContact({ ...valid, email: "ada@example" }).email);
  assert.ok(validateContact({ ...valid, email: "ada example.com" }).email);
});

test("mailto encodes characters that would otherwise split the query", () => {
  const url = mailtoUrl("mailto:me@example.com", {
    ...valid,
    subject: "Rates & scope?",
    message: "Line one\nLine two",
  });
  assert.ok(url.startsWith("mailto:me@example.com?subject="));
  // A raw & or newline here would truncate the subject / break the body.
  assert.ok(!url.slice("mailto:me@example.com?".length).includes("& "));
  assert.ok(url.includes("Rates%20%26%20scope%3F"));
  assert.ok(url.includes("Line%20one%0ALine%20two"));
  // Spaces must not become "+" — mail clients show those literally.
  assert.ok(!url.includes("+"));
});

test("web3forms payload carries the key, trims fields and empties the honeypot", () => {
  const payload = web3formsPayload(
    { ...valid, name: "  Ada  ", message: " Hi there " },
    "test-key"
  );
  assert.equal(payload.access_key, "test-key");
  assert.equal(payload.name, "Ada");
  assert.equal(payload.message, "Hi there");
  // A non-empty botcheck makes Web3Forms discard the submission silently.
  assert.equal(payload.botcheck, "");
});
