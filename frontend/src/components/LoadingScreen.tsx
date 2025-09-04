import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center space-y-8 p-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center space-x-3">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold text-white">Muhammad Sohaib</h1>
          </div>
          
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <p className="text-gray-300 text-sm">Loading Portfolio... {progress}%</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;