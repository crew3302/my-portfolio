import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, Palette, Database, Code, Server } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "Building secure, scalable, and modern web applications from front-end to back-end.",
      features: ["React.js & TypeScript", "Node.js & Express.js", "Responsive UI/UX", "Secure Authentication (JWT)"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Integrating intelligent features like OCR, game-playing AI, and custom algorithms.",
      features: ["OCR (Tesseract.js)", "Game Theory (Minimax)", "AI-Powered Automation", "API Integration (Google Translate)"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces with a focus on usability.",
      features: ["Figma Prototyping", "Responsive Web Design", "User-Centered Layouts", "Modern Aesthetics"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & API Development",
      description: "Developing robust server-side logic, RESTful APIs, and real-time communication.",
      features: ["REST API Design", "Socket Programming", "Database Integration", "Secure Endpoints"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Architecture",
      description: "Designing and managing efficient database schemas for full-stack applications.",
      features: ["MySQL", "Data Modeling", "SQL Query Optimization", "Sequential Data Tracking"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Python Development",
      description: "Creating custom applications and scripts, from multiplayer games to AI solvers.",
      features: ["Socket Programming", "Tkinter GUI Apps", "AI Algorithms", "Multithreading"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 sm:py-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Services I{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across the full spectrum of modern development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;