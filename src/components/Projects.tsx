import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      icon: <Globe size={24} />,
      projectUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time collaboration features. Built with React Native for mobile and React for web.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      icon: <Smartphone size={24} />,
      projectUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays current weather conditions and forecasts. Features location-based weather data and interactive charts.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      icon: <Globe size={24} />,
      projectUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Data Analytics Tool',
      description: 'A comprehensive data visualization tool for business analytics. Includes dashboard creation, data import/export, and custom reporting features.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js', 'Pandas'],
      icon: <Database size={24} />,
      projectUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media App',
      description: 'A mobile-first social media platform with real-time messaging, photo sharing, and social features. Built with modern mobile development practices.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      icon: <Smartphone size={24} />,
      projectUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills. Built with modern web technologies and optimized for performance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: <Globe size={24} />,
      projectUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border ${
              project.featured ? 'border-white' : 'border-gray-700'
            } hover:border-gray-600`}>
              {project.featured && (
                <div className="bg-white text-black text-center py-2 text-sm font-medium">
                  Featured Project
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-white mr-3">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;