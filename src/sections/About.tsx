import React, { useState, useEffect, useRef } from 'react';
import julsImg from "../assets/juls.JPG";
import './About.css';

const slides = [
  {
    title: 'Personal Info',
    content: (
      <div className="personal-info-wrapper">
        <div className="info-list">
          <p><strong>Name:</strong> Juliana Aplaon Santos</p>
          <p><strong>Birthdate:</strong> July 27, 2003</p>
          <p><strong>Gender:</strong> Female</p>
          <p><strong>Civil Status:</strong> Single</p>
          <p><strong>Address:</strong> Hagonoy, Bulacan</p>
          <p><strong>Citizenship:</strong> Filipino</p>
          <p><strong>Language:</strong> Tagalog & English</p>
        </div>
        
        <img 
          src={julsImg} 
          alt="Juliana" 
          className="personal-image"
        />
      </div>
    ),
  },
  {
    title: 'Work Experience',
    content: (
      <>
        <p><strong className="job-title">Local Government Unit (LGU) of Hagonoy, Bulacan — Intern</strong></p>
        <p className="job-subtitle">Poblacion, Sto. Niño, Hagonoy, Bulacan | January 2025 – April 2025</p>
        <ul className="work-experience-list">
          <li>
            Created designs for event materials such as posters, tarpaulins, name tags, and invitations using Adobe Photoshop — including select merchandise like trophies and t-shirts, and the layout and color scheme for the basketball court area at the grandstand in Hagonoy, Bulacan.
          </li>
          <li>
            Edited official documents such as gas slips, voter lists, and reports; managed files through encoding, sorting, and database maintenance.
          </li>
          <li>
            Provided technical support by optimizing computer systems and collaborated across departments to meet administrative and design needs.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Education',
    content: (
      <>
        <p><strong className="edu-title">Bulacan State University - Meneses Campus, Bulacan</strong></p>
        <p className="edu-subtitle">Bachelor of Science in Information Technology | August 2021 – July 2025</p>
        <p className="edu-subtitle">Summa Cum Laude | GPA: 1.185 (2025)</p>
        <ul className="edu-list">
          <li>President’s Lister | GPA: 1.144 (2024-2025)</li>
          <li>President’s Lister | GPA: 1.123 (2023-2024)</li>
          <li>Dean’s Lister | GPA: 1.23 (2022-2023)</li>
        </ul>

        <p><strong className="edu-title">St. Mary’s Academy of Hagonoy, Bulacan</strong></p>
        <p className="edu-subtitle">June 2015 – June 2021</p>
        <ul className="edu-list">
          <li>Best in Innovation – 2021</li>
          <li>Conduct Awardee – 2019</li>
        </ul>

        <p><strong className="edu-title">San Nicolas Elementary School, Hagonoy, Bulacan</strong></p>
        <p className="edu-subtitle">June 2007 – March 2015</p>
      </>
    ),
  },
  {
    title: 'Skills',
    content: (
      <>
        <div className="skills-category">
          <h4 className="skills-category-title">Programming</h4>
          <ul className="skills-list">
            <li>Java, Python, JavaScript, HTML & CSS</li>
            <li>SQL & Firebase, Web & Mobile Development</li>
          </ul>

          <h4 className="skills-category-title">Design & Multimedia</h4>
          <ul className="skills-list">
            <li>UI/Graphic Design, Multimedia & Video Editing</li>
            <li>Microsoft Office (Word, Excel, PowerPoint)</li>
          </ul>

          <h4 className="skills-category-title">E-commerce</h4>
          <ul className="skills-list">
            <li>E-commerce Website Setup (Shopify, WordPress)</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    title: 'Tools',
    content: (
      <div className="tools-multi-column">
        <ul className="tools-list">
          <li>React</li>
          <li>Vite</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Vercel</li>
          <li>Visual Studio Code</li>
          <li>Android Studio</li>
        </ul>
        <ul className="tools-list">
          <li>Eclipse</li>
          <li>WordPress</li>
          <li>Shopify</li>
          <li>Figma</li>
          <li>Canva</li>
          <li>Procreate</li>
          <li>IbisPaint X</li>
        </ul>
        <ul className="tools-list">
          <li>Adobe Photoshop & Illustrator</li>
          <li>Cute Cut Pro</li>
          <li>Filmora</li>
          <li>Trello</li>
        </ul>
      </div>
    ),
  }
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
      if (isVisible) {
        setShowSlider(true);
        setShowControls(false);

        const controlsTimer = setTimeout(() => {
          setShowControls(true);
        }, 300);

        return () => clearTimeout(controlsTimer);
      } else {
        setShowSlider(false);
        setShowControls(false);
      }
    }, [isVisible]);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <h2 className={`about-title ${isVisible ? 'fade-in' : ''}`}>Come Take a Peek!</h2>

      <div
        className={`slider-and-controls-wrapper ${showSlider ? 'fade-in-delay-1' : ''}`}
        aria-live="polite"
      >
        <button
          className="slider-btn prev"
          onClick={() => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <div className="slider-container">
          <div className="slider-header">{slides[current].title}</div>
          <div className="slide" key={current}>
            <div className="slide-content">{slides[current].content}</div>
          </div>
        </div>

        <button
          className="slider-btn next"
          onClick={() => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
          aria-label="Next Slide"
        >
          ›
        </button>

        <div
          className={`dots-container ${showControls ? 'fade-in-delay-2' : ''}`}
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setCurrent(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
