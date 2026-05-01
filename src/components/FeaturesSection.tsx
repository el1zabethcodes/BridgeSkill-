import React from 'react';
import { motion } from 'motion/react';
import {
  Radar,
  Map,
  MessageSquareText,
  BarChart3,
  Lightbulb,
  FileSearch,
} from 'lucide-react';

const features = [
  {
    icon: <Radar className="w-7 h-7" />,
    title: 'Skill Gap Radar',
    description: 'Visual analysis of your current skills',
  },
  {
    icon: <Map className="w-7 h-7" />,
    title: 'Personalized Roadmap',
    description: '90-day step-by-step learning plan',
  },
  {
    icon: <MessageSquareText className="w-7 h-7" />,
    title: 'AI Career Mentor',
    description: 'Chat with AI anytime for guidance',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Progress Tracker',
    description: 'Track your improvement over time',
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Smart Recommendations',
    description: 'Best free & paid resources curated for you',
  },
  {
    icon: <FileSearch className="w-7 h-7" />,
    title: 'Profile Insights',
    description: 'Resume analysis & actionable suggestions',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-20 bg-brand-surface dark:bg-dark-surface transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-brand-text dark:text-dark-text font-semibold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Powerful tools. Simple experience.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="liquid-glass p-8 rounded-2xl text-brand-text dark:text-dark-text hover:-translate-y-1 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 dark:bg-dark-primary/20 flex items-center justify-center text-brand-primary dark:text-dark-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-brand-text-muted dark:text-dark-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
