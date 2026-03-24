import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { ShoppingCart, Dumbbell } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SimpleCart – Responsive E-Commerce Frontend",
      description: "Developed a responsive React-based e-commerce frontend featuring category-wise product listings with advanced filtering, dynamic product pages, and seamless cart functionality.",
      tech: ["React.js", "Tailwind CSS", "React Router", "JavaScript"],
      features: ["Category Filtering", "Dynamic Routing", "State Management", "Responsive Design"],
      role: "Frontend Developer",
      githubLink: "https://github.com/Lpuayush/Simple-Website",
      icon: ShoppingCart
    },
    {
      title: "Fitness App – AI-Powered Workout Companion",
      description: "Designed and developed a full-stack fitness application enabling users to explore 500+ exercises with advanced search, video tutorials from YouTube, and an intuitive Material-UI interface.",
      tech: ["React.js", "Material-UI", "Emotion", "RapidAPI", "Tailwind CSS"],
      features: ["500+ Exercises Database", "YouTube Integration", "Advanced Search", "Responsive Components"],
      role: "Full Stack Developer",
      githubLink: "https://github.com/Lpuayush/fitness-app",
      icon: Dumbbell
    }
  ];

  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Featured Projects" subtitle="A selection of my best work, spanning web applications, AI integration, and robust algorithms." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-7xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard 
            key={proj.title}
            {...proj}
            delay={idx * 0.15}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
