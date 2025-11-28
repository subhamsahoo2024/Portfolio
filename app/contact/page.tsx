"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      console.log("Form submitted");
    }, 1000);

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={name}
            required
            className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            required
            className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Message
          </label>
          <textarea
            value={message}
            rows={5}
            required
            className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
      {status === "success" && (
        <p className="text-green-400 text-center mt-4">
          Message sent successfully! I'll get back to you soon.
        </p>
      )}
    </div>
  );
}
