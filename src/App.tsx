import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import FloatingDock from './components/FloatingDock.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';
import { AuthForm } from './components/AuthForm.tsx';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-inter antialiased">
      <Hero
        onLoginClick={() => setShowAuth(true)}
        onThemeToggle={() => setIsDark(!isDark)}
        isDark={isDark}
      />

      <div id="problem">
        <ProblemSection />
      </div>

      <div id="solution">
        <SolutionSection />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <FinalCTA onSignInClick={() => setShowAuth(true)} />
      <Footer />
      <FloatingDock />

      {showAuth && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAuth(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AuthForm onClose={() => setShowAuth(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
