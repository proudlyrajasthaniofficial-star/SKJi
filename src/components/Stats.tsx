import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(springValue, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-black font-display tracking-tighter">
      <motion.span>{displayValue}</motion.span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-32 relative bg-dark">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <Counter value={10000} suffix="+" />
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Artists Distribution</p>
          <div className="w-8 h-1 bg-primary/20 rounded-full" />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Counter value={1000000} suffix="+" />
          <p className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Songs Delivered</p>
          <div className="w-8 h-1 bg-secondary/20 rounded-full" />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Counter value={150} suffix="+" />
          <p className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Global Platforms</p>
          <div className="w-8 h-1 bg-accent/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
