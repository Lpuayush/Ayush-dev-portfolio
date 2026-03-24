import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { MapPin, GraduationCap, Briefcase, Sparkles, BookOpen, MonitorPlay, Lightbulb, Target } from "lucide-react";

const InfoCard = ({ icon: Icon, title, items, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-effect p-6 rounded-2xl border border-border/50 hover:border-accent/40 transition-all group"
  >
    <div className="flex items-center gap-3 mb-4 text-accent">
      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-textMain">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-textSecondary group-hover:text-textMain transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ContentCard = ({ icon: Icon, title, content, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-effect p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all relative overflow-hidden flex flex-col h-full"
  >
    {/* Decorative background glow */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-black text-textMain tracking-tight">{title}</h3>
    </div>

    <div className="space-y-4 text-textSecondary leading-relaxed flex-grow">
      {content.split('\n\n').map((paragraph, i) => (
        <p key={i} className="text-base font-light">
          {paragraph}
        </p>
      ))}
    </div>
  </motion.div>
);

export default function About() {
  return (
    <SectionWrapper id="about" className="relative">
      <SectionHeading
        title="About Me"
        subtitle="Unveiling the developer behind the code—my journey, my approach, and what drives me."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto">

        {/* LEFT SIDE - Quick Info */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <InfoCard
            icon={Sparkles}
            title="Quick Facts"
            items={[
              "Location: Patna, Bihar, India",
              "Education: B.Tech in CSE (LPU)",
              "Experience: Fresher / Student"
            ]}
            delay={0.1}
          />

          <InfoCard
            icon={MonitorPlay}
            title="When I'm Not Coding"
            items={[
              "Exploring new technologies",
              "Learning & improving skills",
              "Watching tech content"
            ]}
            delay={0.2}
          />

          {/* Optional Extra Decorative Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/20 flex flex-col items-center justify-center text-center gap-3"
          >
            <Lightbulb size={32} className="text-accent animate-pulse" />
            <p className="text-xs font-medium text-accent uppercase tracking-widest">Always Learning</p>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <ContentCard
            icon={BookOpen}
            title="My Journey"
            content={`I am a Computer Science student at Lovely Professional University, passionate about full-stack development.\n\nI have built real-world projects like an AI-powered timetable scheduler and a recruitment platform, focusing on solving real-world problems using modern technologies.\n\nI continuously work on improving my problem-solving skills and enjoy learning new technologies through hands-on projects.`}
            delay={0.4}
          />

          <ContentCard
            icon={Target}
            title="My Approach"
            content={`I focus on building solutions that are simple, efficient, and user-friendly.\n\nI believe in writing clean code, solving real problems, and continuously improving through practice and learning.\n\nMy goal is to build impactful applications and grow as a developer.`}
            delay={0.5}
          />
        </div>

      </div>
    </SectionWrapper>
  );
}
