import { useState, useEffect } from 'react';

const TypewriterAnimation = ({ text, speed = 150, deleteSpeed = 75, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    const animateText = () => {
      if (!isDeleting) {
        // Typing effect
        if (displayText.length < text.length) {
          timeout = setTimeout(() => {
            setDisplayText(text.substring(0, displayText.length + 1));
          }, speed);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting effect
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }, deleteSpeed);
        } else {
          // Start typing again
          setIsDeleting(false);
        }
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, deleteSpeed, pauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="relative">
      {displayText}
      <span 
        className={`inline-block w-1 h-9 bg-accent-blue ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
};

export default TypewriterAnimation;
