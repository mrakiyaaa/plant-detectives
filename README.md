# Planet Detectives

An interactive educational web experience that teaches kids about climate change through engaging stories, animations, and activities.

---

## What It Is

Planet Detectives turns complex climate science into a fun, accessible journey. Users explore the mystery of climate change step by step — learning about greenhouse gases, human activities, natural factors, real-world impacts, and what they can do to help.

---

## Features

- **Mystery Hook** — A dramatic before/after reveal of a healthy vs. damaged Earth
- **Climate Science** — Deep dives into Greenhouse Gases, Human Activities, and Natural Factors with interactive animations
- **World Map** — Click on hotspots around the globe to learn about real climate impacts
- **Solutions** — Discover actions individuals and communities can take
- **Quiz** — Test your climate knowledge with an animated quiz
- **Carbon Calculator** — Estimate your personal carbon footprint
- **Pledge Wall** — Make personal commitments and earn eco badges
- **Contact** — Get in touch via a clean contact form

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer-motion.com/) | Animations |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library |
| [react-simple-maps](https://www.react-simple-maps.io/) | Interactive world map |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
  app/
    page.tsx                  # Home page
    mystery/                  # Mystery section
    science/                  # Climate science
      greenhouse-gases/       # Greenhouse gases sub-page
      human-activities/       # Human activities sub-page
      natural-factors/        # Natural factors sub-page
    impacts/                  # Climate impacts
    world-map/                # Interactive world map
    solutions/                # Climate solutions
    quiz/                     # Knowledge quiz
    carbon-calculator/        # Footprint calculator
    pledge/                   # Pledge wall
    contact/                  # Contact form
  components/
    Navbar.tsx                # Site navigation
    Section1MysteryHook.tsx
    Section2Science.tsx
    Section3Impacts.tsx
    Section4WorldMap.tsx
    Section5Solutions.tsx
    Section6Quiz.tsx
    Section7CarbonCalculator.tsx
    Section8Pledge.tsx
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Push to the `main` branch to trigger an automatic deployment.

---

Built with care for our planet.
