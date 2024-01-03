// MainContent.js
import React, { useState } from 'react';

// Define the MainContent component
function MainContent() {
  // Create a state variable and a setter function for the current section
  const [section, setSection] = useState('about');

  // Return the JSX code for the main content
  return (
    <div className="main">
      {/* Render the heading according to the current section */}
      <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
      {/* Render the paragraph for the About section if the section is 'about' */}
      {section === 'about' && (
        <p>
          This is the home page of my personal website. Here you can find a
          brief introduction of myself and my career goals.
        </p>
      )}
      {/* Render the paragraph for the Skills section if the section is 'skills' */}
      {section === 'skills' && (
        <p>
          This is the page for the Skills section. Here you can write some text
          about your skills, such as your programming languages, frameworks,
          tools, and methodologies.
        </p>
      )}
      {/* Render the paragraph for the Career section if the section is 'career' */}
      {section === 'career' && (
        <p>
          This is the page for the Career section. Here you can write some text
          about your career, such as your education, work experience, projects,
          and achievements.
        </p>
      )}
      {/* Render the paragraph for the Projects section if the section is 'projects' */}
      {section === 'projects' && (
        <p>
          This is the page for the Projects section. Here you can write some
          text about your projects, such as the name, description, technology,
          and link of each project.
        </p>
      )}
      {/* Render the paragraph for the Certifications section if the section is 'certifications' */}
      {section === 'certifications' && (
        <p>
          This is the page for the Certifications section. Here you can write
          some text about your certifications, such as the name, provider,
          date, and score of each certification.
        </p>
      )}
      {/* Render the paragraph for the Contact section if the section is 'contact' */}
      {section === 'contact' && (
        <p>
          This is the page for the Contact section. Here you can write some text
          about how to contact you, such as your email, phone, social media, and
          address.
        </p>
      )}
    </div>
  );
}

// Export the MainContent component
export default MainContent;
