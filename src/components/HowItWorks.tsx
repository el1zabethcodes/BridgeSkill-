import React from 'react';
import { motion } from 'motion/react';
import { Target, ClipboardCheck, Radar, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Target className="w-7 h-7" />,
    title: 'Choose Your Goal',
    description:
      'Tell us your target career (SDE, Data Analyst, Product Manager, etc.)',
  },
  {
    number: '02',
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: 'Quick Assessment',
    description:
      'Answer 10–12 questions + optional resume upload',
  },
  {
    number: '03',
    icon: <Radar className="w-7 h-7" />,
    title: 'See Your Skill Map',
    description:
      'Get a beautiful radar chart showing your strengths and gaps',
  },
  {
    number: '04',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Follow Your Roadmap',
    description:
      'Start learning with a clear 90-day personalized plan',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-20 bg-brand-bg dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-brand-text dark:text-dark-text font-semibold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          From Gap to Growth in 4 Simple Steps
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="liquid-glass p-8 rounded-3xl h-full text-brand-text dark:text-dark-text hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 dark:bg-dark-primary/20 flex items-center justify-center text-brand-primary dark:text-dark-primary">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-brand-text/10 dark:text-dark-text/10">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-brand-text-muted dark:text-dark-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-brand-border dark:bg-dark-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
