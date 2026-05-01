import React from 'react';
import { motion } from 'motion/react';
import { ScanLine, Route, Bot } from 'lucide-react';

const solutions = [
  {
    icon: <ScanLine className="w-10 h-10" />,
    title: 'Instant Skill Gap Analysis',
    description:
      'Our AI scans your resume and answers to identify exactly where you stand.',
  },
  {
    icon: <Route className="w-10 h-10" />,
    title: 'Smart 90-Day Roadmap',
    description:
      'A personalized, day-by-day learning plan built just for your target role.',
  },
  {
    icon: <Bot className="w-10 h-10" />,
    title: 'Always-on AI Career Mentor',
    description:
      'Get guidance, mock interviews, and motivation anytime you need it.',
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-20 bg-brand-surface dark:bg-dark-surface transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-text dark:text-dark-text font-semibold tracking-tight mb-6">
            BridgeSkill gives you complete clarity.
          </h2>
          <p className="text-brand-text-muted dark:text-dark-text-muted max-w-2xl mx-auto leading-relaxed text-base">
            Our AI analyzes your current level and builds a personalized roadmap
            that bridges the gap between where you are and where you want to be.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              className="liquid-glass p-10 rounded-3xl text-brand-text dark:text-dark-text hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="mb-5 text-brand-primary dark:text-dark-primary">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-brand-text-muted dark:text-dark-text-muted leading-relaxed text-sm">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
