// src/components/Courses.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      title: 'Mathematics',
      description: 'Comprehensive mathematics course.',
      image: '/images/mathematics.jpg',
      price: '$50',
      link: '/payment'
    },
    {
      title: 'Engineering Mathematics',
      description: 'Advanced mathematics for engineering.',
      image: '/images/engineering_mathematics.jpg',
      price: '$60',
      link: '/payment'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Introduction to AI concepts and applications.',
      image: '/images/artificial_intelligence.jpg',
      price: '$120',
      link: '/payment'
    },
    {
      title: 'Blockchain',
      description: 'Learn the fundamentals of blockchain technology.',
      image: '/images/blockchain.jpg',
      price: '$100',
      link: '/payment'
    },
    {
      title: 'Business Pitching',
      description: 'Learn how to pitch your business ideas effectively.',
      image: '/images/business_pitching.jpg',
      price: '$95',
      link: '/payment'
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'Explore the world of IoT and its applications.',
      image: '/images/iot.jpg',
      price: '$110',
      link: '/payment'
    },
    {
      title: 'Machine Learning',
      description: 'Fundamentals of machine learning.',
      image: '/images/machine_learning.jpg',
      price: '$125',
      link: '/payment'
    },
    {
      title: 'Python Programming',
      description: 'Master the basics of Python programming.',
      image: '/images/python_programming.jpg',
      price: '$80',
      link: '/payment'
    },
    {
      title: 'Architectural Art',
      description: 'Learn the principles of architectural art.',
      image: '/images/architectural_art.jpg',
      price: '$70',
      link: '/payment'
    },
    {
      title: 'Cybersecurity',
      description: 'Learn to protect systems and networks from cyber attacks.',
      image: '/images/cybersecurity.jpg',
      price: '$90',
      link: '/payment'
    },
    {
      title: 'Digital Marketing',
      description: 'Introduction to digital marketing strategies.',
      image: '/images/digital_marketing.jpg',
      price: '$85',
      link: '/payment'
    },
    {
      title: 'Data Science',
      description: 'Introduction to data science concepts and tools.',
      image: '/images/data_science.jpg',
      price: '$130',
      link: '/payment'
    }
  ];

  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-price">{course.price}</p>
            <Link to={course.link} className="enroll-button">Enroll</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
