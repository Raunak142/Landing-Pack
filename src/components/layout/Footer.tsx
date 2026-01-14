import React from 'react';
import { Github, Heart } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Landing Packs.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> by Raunak Godiyal
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/Raunak142" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;