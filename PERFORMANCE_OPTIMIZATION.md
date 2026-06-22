# Performance Optimization Strategy

Maintaining 60 FPS while running 3D webGL elements and complex CSS blur effects requires strict performance budgets.

## 1. WebGL (React Three Fiber)
- **Geometry Reuse:** Procedural geometries (`boxGeometry`, `cylinderGeometry`) are instanced where possible.
- **Lighting Limits:** Restricted the number of active lights to 2-3 per scene. Removed heavy shadow map calculations and opted for simple soft shadows.
- **DPR Scaling:** React Three Fiber automatically scales Device Pixel Ratio (DPR) to maintain frame rates on high-density displays (like mobile).
- **Suspense Boundary:** The 3D models are wrapped in React `<Suspense>` to ensure the UI renders immediately while the WebGL context compiles.

## 2. CSS / DOM
- **Backdrop Blur Budget:** `backdrop-blur` is an expensive operation on mobile. We limited its usage to absolute necessary elements (Navbar, Cards). Background gradients use standard CSS `radial-gradient` instead of blur filters where possible.
- **Pointer Events:** The main `<Scene>` has `pointer-events-none` so the browser doesn't calculate expensive hit-testing during scroll.

## 3. React / Next.js
- **Client Components:** Components using `framer-motion` or `Three.js` are strictly `'use client'`. 
- **Lazy Loading:** Next.js automatically chunks and lazy-loads components. The 3D engine (`Three.js`) is only loaded when the `<Canvas>` component mounts.

## 4. Mobile Degradation
On mobile (`< 768px`), we can conditionally reduce the complexity of the 3D scene (e.g., lower `rotationIntensity` on `<Float>`) to preserve battery life and FPS.
