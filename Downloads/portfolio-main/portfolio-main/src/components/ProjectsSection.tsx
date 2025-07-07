import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Full-Stack Project',
    description: 'A comprehensive web application built with React, Node.js, and MongoDB.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Agentic AI',
    description: 'An intelligent AI agent system for automated task management.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Automation Tool',
    description: 'A powerful automation framework for streamlining development workflows.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['Python', 'Selenium', 'Docker', 'Jenkins'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Jenkins Setup',
    description: 'Complete CI/CD pipeline configuration with Jenkins and Docker.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['Jenkins', 'Docker', 'AWS', 'Git'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'CI/CD Pipeline',
    description: 'Automated deployment pipeline for modern web applications.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['GitHub Actions', 'Docker', 'AWS', 'Kubernetes'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Machine Learning App',
    description: 'A data-driven application with predictive analytics capabilities.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent glow-text text-overflow-fix">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card group cursor-pointer transition-all duration-500 delay-${index * 100}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-400/30">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="aspect-video mb-6 overflow-hidden rounded-xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {selectedProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>Source Code</span>
              </a>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;