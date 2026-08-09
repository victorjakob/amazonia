"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EMPTY_FORM = {
  email: "",
  quantity: 1,
  message: "",
  country: "",
  address: "",
};

export default function OrderForm({ productName }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  const firstFieldRef = useRef(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleOpen() {
    setStatus(null);
    setShowForm(true);
  }

  function handleClose() {
    setShowForm(false);
  }

  // Escape to dismiss, and lock the page behind the dialog.
  useEffect(() => {
    if (!showForm) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setShowForm(false);
    };
    window.addEventListener("keydown", onKey);
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      clearTimeout(focusTimer);
    };
  }, [showForm]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productName }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(EMPTY_FORM);
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
    <div className="w-full">
      <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
        All orders are made through email. Send us an order request and we will
        answer as soon as possible to arrange your purchase and delivery.
      </p>

      <button type="button" onClick={handleOpen} className="btn btn-primary mt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75"
          />
        </svg>
        Request Order
      </button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-forest-900/55 p-4 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="order-dialog-title"
              className="relative my-auto w-full max-w-lg bg-paper shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-muted transition-colors duration-200 hover:text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              </button>

              <div className="px-7 py-9 sm:px-10 sm:py-11">
                {status === "success" ? (
                  <div className="py-6 text-center">
                    <span aria-hidden="true" className="mx-auto mb-7 u-rule" />
                    <p
                      id="order-dialog-title"
                      className="font-display text-3xl font-light leading-snug text-forest-800"
                    >
                      Order submitted! We&apos;ll contact you soon.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="btn btn-outline mt-9"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate={false}>
                    <h2
                      id="order-dialog-title"
                      className="font-display text-3xl font-light leading-snug text-forest-800"
                    >
                      Request Order: {productName}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Fill out the form below. We will contact you by email to
                      confirm your order and arrange payment and delivery.
                    </p>

                    <div className="mt-8 space-y-5">
                      <div>
                        <label className="field-label" htmlFor="order-email">
                          Email
                        </label>
                        <input
                          ref={firstFieldRef}
                          id="order-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>

                      <div>
                        <label className="field-label" htmlFor="order-quantity">
                          Quantity
                        </label>
                        <input
                          id="order-quantity"
                          type="number"
                          name="quantity"
                          min="1"
                          value={form.quantity}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>

                      <div>
                        <label className="field-label" htmlFor="order-country">
                          Country
                        </label>
                        <input
                          id="order-country"
                          type="text"
                          name="country"
                          autoComplete="country-name"
                          value={form.country}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>

                      <div>
                        <label className="field-label" htmlFor="order-address">
                          Address
                        </label>
                        <input
                          id="order-address"
                          type="text"
                          name="address"
                          autoComplete="street-address"
                          value={form.address}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>

                      <div>
                        <label className="field-label" htmlFor="order-message">
                          Extra Message
                        </label>
                        <textarea
                          id="order-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Any extra info for your order..."
                          className="field resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary mt-8 w-full"
                    >
                      {loading ? "Sending..." : "Send Request"}
                    </button>

                    {status === "error" && (
                      <p
                        role="alert"
                        className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700"
                      >
                        There was an error sending your order. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
