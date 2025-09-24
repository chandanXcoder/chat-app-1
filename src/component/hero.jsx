import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Play, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Code2,
  Database,
  Palette,
  Smartphone,
  ArrowDown,
  MapPin,
  Coffee
} from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full Stack Developer',
    'Frontend Specialist', 
    'Backend Engineer',
    'UI/UX Designer',
    'Problem Solver'
  ];

  const skills = [
    { icon: Code2, name: 'Frontend Development', desc: 'React, Vue, Angular' },
    { icon: Database, name: 'Backend Systems', desc: 'Node.js, Python, Java' },
    { icon: Palette, name: 'UI/UX Design', desc: 'Figma, Adobe XD' },
    { icon: Smartphone, name: 'Mobile Apps', desc: 'React Native, Flutter' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' }
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;

    const typeText = () => {
      if (index < currentText.length) {
        setDisplayText(currentText.substring(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setCurrentRole((prev) => (prev + 1) % roles.length);
            setIsTyping(true);
            index = 0;
          }, 2000);
        }, 1500);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentRole, isTyping]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-blue-400/20 text-sm font-mono animate-float">{'<div>'}</div>
        <div className="absolute top-1/3 right-1/4 text-purple-400/20 text-sm font-mono animate-float delay-1000">{'console.log()'}</div>
        <div className="absolute bottom-1/3 left-1/3 text-cyan-400/20 text-sm font-mono animate-float delay-2000">{'function()'}</div>
        <div className="absolute bottom-1/4 right-1/3 text-pink-400/20 text-sm font-mono animate-float delay-500">{'</>'}</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center w-full max-w-6xl mx-auto">
          
          {/* Welcome badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-300 text-sm font-medium mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Coffee className="w-4 h-4 mr-2" />
            Available for new opportunities
          </div>

          {/* Main heading */}
          <div className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chandan Verma</span>
            </h1>
            
            {/* Animated role */}
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                I'm a{' '}
                <span className="text-blue-400 font-bold relative">
                  {displayText}
                  <span className={`inline-block w-1 h-8 sm:h-10 bg-blue-400 ml-1 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}></span>
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className={`text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Passionate developer crafting exceptional digital experiences with clean code, 
            innovative solutions, and user-focused design. Let's build something amazing together.
          </p>

          {/* Location */}
          <div className={`flex items-center justify-center text-gray-500 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <MapPin className="w-4 h-4 mr-2" />
            <span>Based in India • Open to Remote Work</span>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={scrollToWork}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center"
            >
              View My Work
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="/resume.pdf" 
              download
              className="group w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>

            <a 
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="https://github.com/chandanverma" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/chandanverma" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:chandan@example.com"
              className="group w-12 h-12 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Skills preview */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-white font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={scrollToWork}
              className="group flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors animate-bounce"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;