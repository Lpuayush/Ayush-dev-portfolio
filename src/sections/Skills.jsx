import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaProjectDiagram, FaCubes, FaServer } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const ALL_SKILLS = [
  // Languages
  { name: "JavaScript", category: "Languages", percentage: 90, icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML", category: "Languages", percentage: 95, icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", category: "Languages", percentage: 85, icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Java", category: "Languages", percentage: 85, icon: FaJava, color: "text-red-500" },

  // Frontend
  { name: "React", category: "Frontend", percentage: 90, icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", category: "Frontend", percentage: 85, icon: SiTailwindcss, color: "text-teal-400" },

  // Backend
  { name: "Node.js", category: "Backend", percentage: 85, icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", category: "Backend", percentage: 80, icon: SiExpress, color: "text-textMain" },
  { name: "REST APIs", category: "Backend", percentage: 85, icon: FaServer, color: "text-purple-400" },

  // Databases
  { name: "MySQL", category: "Databases", percentage: 75, icon: SiMysql, color: "text-blue-400" },
  { name: "MongoDB", category: "Databases", percentage: 80, icon: SiMongodb, color: "text-green-600" },

  // Core CS
  { name: "Data Structures", category: "Core CS", percentage: 85, icon: FaProjectDiagram, color: "text-emerald-400" },
  { name: "OOPs", category: "Core CS", percentage: 90, icon: FaCubes, color: "text-pink-400" },
  { name: "Operating Systems", category: "Core CS", percentage: 75, icon: FaLinux, color: "text-textMain" },

  // Tools
  { name: "Git", category: "Tools", percentage: 85, icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", category: "Tools", percentage: 90, icon: FaGithub, color: "text-textMain" },
  { name: "VS Code", category: "Tools", percentage: 95, icon: VscVscode, color: "text-blue-500" },
];

const CATEGORIES = ["All Skills", "Languages", "Frontend", "Backend", "Databases", "Core CS", "Tools"];

const SkillCard = ({ name, category, percentage, icon: Icon, color, idx }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: idx * 0.05 }}
    className="bg-card/50 border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:bg-card/80 hover:border-white/10 transition-all shadow-lg"
  >
    {/* Inner top layout for Icon and Text/Bar */}
    <div className="flex items-center gap-4 relative z-10 w-full mb-2">
      
      {/* Icon block */}
      <div className="bg-background/80 p-3 lg:p-4 rounded-xl shadow-inner shadow-black/50 border border-white/5 group-hover:scale-105 transition-transform">
        <Icon className={`text-3xl lg:text-4xl ${color}`} />
      </div>

      {/* Title & Progress Bar */}
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-end mb-2">
          <h3 className="font-bold text-textMain text-base lg:text-lg tracking-wide truncate pr-2">{name}</h3>
          <span className="text-xs lg:text-sm text-textSecondary font-bold">{percentage}%</span>
        </div>
        
        {/* Bar background */}
        <div className="h-1.5 lg:h-2 w-full bg-background rounded-full overflow-hidden shadow-inner shadow-black/50">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + (idx * 0.05), ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" 
          />
        </div>
      </div>
    </div>

    {/* Bottom right Category Label */}
    <div className="text-right mt-3 relative z-10">
      <span className="text-[10px] lg:text-xs text-textSecondary/40 font-bold tracking-widest uppercase">{category}</span>
    </div>
  </motion.div>
);

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All Skills");

  const filteredSkills = activeTab === "All Skills" 
    ? ALL_SKILLS 
    : ALL_SKILLS.filter(skill => skill.category === activeTab);

  return (
    <SectionWrapper id="skills" className="relative">
      
      {/* Title Section */}
      <SectionHeading 
        title="Technical Arsenal" 
        subtitle="A showcase of technologies I've mastered on my journey as a developer." 
      />
      
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 mb-12 w-full max-w-4xl mx-auto">
        {CATEGORIES.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
              activeTab === tab 
                ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105' 
                : 'bg-card/40 text-textSecondary border-white/5 hover:text-textMain hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <SkillCard key={skill.name} {...skill} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </SectionWrapper>
  );
}
