"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env
      .NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = process.env
      .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = process.env
      .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          created_at: new Date().toLocaleString(),
        },
        publicKey
      );

      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-background">

      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center space-y-3 md:space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#0A66FF] uppercase">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            Let&apos;s talk padel.
          </h1>
          <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            Have a question about a racket, an order, or wholesale? Send us a
            message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>


      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start">

          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm px-6 py-7 md:px-7 md:py-8 space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                Contact details
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Prefer email or phone? Reach out directly and we&apos;ll help
                you choose the right racket, track an order or discuss bulk /
                team orders.
              </p>

              <div className="space-y-3 text-sm text-neutral-800">
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Email
                  </p>
                  <p>randeree.business@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Phone
                  </p>
                  <p>+27 82 398 1954</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Location
                  </p>
                  <p>Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm px-6 py-6 md:px-7 md:py-7 space-y-3">
              <h3 className="text-sm font-semibold text-neutral-900">
                Typical response time
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                We usually reply within 24–48 hours on business days. For urgent
                order-related queries, please call or WhatsApp using the number
                above.
              </p>
            </div>
          </div>


          <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm px-6 py-8 md:px-8 md:py-10">
            <h2 className="text-lg md:text-xl font-semibold text-neutral-900 mb-4">
              Send us a message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm
                               focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm
                               focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>


              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-neutral-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm
                             focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent"
                  placeholder="How can we help?"
                  required
                />
              </div>


              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm
                             resize-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent"
                  placeholder="Tell us a bit more about what you need..."
                  required
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3
                             text-sm font-semibold text-white hover:bg-neutral-900 transition-colors disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-xs text-green-600">
                    Message sent. We&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-600">
                    Something went wrong. Please check your details and try
                    again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
