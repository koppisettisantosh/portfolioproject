import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Simulate form submission for GitHub Pages (static hosting)
    // In production, you would integrate with a service like Formspree, Netlify Forms, or EmailJS
    setTimeout(() => {
      setSubmitStatus({
        message: 'Network error. Please check if the server is running.'
      });
    } finally {
      setIsSubmitting(false);
    }
    )
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:santoshkoppisetti6@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                      santoshkoppisetti6@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+91 8125657059" className="text-gray-300 hover:text-white transition-colors duration-200">
                      +91 8125657059
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-300">rajhamundry,Andhra paradesh</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/santosh-koppisetti-165458360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/koppisettisantosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-black border border-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
            
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900 border border-green-700 text-green-300' 
                  : 'bg-red-900 border border-red-700 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;