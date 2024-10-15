import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';
import About from './components/About';
import Careers from './components/Careers';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
