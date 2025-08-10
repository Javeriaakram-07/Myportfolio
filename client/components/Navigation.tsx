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
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
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
                href="mailto:javeriaakram259@gmail.com"
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
                  href="mailto:javeriaakram259@gmail.com"
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
  color?: string;
}

function SocialLink({ href, icon, label, color }: SocialLinkProps) {
  const getColorClass = (colorType?: string) => {
    switch (colorType) {
      case 'instagram':
        return 'group-hover:text-pink-500';
      case 'linkedin':
        return 'group-hover:text-blue-600';
      case 'freelancer':
        return 'group-hover:text-orange-500';
      case 'email':
        return 'group-hover:text-green-500';
      default:
        return 'group-hover:text-primary';
    }
  };

  const getGlowColor = (colorType?: string) => {
    switch (colorType) {
      case 'instagram':
        return 'group-hover:shadow-[0_0_15px_rgba(236,72,153,0.6)]';
      case 'linkedin':
        return 'group-hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]';
      case 'freelancer':
        return 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)]';
      case 'email':
        return 'group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]';
      default:
        return 'group-hover:shadow-glow';
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2 rounded-lg transition-all duration-500 hover:scale-110 transform"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 rounded-lg transition-all duration-500"></div>
      <div className={`relative text-muted-foreground transition-all duration-500 ${getColorClass(color)}`}>
        {icon}
      </div>
      <div className={`absolute inset-0 rounded-lg transition-all duration-500 pointer-events-none ${getGlowColor(color)}`}></div>
    </a>
  );
}
