# DECISIONS.md

## Purpose

This document records significant decisions made during the development of Laughs & Eye Rolls.

The goal is to preserve institutional knowledge, prevent repeated debates, and provide future contributors with the reasoning behind major choices.

---

# Decision Log

---

## 2026-06-15

### Project Positioning

**Decision**

Laughs & Eye Rolls will be developed as a cinematic digital family archive rather than a traditional family website or blog.

**Reasoning**

The project exists to preserve personality, humor, stories, travel memories, and emotional context.

Traditional blogs and gallery sites focus on content publishing rather than memory preservation.

**Impact**

All future UX, content, and feature decisions should support archival storytelling.

---

## 2026-06-15

### Brand Tone

**Decision**

The brand voice will balance warmth, sophistication, humor, and authenticity.

**Reasoning**

The project should feel personal and emotionally grounded without becoming overly sentimental.

Humor is a core part of the family dynamic and should remain visible throughout the experience.

**Impact**

Content should remain elegant while allowing personality and wit to surface naturally.

---

## 2026-06-15

### Design Direction

**Decision**

The visual language will follow a luxury editorial and cinematic storytelling approach.

**Reasoning**

The project should feel timeless, immersive, and highly readable while avoiding scrapbook aesthetics and memorial-site conventions.

**Impact**

Future designs should prioritize typography, imagery, spacing, texture, and storytelling over decorative elements.

---

## 2026-06-15

### Technology Stack

**Decision**

Preferred technology stack:

* Next.js
* Tailwind CSS
* Framer Motion
* Supabase
* Vercel

**Reasoning**

Provides modern performance, scalability, accessibility, and maintainability while supporting rich storytelling experiences.

**Impact**

New technical decisions should align with this stack unless a strong reason exists to deviate.

---

# Decision Template

## YYYY-MM-DD

### Decision Title

**Decision**

Describe the decision.

**Reasoning**

Explain why the decision was made.

**Alternatives Considered**

List alternative options that were evaluated.

**Impact**

Describe how this decision affects future work.

**Status**

Active | Superseded | Deprecated

---

## 2026-06-15

### Phase 1 Application Scaffold

**Decision**

Initialize the application with the Next.js App Router, TypeScript, Tailwind CSS, and the repository structure documented in `README.md`.

**Reasoning**

The App Router aligns with the preferred Next.js stack, supports modern layouts and metadata, and gives the archive a maintainable foundation for future storytelling sections.

**Alternatives Considered**

- A static HTML/CSS prototype, which would be faster initially but less aligned with the chosen long-term stack.
- The legacy Next.js Pages Router, which is mature but not the modern default for new Next.js applications.

**Impact**

Future features should use the `app` directory for routes and layouts, with reusable UI moving into `components`, domain-specific work into `features`, shared utilities into `lib`, global styling in `styles`, and project documentation in `docs`.

**Status**

Active

---

## 2026-06-15

### CSS-Only Phase 1 Visual Placeholders

**Decision**

Use branded CSS gradients, borders, and editorial framing for Phase 1 image and travel placeholders instead of stock imagery or generated placeholder photos.

**Reasoning**

The homepage should avoid borrowing generic imagery for a personal family archive. CSS-only placeholders preserve the premium tone while leaving space for family-approved photos and memories.

**Alternatives Considered**

- Stock photography, rejected because it would feel generic and conflict with the archive’s personal mission.
- AI-generated imagery, rejected for Phase 1 because authentic family-selected materials should define the visual memory system.

**Impact**

Placeholders remain lightweight, brand-aligned, and easy to replace with real archival assets later without changing page structure.

**Status**

Active

---

## 2026-06-16

### Source-Controlled Vercel Framework Configuration

**Decision**

Add a minimal `vercel.json` that pins the project framework to Next.js and records the expected install, build, and development commands.

**Reasoning**

The application generates the `/` route during the Vercel build, so a Vercel-level `404_NOT_FOUND` points to deployment routing, alias, root directory, or project setting mismatch rather than a missing App Router page. Keeping the framework and command configuration in source control reduces the chance that dashboard settings drift away from the repository’s intended Next.js setup.

**Alternatives Considered**

- Add an application rewrite for `/`, rejected because the generated route already exists and a Vercel-level 404 happens before the Next.js route handles the request.
- Set a custom output directory, rejected because Vercel should use the Next.js framework default output handling for this project.
- Add another route or fallback page, rejected because the issue is deployment-level URL resolution rather than missing app content.

**Impact**

Future deployments should use the Next.js framework preset and the repository package scripts. Vercel dashboard checks are still required for Root Directory, Output Directory, production branch, custom domain, and deployment URL alias configuration.

**Status**

Active

---

## 2026-06-16

### Supplied SVG Wordmark Assets

**Decision**

Use the supplied Espresso SVG wordmark assets for brand rendering instead of recreating the Laughs & Eye Rolls wordmark with typography.

**Reasoning**

The wordmark is brand artwork, not a text treatment. Using the supplied SVG assets preserves brand consistency across hero sections, navigation, footer, mobile headers, and constrained spaces.

**Alternatives Considered**

- Continue rendering the wordmark with `Cinzel Decorative`, rejected because the user explicitly instructed not to recreate the wordmark using typography.
- Recreate placeholder SVG artwork in the repository, rejected because the user specifically required the supplied assets.
- Inline the SVG artwork in React components, rejected because the source SVG files are the canonical brand assets and should remain replaceable in `public/brand/`.

**Impact**

Hero sections should use `Espresso-wordmark-primary.svg`; navigation, footer, mobile headers, and constrained spaces should use `Espresso-wordmark-compact.svg`. Future contributors should reference the `Wordmark` component and must not approximate the wordmark with text.

**Status**

Active
