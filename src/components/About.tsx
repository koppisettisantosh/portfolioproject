import React from 'react';
import { User, Heart, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <User className="text-white" size={24} />
              <h3 className="text-2xl font-semibold text-white">My Background</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated and passionate developer with a strong foundation in modern web technologies. 
              My journey in programming began with a curiosity about how things work, and it has evolved 
              into a deep appreciation for creating efficient, elegant solutions to complex problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies and best practices. 
              Whether working on personal projects or collaborating with teams, I bring creativity, attention to detail, 
              and a commitment to delivering high-quality results.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Heart className="text-white" size={24} />
              <h3 className="text-2xl font-semibold text-white">What Drives Me</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about creating user-friendly applications that solve real-world problems. 
              The intersection of technology and human experience fascinates me, and I strive to build 
              solutions that are not only functional but also intuitive and engaging.
            </p>
            <div className="flex items-center space-x-3">
              <Code className="text-white" size={24} />
              <h3 className="text-2xl font-semibold text-white">My Approach</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I approach every project with curiosity and enthusiasm, focusing on clean code, 
              scalable architecture, and user-centered design. I believe that great software 
              is built through collaboration, continuous learning, and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;