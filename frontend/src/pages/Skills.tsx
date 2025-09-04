import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript & TypeScript", level: 90 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "REST APIs", level: 80 },
      ]
    },
    {
      title: "AI & Other Technologies",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "AI & Machine Learning", level: 80 },
        { name: "OCR (Tesseract.js)", level: 85 },
        { name: "Socket Programming", level: 70 },
        { name: "UI/UX Design (Figma)", level: 80 },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
            Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${skill.level}%` : 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly expanding my skill set,
              staying updated with the latest frameworks, tools, and best practices in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;