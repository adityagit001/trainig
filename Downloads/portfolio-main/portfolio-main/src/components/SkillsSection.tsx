import React, { useEffect, useState } from 'react';
import Keyboard3D from './Keyboard3D';

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent glow-text text-overflow-fix">
            My Skills
          </h2>
          
          <div className="flex justify-center">
            <div className="skills-keyboard-container">
              <Keyboard3D isInSkillsSection={true} />
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mt-16 max-w-3xl mx-auto leading-relaxed text-overflow-fix">
            Hover over the 3D keyboard keys to explore my technical expertise and experience in detail. Each key represents a technology I'm proficient in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;