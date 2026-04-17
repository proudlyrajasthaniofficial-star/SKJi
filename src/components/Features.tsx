import { motion } from "motion/react";
import { Upload, Globe, BarChart3, ShieldCheck, DollarSign, Zap } from "lucide-react";

const FEATURES = [
  {
    title: "Global Distribution",
    desc: "Send your music to 150+ stores including Spotify, Apple Music, and Amazon.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Smart Uploads",
    desc: "Drag and drop your audio files and artwork. We handle the technical bits.",
    icon: Upload,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Deep Analytics",
    desc: "Track your streams, playlists, and fan demographics in real-time.",
    icon: BarChart3,
    color: "from-orange-500 to-red-400"
  },
  {
    title: "Instant Pay",
    desc: "Withdraw your earnings directly to your bank account anytime you want.",
    icon: DollarSign,
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Copyright Guard",
    desc: "We protect your music and ensure you're getting paid for every play.",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-400"
  },
  {
    title: "Fast Tracking",
    desc: "Get your music live in as little as 48 hours with our Express service.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tighter uppercase leading-[0.8] underline decoration-primary/50 underline-offset-8">
              Everything <br /> You Need.
            </h2>
            <p className="text-white/50 text-xl font-medium">
              Powerful tools designed for the modern independent artist. 
              No labels required. No hidden fees. Just music.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-10 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-10 glass rounded-[2.5rem] border-white/5 overflow-hidden transition-all group-hover:glass-dark group-hover:border-primary/30">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-6 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 text-primary">
                  Learn More <Zap className="w-3 h-3 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
