import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Javeria</span>
              <br />
              <span className="text-foreground">Akram</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Student & Freelancer
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about logic building, C++ development, and creating stunning web experiences. 
              I bring ideas to life through code and design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="group relative px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              View My Work
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
            
            {/* Profile image placeholder */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-accent shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl font-bold gradient-text">JA</div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}
