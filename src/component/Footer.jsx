import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUp,
  Send,
  Heart,
  Code2,
  ExternalLink,
  Download,
  Coffee,
  Calendar,
  Globe,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 1500);
  };

  const quickLinks = [
    { name: 'About Me', href: '#about', icon: Code2 },
    { name: 'Portfolio', href: '#portfolio', icon: Globe },
    { name: 'Experience', href: '#experience', icon: Calendar },
    { name: 'Contact', href: '#contact', icon: MessageCircle }
  ];


  const resources = [
    { name: 'Blog', href: '#blog' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Resume', href: '/resume.pdf', external: true }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/chandanverma', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/chandanverma', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/chandanverma', 
      label: 'Twitter',
      color: 'hover:text-sky-400'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/chandanverma', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    }
  ];

  const techStack = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 'MongoDB'
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900 border-t border-slate-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter & CTA Section */}
        <div className="border-b border-slate-800/50 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Coffee className="w-4 h-4 mr-2" />
                Let's collaborate on your next project
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to build something 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> amazing?</span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Get updates on my latest projects, tech insights, and exclusive development tips. 
                Join fellow developers in my community.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center min-w-[140px]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="group px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Start a Project
                </a>
                
                <a 
                  href="/resume.pdf" 
                  download
                  className="group px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand & About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">Chandan Verma</h3>
                  <p className="text-blue-400 font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Passionate developer crafting exceptional digital experiences with modern technologies. 
                Specialized in creating scalable solutions that drive business growth and user satisfaction.
              </p>
              
             
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 group">
                  <Mail className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                  <a href="mailto:chandan.verma@example.com" className="hover:text-blue-400 transition-colors">
                    chandan.verma@example.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400 group">
                  <Phone className="w-5 h-5 mr-3 text-purple-400 group-hover:scale-110 transition-transform" />
                  <a href="tel:+919876543210" className="hover:text-purple-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>India • Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="flex items-center text-gray-400 hover:text-white transition-all duration-200 group"
                      >
                        <Icon className="w-4 h-4 mr-3 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              
            </div>

            {/* Resources */}
            <div>
              

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-semibold text-lg mb-6">Connect</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`flex items-center justify-center h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-105 group`}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2024 Chandan Verma. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm flex items-center">
                  Crafted with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> and lots of ☕
                </p>
              </div>

              {/* Status & Links */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </div>
                
                <div className="hidden sm:flex items-center space-x-4 text-gray-400 text-sm">
                  <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                  <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;