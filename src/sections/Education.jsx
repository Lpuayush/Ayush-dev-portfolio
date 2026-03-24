import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

const EDUCATION_DATA = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.2",
    date: "Aug 2023 - Present"
  },
  {
    institution: "Kendriya Vidyalaya",
    location: "Patna, Bihar",
    degree: "Intermediate",
    score: "Percentage: 63%",
    date: "2021 - 2023"
  },
  {
    institution: "Kendriya Vidyalaya",
    location: "Patna, Bihar",
    degree: "Matriculation",
    score: "Percentage: 79.6%",
    date: "2020 - 2021"
  }
];

const EducationCard = ({ institution, location, degree, score, date, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-effect p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all group"
  >
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-textMain group-hover:text-primary transition-colors">{institution}</h3>
        <p className="text-textSecondary text-sm md:text-base mt-1">{location}</p>
      </div>
      <div className="shrink-0">
        <span className="inline-block text-xs md:text-sm font-semibold text-primary/90 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
          {date}
        </span>
      </div>
    </div>
    
    <div className="mt-2">
      <p className="text-textMain text-base md:text-lg font-medium">{degree}</p>
      <p className="text-textSecondary text-sm md:text-base mt-2">{score}</p>
    </div>
  </motion.div>
);

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      <SectionHeading 
        title="My Education" 
        subtitle="My academic background and qualifications." 
      />
      
      <div className="max-w-4xl mx-auto w-full mt-12 space-y-6">
        {EDUCATION_DATA.map((edu, idx) => (
          <EducationCard key={idx} index={idx} {...edu} />
        ))}
      </div>
    </SectionWrapper>
  );
}
