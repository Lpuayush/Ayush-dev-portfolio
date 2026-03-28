import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Ayushraj", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/AyushRaj26", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:ayushraj2584@gmail.com", label: "Email" },
    
  ];

  return (
    <footer className="relative mt-24 border-t border-border/50 bg-card/30 backdrop-blur-[20px]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="hero" smooth={true} duration={500} className="text-3xl font-black cursor-pointer group flex items-center mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-textMain to-textSecondary group-hover:from-primary group-hover:to-purple-500 transition-all duration-500">
                AYUSH
              </span>
              <span className="text-primary ml-1">.</span>
            </Link>
            <p className="text-textSecondary/80 text-sm md:text-base max-w-sm">
              Crafting premium digital experiences through modern web technologies and elegant design.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 md:w-10 md:h-10 rounded-full glass-effect flex items-center justify-center text-textSecondary hover:text-primary transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-border/50"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-textSecondary/60">
          <p>© {new Date().getFullYear()} Ayush Raj. All Rights Reserved.</p>
          <p>
            Designed & Built with <span className="text-primary tracking-wide">React</span> & <span className="text-purple-400 tracking-wide">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
