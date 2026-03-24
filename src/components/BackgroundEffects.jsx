import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useMemo } from "react";

export default function BackgroundEffects() {
  const { theme } = useTheme();

  // Generate a few animated twinkling stars to breathe life into the static galaxy
  const animatedStars = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Inline Styles for Hardware Accelerated Background Animations */}
      <style>
        {`
          @keyframes twinkleNight {
            0% { opacity: var(--star-op); transform: scale(1); }
            50% { opacity: calc(var(--star-op) * 0.2); transform: scale(1.2); }
            100% { opacity: var(--star-op); transform: scale(1); }
          }
          @keyframes slowPanGalaxy {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {/* 🌌 Deep Galaxy & Dense Stars (Visible ONLY in Dark Mode) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>

        {/* Core Galaxy Backdrop Color (Deep Cosmic Blue) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0F172A] to-[#0A0D18] z-[-3]"></div>

        {/* Photorealistic Milky Way Background (Hardware Accelerated, No Blend Mode Overhead) */}
        <div
          className="absolute inset-[-10%] z-[-2] opacity-30 bg-cover bg-center pointer-events-none will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2000&auto=format&fit=crop')`,
            animation: 'slowPanGalaxy 120s ease-in-out infinite'
          }}
        />

        {/* Cosmic Dust Clouds for Color Blending */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)] z-[-1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.1),_transparent_50%)] z-[-1]"></div>

        {/* Layer 4: Hardware Accelerated Twinkling Foreground Stars */}
        {animatedStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full will-change-transform"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              '--star-op': star.opacity,
              animation: `twinkleNight ${star.duration}s ease-in-out ${star.delay}s infinite`
            }}
          />
        ))}
      </div>
      {/* Extreme subtle noise overlay to add premium grit texture (Visible ONLY in Dark Mode) */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{
          opacity: theme === 'dark' ? 0.3 : 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
