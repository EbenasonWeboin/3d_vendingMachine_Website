import Navbar from "@/components/Navbar";
import MarqueeBackground from "@/components/MarqueeBackground";
import Footer from "@/components/Footer";
import Scene from "@/components/canvas/Scene";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedMachines from "@/components/sections/FeaturedMachines";
import ScrollStorytelling from "@/components/sections/ScrollStorytelling";
import AiTechnology from "@/components/sections/AiTechnology";
import Statistics from "@/components/sections/Statistics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductShowcase from "@/components/sections/ProductShowcase";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30">
      <div className="animated-gradient-bg" />

      {/* Seamless CSS infinite marquee */}
      <MarqueeBackground />

      <Navbar />
      
      {/* Persistent 3D Machine */}
      <Scene />
      
      <div className="relative z-10">
        <HeroSection />
        <FeaturedMachines />
        <ScrollStorytelling />
        <AiTechnology />
        <Statistics />
        <WhyChooseUs />
        <ProductShowcase />
        <InstallationProcess />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
