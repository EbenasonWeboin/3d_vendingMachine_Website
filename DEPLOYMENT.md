# Deployment Guide

This project is configured to be deployed on **Vercel** with zero-configuration required.

## Steps for Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - VendAI Website"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." -> "Project"
   - Import the repository.

3. **Configuration**
   - **Framework Preset:** Next.js (Auto-detected)
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Output Directory:** `.next`

4. **Deploy**
   - Click **Deploy**. Vercel will build the Next.js App Router project and deploy it globally.

## SEO & Accessibility Checks (Pre-Deployment)
- The site uses Next.js `Metadata` in `app/layout.tsx` for OpenGraph and basic SEO.
- Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<footer>`) are used throughout.
- Ensure any future images added use the Next.js `<Image>` component for automatic AVIF/WebP optimization.
