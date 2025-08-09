import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  delay = 300,
  speed = 90,
  className = ''
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    indexRef.current = 0;
    setIsTyping(false);

    const start = window.setTimeout(() => {
      setIsTyping(true);
      const typeNext = () => {
        if (indexRef.current <= text.length) {
          setDisplayText(text.slice(0, indexRef.current));
          indexRef.current += 1;
          timeoutRef.current = window.setTimeout(typeNext, speed);
        } else {
          setIsTyping(false);
        }
      };
      typeNext();
    }, delay);

    return () => {
      window.clearTimeout(start);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [text, delay, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      <span className="inline-block">
        {displayText.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block gradient-text transition-all duration-300"
            style={{
              transform: 'translateY(0px) scale(1)',
              animation: 'letterAppear 0.3s ease-out forwards',
              animationDelay: `${index * 45}ms`,
              filter: 'drop-shadow(0 0 8px hsla(var(--primary), 0.4))',
              textShadow: '0 0 20px hsla(var(--primary), 0.3)'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      {(isTyping || showCursor) && (
        <span
          className="inline-block w-1 h-[1em] bg-gradient-to-t from-primary to-accent ml-2 rounded-sm"
          style={{
            boxShadow: '0 0 10px hsla(var(--primary), 0.8), 0 0 20px hsla(var(--primary), 0.4)',
            opacity: showCursor ? 1 : 0.3,
            transition: 'opacity 0.15s ease-in-out',
            animation: 'cursorBlink 1s infinite'
          }}
        />
      )}
    </span>
  );
}
