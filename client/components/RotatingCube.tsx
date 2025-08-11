import { useEffect, useState } from 'react';

interface RotatingCubeProps {
  size?: string;
}

export default function RotatingCube({ size = 'w-20 h-20' }: RotatingCubeProps) {
  return (
    <div className={`${size} relative transform-gpu`} style={{ perspective: '1000px' }}>
      <div className="w-full h-full relative animate-cube-rotate" style={{ transformStyle: 'preserve-3d' }}>
        {/* Front face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/50 flex items-center justify-center p-2 shadow-[2px_2px_8px_rgba(0,106,255,0.3)]"
          style={{ transform: 'rotateY(0deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/50 flex items-center justify-center p-2 shadow-[2px_2px_8px_rgba(0,106,255,0.3)]"
          style={{ transform: 'rotateY(180deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>

        {/* Right face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/50 flex items-center justify-center p-2 shadow-[2px_2px_8px_rgba(0,106,255,0.3)]"
          style={{ transform: 'rotateY(90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>

        {/* Left face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/50 flex items-center justify-center p-2 shadow-[2px_2px_8px_rgba(0,106,255,0.3)]"
          style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>

        {/* Top face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/50 flex items-center justify-center p-2 shadow-[2px_2px_8px_rgba(0,106,255,0.3)]"
          style={{ transform: 'rotateX(90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>

        {/* Bottom face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/50 flex items-center justify-center p-2 shadow-[2px_2px_8px_rgba(0,106,255,0.3)]"
          style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>
      </div>
    </div>
  );
}
