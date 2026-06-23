import { motion } from 'framer-motion';

export function Card({ children, className = '', delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`group rounded-[8px] border border-white/10 bg-panel-gradient p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-landeer-cyan/35 hover:bg-white/[0.08] ${className}`}
    >
      {children}
    </motion.article>
  );
}
