"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="u-shell-narrow py-20 lg:py-28">
      <motion.header
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span aria-hidden="true" className="u-rule mb-8" />
        <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-tight text-forest-800">
          Contact Us
        </h1>
        <p className="mt-6 max-w-lg text-[1.0625rem] leading-[1.8] text-ink-soft">
          We&apos;d love to hear from you! For questions, custom orders, or
          partnership inquiries, please fill out the form below or email us
          directly.
        </p>
        <p className="mt-6">
          <a
            href="mailto:contact@amazonia-natureza.org"
            className="u-link text-[0.9375rem] text-forest-700 transition-colors duration-300 hover:text-amber"
          >
            contact@amazonia-natureza.org
          </a>
        </p>
      </motion.header>

      <motion.form
        className="mt-14 border-t border-line pt-12"
        onSubmit={handleSubmit}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-6">
          <motion.div variants={item}>
            <label className="field-label" htmlFor="contact-name">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="field-label" htmlFor="contact-email">
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              className="field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="field-label" htmlFor="contact-message">
              Your Message
            </label>
            <textarea
              id="contact-message"
              className="field resize-none"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-9">
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto sm:min-w-64"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.div>

        {status === "success" && (
          <motion.p
            role="status"
            className="mt-7 border border-forest-600/25 bg-sand px-5 py-4 text-center text-[0.9375rem] text-forest-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thank you! Your message has been sent.
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            role="alert"
            className="mt-7 border border-red-200 bg-red-50 px-5 py-4 text-center text-[0.9375rem] text-red-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
