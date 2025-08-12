import AnimatedLogo from "../components/AnimatedLogo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [showFullscreen, setShowFullscreen] = useState(true);

  const handleAnimationComplete = () => {
    setShowFullscreen(false);
  };

  useEffect(() => {
    // Hide fullscreen logo after a delay even if animation doesn't complete
    const timer = setTimeout(() => {
      setShowFullscreen(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fullscreen animated logo on initial load */}
      {showFullscreen && (
        <AnimatedLogo 
          isFullscreen={true} 
          onAnimationComplete={handleAnimationComplete}
        />
      )}
      
      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${showFullscreen ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
