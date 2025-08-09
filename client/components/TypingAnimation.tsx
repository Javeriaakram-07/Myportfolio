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
  speed = 120,
  className = ''
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [isTyping, text, speed, currentIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

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
              animationDelay: `${index * 50}ms`,
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
