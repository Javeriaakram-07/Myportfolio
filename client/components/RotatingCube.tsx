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
          className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/70 border border-primary/80 flex items-center justify-center p-2"
          style={{
            transform: 'rotateY(0deg) translateZ(40px)',
            boxShadow: '4px 0 12px rgba(0,106,255,0.4), 0 4px 12px rgba(0,106,255,0.3)'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-125 contrast-110"
          />
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60 border border-primary/70 flex items-center justify-center p-2"
          style={{
            transform: 'rotateY(180deg) translateZ(40px)',
            boxShadow: '-4px 0 12px rgba(0,106,255,0.4), 0 4px 12px rgba(0,106,255,0.3)'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>

        {/* Right face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/85 to-accent/65 border border-primary/75 flex items-center justify-center p-2"
          style={{
            transform: 'rotateY(90deg) translateZ(40px)',
            boxShadow: '4px 0 12px rgba(0,106,255,0.5), 0 4px 12px rgba(0,106,255,0.4)'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-115"
          />
        </div>

        {/* Left face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/75 to-accent/55 border border-primary/65 flex items-center justify-center p-2"
          style={{
            transform: 'rotateY(-90deg) translateZ(40px)',
            boxShadow: '-4px 0 12px rgba(0,106,255,0.5), 0 4px 12px rgba(0,106,255,0.4)'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-105"
          />
        </div>

        {/* Top face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/75 border border-primary/85 flex items-center justify-center p-2"
          style={{
            transform: 'rotateX(90deg) translateZ(40px)',
            boxShadow: '0 -4px 12px rgba(0,106,255,0.5), 4px 0 8px rgba(0,106,255,0.3)'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-130"
          />
        </div>

        {/* Bottom face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/50 border border-primary/60 flex items-center justify-center p-2"
          style={{
            transform: 'rotateX(-90deg) translateZ(40px)',
            boxShadow: '0 4px 12px rgba(0,106,255,0.6), 4px 4px 8px rgba(0,106,255,0.4)'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain filter brightness-100"
          />
        </div>
      </div>
    </div>
  );
}
