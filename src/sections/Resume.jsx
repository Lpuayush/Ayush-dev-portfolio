import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import Button from '../components/Button';

// Top Contact Badges
const ContactBadge = ({ icon: Icon, text, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-card/80 border border-border/50 rounded-full hover:border-primary/50 transition-colors cursor-pointer group"
  >
    <Icon size={16} className="text-primary group-hover:text-purple-400 transition-colors" />
    <span className="text-sm font-medium text-textSecondary group-hover:text-textMain">{text}</span>
  </a>
);

// Unified Content Card
const ResumeCard = ({ type, title, subtitle, date, points, tech }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
    className="glass-effect p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all relative overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
      <div>
        <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">{type}</span>
        <h3 className="text-xl md:text-2xl font-black text-textMain mt-3">{title}</h3>
        {subtitle && <p className="text-textSecondary text-sm md:text-base font-medium mt-1">{subtitle}</p>}
      </div>
      <span className="text-sm md:text-base text-primary/80 font-semibold whitespace-nowrap bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20">{date}</span>
    </div>

    <ul className="space-y-3 mt-6">
      {points.map((point, idx) => (
        <li key={idx} className="text-sm md:text-base text-textSecondary flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>

    {tech && (
      <div className="mt-6 pt-4 border-t border-border/30">
        <p className="text-xs md:text-sm text-textSecondary">
          <span className="font-semibold text-textMain">Tech: </span> {tech}
        </p>
      </div>
    )}
  </motion.div>
);

const RESUME_DATA = {
  Education: [
    {
      type: "Degree",
      title: "Bachelor of Technology - Computer Science and Engineering",
      subtitle: "Lovely Professional University | CGPA: 7.2",
      date: "Aug 2023 - Present",
      points: [
        "Pursuing core computer science fundamentals including Data Structures, Algorithms, OS, and OOPs.",
        "Actively participating in hackathons and competitive programming."
      ]
    },
    {
      type: "Intermediate",
      title: "Class XII (12th Grade)",
      subtitle: "Kendriya Vidyalaya | Percentage: 63%",
      date: "2021 - 2023",
      points: [
        "Completed higher secondary education with a focus on science and mathematics at Patna, Bihar."
      ]
    },
    {
      type: "Matriculation",
      title: "Class X (10th Grade)",
      subtitle: "Kendriya Vidyalaya | Percentage: 79.6%",
      date: "2020 - 2021",
      points: [
        "Built a strong foundation in science, mathematics, and logical reasoning."
      ]
    }
  ],
  Skills: [
    {
      type: "Technical Skills",
      title: "Programming Languages & Core Tech",
      subtitle: "Full Stack Development Arsenal",
      date: "Active",
      points: [
        "Languages: C++, C, Java, JavaScript, Python",
        "Frameworks & Libraries: React.js, Tailwind CSS",
        "Backend & APIs: Node.js, Express.js, REST APIs, PHP",
        "Core CS Fundamentals: Data Structures & Algorithms (DSA), Problem-Solving, Responsive Web Design",
        "Tools & Platforms: Git, GitHub, XAMPP, Vercel",
        "Soft Skills: Problem-Solving, Teamwork & Collaboration, Adaptability, Quick Learner"
      ]
    }
  ],
  Projects: [
    {
      type: "Frontend",
      title: "SimpleCart – Responsive E-Commerce Frontend",
      subtitle: "Personal Project",
      date: "Jan 2026 - Mar 2026",
      points: [
        "Developed a responsive React-based e-commerce frontend featuring category-wise product listings (Men, Women, Kids) with reusable and dynamic UI components.",
        "Designed and integrated multiple pages (Contact, FAQ, etc.) using React Router, showcasing efficient routing, component-based architecture, and form handling.",
        "Enhanced user experience with state management and optimized component rendering, ensuring smooth navigation and performance."
      ],
      tech: "React.js, Tailwind CSS, React Router, JavaScript"
    },
    {
      type: "Full Stack",
      title: "Fitness App – AI-Powered Workout Companion",
      subtitle: "Personal Project",
      date: "Jan 2026 - Feb 2026",
      points: [
        "Designed and developed a full-stack fitness application using React 18, Material-UI, and RapidAPI, enabling users to explore 500+ exercises with advanced search and body-part-based filtering.",
        "Integrated real-time exercise DB (Exercise DB, YouTube) to fetch exercise data and tutorial videos, enhancing user engagement with dynamic and interactive content.",
        "Implemented advanced UI features such as horizontal scrolling, dynamic routing, and reusable components to deliver a smooth and intuitive user experience."
      ],
      tech: "React.js, Material-UI, Emotion, RapidAPI, Tailwind CSS"
    }
  ],
  Extracurricular: [
    {
      type: "Training",
      title: "Basics of DSA in C++ | Certificate",
      subtitle: "Cipher Schools",
      date: "Jun 2025 - Jul 2025",
      points: [
        "Completed a structured DSA course in C++, covering 100+ core algorithms and data structures.",
        "Gained hands-on experience by solving 100+ coding problems on platforms like LeetCode, CodeStudio, and HackerRank.",
        "Strengthened problem-solving skills through DSA concepts and various algorithmic techniques."
      ]
    },
    {
      type: "Competitive Programming",
      title: "Competitive Programming & Problem Solving",
      subtitle: "Ongoing",
      date: "Continuous",
      points: [
        "Actively solving 100+ coding problems on LeetCode, CodeStudio, and HackerRank.",
        "Strengthening programming skills and improving algorithmic thinking through consistent practice."
      ]
    }
  ],
  Certificates: [
    {
      type: "Certification",
      title: "Basics of DSA in C++",
      subtitle: "Cipher Schools",
      date: "July 2025",
      points: [
        "Demonstrated mastery of Data Structures and Algorithms in C++ through comprehensive assessment and practical implementation."
      ]
    },
    {
      type: "Certification",
      title: "Privacy and Security in Online Social Media",
      subtitle: "Swayam NPTEL",
      date: "October 2025",
      points: [
        "Completed course on privacy and security practices in social media platforms, ensuring secure online practices."
      ]
    }
  ]
};

const TABS = ['Education', 'Skills', 'Projects', 'Extracurricular', 'Certificates'];

export default function Resume() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <SectionWrapper id="resume" className="relative">
      
      {/* Centered Title */}
      <div className="text-center mb-10 w-full z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-purple-600 dark:from-blue-400 dark:via-primary dark:to-purple-500 tracking-tight drop-shadow-sm dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] pb-1"
        >
          My Resume
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        
        {/* Contact Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          <ContactBadge icon={Mail} text="ayushraj2584@gmail.com" href="mailto:ayushraj2584@gmail.com" />
          <ContactBadge icon={Phone} text="+919608877017" href="tel:+919608877017" />
          <ContactBadge icon={Linkedin} text="LinkedIn" href="https://linkedin.com/in/AyushRaj26" />
          <ContactBadge icon={Github} text="GitHub" href="https://github.com/Ayushraj/" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 p-2 bg-card/40 backdrop-blur-md rounded-2xl md:rounded-full border border-border/50">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl md:rounded-full text-sm font-semibold transition-all duration-300 w-full sm:w-auto ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-textSecondary hover:text-textMain hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <div key={activeTab} className="space-y-6">
              {RESUME_DATA[activeTab].map((item, idx) => (
                <ResumeCard key={idx} {...item} />
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-12">
          <Button variant="primary" className="px-8 py-4 text-base font-semibold gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <a href="/Ayush SCV.pdf" download="Ayush-Raj-CV.pdf" className="flex items-center gap-2">
              <Download size={20} />
              Download CV
            </a>
          </Button>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
