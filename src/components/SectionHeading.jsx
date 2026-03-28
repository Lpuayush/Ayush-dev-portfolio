import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-purple-600 dark:from-blue-400 dark:via-primary dark:to-purple-500 drop-shadow-sm dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] pb-1"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-textSecondary max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"
      />
    </div>
  );
}
