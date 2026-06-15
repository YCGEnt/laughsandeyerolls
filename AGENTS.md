# AGENTS.md

## Project Overview

This repository contains the source code for:

**Laughs & Eye Rolls**
*Adventures with Ms. Murphy*

A cinematic digital family archive focused on preserving stories, humor, travel memories, family history, personality, and legacy.

The purpose of this project is not simply to store content.

The purpose is to preserve presence.

Future generations should be able to understand not only what happened, but what people were actually like.

---

## Mission

Preserve family memories with personality intact.

Every design decision, feature, animation, layout, and content structure should support that mission.

---

## Brand Principles

The experience should feel:

* Warm
* Sophisticated
* Editorial
* Personal
* Timeless
* Slightly playful
* Memory-rich

Avoid:

* Funeral-home aesthetics
* Scrapbook clutter
* Corporate design language
* Generic family-blog styling
* Cartoon graphics
* Excessive sentimentality

---

## Voice & Tone

The voice should feel:

* Authentic
* Witty
* Caring
* Human
* Conversational

Humor should be:

* Dry
* Observational
* Family-oriented
* Based on real experiences
* Slightly self-aware

Avoid:

* Forced jokes
* Internet meme culture
* Sarcasm that feels mean
* Excessive sentimentality

---

## Design Standards

### Typography

Title:

* Cinzel Decorative

Section Headers:

* Cinzel Decorative

Subtitle:

* Lato

Headings:

* Lato

Subheadings:

* Lato Small Caps

Body:

* Lato

Captions:

* Lato

Quotes:

* Lato

---

### Brand Colors

Espresso:
#2F211D

Cocoa Brown:
#4B362F

Vintage Crimson:
#9F2D2D

Warm Smoke:
#B8B4AE

Fog Gray:
#D8D6D2

Ivory Linen:
#F6F1EA

---

## Technical Stack

Preferred stack:

* Next.js
* Tailwind CSS
* Framer Motion
* Supabase
* Vercel

---

## Animation Rules

Use:

* Gentle fades
* Soft reveals
* Subtle parallax
* Smooth hover states

Avoid:

* Bounce animations
* Flashing effects
* Aggressive motion
* Scroll hijacking

Motion should support storytelling, not compete with it.

---

## AI Contributor Rules

Before making changes:

1. Read README.md
2. Read AGENTS.md
3. Read DECISIONS.md

Before introducing new patterns:

1. Search for existing implementations.
2. Follow established conventions.
3. Reuse existing components when possible.

---

## Required Session Logging

At the end of every implementation session:

Update AGENTS.md with:

* Significant changes made
* New patterns introduced
* Known issues discovered
* Technical observations

Update DECISIONS.md with:

* Architectural decisions
* Technology decisions
* UX decisions
* Design-system decisions

---

## Repository Philosophy

Favor:

* Simplicity
* Maintainability
* Accessibility
* Storytelling
* Performance

Avoid:

* Premature optimization
* Unnecessary dependencies
* Visual clutter
* Feature bloat

Every feature should answer:

"Does this help preserve memories, personality, connection, or storytelling?"

If not, reconsider whether it belongs in the project.

## Documentation Requirements

At the conclusion of every work session:

### AGENTS.md

Append a dated entry to the Change Log containing:

- Features added
- Files created
- Files modified
- Refactors performed
- Known issues
- Outstanding work

Example:

### 2026-06-15

Completed:
- Created homepage hero section
- Added timeline component
- Added Supabase client configuration

Outstanding:
- Photo gallery not yet implemented
- Search functionality pending

Known Issues:
- Mobile menu animation needs refinement

---

### DECISIONS.md

Create a new decision entry whenever any of the following occur:

- New dependency added
- New architecture pattern adopted
- Database schema changed
- Design system changed
- UX flow changed
- Naming convention changed
- Folder structure changed

Each decision must include:

- Decision
- Reasoning
- Alternatives Considered
- Impact
- Status

## Architectural Guardrail

Before introducing a new library, framework, dependency, design pattern, or architectural approach:

1. Search DECISIONS.md.
2. Verify the decision does not already exist.
3. If replacing an existing decision, document the reason.
4. Record the new decision before completing the task.

---

## Change Log

### 2026-06-15

Completed:
- Initialized Phase 1 Next.js App Router project configuration.
- Configured Tailwind CSS with the approved Laughs & Eye Rolls color palette and typography tokens.
- Created the documented project structure: `app`, `components`, `features`, `lib`, `public`, `styles`, and `docs`.
- Created a mobile-first homepage MVP with a hero section, project title, subtitle, mission copy, tasteful featured image placeholder, featured story card, timeline preview, travel memories preview, and elegant footer.
- Added a brand background concepts note for current CSS-only texture treatments.

Files Created:
- `app/layout.tsx`
- `app/page.tsx`
- `styles/globals.css`
- `docs/brand/background-concepts.md`
- Project configuration files for Next.js, TypeScript, PostCSS, ESLint, and package scripts.
- `.gitkeep` files for scaffolded empty project directories.

Files Modified:
- `AGENTS.md`
- `DECISIONS.md`

Refactors Performed:
- None; this was the initial application scaffold.

Known Issues:
- Dependency installation and runtime verification could not be completed because npm registry requests returned `403 Forbidden` in the environment.

Outstanding Work:
- Install dependencies once registry access is available.
- Run the Next.js development server and capture visual QA screenshots.
- Replace tasteful placeholders with family-approved imagery and archival content.
