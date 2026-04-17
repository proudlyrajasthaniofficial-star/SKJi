/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlatformLogos from "./components/PlatformLogos";
import Features from "./components/Features";
import Stats from "./components/Stats";
import DashboardPreview from "./components/DashboardPreview";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative bg-dark selection:bg-primary selection:text-white">
      {/* Custom Cursor Glow */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="bg-gradient-mesh">
        <Hero />
        <PlatformLogos />
      </div>

      <Features />
      
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full bg-primary/5 -z-10 skew-y-3" />
        <Stats />
        <DashboardPreview />
      </div>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
        
        <div className="max-w-4xl mx-auto glass-dark p-12 md:p-24 rounded-[3rem] border-white/5 relative z-10 text-center shadow-2xl overflow-hidden group">
          {/* Animated background decoration for CTA */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000 [animation-delay:2s]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-8 animate-float" />
            <h2 className="text-4xl md:text-7xl font-black font-display mb-8 tracking-tighter leading-none uppercase italic italic-small italic">
              Ready to <br /> <span className="text-primary">Take Over?</span>
            </h2>
            <p className="text-white/50 text-xl font-medium mb-12 max-w-lg mx-auto leading-relaxed">
              Don't let your music sit on your hard drive. Get it out there. 
              Start your distribution journey today.
            </p>
            
            <button className="group relative px-12 py-5 text-xl font-black rounded-3xl bg-white text-dark hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all flex items-center gap-3 mx-auto overflow-hidden active:scale-95">
              <span className="relative z-10 flex items-center gap-3 text-dark">
                Get Started Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Free setup. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
