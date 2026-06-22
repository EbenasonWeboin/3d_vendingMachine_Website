# VendAI - Premium 3D Vending Machine Website

## Overview
VendAI is an award-winning style, production-ready website for a next-generation vending machine company. It leverages modern web technologies to deliver an Apple/Tesla-tier experience with a strong focus on 3D storytelling, glassmorphism, and seamless scroll animations.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + Vanilla CSS Variables
- **3D Engine:** React Three Fiber (Three.js) & `@react-three/drei`
- **Animations:** GSAP (ScrollTrigger), Framer Motion (UI reveals)
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Key Features
- **Persistent Floating 3D Machine:** A procedural 3D vending machine model that stays on screen and reacts to scroll and mouse parallax.
- **Scroll Storytelling:** Exploded views of the 3D machine synchronized with GSAP ScrollTrigger.
- **Enhanced Glassmorphism:** Extensive use of `backdrop-blur`, subtle borders, and gradient glows.
- **Advanced Background System:** Animated noise overlays, ambient fog, and geometric grid patterns.
- **Performance Optimized:** Dynamic imports, procedural geometry (no heavy assets), and isolated rerenders.

## File Structure
- `/app` - Next.js routing, global layouts, and CSS.
- `/components/canvas` - React Three Fiber components (Scene, VendingMachine, etc.).
- `/components/sections` - Individual UI sections (Hero, FAQ, Testimonials).
- `/components/providers` - Providers like Lenis Smooth Scroll.

## Setup Instructions
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the development server.
3. Access the site at `http://localhost:3000`.

## Build
Run `npm run build` to generate the production optimized bundle.
