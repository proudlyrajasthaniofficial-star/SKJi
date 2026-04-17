import { motion } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alex Rivers",
    role: "Independent Producer",
    content: "VibeDistro changed my life. I went from zero to 100k monthly listeners in just 3 months. The dashboard is insane.",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Electronic Artist",
    content: "The distribution speed is unmatched. My tracks are live on Spotify within 48 hours. Support is also top-notch.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Knight",
    role: "Hip Hop Artist",
    content: "Keep 100% of my royalties? Yes please. Best decision I made for my career. The analytics helped me find my audience.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-dark/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 tracking-tight">Artist Spotlight.</h2>
          <p className="text-white/40 text-lg">Join thousands of artists who trust VibeDistro with their sound.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2rem] border-white/5 relative group hover:glass-dark transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full border-2 border-primary/20 p-1"
                />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{t.role}</p>
                </div>
              </div>

              <p className="text-white/60 font-medium leading-relaxed italic italic-small italic">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-0" />
    </section>
  );
}
