"use client";
import { useState } from "react";

export default function OrderForm({ productName }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    email: "",
    quantity: 1,
    message: "",
    country: "",
    address: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleOpen() {
    setShowForm(true);
  }
  function handleClose() {
    setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: handle order submission
    alert("Order submitted! (not yet implemented)");
    setShowForm(false);
  }

  return (
    <div className="w-full flex flex-col items-center mt-6 font-sans">
      <div className="mb-4 text-center text-green-900 text-base font-medium">
        All orders are made through email. Send us an order request and we will
        answer as soon as possible to arrange your purchase and delivery.
      </div>
      <button
        className="px-6 py-3 border-2 border-emerald-800 text-emerald-800 bg-white rounded-xl font-semibold flex items-center gap-2 hover:bg-emerald-50 hover:border-emerald-900 transition shadow-sm"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75"
          />
        </svg>
        Request Order
      </button>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative font-sans"
          >
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Request Order: {productName}
            </h2>
            <div className="mb-4 text-green-900 text-sm text-center">
              Fill out the form below. We will contact you by email to confirm
              your order and arrange payment and delivery.
            </div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-3 py-2 border rounded-xl"
            />
            <label className="block mb-2 font-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              required
              className="w-full mb-4 px-3 py-2 border rounded-xl"
            />
            <label className="block mb-2 font-semibold">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full mb-4 px-3 py-2 border rounded-xl"
            />
            <label className="block mb-2 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full mb-4 px-3 py-2 border rounded-xl"
            />
            <label className="block mb-2 font-semibold">Extra Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mb-4 px-3 py-2 border rounded-xl"
              rows={3}
              placeholder="Any extra info for your order..."
            />
            <button
              type="submit"
              className="w-full mt-2 px-4 py-2 bg-emerald-800 text-white rounded-xl font-semibold hover:bg-emerald-900 transition"
            >
              Send Request
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
