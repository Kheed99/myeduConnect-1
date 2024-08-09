import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Courses from './components/Courses';
import LMIS from './components/LMIS';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import LMSLandingPage from './components/LMS/LMSLandingPage';
import CourseOverview from './components/LMS/Dashboard/Overview/CourseOverview';
import ProfileSettings from './components/LMS/Dashboard/ProfileSettings/ProfileSettings';
import DashboardNavbar from './components/LMS/Dashboard/DashboardNavbar';

function AppContent() {
    const location = useLocation();
    const isDashboardPage = location.pathname.startsWith('/lms');

    return (
        <div className="App">
            {!isDashboardPage && <Navbar />}
            {isDashboardPage && <DashboardNavbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/lms" element={<LMSLandingPage />} />
                <Route path="/lms/dashboard/overview" element={<CourseOverview />} />
                <Route path="/lms/dashboard/profile-settings" element={<ProfileSettings />} />
                <Route path="/lmis" element={<LMIS />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
