import React, { useState, useEffect, useRef } from 'react';

const techStack = [
  { 
    name: 'JS', 
    description: 'JavaScript is a versatile programming language that enables dynamic and interactive web applications with powerful client-side functionality.',
    logo: '🟨'
  },
  { 
    name: 'HTML', 
    description: 'HTML structures web content and provides semantic markup for building accessible and well-organized web pages.',
    logo: '🧡'
  },
  { 
    name: 'CSS', 
    description: 'CSS styles and layouts web pages beautifully with responsive design capabilities and modern animation features.',
    logo: '🔵'
  },
  { 
    name: 'React', 
    description: 'React builds interactive user interfaces with component-based architecture and efficient virtual DOM rendering.',
    logo: '⚛️'
  },
  { 
    name: 'MongoDB', 
    description: 'MongoDB is a NoSQL database that provides flexible document storage with powerful querying and indexing capabilities.',
    logo: '🍃'
  },
  { 
    name: 'Node', 
    description: 'Node.js runs JavaScript on the server side enabling full-stack development with high-performance applications.',
    logo: '💚'
  },
  { 
    name: 'Git', 
    description: 'Git tracks code changes and enables seamless collaboration with distributed version control and branching.',
    logo: '📦'
  },
  { 
    name: 'Bash', 
    description: 'Bash scripting automates system tasks and provides powerful command-line interface for system administration.',
    logo: '⚫'
  },
  { 
    name: 'Tailwind', 
    description: 'Tailwind CSS provides utility classes for rapid styling and consistent design system implementation.',
    logo: '🎨'
  },
  { 
    name: 'Linux', 
    description: 'Linux is an open-source operating system kernel that powers servers and development environments worldwide.',
    logo: '🐧'
  },
  { 
    name: 'Docker', 
    description: 'Docker containerizes applications for consistent deployment across different environments and platforms.',
    logo: '🐳'
  },
  { 
    name: 'AWS', 
    description: 'AWS provides comprehensive cloud computing services and infrastructure for scalable and reliable application deployment.',
    logo: '☁️'
  },
];

interface Keyboard3DProps {
  isInSkillsSection?: boolean;
}

