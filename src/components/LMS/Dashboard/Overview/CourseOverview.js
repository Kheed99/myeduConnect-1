import React from 'react';
import HeroSection from '../HeroSection';
import PartnersSection from '../../../Home/PartnersSection';
import './CourseOverview.css';

const CourseOverview = () => {
    const courses = [
        { id: 1, name: 'Introduction to React', instructor: 'Jane Doe', progress: '75%' },
        { id: 2, name: 'Advanced JavaScript', instructor: 'John Smith', progress: '50%' },
        { id: 3, name: 'CSS for Beginners', instructor: 'Emily Davis', progress: '90%' },
    ];

    return (
        <>
            <HeroSection
                title="Your Courses"
                subtitle="Manage your learning journey and track your progress."
                buttonText="View All Courses"
                buttonLink="/courses"
            />
            <div className="course-overview">
                <h2>Course Overview</h2>
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            <h3>{course.name}</h3>
                            <p>Instructor: {course.instructor}</p>
                            <p>Progress: {course.progress}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <PartnersSection />
        </>
    );
};

export default CourseOverview;
