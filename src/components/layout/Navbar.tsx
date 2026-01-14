import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-primary dark:text-primary font-semibold" 
      : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <Layout size={24} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Landing Packs
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>
              Templates
            </Link>
            <Link to="/docs" className={`transition-colors ${isActive('/docs')}`}>
              Documentation
            </Link>
            <div className="pl-4 border-l border-gray-200 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Placeholder (Simple version) */}
          <div className="flex items-center md:hidden gap-4">
             <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;