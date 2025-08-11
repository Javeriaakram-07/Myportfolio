import { useState, useRef } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function Card3D({
  children,
  className = "",
  intensity = 10,
}: Card3DProps) {
  const [transform, setTransform] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / intensity;
    const rotateY = (centerX - x) / intensity;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    );
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
