import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Globe } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <AnimatedLogo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <SocialLink 
              href="https://instagram.com/javeria_akram" 
              icon={<Instagram className="w-5 h-5" />}
              label="Instagram"
            />
            <SocialLink 
              href="https://linkedin.com/in/javeria-akram" 
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <SocialLink 
              href="https://freelancer.com/u/javeria-akram" 
              icon={<Globe className="w-5 h-5" />}
              label="Freelancer"
            />
            <SocialLink 
              href="mailto:javeria.akram@example.com" 
              icon={<Mail className="w-5 h-5" />}
              label="Email"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
      <div className="relative text-muted-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      <div className="absolute inset-0 group-hover:shadow-glow rounded-lg transition-all duration-300 pointer-events-none"></div>
    </a>
  );
}
