import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import pawtioncareweb from '../assets/pawtioncareweb.jpg';
import pawtioncareapp from '../assets/pawtioncareappnweb.jpg';
import MRSHotel from '../assets/MRSHotel.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Pawtion Care — Web Platform',
    image: pawtioncareweb,
    description: `This project marks the first iteration of Pawtion Care, developed as a web-based platform focused on providing pet care resources and services. It served as the foundational version that later inspired the full-featured mobile app. The website offers essential features for pet owners to access care information and manage pet needs efficiently online.`,
    role: 'UI Designer and Tester',
    year: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
  },
  {
    id: 2,
    title: 'Pawtion Care — Mobile & Web App',
    image: pawtioncareapp,
    description: `Pawtion Care is a mobile and web-based application designed to support responsible pet adoption and assist in locating missing pets. Developed in collaboration with the Municipality of Guiguinto and My Pets Vet Clinic, the system offers a streamlined approach to pet adoption and lost pet reporting while encouraging community involvement in animal welfare.`,
    role: 'Front-End Developer, Tester, Documentation',
    year: '2024 - 2025',
    technologies: [
      'Android Studio (Java)',
      'HTML',
      'CSS',
      'JavaScript',
      'Firebase Realtime Database',
      'Firebase Authentication',
      'Firebase Storage',
      'Canva',
      'Adobe Photoshop',
    ],
  },
  {
    id: 3,
    title: 'MRS Hotel — Hotel Reservation Management System',
    image: MRSHotel,
    description: `Developed an intuitive user interface using Java, JDBC, and MySQL to improve navigation and booking flow. Conducted thorough system testing to ensure feature completeness and a bug-free deployment. Collaborated closely with team members to refine design and functionality based on user feedback, enhancing the overall user experience.`,
    role: 'Front-End Developer & QA Tester',
    year: '2023',
    technologies: ['Java', 'JDBC', 'MySQL'],
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="projects"
      className={`projects-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="animated-circles">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      </div>

      <h2 className="section-title">Latest Adventures</h2>

      <div className="projects-grid">
        {projectsData.map(({ id, title, image, description, role, year, technologies }) => (
          <div key={id} className="project-card">
            {image ? (
              <img src={image} alt={title} className="project-image" />
            ) : (
              <div className="project-placeholder">Image Coming Soon</div>
            )}
            <h3>{title}</h3>
            <div className="project-content">
              <p className="project-description">{description}</p>
              {role && <p><strong>Role:</strong> {role}</p>}
              {year && <p><strong>Year:</strong> {year}</p>}
              {technologies.length > 0 && (
                <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="see-more-container">
        <p>See more projects here:</p>
        <a
          href="https://github.com/julianaaplaonsantos/Juliana-Aplaon-Santos-Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View My Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
