import { Music2, Youtube, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-4 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Music2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black tracking-tighter font-display uppercase italic italic-small italic">VIBE<span className="text-primary">DISTRO</span></span>
            </div>
            <p className="text-white/40 font-medium leading-relaxed mb-8">
              Empowering artists to take control of their music career with premium distribution and analytics tools.
            </p>
            <div className="flex gap-4">
               <SocialIcon Icon={Twitter} />
               <SocialIcon Icon={Instagram} />
               <SocialIcon Icon={Youtube} />
               <SocialIcon Icon={Github} />
            </div>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Platform</h4>
             <FooterLinks links={["Distribution", "Analytics", "Promotion", "Publishing"]} />
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Company</h4>
             <FooterLinks links={["About Us", "Artists", "News", "Careers"]} />
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Resources</h4>
             <FooterLinks links={["Help Center", "Artist Handbook", "Copyright", "Policies"]} />
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-white/30 text-center md:text-left">
           <p>© 2026 VibeDistro. Built for the Next Gen of Artists.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
           </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="p-3 glass rounded-xl hover:bg-primary/20 hover:text-primary transition-all border-white/5">
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLinks({ links }: { links: string[] }) {
  return (
    <ul className="space-y-4">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-white/40 hover:text-primary transition-colors font-medium">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
