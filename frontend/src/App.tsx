import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
// ... other imports
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import the component that handles scrolling
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <Router>
          {/* This component now applies to every route defined below */}
          <ScrollToTop /> 
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative flex flex-col">
            {/* ... */}
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;