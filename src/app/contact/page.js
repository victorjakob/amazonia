"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <motion.div
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 border border-green-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-green-900 mb-2 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          We'd love to hear from you! For questions, custom orders, or
          partnership inquiries, please fill out the form below or email us
          directly.
        </motion.p>
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-500">
            Email:{" "}
            <a
              href="mailto:contact@amazonia-natureza.org"
              className="text-green-700 hover:underline font-medium"
            >
              contact@amazonia-natureza.org
            </a>
          </div>
        </motion.div>
        <motion.form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg transition outline-none text-gray-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            variants={item}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg transition outline-none text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variants={item}
          />
          <motion.textarea
            placeholder="Your Message"
            className="border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg transition outline-none text-gray-900 resize-none"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            variants={item}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="mt-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:from-green-700 hover:to-green-800 transition disabled:opacity-60"
            disabled={loading}
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
          {status === "success" && (
            <motion.div
              className="text-green-700 text-center font-medium mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              className="text-red-600 text-center font-medium mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Something went wrong. Please try again.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </main>
  );
}
