import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const rate = scrollY * -speed;
      
      elementRef.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

export const useParallaxMulti = (elements: { speed: number; selector: string }[]) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      elements.forEach(({ speed, selector }) => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element) {
          const rate = scrollY * -speed;
          element.style.transform = `translateY(${rate}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elements]);
};
