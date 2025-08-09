import { useEffect, useState } from 'react';

interface AnimatedLogoProps {
  isFullscreen?: boolean;
  onAnimationComplete?: () => void;
}

export default function AnimatedLogo({ isFullscreen = false, onAnimationComplete }: AnimatedLogoProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isFullscreen) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onAnimationComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isFullscreen, onAnimationComplete]);

  const logoClasses = isFullscreen
    ? `fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`
    : 'relative';

  const textClasses = isFullscreen
    ? 'text-8xl md:text-9xl lg:text-[12rem] font-bold animate-logo-pulse'
    : 'text-2xl font-bold animate-logo-pulse';

  return (
    <div className={logoClasses}>
      <div className="relative">
        <span className={`gradient-text ${textClasses}`}>
          JA
        </span>
        <div className="absolute inset-0 blur-lg opacity-50">
          <span className={`gradient-text ${textClasses}`}>
            JA
          </span>
        </div>
      </div>
    </div>
  );
}
