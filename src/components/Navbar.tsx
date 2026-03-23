"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Mystery", href: "/mystery" },
  { label: "Climate", href: "/science" },
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
          <Link
            href="/"
            className={`font-heading font-bold text-lg shrink-0 transition-colors ${
              isHome ? "text-white" : "text-white"
            }`}
          >
            Planet Detectives
          </Link>

          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
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
