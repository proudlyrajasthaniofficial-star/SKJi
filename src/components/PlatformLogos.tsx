import { motion } from "motion/react";

const PLATFORMS = [
  { name: "Spotify", logo: "https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg" },
  { name: "YouTube Music", logo: "https://www.vectorlogo.zone/logos/youtube/youtube-ar21.svg" },
  { name: "Apple Music", logo: "https://www.vectorlogo.zone/logos/apple/apple-music-ar21.svg" },
  { name: "Amazon Music", logo: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" },
  { name: "JioSaavn", logo: "https://www.vectorlogo.zone/logos/jiosaavn/jiosaavn-ar21.svg" },
  { name: "Gaana", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Gaana_Logo.png" },
  { name: "Tidal", logo: "https://www.vectorlogo.zone/logos/tidal/tidal-ar21.svg" },
  { name: "Deezer", logo: "https://www.vectorlogo.zone/logos/deezer/deezer-ar21.svg" },
  { name: "Pandora", logo: "https://www.vectorlogo.zone/logos/pandora/pandora-ar21.svg" },
  { name: "SoundCloud", logo: "https://www.vectorlogo.zone/logos/soundcloud/soundcloud-ar21.svg" },
  { name: "Boomplay", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Boomplay_logo.png" },
  { name: "Anghami", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Anghami_logo.png" },
  { name: "Wynk Music", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Wynk_Music_logo.png" },
];

export default function PlatformLogos() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-slate-500 mb-4 opacity-70">
          Reach Your Audience Everywhere
        </h2>
        <div className="h-[1px] w-12 bg-primary mx-auto opacity-50" />
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee gap-12 items-center whitespace-nowrap px-12">
          {[...PLATFORMS, ...PLATFORMS].map((platform, index) => (
            <div 
              key={`${platform.name}-${index}`}
              className="flex items-center justify-center min-w-[200px] h-20 px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={platform.logo} 
                alt={platform.name} 
                className="max-h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Gradient Mask for Fade Effect */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-dark to-transparent z-10" />
      </div>
    </section>
  );
}
