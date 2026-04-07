"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobeAmericas, FaSeedling, FaHeart } from "react-icons/fa";

// ── Data ────────────────────────────────────────────────────────────────────

const PLEDGES = [
  { label: "I save electricity", emoji: "⚡" },
  { label: "I recycle", emoji: "♻️" },
  { label: "I reduce plastic use", emoji: "🛍️" },
  { label: "I walk or cycle sometimes", emoji: "🚶‍♀️" },
  { label: "I spread awareness to friends", emoji: "📢" },
  { label: "I conserve water", emoji: "💧" },
  { label: "I plant or take care of trees", emoji: "🌱" },
  { label: "I avoid food waste", emoji: "🍽️" },
];

const BADGE_LEVELS = [
  {
    id: 1,
    label: "Eco Starter",
    medal: "🥉",
    icon: "🌱",
    min: 1,
    description:
      "Great start! Every small action counts 🌿 You've taken your first step to help the planet.",
    from: "#84cc16",
    to: "#22c55e",
    shadow: "rgba(132,204,22,0.55)",
    textColor: "text-lime-700",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-300",
  },
  {
    id: 2,
    label: "Green Supporter",
    medal: "🥈",
    icon: "🌿",
    min: 3,
    description:
      "You're making a difference! 🌍 Keep going—your actions are helping the Earth.",
    from: "#34d399",
    to: "#059669",
    shadow: "rgba(52,211,153,0.55)",
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
  },
  {
    id: 3,
    label: "Planet Protector",
    medal: "🥇",
    icon: "🌍",
    min: 5,
    description:
      "Amazing effort! 💚 You are actively protecting the planet with your daily choices.",
    from: "#38bdf8",
    to: "#0ea5e9",
    shadow: "rgba(56,189,248,0.55)",
    textColor: "text-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-300",
  },
  {
    id: 4,
    label: "Climate Hero",
    medal: "💎",
    icon: "🌍✨",
    min: 8,
    description:
      "Incredible! You are a true Climate Hero 🌍💚 Your actions inspire others and help shape a better future!",
    from: "#fbbf24",
    to: "#f97316",
    shadow: "rgba(251,191,36,0.65)",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
  },
];

function getBadge(count: number) {
  return [...BADGE_LEVELS].reverse().find((b) => count >= b.min) ?? null;
}

// ── Confetti ─────────────────────────────────────────────────────────────────

const COLORS = ["#22c55e", "#fbbf24", "#38bdf8", "#f97316", "#a855f7", "#ec4899", "#84cc16"];

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
}

function Confetti({ active }: { active: boolean }) {
  const particles = useRef<Particle[]>(
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 1.5,
      duration: 2.5 + Math.random() * 2,
      rotate: Math.random() * 360,
    }))
  );

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.current.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: "-20px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            rotate: p.rotate,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [p.rotate, p.rotate + 360 * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      ))}
    </div>
  );
}

// ── Badge Card ────────────────────────────────────────────────────────────────

