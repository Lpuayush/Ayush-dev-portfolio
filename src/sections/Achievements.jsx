import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { Award, Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Top 100 Finalist",
      organization: "IIT Bhubaneswar Frontend Hackathon",
      description: "Secured a Top 100 position in the IIT Bhubaneswar Frontend Hackathon and received the Final Merit Certificate.",
      icon: <Trophy className="text-yellow-400" size={32} />
    },
    {
      title: "150+ Coding Problems Solved",
      organization: "LeetCode, HackerRank & Others",
      description: "Solved 150+ coding problems across LeetCode, HackerRank, and other competitive programming platforms, strengthening problem-solving skills.",
      icon: <Award className="text-primary" size={32} />
    }
  ];

  return (
    <SectionWrapper id="achievements">
      <SectionHeading title="Achievements & Milestones" subtitle="Highlights of my competitive programming and hackathon journey." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto w-full">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            className="glass-effect p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border border-white/5 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="bg-white/5 p-4 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary text-sm font-semibold tracking-wide mb-3">{item.organization}</p>
              <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
