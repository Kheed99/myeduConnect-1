import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="about-us">
        <h1>eduConnect</h1>
        <p>
          eduConnect is a revolutionary online learning platform that aims to provide personalized, secure, and sustainable learning solutions to learners worldwide. Our platform leverages cutting-edge technologies such as artificial intelligence and blockchain to provide an engaging and interactive learning experience. We aim to create an engaging and transparent learning environment.
        </p>
      </section>
      
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>LMS</h3>
            <p>An AI-powered, interactive learning environment for students.</p>
          </div>
          <div className="feature-card">
            <h3>LMIS</h3>
            <p>The Labour Market Information System which allows organizations to tap into an infinite pool of the job market with enhanced search algorithms.</p>
          </div>
          <div className="feature-card">
            <h3>Course Management System</h3>
            <p>A platform which allows institutions and course creators to make and manage their courses.</p>
          </div>
          <div className="feature-card">
            <h3>Progress Management System</h3>
            <p>Allows mentors, coaches, guardians, and parents to monitor the progress of their children.</p>
          </div>
        </div>
      </section>
      
      <section className="why-educonnect">
        <h2>Why eduConnect</h2>
        <p>We integrate Blockchain and AI to provide a secure, transparent, and personalized learning experience.</p>
        <ul>
          <li>AI-driven personalized learning paths</li>
          <li>Blockchain for secure certification and transparency</li>
          <li>Seamless connection between employers and the job market through our Labor Management Information System (LMIS)</li>
          <li>Real-time progress tracking and management</li>
        </ul>
        <Link to="/pricing" className="try-us-button">Try Us</Link>
      </section>
      
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Click on the Sign Up button</li>
          <li>Choose your payment plan based on your category</li>
          <li>Complete the payment</li>
          <li>Fill in the login form and you are good to go</li>
        </ol>
      </section>
      
      <section className="testimonials">
        <h2>What People Say About eduConnect</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src="../images/testimonial1.jpg" alt="Person 1" />
            <p>"eduConnect has transformed the way I learn. The AI-powered platform is incredible!"</p>
            <div className="social-media-icons">
              <img src="/images/facebook-icon.png" alt="Facebook" />
              <img src="/images/twitter-icon.png" alt="Twitter" />
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </div>
          </div>
          <div className="testimonial-card">
            <img src="/images/testimonial2.jpg" alt="Person 2" />
            <p>"The integration of Blockchain ensures that my certifications are secure and verifiable."</p>
            <div className="social-media-icons">
              <img src="/images/facebook-icon.png" alt="Facebook" />
              <img src="/images/twitter-icon.png" alt="Twitter" />
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src="/images/partner1.png" alt="Partner 1" />
          <img src="/images/partner2.png" alt="Partner 2" />
          <img src="/images/partner3.png" alt="Partner 3" />
          <img src="/images/partner4.png" alt="Partner 4" />
        </div>
      </section>
      
      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </section>
      
      <footer className="footer">
        <p>&copy; 2023 eduConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
