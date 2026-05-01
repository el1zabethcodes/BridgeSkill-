import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-brand-bg dark:bg-dark-bg border-t border-brand-border dark:border-dark-border transition-colors duration-500 relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-brand-text dark:text-dark-text">
          <Globe className="w-5 h-5 text-brand-primary dark:text-dark-primary" />
          <span className="font-semibold text-lg tracking-tight">BridgeSkill</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-brand-text-muted dark:text-dark-text-muted">
          <a href="#" className="hover:text-brand-primary dark:hover:text-dark-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-brand-primary dark:hover:text-dark-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-brand-primary dark:hover:text-dark-primary transition-colors">
            Contact
          </a>
        </div>

        <p className="text-xs text-brand-text-muted dark:text-dark-text-muted">
          © 2026 BridgeSkill. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
