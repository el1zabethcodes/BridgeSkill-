import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, LogIn } from 'lucide-react';

interface FinalCTAProps {
  onSignInClick?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onSignInClick }) => {
  return (
    <section className="py-24 px-6 relative z-20 bg-brand-surface dark:bg-dark-surface transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-text dark:text-dark-text font-semibold tracking-tight mb-4">
            Ready to take control of your career?
          </h2>
          <p className="text-brand-text-muted dark:text-dark-text-muted mb-10 text-base leading-relaxed">
            Start your free skill assessment today. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-brand-primary dark:bg-dark-primary text-white dark:text-black px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 active:scale-95 transition-all">
              Start Free Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onSignInClick}
              className="inline-flex items-center gap-2 liquid-glass px-8 py-4 rounded-full font-semibold text-base text-brand-text dark:text-dark-text hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
