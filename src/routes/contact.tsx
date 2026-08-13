import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ctaClasses } from "@/components/site/CtaButton";
import { Section } from "@/components/site/Section";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Wafiq Holdings" },
      {
        name: "description",
        content:
          "Contact Wafiq Holdings about business opportunities, partnerships, acquisitions, or investment-related enquiries.",
      },
      { property: "og:title", content: "Contact | Wafiq Holdings" },
      {
        property: "og:description",
        content:
          "For business opportunities, partnerships, acquisitions, or investment-related enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Fields = "name" | "email" | "company" | "phone" | "subject" | "message";
type Errors = Partial<Record<Fields, string>>;

const initial: Record<Fields, string> = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(values: Record<Fields, string>): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Name must be under 100 characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Please enter a valid email address.";
  else if (email.length > 255) errors.email = "Email must be under 255 characters.";

  if (values.company.trim().length > 120)
    errors.company = "Company must be under 120 characters.";

  if (values.phone.trim() && !/^[0-9+()\-.\s]{6,25}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > 150) errors.subject = "Subject must be under 150 characters.";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > 2000) errors.message = "Message must be under 2000 characters.";

  return errors;
}

const fieldClass =
  "mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";

function ContactPage() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (field: Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Submission target is intentionally not wired yet — no inbox is published.
    setSent(true);
    setValues(initial);
  };

  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">Let's Connect</h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            For business opportunities, partnerships, acquisitions, investment-related
            inquiries, or general questions, please get in touch with Wafiq Holdings.
          </p>
          {site.contactEmail ? (
            <p className="mt-8 text-sm">
              <a
                href={`mailto:${site.contactEmail}`}
                className="border-b border-gold pb-0.5 transition-colors hover:text-gold"
              >
                {site.contactEmail}
              </a>
            </p>
          ) : null}
        </div>

        <div>
          {sent ? (
            <div
              role="status"
              className="border border-border bg-card p-10 text-center"
            >
              <h2 className="text-2xl">Thank you for reaching out.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Your message has been received. We review every enquiry and will respond
                if there is a fit.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className={ctaClasses("outline", "mt-8")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={set("name")}
                    maxLength={100}
                    autoComplete="name"
                    className={fieldClass}
                  />
                </Field>
                <Field id="email" label="Email" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={set("email")}
                    maxLength={255}
                    autoComplete="email"
                    className={fieldClass}
                  />
                </Field>
                <Field id="company" label="Company" error={errors.company}>
                  <input
                    id="company"
                    name="company"
                    value={values.company}
                    onChange={set("company")}
                    maxLength={120}
                    autoComplete="organization"
                    className={fieldClass}
                  />
                </Field>
                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={set("phone")}
                    maxLength={25}
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </Field>
              </div>
              <Field id="subject" label="Subject" required error={errors.subject}>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={set("subject")}
                  maxLength={150}
                  className={fieldClass}
                />
              </Field>
              <Field id="message" label="Message" required error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={set("message")}
                  maxLength={2000}
                  className={fieldClass}
                />
              </Field>
              <button type="submit" className={ctaClasses("solid", "w-full sm:w-auto")}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}