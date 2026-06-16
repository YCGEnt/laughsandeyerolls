# Vercel Deployment Notes

## Phase 1 Deployment Diagnosis

The application code contains a valid App Router homepage at `app/page.tsx`, and Vercel build logs showing `┌ ○ /` indicate that Next.js generated the root route successfully.

If that build is marked Ready but the public URL returns a Vercel-level `404 NOT_FOUND`, the request is usually not reaching the generated Next.js deployment output. Prioritize checking Vercel configuration and URL routing rather than adding app routes.

## Required Vercel Settings

Use these project settings for this repository:

- **Framework Preset:** Next.js
- **Root Directory:** repository root, not `app`, `public`, or another subdirectory
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** leave unset / framework default
- **Production Branch:** the branch intended to own the production domain

The repository includes `vercel.json` to pin the framework and command expectations in source control. Do not set a custom output directory for this Next.js project unless Vercel explicitly requires it for a future architecture change.

## URL Checks

When a Ready deployment still serves Vercel `404 NOT_FOUND`, verify that the URL being visited is one of the URLs listed on that exact deployment in Vercel.

Check especially:

- The deployment-specific `*.vercel.app` URL for the Ready build
- The project production alias domain
- Any custom domain assignment
- Whether the visited URL points to a different Vercel project
- Whether the branch deployment is eligible for the alias being tested

A generated `/` route plus a Vercel-level 404 is a deployment routing or project settings issue, not a missing `app/page.tsx` route.
