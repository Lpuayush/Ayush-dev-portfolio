import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "Email",
      value: "ayushraj2584@gmail.com",
      href: "mailto:ayushraj2584@gmail.com"
    },
    {
      icon: <Github className="text-primary" size={24} />,
      label: "GitHub",
      value: "github.com/Ayushraj",
      href: "https://github.com/Ayushraj"
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/AyushRaj26",
      href: "https://linkedin.com/in/AyushRaj26"
    }
  ];

  const [formStatus, setFormStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.target);
    // Web3Forms Access Key
    formData.append("access_key", "c3ee8243-d90c-403b-b5d4-8032f5c4a235");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus("idle"), 5000); // Reset button after 5s
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Let's connect!" />
      
      <div className="mt-12 flex flex-col gap-10 w-full max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass-effect p-6 rounded-xl flex items-center justify-center md:justify-start gap-4 hover:border-primary/50 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-white/5 p-3 rounded-lg group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-sm text-textSecondary mb-1 text-left">{info.label}</p>
                <p className="text-textMain font-medium group-hover:text-primary transition-colors text-left">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          className="w-full glass-effect p-8 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-textSecondary">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="glass-effect rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-textMain placeholder:text-textSecondary placeholder:opacity-60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-textSecondary">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="glass-effect rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-textMain placeholder:text-textSecondary placeholder:opacity-60"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm text-textSecondary">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                required
                placeholder="Job Opportunity / Freelance Project"
                className="glass-effect rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-textMain placeholder:text-textSecondary placeholder:opacity-60"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-textSecondary">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Hello Ayush, I'd like to talk about..."
                className="glass-effect rounded-lg px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-textMain placeholder:text-textSecondary placeholder:opacity-60 resize-none"
              ></textarea>
            </div>
            
            <Button 
              variant="primary" 
              className="gap-2 w-full md:w-auto self-start mt-2 min-w-[160px] flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
              {formStatus === 'loading' && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
              {formStatus === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
              {formStatus === 'error' && <><XCircle size={18} /> Error Sending</>}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
