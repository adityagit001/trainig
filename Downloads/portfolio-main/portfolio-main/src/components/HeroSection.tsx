import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Keyboard3D from './Keyboard3D';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-8 text-center lg:text-left" style={{ marginLeft: '2cm' }}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse text-overflow-fix">
              Hi, I am Aditya Kumar Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in text-overflow-fix">
              Software Engineer, Developer, AI & DS, DevOps
            </p>
          </div>
          
          <a
            href="/resume-image.jpg"
            download
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl text-lg font-semibold"
            style={{ cursor: 'pointer' }}
          >
            <span>Download Resume</span>
          </a>
          
          <div className="flex justify-center lg:justify-start space-x-6 pt-8">
            <a
              href="https://github.com/adityagit001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 glow-button"
              style={{ cursor: 'pointer' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-singh-9a0803328"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 glow-button"
              style={{ cursor: 'pointer' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button
              onClick={scrollToContact}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 glow-button"
              style={{ cursor: 'pointer' }}
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex justify-center lg:justify-end" style={{ marginRight: '2cm' }}>
          <Keyboard3D isInSkillsSection={false} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;