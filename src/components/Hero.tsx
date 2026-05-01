import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowRight, LogIn, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onLoginClick?: () => void;
  onThemeToggle?: () => void;
  isDark?: boolean;
}

const VideoBackground: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const fadeRequestIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const currentOpacityRef = useRef(0);

  const startFade = (toOpacity: number, duration: number) => {
    if (fadeRequestIdRef.current) cancelAnimationFrame(fadeRequestIdRef.current);

    const startTime = performance.now();
    const startOpacity = currentOpacityRef.current;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const nextOpacity = startOpacity + (toOpacity - startOpacity) * progress;
      setOpacity(nextOpacity);
      currentOpacityRef.current = nextOpacity;

      if (progress < 1) {
        fadeRequestIdRef.current = requestAnimationFrame(animate);
      } else {
        fadeRequestIdRef.current = null;
      }
    };

    fadeRequestIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const durationNeededBeforeEnd = 0.55;

    const handleTimeUpdate = () => {
      if (video.duration && !fadingOutRef.current) {
        if (video.duration - video.currentTime <= durationNeededBeforeEnd) {
          fadingOutRef.current = true;
          startFade(0, 500);
        }
      }
    };

    const handleEnded = () => {
      setOpacity(0);
      currentOpacityRef.current = 0;
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
          fadingOutRef.current = false;
          startFade(1, 500);
        }
      }, 100);
    };

    const handleLoadedMetadata = () => {
      video.play().catch(() => {});
      startFade(1, 500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      if (fadeRequestIdRef.current) cancelAnimationFrame(fadeRequestIdRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-brand-bg dark:bg-black overflow-hidden transition-colors duration-1000">
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] transition-opacity duration-1000"
        style={{
          opacity: opacity * (isDark ? 1 : 0.6),
          filter: isDark ? 'none' : 'grayscale(0.3) contrast(1.1) brightness(1.2)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-brand-bg/20 to-brand-bg/90 dark:from-black/40 dark:via-transparent dark:to-black/80 transition-colors duration-1000" />
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onLoginClick, onThemeToggle, isDark }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <VideoBackground isDark={isDark} />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-20 px-6 py-6"
      >
        <div className="rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto liquid-glass">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer group">
              <Globe className="w-6 h-6 text-brand-text dark:text-white group-hover:rotate-12 transition-all duration-500" />
              <span className="text-brand-text dark:text-white font-semibold text-lg tracking-tight">BridgeSkill</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Problem', 'Solution', 'How It Works', 'Features', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-brand-text/60 dark:text-white/60 hover:text-brand-primary dark:hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onThemeToggle}
              className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-brand-text dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onLoginClick}
              className="liquid-glass rounded-full px-6 py-2 text-brand-text dark:text-white text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[5%]">
        <motion.div
          className="liquid-glass rounded-3xl p-10 md:p-14 max-w-2xl w-full mx-auto flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 text-brand-primary dark:text-dark-primary" />
            <span className="text-sm font-semibold tracking-wide uppercase text-brand-primary dark:text-dark-primary">
              BridgeSkill
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-brand-text dark:text-white font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Close the Gap.
            <br />
            Build Your Future.
          </h1>

          <h2 className="text-lg md:text-xl text-brand-text/80 dark:text-white/80 font-medium">
            AI Skill Gap Scanner & Personalized Career Roadmaps
          </h2>

          <p className="text-sm md:text-base text-brand-text-muted dark:text-white/60 max-w-lg leading-relaxed">
            Discover your strengths and weaknesses in seconds. Get a custom 90-day learning plan
            tailored to your dream career — whether it&apos;s Software Engineering, Data Science,
            Product Management or cracking placements.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-brand-primary dark:bg-dark-primary text-white dark:text-black px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Start Free Skill Assessment
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 liquid-glass px-8 py-4 rounded-full font-semibold text-base text-brand-text dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-brand-text/60 dark:text-white/50 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Join 10,000+ students closing their skill gaps
        </motion.p>
      </main>
    </div>
  );
};
