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
    ? 'w-[50vw] h-[50vw] max-w-96 max-h-96 md:w-[40vw] md:h-[40vw] lg:w-[35vw] lg:h-[35vw]'
    : 'w-32 h-32';

  return (
    <div className={logoClasses}>
      <div className="relative">
        {/* Main logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
          alt="Javeria Akram Logo"
          className={`${logoSize} object-contain animate-logo-pulse transition-all duration-1000 drop-shadow-2xl ${
            isFullscreen ? 'filter drop-shadow-[0_0_50px_rgba(66,128,255,0.6)]' : ''
          }`}
        />

        {/* Blur glow effect layers */}
        {isFullscreen && (
          <>
            <div className="absolute inset-0 blur-xl opacity-40">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
                alt="Javeria Akram Logo Glow"
                className={`${logoSize} object-contain animate-logo-pulse transition-all duration-1000`}
              />
            </div>
            <div className="absolute inset-0 blur-2xl opacity-20 scale-110">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
                alt="Javeria Akram Logo Glow 2"
                className={`${logoSize} object-contain animate-logo-pulse transition-all duration-1000`}
              />
            </div>
          </>
        )}

        {/* Navigation blur effect */}
        {!isFullscreen && (
          <div className="absolute inset-0 blur-sm opacity-40">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
              alt="Javeria Akram Logo Glow"
              className={`${logoSize} object-contain animate-logo-pulse transition-all duration-1000`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
