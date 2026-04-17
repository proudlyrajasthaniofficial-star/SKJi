import { motion } from "motion/react";
import { Music2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="flex items-center justify-between w-full max-w-6xl px-6 py-4 glass-dark rounded-full pointer-events-auto"
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
            <Music2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xl font-bold tracking-tight font-display text-glow">VIBE<span className="text-primary">DISTRO</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Platforms", "Pricing", "Analytics"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors text-white/70 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium transition-colors hover:text-primary">
            Sign In
          </button>
          <button className="px-6 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:scale-105 active:scale-95 text-white">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 left-4 right-4 p-8 glass-dark rounded-3xl flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {["Features", "Platforms", "Pricing", "Analytics"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-white"
              >
                {item}
              </a>
            ))}
            <div className="w-full h-[1px] bg-white/10 my-2" />
            <button className="w-full py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-secondary">
              Get Started
            </button>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
}
