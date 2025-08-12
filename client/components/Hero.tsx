import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import TypingAnimation from "./TypingAnimation";
import { useParallax, useParallaxMulti } from "../hooks/useParallax";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const parallaxRef1 = useParallax(0.3);
  const parallaxRef2 = useParallax(0.5);
  const parallaxRef3 = useParallax(0.2);
  const parallaxRef4 = useParallax(0.4);
  const parallaxRef5 = useParallax(0.6);

  useParallaxMulti([
    { speed: 0.2, selector: ".parallax-bg-1" },
    { speed: 0.4, selector: ".parallax-bg-2" },
    { speed: 0.6, selector: ".parallax-bg-3" },
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
        <div
          className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-8 mt-32 sm:mt-28 md:mt-20 lg:mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold min-h-[2.5em]">
              <TypingAnimation
                text="Javeria Akram"
                delay={2000}
                speed={150}
                className="gradient-text block"
              />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-8">
              Computer Science Student & Freelancer
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about logic building,{" "}
              <span className="gradient-text font-semibold">C++</span>{" "}
              development, and creating stunning web experiences. I bring ideas
              to life through code and design.
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

        {/* Profile Image */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative mx-auto w-56 h-56 lg:w-72 lg:h-72">
            {/* Enhanced multi-layer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse scale-95"></div>

            {/* Profile logo circle with neon border and 3D sphere */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary circle-neon">
              {/* 3D Rotating Sphere Background */}
              <div className="absolute inset-0 animate-sphere-rotate opacity-20">
                <div
                  className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 to-accent/30 transform-gpu"
                  style={{
                    background: `
                         radial-gradient(circle at 30% 30%, rgba(66, 128, 255, 0.4) 0%, transparent 50%),
                         radial-gradient(circle at 70% 70%, rgba(0, 200, 255, 0.3) 0%, transparent 50%),
                         conic-gradient(from 0deg, rgba(66, 128, 255, 0.2), rgba(0, 200, 255, 0.2), rgba(66, 128, 255, 0.2))
                       `,
                  }}
                ></div>
              </div>

              {/* Content */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
                  alt="Javeria Akram Logo"
                  className="w-full h-full object-contain animate-logo-pulse drop-shadow-2xl relative z-10"
                />
              </div>
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
