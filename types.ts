export interface Template {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  demoUrl: string;
  githubUrl: string;
  category: 'SaaS' | 'Portfolio' | 'E-commerce' | 'Blog';
  techStack: string[];
}