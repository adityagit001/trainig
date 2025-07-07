import React from 'react';
import { Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleDownloadResume = () => {
    // Placeholder for resume download
    console.log('Downloading resume...');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Aditya Kumar Singh
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <a
            href="/resume-image.jpg"
            download
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl"
            style={{ cursor: 'pointer' }}
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;