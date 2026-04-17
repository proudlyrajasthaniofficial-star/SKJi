import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px] animate-pulse-slow [animation-delay:2s] mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] animate-pulse-slow [animation-delay:4s]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-primary uppercase glass border-primary/20 rounded-full pointer-events-none">
            Trusted by 50,000+ Independent Artists
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black font-display leading-[0.9] mb-8 tracking-tighter"
        >
          Distribute Your Music <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
            Everywhere. Instantly.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-medium"
        >
          Reach Spotify, YouTube Music, Apple Music, and 150+ other platforms in one click. 
          Keep 100% of your earnings. Take control of your career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 text-lg font-bold rounded-2xl bg-white text-dark hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start Distributing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 text-lg font-bold rounded-2xl glass hover:bg-white/10 transition-all flex items-center gap-2">
            <Play className="w-5 h-5 fill-current" /> Watch Intro
          </button>
        </motion.div>
      </div>

      {/* Hero 3D Element Placeholder / Visual decoration */}
      <motion.div 
        animate={{ 
          rotateY: [0, 360],
          y: [0, -20, 0]
        }}
        transition={{ 
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mt-20 relative w-full max-w-4xl max-h-[400px] perspective-1000"
      >
        <div className="w-full aspect-video glass rounded-3xl border-white/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 opacity-50" />
           
           <div className="flex items-center justify-center h-full">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)] transform -rotate-12"
              >
                <Music2 className="w-16 h-16 text-white" />
              </motion.div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}

function Music2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}
