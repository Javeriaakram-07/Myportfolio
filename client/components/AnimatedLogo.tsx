import { useEffect, useState } from "react";

interface AnimatedLogoProps {
  isFullscreen?: boolean;
  onAnimationComplete?: () => void;
  durationMs?: number;
}

<<<<<<< HEAD
export default function AnimatedLogo({
  isFullscreen = false,
  onAnimationComplete,
}: AnimatedLogoProps) {
=======
export default function AnimatedLogo({ isFullscreen = false, onAnimationComplete, durationMs = 1700 }: AnimatedLogoProps) {
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isFullscreen) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onAnimationComplete?.();
      }, durationMs);
      return () => clearTimeout(timer);
    }
  }, [isFullscreen, onAnimationComplete, durationMs]);

  const logoClasses = isFullscreen
<<<<<<< HEAD
    ? `fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
=======
    ? `fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
      }`
    : "relative";

  const logoSize = isFullscreen
<<<<<<< HEAD
    ? "w-[80vw] h-[80vh] max-w-[400px] max-h-[400px]"
    : "w-16 h-16";
=======
    ? 'w-[85vw] h-[85vw] max-w-[90vw] max-h-[90vh] md:w-[65vw] md:h-[65vw] lg:w-[55vw] lg:h-[55vw]'
    : 'w-24 h-24';
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd

  return (
    <div className={logoClasses}>
      <div className="relative">
        {/* Main logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
          alt="Javeria Akram Logo"
<<<<<<< HEAD
          className={`${logoSize} object-contain transition-all duration-1000 drop-shadow-2xl ${
            isFullscreen
              ? "filter drop-shadow-[0_0_50px_rgba(66,128,255,0.6)] animate-3d-rotate"
              : "animate-logo-pulse"
          }`}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
=======
          className={`${logoSize} object-contain transition-transform duration-[1600ms] ease-out drop-shadow-2xl ${
            isFullscreen ? 'scale-100 animate-logo-pulse filter drop-shadow-[0_0_50px_rgba(66,128,255,0.6)]' : 'animate-logo-pulse'
          }`}
          style={isFullscreen ? { transformOrigin: 'center' } : undefined}
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
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
