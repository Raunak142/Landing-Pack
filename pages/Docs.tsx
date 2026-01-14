import React from 'react';
import { BookOpen, Github, Terminal, Download } from 'lucide-react';

const Docs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Documentation</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learn how to access the source code and integrate these templates into your workflow.
        </p>
      </div>

      <div className="space-y-12">
        {/* Project Details */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Details</h2>
          </div>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              <strong>Landing Packs</strong> is a curated collection of open-source landing page templates designed for modern web 
              development. Each template is built using pure HTML, CSS, and JavaScript, ensuring maximum compatibility, lightweight 
              performance, and easy integration into any project or tech stack.
            </p>
            <p>
              These templates are fully responsive, cleanly structured, and optimized for fast loading. 
              Whether you're creating a SaaS landing page, portfolio, agency website, product launch page, 
              or promotional site, Landing Packs gives you a solid starting point to accelerate your development workflow.
            </p>
            <p>With simple folder structures and no framework dependencies, you can directly customize the code to match your brand,
               improve UI sections, or integrate with any backend of your choice.</p>
          </div>
        </section>

        {/* How to use GitHub Code */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-900 dark:bg-gray-100 rounded-lg text-white dark:text-gray-900">
              <Github className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Use the Code</h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All templates are hosted on GitHub. Follow these steps to get a template running on your local machine.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Select and Access</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Browse the homepage and find a template you like. Click the <strong>"Get Code"</strong> button on the card. 
                  This will open the specific GitHub repository for that template in a new tab.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clone the Repository</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Open your terminal and clone the repository to your local machine using the URL from GitHub.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  git clone https://github.com/Raunak142/template-name.git
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Opening Folder</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Navigate into the project directory.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <span className="block mb-2"><span className="text-blue-400">cd</span> template-name</span>
                 
                </div>
              </div>
            </div>

             {/* Step 4 */}
             <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Run Locally</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Start the development server to view the template in your browser.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <span className="text-blue-400">Go Live</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Docs;