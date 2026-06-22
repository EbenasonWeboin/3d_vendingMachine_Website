# Animation Architecture

The website uses a hybrid animation approach combining three distinct libraries:

## 1. Lenis (Smooth Scroll)
- **Role:** Handles the actual scroll interpolation of the browser window.
- **Implementation:** Wrapped around the entire app via `SmoothScrollProvider.tsx`.
- **Why:** Native scroll is too abrupt for Awwwards-style storytelling. Lenis provides buttery smooth interpolation that powers both GSAP and Framer Motion.

## 2. GSAP + ScrollTrigger
- **Role:** Complex scroll-linked timelines, pinning, and Three.js object manipulation.
- **Where it's used:**
  - `VendingMachine.tsx`: Animates the 3D machine's position (`x`, `z`) and rotation (`y`) as the user scrolls down the page.
  - `ScrollStorytelling.tsx`: Pins the section and cross-fades text labels while the 3D machine spins.
  - `WhyChooseUs.tsx`: Pins the section and translates a horizontal flex container to simulate horizontal scrolling.

## 3. Framer Motion
- **Role:** UI element reveals, hover states, and micro-interactions.
- **Implementation:** Uses `<motion.div>` with `initial`, `whileInView`, and `viewport={{ once: true }}`.
- **Why:** Extremely clean React API for declarative animations (unlike GSAP which is imperative).

## Strict Rules Followed
- No bounce or elastic effects (strictly `easeOut` or `easeInOut` for a premium feel).
- 3D parallax is constrained (`rotationIntensity={0.2}`) to prevent motion sickness.
