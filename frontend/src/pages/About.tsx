import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    "7th Semester Computer Science Student",
    "Passionate AI & Web Development Enthusiast",
    "UI/UX Design Focused",
    "Multiple Project Experience"
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
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, education, and aspirations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-cyan-400" />
                Education
              </h2>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>FAST National University of Computer and Emerging Sciences</span>
                </div>
                <p className="text-white font-semibold">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400">7th Semester • Expected Graduation: 2026</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-cyan-400" />
                Goals & Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about leveraging technology to solve real-world problems. 
                My focus lies in artificial intelligence, web development, and creating 
                intuitive user experiences that make technology accessible to everyone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-cyan-400" />
                Key Highlights
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Personal Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between complex technology and user-friendly applications, 
                creating digital experiences that are not only functional but also beautiful 
                and accessible to all users.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Work With Me?</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              I bring a unique combination of technical expertise and creative problem-solving 
              to every project. With a strong foundation in computer science and a passion for 
              emerging technologies, I'm always eager to take on new challenges and deliver 
              exceptional results.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;