import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/crew3302',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/muhammad-sohaib-5b894524a/',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:sohaibmuhammad429@gmail.com',
    }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10 mt-20 bg-white/10 backdrop-blur-md border-t border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-6">
          
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Link to="/" className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Muhammad Sohaib</span>
            </Link>
            <p className="text-gray-300 max-w-xs text-sm">
              A passionate Full Stack Developer building modern digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect With Me</h3>
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/15 backdrop-blur-sm rounded-full text-gray-200 transition-all duration-300 hover:scale-110 hover:bg-cyan-400/30 hover:text-white"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Muhammad Sohaib. All Rights Reserved.
          </p>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;