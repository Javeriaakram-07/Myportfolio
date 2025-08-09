import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypingAnimation({ 
  text, 
  delay = 1000, 
  speed = 100, 
  className = '' 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [isTyping, text, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      <span className="inline-block perspective-1000">
        {displayText.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-scale-in"
            style={{
              animationDelay: `${index * speed}ms`,
              transform: 'translateZ(0)',
              textShadow: '0 0 10px hsla(var(--primary), 0.3), 0 0 20px hsla(var(--primary), 0.2), 0 0 30px hsla(var(--primary), 0.1)'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      {(isTyping || showCursor) && (
        <span 
          className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse"
          style={{
            boxShadow: '0 0 5px hsla(var(--primary), 0.8)',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s'
          }}
        />
      )}
    </span>
  );
}
