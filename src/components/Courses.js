// src/components/Courses.js

import React from 'react';
import './Courses.css';

const coursesData = [
  {
    name: 'Mathematics',
    description: 'Learn the fundamentals of mathematics.',
    price: '$50',
    image: '../images/mathematics.jpg',
  },
  {
    name: 'Engineering Mathematics',
    description: 'Advanced mathematics for engineering students.',
    price: '$70',
    image: '../images/engineering_mathematics.jpg',
  },
  {
    name: 'Artificial Intelligence',
    description: 'Explore the world of AI.',
    price: '$100',
    image: '../images/artificial_intelligence.jpg',
  },
  {
    name: 'Blockchain',
    description: 'Learn about blockchain technology.',
    price: '$90',
    image: '../images/blockchain.jpg',
  },
  {
    name: 'Business Pitching',
    description: 'Master the art of pitching your business ideas.',
    price: '$60',
    image: '../images/business_pitching.jpg',
  },
  {
    name: 'Internet of Things',
    description: 'Understand IoT and its applications.',
    price: '$80',
    image: '../images/internet_of_things.jpg',
  },
  {
    name: 'Machine Learning',
    description: 'Dive into machine learning concepts.',
    price: '$110',
    image: '../images/machine_learning.jpg',
  },
  {
    name: 'Python Programming',
    description: 'Learn Python programming from scratch.',
    price: '$70',
    image: '../images/python_programming.jpg',
  },
  {
    name: 'Architectural Art',
    description: 'Explore the beauty of architectural art.',
    price: '$75',
    image: '../images/architectural_art.jpg',
  },
  {
    name: 'Cybersecurity',
    description: 'Understand the essentials of cybersecurity.',
    price: '$95',
    image: '../images/cybersecurity.jpg',
  },
  {
    name: 'Digital Marketing',
    description: 'Learn digital marketing strategies.',
    price: '$65',
    image: '../images/digital_marketing.jpg',
  },
  {
    name: 'Data Science',
    description: 'Become a data science expert.',
    price: '$120',
    image: '../images/data_science.jpg',
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      {coursesData.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={course.name} className="course-image" />
          <h3>{course.name}</h3>
          <p>{course.description}</p>
          <p className="course-price">{course.price}</p>
          <button className="enroll-button">Enroll</button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
