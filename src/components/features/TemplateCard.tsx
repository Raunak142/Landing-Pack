import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Template } from '../../types';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const handleOpenDemo = () => {
    window.open(template.demoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenGithub = () => {
    window.open(template.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-slate-700">
        <img 
          src={template.imageUrl} 
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
       
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-200 shadow-sm">
            {template.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {template.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
          {template.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          <button
            onClick={handleOpenDemo}
            className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </button>
          <button
            onClick={handleOpenGithub}
            className="flex items-center justify-center gap-2 py-2 px-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-slate-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            Get Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;