function BadgeCard({
  badge,
  unlocked,
  active,
}: {
  badge: (typeof BADGE_LEVELS)[0];
  unlocked: boolean;
  active: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center gap-1 select-none">
      <motion.div
        animate={
          active
            ? {
                scale: [1, 1.12, 1],
                boxShadow: [
                  `0 0 0px ${badge.shadow}`,
                  `0 0 28px ${badge.shadow}`,
                  `0 0 8px ${badge.shadow}`,
                ],
              }
            : unlocked
            ? {
                boxShadow: [`0 0 0px ${badge.shadow}`, `0 0 14px ${badge.shadow}`, `0 0 0px ${badge.shadow}`],
              }
            : {}
        }
        transition={{ repeat: Infinity, duration: 2.2 }}
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center text-2xl sm:text-3xl border-2 transition-all duration-300 ${
          unlocked
            ? `${badge.bgColor} ${badge.borderColor}`
            : "bg-slate-100 border-slate-200 grayscale opacity-40"
        }`}
        title={unlocked ? badge.label : "Complete more pledges to unlock this level!"}
      >
        <span>{badge.icon}</span>
      </motion.div>
      <span
        className={`text-[10px] sm:text-xs font-semibold text-center leading-tight ${
          unlocked ? badge.textColor : "text-slate-400"
        }`}
      >
        {badge.medal} {badge.label}
      </span>
      {!unlocked && (
        <span className="text-[10px] text-slate-400">🔒</span>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Section8Pledge() {
  const [checked, setChecked] = useState<boolean[]>(new Array(PLEDGES.length).fill(false));
  const [prevCount, setPrevCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const count = checked.filter(Boolean).length;
  const progress = (count / PLEDGES.length) * 100;
  const currentBadge = getBadge(count);
  const isHero = count === PLEDGES.length;

  // Trigger confetti when reaching 8/8
  useEffect(() => {
    if (count === PLEDGES.length && prevCount < PLEDGES.length) {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 7000);
      return () => clearTimeout(t);
    }
    setPrevCount(count);
  }, [count, prevCount]);

  return (
    <>
      <Confetti active={showConfetti} />

      <section
        id="section-7"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/images/last-page-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* ── Header ── */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-3 flex items-center justify-center gap-3"
          >
            🌍 Your Planet Needs You
            <FaSeedling size={28} color="#22c55e" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/80 text-center max-w-xl mb-10"
          >
            Make a personal pledge to help our planet. Check the actions you
            commit to doing — and unlock badge levels!
          </motion.p>

          {/* ── Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">

              {/* ── Progress ── */}
              <div className="mb-6">
                <div className="flex justify-between text-sm font-semibold text-slate-500 mb-2">
                  <span>Your Progress</span>
                  <span className={count > 0 ? "text-green-600" : ""}>
                    {count} / {PLEDGES.length} pledges
                  </span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(to right, #84cc16, #22c55e, #059669)",
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                  />
                </div>
              </div>

              {/* ── Pledge checklist ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PLEDGES.map((pledge, i) => (
                  <motion.label
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      checked[i]
                        ? "bg-green-50 border-2 border-green-300"
                        : "bg-slate-50 border-2 border-slate-200 hover:border-green-200 hover:bg-green-50/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => toggle(i)}
                      className="sr-only"
                      aria-label={pledge.label}
                    />
                    <motion.div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        checked[i] ? "bg-green-500" : "bg-white border-2 border-slate-300"
                      }`}
                      animate={checked[i] ? { scale: [1, 1.25, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {checked[i] && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2 7L5.5 10.5L12 3.5"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </motion.div>
                    <span className="text-lg leading-none">{pledge.emoji}</span>
                    <span
                      className={`text-sm font-medium ${
                        checked[i] ? "text-green-800" : "text-slate-700"
                      }`}
                    >
                      {pledge.label}
                    </span>
                  </motion.label>
                ))}
              </div>

              {/* ── Badge level row ── */}
              <div className="border-t border-slate-100 pt-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center mb-4">
                  Badge Levels
                </p>
                <div className="flex justify-around items-start gap-2">
                  {BADGE_LEVELS.map((badge) => (
                    <BadgeCard
                      key={badge.id}
                      badge={badge}
                      unlocked={count >= badge.min}
                      active={currentBadge?.id === badge.id}
                    />
                  ))}
                </div>
              </div>

              {/* ── Current badge description ── */}
              <AnimatePresence mode="wait">
                {currentBadge && (
                  <motion.div
                    key={currentBadge.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className={`mt-6 rounded-2xl border-2 ${currentBadge.borderColor} ${currentBadge.bgColor} px-5 py-4 text-center`}
                  >
                    <p className={`text-sm font-semibold leading-relaxed ${currentBadge.textColor}`}>
                      {currentBadge.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Climate Hero celebration ── */}
              <AnimatePresence>
                {isHero && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="mt-5 text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, -8, 8, -8, 8, 0], scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="text-5xl mb-2"
                    >
                      🌍
                    </motion.div>
                    <p className="text-amber-700 font-black text-lg">
                      🎉 You are a true Climate Hero! 🎉
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Motivational footer ── */}
              {count > 0 && !isHero && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-slate-400 text-xs mt-5 flex items-center justify-center gap-1"
                >
                  Every action counts. You&apos;re part of the solution.
                  <FaHeart size={12} color="#22c55e" />
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* ── Footer ── */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-14 text-center text-xs text-white/60"
          >
            <p>Planet Detectives — An interactive learning experience about climate change.</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Built with care for our planet.
              <FaGlobeAmericas size={11} color="#94a3b8" />
            </p>
          </motion.footer>
        </div>
      </section>
    </>
  );
}
