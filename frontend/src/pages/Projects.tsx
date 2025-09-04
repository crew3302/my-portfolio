import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ScanText, Bot, ShoppingCart, Figma, X, Linkedin } from 'lucide-react';

// Interface now includes all optional URLs
interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: JSX.Element;
  technologies: string[];
  gradient: string;
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  linkedinPostUrl?: string; // Added LinkedIn post URL
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "TextExtract: AI OCR & Translation Platform",
      description: "A full-stack web app that extracts and translates text from images and PDFs using AI.",
      longDescription: "TextExtract is a secure, AI-powered OCR and translation tool built as a modern full-stack web app. The frontend, built with React and TypeScript, offers a fast, responsive SPA for users to sign up, upload files (via drag & drop or camera), edit extracted text, translate it into multiple languages, and view personal usage analytics. The backend, powered by Node.js and Express, manages JWT authentication, processes file uploads with Multer, performs OCR on images and PDFs using Tesseract.js, integrates with the Google Translate API, and stores user data securely in a MySQL database.",
      icon: <ScanText className="w-8 h-8" />,
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Tesseract.js", "JWT", "Tailwind CSS", "Axios", "Vite"],
      gradient: "from-cyan-500 to-blue-500",
      features: ["Secure User Authentication", "Image & PDF OCR", "Multi-Language Translation", "In-Browser Text Editor", "Usage Analytics & History", "Multiple Download Formats"],
      githubUrl: "https://github.com/crew3302",
      linkedinPostUrl: "https://www.linkedin.com/in/muhammad-sohaib-5b894524a/" // <-- LinkedIn URL added
    },
    {
      title: "Real-Time Multiplayer Chess Game",
      description: "A multiplayer chess application built with Python sockets, featuring live matchmaking and spectator mode.",
      longDescription: "For a Computer Networks lab, I developed a real-time multiplayer chess game using Python sockets that functions just like an online chess platform. It features a robust client-server architecture to handle live matchmaking, spectator mode to watch ongoing games, and an in-game chat system. The GUI was built with Tkinter, and the application uses multithreading to manage concurrency, ensuring a smooth, real-time experience. The system is designed to robustly handle disconnects, timeouts, and illegal moves.",
      icon: <Bot className="w-8 h-8" />,
      technologies: ["Python", "Sockets", "Tkinter", "Multithreading", "JSON", "python-chess"],
      gradient: "from-green-500 to-teal-500",
      features: ["Live Multiplayer Matchmaking", "Spectator Mode", "Real-Time Chat", "Robust Disconnect Handling", "Timers and Turn Indicators", "Client-Server Architecture"],
      githubUrl: "https://github.com/crew3302/Chess-Game",
      linkedinPostUrl: "https://www.linkedin.com/in/muhammad-sohaib-5b894524a/" // <-- LinkedIn URL added
    },
    {
      title: "AI Game Solvers & Algorithms",
      description: "An exploration of game-playing AI, implementing classic algorithms to solve classic board games.",
      longDescription: "This project was a deep dive into game-playing AI and local search algorithms. I implemented several classic AI solvers in Python, including a 4x4 Tic-Tac-Toe player using Minimax with Alpha-Beta Pruning for optimal decision-making. I also designed a depth-limited Minimax algorithm for a strategic Checkers AI. For the 8-Queens problem, I explored various local search algorithms, including Hill Climbing, Simulated Annealing, and Local Beam Search, to efficiently find solutions.",
      icon: <Bot className="w-8 h-8" />,
      technologies: ["Python", "AI Algorithms", "Game Theory", "Pygame", "Minimax"],
      gradient: "from-indigo-500 to-purple-500",
      features: ["Minimax & Alpha-Beta Pruning", "Depth-Limited Search", "Hill Climbing Algorithm", "Simulated Annealing", "Local Beam Search", "Strategic Gameplay AI"],
      githubUrl: "https://github.com/crew3302/AI-Solvers",
      linkedinPostUrl: "https://www.linkedin.com/in/muhammad-sohaib-5b894524a/" // <-- LinkedIn URL added
    },
    {
      title: "Zero Lifestyle E-commerce Platform",
      description: "A modern, responsive e-commerce website with a sleek design and intuitive user experience.",
      longDescription: "Zero Lifestyle is a conceptual e-commerce platform built with a focus on modern design principles and a seamless user experience. The frontend is developed using React.js and styled with Tailwind CSS to ensure a fully responsive layout. The platform includes essential e-commerce features like a dynamic product catalog, an interactive shopping cart, and a streamlined checkout process, all powered by a Node.js backend.",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Node.js"],
      gradient: "from-purple-500 to-pink-500",
      features: ["Responsive Design", "Modern UI/UX", "Shopping Cart", "Product Catalog", "Payment Integration"],
      githubUrl: "https://github.com/crew3302/Zero-Lifestyle"
    },
    {
      title: "Mobile App UI/UX Design",
      description: "A responsive and user-centered design for a modern mobile application, created in Figma.",
      longDescription: "This project involved designing a complete, responsive user interface for a mobile application in Figma. The process was rooted in user-centered design principles, focusing on creating an intuitive, accessible, and visually appealing experience. I developed a component-based design system, created interactive prototypes to simulate user flows, and ensured the visual aesthetics were modern and consistent across all screens.",
      icon: <Figma className="w-8 h-8" />,
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
      gradient: "from-orange-500 to-red-500",
      features: ["Responsive Mobile Layouts", "User-Centered Design", "Interactive Prototypes", "Modern Visual Aesthetics", "Component-Based Design System"],
      liveDemoUrl: "https://www.figma.com/proto/1Bg5UkPLg4J9cIN9ruwBdL/Untitled?node-id=1-2&p=f&t=U4rjpsXixNbcJU28-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A4"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work. Click on a project to see more details.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col items-start h-full group cursor-pointer hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/15 text-white rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/80 backdrop-blur-lg border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close project details"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${selectedProject.gradient} rounded-lg text-white shadow-lg`}>
                    {selectedProject.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">{selectedProject.longDescription}</p>

                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 mb-8">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.liveDemoUrl && (
                    <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="w-full group/btn px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-white hover:text-white hover:shadow-lg flex items-center justify-center space-x-2">
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.linkedinPostUrl && (
                    <a href={selectedProject.linkedinPostUrl} target="_blank" rel="noopener noreferrer" className="sm:col-span-2 px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full transition-all duration-300 hover:bg-blue-500/20 hover:text-white flex items-center justify-center space-x-2">
                      <Linkedin size={18} />
                      <span>View Announcement Post</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Projects;