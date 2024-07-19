// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Courses from './components/Courses';
import LMS from './components/LMS';
import LMIS from './components/LMIS';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/lms" element={<LMS />} />
                    <Route path="/lmis" element={<LMIS />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
