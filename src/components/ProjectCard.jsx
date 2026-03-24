import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ 
  title, 
  description, 
  image,
  tech, 
  features, 
  role, 
  githubLink, 
  demoLink, 
  icon: Icon,
  delay = 0
}) {
  return (
    <motion.div
      className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Project Image / Icon Placeholder */}
      <div className="h-48 w-full relative overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Adaptive bottom fade so image smoothly transitions into card background */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-[#0F172A] dark:via-transparent to-transparent z-10 opacity-90"></div>
          </>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-secondary relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Icon size={64} className="text-primary/50 group-hover:scale-110 group-hover:text-primary transition-all duration-500 z-0" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        {role && <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Role: {role}</p>}
        <p className="text-textSecondary mb-6 text-sm flex-grow line-clamp-3 leading-relaxed">{description}</p>
        
        {/* Features List */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2 text-textMain">Key Features:</h4>
            <ul className="text-xs text-textSecondary space-y-1 list-disc list-inside">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tech.map((item, idx) => (
            <span key={idx} className="text-[10px] font-medium px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-textSecondary hover:text-textMain transition-colors bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-4 py-2 rounded-lg border border-border/50">
              <Github size={16} /> Code
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" className="w-full gap-2 text-sm py-2">
                <ExternalLink size={16} /> Live
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
