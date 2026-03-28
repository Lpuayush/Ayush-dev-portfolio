import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { name: 'About', to: 'about' },
  { name: 'Resume', to: 'resume' },
  { name: 'Education', to: 'education' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Animated Brand Logo */}
        <Link to="hero" smooth={true} duration={500} className="text-2xl font-black tracking-tighter cursor-pointer z-50 group flex items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-textMain to-textSecondary group-hover:from-primary group-hover:to-purple-500 transition-all duration-500">
            AYUSH
          </span>
          <span className="text-primary ml-1">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative px-4 py-2 text-base font-semibold text-textSecondary hover:text-textMain cursor-pointer transition-colors group inline-block"
              >
                {link.name}
                {/* Modern Hover Underline Animation */}
                <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
            </motion.div>
          ))}
          
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="ml-4 p-2.5 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all text-textMain shadow-sm"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-border/50 bg-card/50 hover:bg-card transition-all text-textMain shadow-sm"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-textMain hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-textSecondary hover:text-primary cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
