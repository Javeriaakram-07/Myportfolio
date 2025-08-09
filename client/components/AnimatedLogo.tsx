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

  const logoSize = isFullscreen
    ? 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'
    : 'w-10 h-10';

  return (
    <div className={logoClasses}>
      <div className="relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
          alt="Javeria Akram Logo"
          className={`${logoSize} object-contain animate-logo-pulse transition-all duration-1000`}
        />
        <div className="absolute inset-0 blur-sm opacity-30">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
            alt="Javeria Akram Logo Glow"
            className={`${logoSize} object-contain animate-logo-pulse transition-all duration-1000`}
          />
        </div>
      </div>
    </div>
  );
}
