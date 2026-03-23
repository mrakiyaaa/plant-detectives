"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { MdSubject } from "react-icons/md";

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const allFilled = form.name && form.email && form.subject && form.message;

  return (
    <main className="min-h-screen px-4 sm:px-8 py-12 bg-gradient-to-b from-green-50 via-white to-emerald-50/30">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium text-sm mb-10 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-2">
            Contact Us
          </h1>
          <p className="text-slate-500 mb-10 text-base">
            Have a question, suggestion, or just want to say hello? We would love to hear from you.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8 flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                  <FaUser size={13} color="#22c55e" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                  <FaEnvelope size={13} color="#22c55e" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                  <MdSubject size={15} color="#22c55e" /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                  <FaPaperPlane size={13} color="#22c55e" /> Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={!allFilled || loading}
                whileHover={allFilled && !loading ? { scale: 1.02 } : {}}
                whileTap={allFilled && !loading ? { scale: 0.98 } : {}}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  allFilled && !loading
                    ? "bg-green-500 hover:bg-green-600 text-white shadow-md shadow-green-100"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                  />
                ) : (
                  <>
                    <FaPaperPlane size={13} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="mb-5"
              >
                <FaCheckCircle size={60} color="#22c55e" />
              </motion.div>
              <h2 className="text-2xl font-black text-slate-800 mb-2">Message Sent!</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                Thank you for reaching out. We have received your message and will get back to you as soon as possible.
              </p>
              <button
                onClick={() => router.push("/")}
                className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-sm transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
