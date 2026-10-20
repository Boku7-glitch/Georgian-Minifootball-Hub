import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, Share2, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Georgian Minifootball Federation" },
      { name: "description", content: "Get in touch with the Georgian Minifootball Federation — phone, email and feedback form." },
      { property: "og:title", content: "Contact — GMF" },
      { property: "og:description", content: "Get in touch with the GMF." },
    ],
  }),
  component: Contact,
});

const cards = [
  { icon: Phone, label: "Phone", value: "558 16 76 51" },
  { icon: Mail, label: "Email", value: "minifootball.ge@gmail.com" },
  { icon: Share2, label: "Social Media", value: "@minifootball.ge" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="We'd love to hear from you. Reach out anytime." />

      {/* Contact cards */}
      <section className="container-x -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl bg-card p-6 shadow-elevated border-t-4 border-[color:var(--brand-red)] hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-xl bg-[color:var(--navy)] text-white flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">{label}</p>
              <p className="font-semibold leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="container-x py-20 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-card shadow-card p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-2">Feedback</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-6">Send Us a Message</h2>

          {sent && (
            <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-semibold">Message sent! We'll get back to you soon.</span>
            </div>
          )}

          <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" />
            <Field label="Subject" name="subject" required />
            <div className="md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea name="message" required rows={5} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[color:var(--brand-red)] hover:bg-[color:var(--navy)] text-white font-bold uppercase tracking-wider text-sm shadow-red transition-colors">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-[color:var(--brand-red)]"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]"
      />
    </div>
  );
}
