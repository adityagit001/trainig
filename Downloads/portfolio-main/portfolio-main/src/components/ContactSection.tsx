import React, { useState, useEffect } from 'react';
import { Send, User, Mail, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:adi9576tya@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent glow-text text-overflow-fix">
            Let's Work Together
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Me Panel */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">About Me</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 text-overflow-fix">
                  Hi, I'm Aditya Kumar Singh, an AI and Data Science Engineer. I have a strong passion for technology 
                  and am continuously expanding my knowledge in various technical fields. Outside of work, I enjoy 
                  sketching and expressing my creativity through art.
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 hover:scale-105 glow-button">
                  <User className="w-5 h-5" />
                  <span>About Me</span>
                </button>
              </div>
            </div>
            
            {/* Contact Form Panel */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 hover:scale-105 glow-button"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;