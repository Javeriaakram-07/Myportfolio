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
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex items-center justify-center p-2"
          style={{ transform: 'rotateY(0deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Back face */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex items-center justify-center p-2"
          style={{ transform: 'rotateY(180deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Right face */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex items-center justify-center p-2"
          style={{ transform: 'rotateY(90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Left face */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex items-center justify-center p-2"
          style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Top face */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex items-center justify-center p-2"
          style={{ transform: 'rotateX(90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Bottom face */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex items-center justify-center p-2"
          style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=100"
            alt="Javeria Akram Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
