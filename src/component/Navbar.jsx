import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink,
  Download,
  User,
  Briefcase,
  Code,
  Mail,
  Sun,
  Moon
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services', hasDropdown: true },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const serviceItems = [
    { 
      name: 'Web Development', 
      href: '#web-dev', 
      icon: Code,
      description: 'Full-stack web applications'
    },
    { 
      name: 'UI/UX Design', 
      href: '#design', 
      icon: User,
      description: 'User-centered design solutions'
    },
    { 
      name: 'Mobile Apps', 
      href: '#mobile', 
      icon: Briefcase,
      description: 'iOS & Android development'
    },
    { 
      name: 'Consulting', 
      href: '#consulting', 
      icon: ExternalLink,
      description: 'Technical consultation'
    }
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-purple-500/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">ChandDev</span>
              <span className="text-xs text-purple-400 font-medium">Portfolio</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.id} className="relative services-dropdown">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === link.id || isServicesOpen
                          ? 'text-white bg-white/10 backdrop-blur-sm'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/20 overflow-hidden">
                        <div className="p-2">
                          {serviceItems.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <a
                                key={index}
                                href={service.href}
                                onClick={() => handleLinkClick('services')}
                                className="flex items-start p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all">
                                    <Icon className="w-5 h-5 text-purple-400" />
                                  </div>
                                </div>
                                <div className="ml-3 flex-1">
                                  <div className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-gray-400 text-xs mt-1">
                                    {service.description}
                                  </div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            );
                          })}
                        </div>
                        <div className="border-t border-slate-700/50 p-3 bg-slate-800/50">
                          <a 
                            href="#services"
                            onClick={() => handleLinkClick('services')}
                            className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors flex items-center"
                          >
                            View All Services
                            <ExternalLink className="ml-1 w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === link.id
                        ? 'text-white bg-white/10 backdrop-blur-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-800/50 bg-slate-900/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.id}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          activeSection === link.id
                            ? 'text-white bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {serviceItems.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <a
                                key={index}
                                href={service.href}
                                onClick={() => handleLinkClick('services')}
                                className="flex items-center px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                              >
                                <Icon className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                  <div className="text-white font-medium text-sm">
                                    {service.name}
                                  </div>
                                  <div className="text-gray-400 text-xs">
                                    {service.description}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.id)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        activeSection === link.id
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-6 border-t border-slate-800/50 space-y-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-full px-4 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                
                <a
                  href="#contact"
                  onClick={() => handleLinkClick('contact')}
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;