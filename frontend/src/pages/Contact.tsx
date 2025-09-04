import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setFormStatus({ submitted: true, success: true, message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorMessage = result.errors ? result.errors[0].msg : result.message;
        setFormStatus({ submitted: true, success: false, message: errorMessage });
      }
    } catch (error) {
      setFormStatus({ submitted: true, success: false, message: 'Could not connect to the server. Please try again.' });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/muhammad-sohaib-5b894524a/', color: 'from-blue-600 to-blue-500' },
    { name: 'GitHub', icon: <Github className="w-6 h-6" />, url: 'https://github.com/crew3302', color: 'from-gray-700 to-gray-600' },
    { name: 'Email', icon: <Mail className="w-6 h-6" />, url: 'mailto:sohaibmuhammad429@gmail.com', color: 'from-purple-600 to-purple-500' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In{' '}<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Ready to collaborate? I'd love to hear from you and discuss your next project.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"><Mail className="w-5 h-5 text-white" /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:sohaibmuhammad429@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-200">sohaibmuhammad429@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"><MapPin className="w-5 h-5 text-white" /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className={`group p-4 bg-gradient-to-r ${link.color} rounded-xl text-white text-center hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                    <div className="flex flex-col items-center space-y-2">{link.icon}<span className="text-sm font-medium">{link.name}</span></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            {formStatus.submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                {formStatus.success ? (
                  <><CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3><p className="text-gray-300">{formStatus.message}</p></>
                ) : (
                  <><AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">Something went wrong.</h3><p className="text-gray-300">{formStatus.message}</p></>
                )}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none" placeholder="Tell me about your project or just say hello..."></textarea>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2">
                  <Send size={20} /><span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;