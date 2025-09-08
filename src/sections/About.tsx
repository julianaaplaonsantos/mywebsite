import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiVercel,
  SiAndroidstudio,
  SiEclipseide,
  SiShopify,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import "./About.css";
import julianaPhoto from "../assets/juls.JPG";

const About = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const workSkillsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    const elementsToObserve = document.querySelectorAll(
      ".about-section .personal-info-card, .about-section .work-skills-card, .about-section .education-card, .about-section .skills-card, .about-section .tools-card"
    );
    elementsToObserve.forEach((el) => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsVisible(true);
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );
    if (workSkillsRef.current) skillsObserver.observe(workSkillsRef.current);
    return () => skillsObserver.disconnect();
  }, []);

  useEffect(() => {
    const aboutSection = aboutSectionRef.current;
    if (aboutSection) {
      const hash = window.location.hash;
      if (hash === "#about") aboutSection.classList.add("section-fade-in");
      const handleHashChange = () => {
        if (window.location.hash === "#about")
          aboutSection.classList.add("section-fade-in");
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const skillsData = [
    { category: "Graphic Design", percentage: 99 },
    { category: "Event Branding & Layout Design", percentage: 92 },
    { category: "Document Editing & File Management", percentage: 95 },
    { category: "Collaboration & Communication", percentage: 99 },
  ];

  const tools = [
    { name: "React", icon: FaReact },
    { name: "Vite", icon: SiVite },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "VS Code", icon: VscCode },
    { name: "Android Studio", icon: SiAndroidstudio },
    { name: "Eclipse", icon: SiEclipseide },
    { name: "WordPress", icon: FaWordpress },
    { name: "Shopify", icon: SiShopify },
    { name: "Figma", icon: FaFigma },
    { name: "Canva", icon: SiCanva },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop },
  ];

  const SkillCircle = ({
    skill,
    percentage,
    isVisible,
    delay = 0,
  }: {
    skill: string;
    percentage: number;
    isVisible: boolean;
    delay?: number;
  }) => {
    const [progress, setProgress] = useState(0);
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    useEffect(() => {
      if (!isVisible) return;
      const timeout = setTimeout(() => {
        let start = 0;
        const duration = 80;
        const stepTime = 16;
        const increment = (percentage / duration) * stepTime;
        const interval = setInterval(() => {
          start += increment;
          if (start >= percentage) {
            start = percentage;
            clearInterval(interval);
          }
          setProgress(start);
        }, stepTime);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timeout);
    }, [isVisible, percentage, delay]);

    return (
      <div className="skill-circle">
        <div className="skill-circle-svg">
          <svg className="circle-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="circle-bg" />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="circle-progress"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: isVisible
                  ? "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
              }}
            />
          </svg>
          <div className="percentage-text">
            <span className={isVisible ? "counter-animate" : ""}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <p className="skill-text">{skill}</p>
      </div>
    );
  };

  return (
    <section id="about" className="about-section" ref={aboutSectionRef}>
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">Come take a peek!</h1>
        </div>
        <div className="personal-info-card">
          <h2 className="section-title-center">PERSONAL INFO</h2>
          <div className="personal-info-content">
            <div className="photo-container">
              <img
                src={julianaPhoto}
                alt="Juliana Aplaon Santos"
                className="personal-photo"
              />
            </div>
            <div className="personal-details">
              <div className="info-grid">
                <p>
                  <span className="info-label">Name:</span> Juliana Aplaon
                  Santos
                </p>
                <p>
                  <span className="info-label">Birthdate:</span> July 27, 2003
                </p>
                <p>
                  <span className="info-label">Gender:</span> Female
                </p>
                <p>
                  <span className="info-label">Civil Status:</span> Single
                </p>
                <p>
                  <span className="info-label">Citizenship:</span> Filipino
                </p>
                <p>
                  <span className="info-label">Language:</span> Tagalog &
                  English
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work-skills-card" ref={workSkillsRef}>
          <h2 className="section-title-center">
            WORK EXPERIENCE & SKILLS GAINED
          </h2>
          <div className="work-content">
            <h3 className="job-title">
              Local Government Unit (LGU) of Hagonoy, Bulacan — Intern
            </h3>
            <p className="job-location">
              Poblacion, Sto. Niño, Hagonoy, Bulacan | January 2025 – April 2025
            </p>
            <ul className="work-list">
              <li>
                <span className="bullet">▸</span>
                <span>
                  Created designs for event materials such as posters,
                  tarpaulins, name tags, and invitations using Adobe Photoshop —
                  including select merchandise like trophies and t-shirts, and
                  the layout and color scheme for the basketball court area at
                  the grandstand in Hagonoy, Bulacan.
                </span>
              </li>
              <li>
                <span className="bullet">▸</span>
                <span>
                  Edited official documents such as gas slips, voter lists, and
                  reports; managed files through encoding, sorting, and database
                  maintenance.
                </span>
              </li>
              <li>
                <span className="bullet">▸</span>
                <span>
                  Provided technical support by optimizing computer systems and
                  collaborated across departments to meet administrative and
                  design needs.
                </span>
              </li>
            </ul>
            <div className="skills-grid">
              {skillsData.map((skill, index) => (
                <SkillCircle
                  key={index}
                  skill={skill.category}
                  percentage={skill.percentage}
                  isVisible={skillsVisible}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
