import React from 'react';
import { motion } from 'motion/react';
import { Dices, EyeOff, BatteryWarning } from 'lucide-react';

const problems = [
  {
    icon: <Dices className="w-8 h-8" />,
    title: 'Guessing Game',
    description:
      'Students spend months learning skills that companies don\'t actually value.',
  },
  {
    icon: <EyeOff className="w-8 h-8" />,
    title: 'Skill Blind Spots',
    description:
      'Without proper feedback, critical gaps remain hidden until it\'s too late.',
  },
  {
    icon: <BatteryWarning className="w-8 h-8" />,
    title: 'Overwhelm & Burnout',
    description:
      'Too many resources, no clear direction → frustration and lost time.',
  },
];

const ProblemSection: React.FC = () => {
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
          Most students don’t know what they’re missing.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="liquid-glass p-8 rounded-3xl text-brand-text dark:text-dark-text hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="mb-4 text-brand-primary dark:text-dark-primary">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-brand-text-muted dark:text-dark-text-muted leading-relaxed text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
