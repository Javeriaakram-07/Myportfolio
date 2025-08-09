import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Globe, Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            {/* Desktop Social Links */}
            <div className="hidden sm:flex items-center space-x-4">
              <SocialLink
                href="https://www.instagram.com/javeriyayayaya.07?igsh=NzF3ZGlsczE3MXph"
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
                color="instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/javeria-akram-10b607334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
                color="linkedin"
              />
              <SocialLink
                href="https://www.freelancer.com/u/Javeriaakram77?frm=Javeriaakram77&sb=t"
                icon={<Globe className="w-5 h-5" />}
                label="Freelancer"
                color="freelancer"
              />
              <SocialLink
                href="mailto:javeria.akram@example.com"
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                color="email"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#about" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#portfolio" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <SocialLink
                  href="https://www.instagram.com/javeriyayayya.07?igsh=NzF3ZGlsczE3MXph"
                  icon={<Instagram className="w-5 h-5" />}
                  label="Instagram"
                  color="instagram"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/javeria-akram-10b607334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  color="linkedin"
                />
                <SocialLink
                  href="https://www.freelancer.com/u/Javeriaakram77?frm=Javeriaakram77&sb=t"
                  icon={<Globe className="w-5 h-5" />}
                  label="Freelancer"
                  color="freelancer"
                />
                <SocialLink
                  href="mailto:javeria.akram@example.com"
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  color="email"
                />
              </div>
            </div>
          </div>
        )}
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
