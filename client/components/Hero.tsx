import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import RotatingCube from './RotatingCube';
import { useParallax, useParallaxMulti } from '../hooks/useParallax';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const parallaxRef1 = useParallax(0.3);
  const parallaxRef2 = useParallax(0.5);
  const parallaxRef3 = useParallax(0.2);
  const parallaxRef4 = useParallax(0.4);
  const parallaxRef5 = useParallax(0.6);

  useParallaxMulti([
    { speed: 0.2, selector: '.parallax-bg-1' },
    { speed: 0.4, selector: '.parallax-bg-2' },
    { speed: 0.6, selector: '.parallax-bg-3' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={parallaxRef1 as any}
          className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow"
        ></div>
        <div
          ref={parallaxRef2 as any}
          className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-300 shadow-glow"
        ></div>
        <div
          ref={parallaxRef3 as any}
          className="absolute bottom-40 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-700 shadow-glow"
        ></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000 shadow-glow"></div>

        {/* Additional parallax elements */}
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4 mt-20 sm:mt-16 md:mt-8 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold min-h-[2.5em]">
              <TypingAnimation
                text="Javeria Akram"
                delay={2000}
                speed={150}
                className="gradient-text block"
              />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-6">
              Computer Science Student & Freelancer
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about logic building, <span className="gradient-text font-semibold">C++</span> development, and creating stunning web experiences.
              I bring ideas to life through code and design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group relative px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white transition-all duration-500 hover:scale-105 transform hover:neon-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-500"></div>
              <span className="relative z-10">View My Work</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105 transform hover:neon-glow"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* 3D Rotating Cube */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mx-auto w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center">
            {/* 3D Rotating Cube with logo on each face - no background shadow */}
            <div className="relative z-10">
              <RotatingCube size="w-32 h-32 lg:w-40 lg:h-40" />
            </div>

            {/* Enhanced floating elements with neon glow */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-float shadow-glow"></div>
            <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-accent rounded-full animate-float delay-1000 shadow-glow"></div>
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
