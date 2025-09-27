import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Clock,
  MessageCircle,
  User,
  Building,
  Globe,
  Coffee,
  Star,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Full Stack Application',
    'E-commerce Solution',
    'Technical Consulting',
    'Code Review',
    'Other'
  ];

  const budgetRanges = [
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'chandan.verma@example.com',
      description: 'Drop me an email anytime',
      href: 'mailto:chandan.verma@example.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Call for urgent projects',
      href: 'tel:+919876543210',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Quick Chat',
      description: 'Fastest response time',
      href: 'https://wa.me/919876543210',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/chandanverma',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/chandanverma',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/chandanverma',
      color: 'hover:text-sky-400'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            <Coffee className="w-4 h-4 mr-2" />
            Let's work together
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Start Your 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Project Today</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together. 
            I'm here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`block p-6 ${method.bgColor} border ${method.borderColor} rounded-2xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 group`}
                    >
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                          <p className={`${method.color} font-medium mb-1`}>{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm mb-8">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Quick Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-green-400 font-medium"> 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="text-blue-400 font-medium">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Client Satisfaction</span>
                    <span className="text-purple-400 font-medium">99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Available</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-medium">Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 group`}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Tell Me About Your Project</h3>

              {/* Success/Error Messages */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-300' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-300'
                }`}>
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm opacity-80">I'll get back to you within 24 hours.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Something went wrong!</p>
                        <p className="text-sm opacity-80">Please try again or contact me directly.</p>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div ref={formRef} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2 text-blue-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.name ? 'border-red-500/50' : 'border-slate-600/50'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.email ? 'border-red-500/50' : 'border-slate-600/50'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-blue-400" />
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    placeholder="Your company name (optional)"
                  />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-white font-medium mb-2 flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-blue-400" />
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.projectType ? 'border-red-500/50' : 'border-slate-600/50'
                      } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200`}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-slate-800">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget} className="bg-slate-800">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline, index) => (
                        <option key={index} value={timeline} className="bg-slate-800">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 text-blue-400" />
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border ${
                      errors.message ? 'border-red-500/50' : 'border-slate-600/50'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 resize-vertical`}
                    placeholder="Tell me about your project goals, requirements, and any specific features you have in mind. The more details you provide, the better I can understand your needs."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;