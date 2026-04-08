"use client";

import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div>
          <h2 className="text-xl font-black text-center tracking-tight">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm text-center mt-1">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:theharaljayasuriya@gmail.com"
            className="flex items-center gap-2.5 bg-slate-800 hover:bg-green-600 transition-colors duration-200 px-5 py-3 rounded-2xl text-sm font-medium group"
          >
            <FaEnvelope size={15} className="text-green-400 group-hover:text-white transition-colors" />
            theharaljayasuriya@gmail.com
          </a>

          <a
            href="tel:+94768249800"
            className="flex items-center gap-2.5 bg-slate-800 hover:bg-green-600 transition-colors duration-200 px-5 py-3 rounded-2xl text-sm font-medium group"
          >
            <FaPhone size={15} className="text-green-400 group-hover:text-white transition-colors" />
            076 824 9800
          </a>

          <div className="flex items-center gap-2.5 bg-slate-800 px-5 py-3 rounded-2xl text-sm font-medium">
            <FaMapMarkerAlt size={15} className="text-green-400" />
            591, Galle Road, Colombo
          </div>
        </div>

        <p className="text-slate-600 text-xs text-center" suppressHydrationWarning>
          © {year ?? ""} Planet Detectives · Built with care for our planet 🌍
        </p>
      </div>
    </footer>
  );
}
