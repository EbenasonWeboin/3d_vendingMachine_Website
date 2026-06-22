# Inspirations & Improvements

## Inspirations
Although the two explicit reference websites were missing from the prompt, the design system was heavily influenced by the provided descriptive keywords (Apple, Tesla, Stripe, Nothing, Cuberto, Awwwards).

1. **Apple / Tesla:** 
   - Clean, highly readable typography using Next.js Geist (Inter/SF Pro style).
   - Massive headers and plenty of negative space.
   - High-fidelity product rendering (the 3D machine).

2. **Nothing (Company):**
   - The "Exploded View" scroll storytelling section was inspired by Nothing's marketing material, where devices separate to show their internal components (sensors, cooling, chips).
   - Use of grid patterns (`bg-[linear-gradient...]`) in the background.

3. **Stripe / Cuberto:**
   - Smooth buttery scrolling via Lenis.
   - Saturated, vibrant glowing gradients (`purple-glow` utility, `ambient-fog`).
   - Micro-interactions (tilt effects, smooth border reveals).

## Improvements Incorporated
1. **Accessibility First:** Contrast ratios for the muted text (`text-gray-400` against `#050507`) were kept strictly legible.
2. **Performance Constraints:** 3D elements use low polygon counts and rely on shaders/materials (`meshPhysicalMaterial`) rather than high-poly models to maintain 60 FPS.
3. **Advanced Layouts:** The horizontal scrolling timeline (`WhyChooseUs.tsx`) provides a highly engaging alternative to a standard vertical list, matching Awwwards-tier site behavior.
