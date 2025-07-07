import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    setIsVisible(true); // Always show cursor on desktop
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: position.x - 16,
        top: position.y - 16,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-8 h-8 border-2 border-blue-400/60 rounded-full bg-blue-400/10 backdrop-blur-sm shadow-[0_0_16px_rgba(59,130,246,0.4)]" />
    </div>
  );
};

export default CustomCursor;