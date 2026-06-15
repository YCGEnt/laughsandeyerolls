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
