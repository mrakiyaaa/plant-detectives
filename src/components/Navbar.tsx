"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const climateSubItems = [
  { label: "Greenhouse Gases", href: "/climate/greenhouse-gases" },
  { label: "Human Activities", href: "/climate/human-activities" },
  { label: "Natural Factors", href: "/climate/natural-factors" },
];

const navItems = [
  { label: "Impacts", href: "/impacts" },
  { label: "World Map", href: "/world-map" },
  { label: "Solutions", href: "/solutions" },
  { label: "Quiz", href: "/quiz" },
  { label: "Calculator", href: "/carbon-calculator" },
  { label: "Pledge", href: "/pledge" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPledge = pathname === "/pledge";
  const [climateOpen, setClimateOpen] = useState(false);

  const isClimateActive =
    pathname === "/climate" || pathname.startsWith("/climate/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isHome
          ? "bg-transparent"
          : isPledge
          ? "bg-white/10 backdrop-blur-md border-b border-white/20"
          : "bg-green-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-heading font-bold text-lg shrink-0 text-white">
            Planet Detectives
          </Link>

          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === "/" ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Mystery */}
              <li>
                <Link
                  href="/mystery"
                  className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === "/mystery" ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  Mystery
                </Link>
              </li>

              {/* Climate dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setClimateOpen(true)}
                onMouseLeave={() => setClimateOpen(false)}
              >
                <Link
                  href="/climate"
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                    isClimateActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  Climate
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform duration-200 ${climateOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {climateOpen && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-green-600 rounded-xl shadow-lg py-1.5 min-w-48">
                      {climateSubItems.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          className={`block px-4 py-2 text-sm transition-colors whitespace-nowrap ${
                            pathname === href
                              ? "text-white font-semibold bg-green-700"
                              : "text-white/80 hover:text-white hover:bg-green-700"
                          }`}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Rest of nav items */}
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold bg-white text-green-700 hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
