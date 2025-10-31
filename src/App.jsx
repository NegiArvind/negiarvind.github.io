import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Awards from './pages/Awards';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg">
        <Navbar />
        <main className="flex-grow container py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
            {/* fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;