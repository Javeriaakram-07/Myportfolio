import { useState, useEffect } from 'react';
import AnimatedLogo from '../components/AnimatedLogo';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import PortfolioSection from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const introPlayed = sessionStorage.getItem('introPlayed');
    if (!introPlayed) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setShowIntro(false);
        setTimeout(() => setShowContent(true), 200);
        sessionStorage.setItem('introPlayed', '1');
      }, 1700);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    // Add smooth scroll behavior and parallax effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    if (showContent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showContent]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fullscreen Logo Animation */}
      {showIntro && (
        <AnimatedLogo isFullscreen={true} onAnimationComplete={() => setShowIntro(false)} />
      )}

      {/* Main Content */}
      <div className={`transition-all duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <PortfolioSection />
          <Contact />
        </main>
        <footer className="bg-muted/50 border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4">
              <AnimatedLogo />
              <div className="text-center">
                <p className="text-foreground font-semibold">Javeria Akram</p>
                <p className="text-sm text-muted-foreground">© 2024 All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
