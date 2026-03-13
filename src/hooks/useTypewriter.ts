import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);

    const startTyping = setTimeout(() => {
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};