const Keyboard3D: React.FC<Keyboard3DProps> = ({ isInSkillsSection = false }) => {
  const [clickedKey, setClickedKey] = useState<string | null>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const keyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInSkillsSection) {
      // Skills section - horizontal 3D keyboard
      setRotation({ x: 20, y: 0, z: 0 });
    } else {
      // Home section - gentle floating animation
      let animationId: number;
      
      const animate = () => {
        const time = Date.now() * 0.001;
        setRotation({
          x: 10 + Math.sin(time * 0.5) * 5,
          y: Math.cos(time * 0.3) * 8,
          z: Math.sin(time * 0.7) * 2
        });
        animationId = requestAnimationFrame(animate);
      };
      
      animate();
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInSkillsSection]);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (keyboardRef.current && !keyboardRef.current.contains(event.target as Node)) {
        setClickedKey(null);
      }
    };

    if (clickedKey) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickedKey]);

  const handleKeyClick = (techName: string) => {
    if (!isInSkillsSection) {
      setClickedKey(clickedKey === techName ? null : techName);
    }
  };

  const keyboardStyle = {
    transform: `
      perspective(1500px) 
      rotateX(${rotation.x}deg) 
      rotateY(${rotation.y}deg) 
      rotateZ(${rotation.z}deg)
      ${isInSkillsSection ? 'scale(1.1)' : 'scale(0.9)'}
    `,
    transformStyle: 'preserve-3d' as const,
    transition: isInSkillsSection ? 'transform 0.8s ease-out' : 'none',
  };

  return (
    <div className="keyboard-container relative flex justify-center items-center">
      <div 
        ref={keyboardRef}
        className="keyboard-3d relative"
        style={keyboardStyle}
      >
        {/* Enhanced Keyboard Base with better 3D effect */}
        <div 
          className="keyboard-base absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-blue-400/40 backdrop-blur-sm shadow-2xl" 
          style={{ 
            transform: 'translateZ(-25px)',
            boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }} 
        />
        
        {/* Keys Grid */}
        <div className="grid grid-cols-4 gap-4 p-8 relative z-10">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="key-3d relative group"
              tabIndex={0}
              onMouseEnter={() => setHoveredKey(tech.name)}
              onMouseLeave={() => setHoveredKey(null)}
              onFocus={() => setHoveredKey(tech.name)}
              onBlur={() => setHoveredKey(null)}
              onClick={() => handleKeyClick(tech.name)}
              onTouchStart={() => handleKeyClick(tech.name)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleKeyClick(tech.name);
                }
              }}
              style={
                isInSkillsSection
                  ? { cursor: 'pointer' }
                  : {
                      cursor: 'pointer',
                      outline: hoveredKey === tech.name ? '2px solid #3b82f6' : 'none',
                      boxShadow: (hoveredKey === tech.name || clickedKey === tech.name)
                        ? '0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 25px rgba(59, 130, 246, 0.1), 0 15px 35px rgba(59, 130, 246, 0.3)'
                        : 'none',
                      transformStyle: 'preserve-3d',
                      transform: (hoveredKey === tech.name || clickedKey === tech.name) ? 'translateZ(20px) scale(1.05)' : 'translateZ(8px)',
                      transition: 'all 0.08s cubic-bezier(0.4, 0, 0.2, 1)'
                    }
              }
            >
              {/* Enhanced Key Face */}
              <div className={`key-face relative bg-gradient-to-br from-blue-500/25 to-purple-600/25 backdrop-blur-sm border border-blue-400/50 rounded-xl p-4 h-24 flex flex-col items-center justify-center text-sm font-bold transition-all duration-300 hover:from-blue-400/35 hover:to-purple-500/35 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/30 text-white overflow-hidden ${clickedKey === tech.name ? 'ring-2 ring-blue-400/70 ring-offset-2 ring-offset-transparent' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {/* Logo */}
                <div className="text-3xl mb-1 filter drop-shadow-lg">{tech.logo}</div>
                {/* Tech Name */}
                <div className="text-sm font-bold tracking-wide">{tech.name}</div>
                {/* Click indicator for skills section */}
                {isInSkillsSection && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
                )}
                {/* Enhanced 3D Key Sides */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Right side */}
                  <div 
                    className="absolute top-0 right-0 w-3 h-full bg-gradient-to-b from-blue-600/40 to-purple-700/40 rounded-r-xl"
                    style={{ 
                      transform: 'rotateY(90deg) translateZ(3px)',
                      transformOrigin: 'left center',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                  {/* Bottom side */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-700/50 to-purple-800/50 rounded-b-xl"
                    style={{ 
                      transform: 'rotateX(-90deg) translateZ(3px)',
                      transformOrigin: 'center top',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                  {/* Left side */}
                  <div 
                    className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-blue-500/30 to-purple-600/30 rounded-l-xl"
                    style={{ 
                      transform: 'rotateY(-90deg) translateZ(3px)',
                      transformOrigin: 'right center',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Keyboard Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-600/15 rounded-2xl blur-2xl transform scale-125 -z-10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-pink-500/10 rounded-2xl blur-3xl transform scale-150 -z-20" />
      </div>

      {/* Enhanced Tooltip - Only show in Skills Section on Hover */}
      {hoveredKey && isInSkillsSection && (
        <>
          {/* No backdrop overlay for hover tooltip */}
          {/* Tooltip */}
          <div className="fixed z-[100] tooltip-container"
               style={{
                 left: '50%',
                 top: '50%',
                 transform: 'translate(-50%, -50%)',
               }}>
            <div className="bg-slate-900/95 backdrop-blur-md text-white p-8 rounded-2xl border-2 border-blue-400/60 shadow-2xl shadow-blue-500/30 w-[500px] min-h-[180px] relative">
              {/* No close button for hover tooltip */}
              {/* Content */}
              <div className="pr-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{techStack.find(t => t.name === hoveredKey)?.logo}</div>
                  <div className="font-bold text-blue-300 text-2xl">{hoveredKey}</div>
                </div>
                <div className="text-gray-200 leading-relaxed text-base">
                  {techStack.find(t => t.name === hoveredKey)?.description}
                </div>
              </div>
              {/* Enhanced tooltip glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl -z-10 scale-110" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Keyboard3D;