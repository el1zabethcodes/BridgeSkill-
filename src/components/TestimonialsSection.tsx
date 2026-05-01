import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ArrowRight, LogIn } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  name: string;
  title: string;
  college: string;
  quote: string;
  avatar: string;
  rating: number;
}

const stats: Stat[] = [
  { value: '10,000+', label: 'Students assessed' },
  { value: '87%', label: 'Land target roles' },
  { value: '4.9', label: 'Average rating' },
];

const testimonials: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    title: 'Software Engineer @ Google',
    college: 'IIT BHU',
    quote:
      'BridgeSkill showed me I was weak in System Design. In 2 months I improved dramatically and cleared my Google interview on the first attempt.',
    avatar: 'RS',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    title: 'Data Analyst @ Microsoft',
    college: 'NIT Trichy',
    quote:
      'The AI roadmap was exactly what I needed. It saved me from scrolling through hundreds of random tutorials and gave me a clear daily plan.',
    avatar: 'PN',
    rating: 5,
  },
  {
    name: 'Arjun Verma',
    title: 'Product Manager @ Flipkart',
    college: 'BITS Pilani',
    quote:
      'I had no idea how many PM skills I was missing. The gap radar made it crystal clear where to focus. Best career decision I ever made.',
    avatar: 'AV',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    title: 'SDE Intern @ Amazon',
    college: 'IIIT Hyderabad',
    quote:
      'The mock interviews with the AI mentor felt incredibly real. I walked into my Amazon interview confident because I had already practiced every scenario.',
    avatar: 'SR',
    rating: 5,
  },
];

const StatCard: React.FC<Stat> = ({ value, label }) => (
  <div className="liquid-glass p-5 rounded-2xl text-center flex-1 min-w-[120px]">
    <div className="text-2xl md:text-3xl font-bold text-brand-text dark:text-dark-text mb-1">
      {value}
    </div>
    <div className="text-xs text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider font-medium">
      {label}
    </div>
  </div>
);

const StickyTestimonialCard: React.FC<{
  testimonial: Testimonial;
  index: number;
}> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{ top: `${80 + index * 28}px` }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="liquid-glass p-6 md:p-8 rounded-3xl flex flex-col h-auto w-full">
        {/* Top: avatar + author */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 dark:bg-dark-primary/20 flex items-center justify-center text-lg font-bold text-brand-primary dark:text-dark-primary flex-shrink-0">
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <div className="text-base font-semibold text-brand-text dark:text-dark-text truncate">
              {testimonial.name}
            </div>
            <div className="text-sm text-brand-text-muted dark:text-dark-text-muted truncate">
              {testimonial.college} — {testimonial.title}
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl font-bold text-brand-text dark:text-dark-text">
            {testimonial.rating.toFixed(1)}
          </span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(testimonial.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-brand-text-muted/30 dark:text-dark-text-muted/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative">
          <Quote className="absolute -top-1 -left-1 w-6 h-6 text-brand-primary/20 dark:text-dark-primary/20" />
          <p className="text-sm md:text-base text-brand-text-muted dark:text-dark-text-muted leading-relaxed pl-6">
            “{testimonial.quote}”
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 120}px)`;

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 relative z-20 bg-brand-bg dark:bg-dark-bg transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — sticky content */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass mb-6">
                <Star className="w-4 h-4 text-brand-primary dark:text-dark-primary fill-brand-primary dark:fill-dark-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted dark:text-dark-text-muted">
                  Student Stories
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-text dark:text-dark-text font-semibold tracking-tight mb-6 leading-tight">
                Real students.
                <br />
                Real results.
              </h2>

              <p className="text-brand-text-muted dark:text-dark-text-muted text-base leading-relaxed mb-10 max-w-md">
                Join thousands of students who identified their skill gaps, followed
                personalized roadmaps, and landed their dream roles.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mb-10">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="inline-flex items-center gap-2 bg-brand-primary dark:bg-dark-primary text-white dark:text-black px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all">
                  Start Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 liquid-glass px-6 py-3 rounded-full font-semibold text-sm text-brand-text dark:text-dark-text hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column — sticky card stack */}
          <div
            className="relative flex flex-col gap-5"
            style={{ height: scrollContainerHeight }}
          >
            {testimonials.map((testimonial, index) => (
              <StickyTestimonialCard
                key={testimonial.name}
                index={index}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
