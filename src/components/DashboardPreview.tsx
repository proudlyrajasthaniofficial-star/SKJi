import { motion } from "motion/react";
import { TrendingUp, Users, Music } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6">Built For The Modern Artist.</h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Manage your entire catalog, track earnings, and analyze your growth 
            from our industry-leading artist dashboard.
          </p>
        </div>

        <div className="relative group">
          {/* Dashboard Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark border-white/10 rounded-[3rem] p-4 md:p-8 shadow-[0_0_100px_rgba(139,92,246,0.1)] relative z-10 perspective-1000 group-hover:shadow-[0_0_150px_rgba(139,92,246,0.2)] transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar Mockup */}
              <div className="hidden md:flex flex-col gap-4 w-60 border-r border-white/5 pr-6">
                <div className="h-8 w-32 bg-white/10 rounded-lg mb-4" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-full bg-white/5 rounded-xl" />
                ))}
              </div>

              {/* Main Content Mockup */}
              <div className="flex-grow flex flex-col gap-6">
                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Revenue", val: "$12,450", icon: TrendingUp, color: "text-green-400" },
                    { label: "Streams", val: "1.2M", icon: Music, color: "text-blue-400" },
                    { label: "Audience", val: "450K", icon: Users, color: "text-purple-400" },
                  ].map((s) => (
                    <div key={s.label} className="p-6 glass rounded-2xl">
                      <s.icon className={`w-5 h-5 ${s.color} mb-3`} />
                      <p className="text-xs font-bold text-white/40 uppercase mb-1">{s.label}</p>
                      <p className="text-2xl font-bold font-display">{s.val}</p>
                    </div>
                  ))}
                </div>

                {/* Graph Area Mockup */}
                <div className="h-64 glass rounded-[2rem] p-8 flex items-end gap-2 relative overflow-hidden group/graph">
                   <div className="absolute top-6 left-8">
                      <p className="text-sm font-bold opacity-40 uppercase tracking-widest">Streaming Growth</p>
                   </div>
                   {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9, 0.7, 1.0, 0.6, 0.8, 0.9, 0.5].map((h, i) => (
                     <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.8 }}
                        className="flex-grow bg-gradient-to-t from-primary/50 to-primary/10 rounded-t-lg group-hover/graph:from-secondary/50 group-hover/graph:to-secondary/10 transition-all"
                      />
                   ))}
                </div>

                {/* Song List Mockup */}
                <div className="flex flex-col gap-3">
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 glass rounded-xl flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-lg" />
                            <div>
                               <div className="h-4 w-32 bg-white/10 rounded-md mb-2" />
                               <div className="h-3 w-20 bg-white/5 rounded-md" />
                            </div>
                         </div>
                         <div className="hidden sm:flex flex-col items-end gap-2">
                             <div className="h-2 w-24 bg-primary/20 rounded-full" />
                             <div className="h-2 w-16 bg-white/5 rounded-full" />
                         </div>
                      </div>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating elements behind/around the dashboard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-primary/20 blur-[150px] -z-10 animate-pulse-slow" />
          
          <motion.div 
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 glass rounded-3xl border-primary/20 flex flex-col items-center justify-center p-6 text-center shadow-2xl z-20"
          >
             <p className="text-3xl font-black font-display text-primary">85%</p>
             <p className="text-[10px] font-bold opacity-40 uppercase">Conversion Rate</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-48 h-20 glass rounded-2xl border-secondary/20 flex items-center gap-4 px-6 shadow-2xl z-20"
          >
             <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500" />
             </div>
             <p className="text-xs font-bold uppercase tracking-widest leading-tight">Payout <br /> Success</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
