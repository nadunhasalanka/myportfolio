import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrame;
    
    const handleMouseMove = (e) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick || target.style.cursor === 'pointer') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed rounded-full pointer-events-none z-50 transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering 
            ? 'w-6 h-6 bg-white/80 border-2 border-white' 
            : 'w-3 h-3 bg-white'
        }`}
        style={{
          left: `${mousePosition.x - (isHovering ? 12 : 6)}px`,
          top: `${mousePosition.y - (isHovering ? 12 : 6)}px`,
          transform: 'translate3d(0, 0, 0)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out, width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
        }}
      />
      
      {/* Outer ring for hover effect */}
      <div
        className={`fixed rounded-full pointer-events-none z-40 border border-white/30 transition-all duration-300 ${
          isVisible && isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '32px',
          height: '32px',
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transform: 'translate3d(0, 0, 0)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
