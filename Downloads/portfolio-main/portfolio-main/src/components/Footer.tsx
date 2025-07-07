import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-blue-400/30 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com/adityagit001"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 social-icon"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-singh-9a0803328"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 social-icon"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:adi9576tya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 social-icon"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="text-gray-400 text-sm">
          <p>&copy; 2024 Aditya Kumar Singh. All rights reserved.</p>
          <p className="mt-2">Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;