import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Users } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      items: ['React', 'Node.js', 'HTML/CSS', 'Vue.js', 'Angular']
    },
    {
      icon: <Database size={32} />,
      title: 'Database & Backend',
      items: ['MongoDB', 'PostgreSQL', 'Express.js', 'REST APIs', 'GraphQL']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      items: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    {
      icon: <Palette size={32} />,
      title: 'Design & UI/UX',
      items: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'Material-UI', 'Responsive Design']
    },
    {
      icon: <Users size={32} />,
      title: 'Tools & Collaboration',
      items: ['Git/GitHub', 'Docker', 'AWS', 'Agile/Scrum', 'CI/CD']
    }
  ];

  const interests = [
    'Machine Learning & AI',
    'Open Source Contributions',
    'Mobile App Development',
    'Cybersecurity',
    'Game Development'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Interests</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-black border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="text-white mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{skill.title}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Areas of Interest</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="bg-black border border-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-200">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span className="text-gray-300 font-medium">{interest}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;