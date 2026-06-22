# Design Decisions

## 1. Hybrid Animation Approach (GSAP + Framer Motion)
- **GSAP ScrollTrigger** was chosen exclusively for the 3D scroll storytelling and complex pinned horizontal scrolling (`WhyChooseUs` and `ScrollStorytelling` sections). GSAP handles complex timelines and Three.js object manipulation much better than framer-motion.
- **Framer Motion** was used for all standard UI reveals (opacity, translateY) because of its elegant React-centric API (`whileInView`, `initial`, `animate`).

## 2. Procedural 3D Models over External Assets
Since external GLTF models were not provided and might cause heavy load times, the `VendingMachine` and `Bottle` models were built procedurally using Three.js primitives (`boxGeometry`, `cylinderGeometry`) combined with high-quality materials (`meshPhysicalMaterial`, `meshStandardMaterial`). 
This guarantees:
- Zero asset loading time
- Instant interaction
- Perfect scalability

## 3. Glassmorphism System
Instead of relying solely on Tailwind utility classes, custom utilities (`@utility glass`, `@utility glass-panel`) were defined in `app/globals.css`. This ensures consistency across the app. The glassmorphism effect uses `rgba(255, 255, 255, 0.05)` backgrounds with `backdrop-filter: blur(24px)` and subtle `inset` box shadows to simulate light hitting the edges of the glass.

## 4. Single Persistent Canvas vs Multiple Canvases
The primary vending machine uses a single full-screen `<Canvas>` (`Scene.tsx`) set to `position: fixed` and `pointer-events: none`. This allows the machine to persist across sections while standard HTML content scrolls above it.
For the `ProductShowcase` section, a separate nested `<Canvas>` was used using `PresentationControls` to allow the user to click and drag the 3D bottles.

## 5. CSS Tailwind v4 Configuration
Using Next.js 15, we utilized Tailwind v4, which moves configuration directly to CSS via `@theme`. This significantly reduces boilerplate and makes updating design tokens (like the primary purple color) much easier.
