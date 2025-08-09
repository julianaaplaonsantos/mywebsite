import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "../assets/juliana.jpg";

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={`home-section ${loaded ? "loaded" : ""}`}>
      <div className="home-container">
        <div className="image-wrapper image-delay">
          <div className="circle-bg"></div>
          <img
            src={profileImg}
            alt="Juliana Aplaon Santos"
            className="profile-img"
          />
        </div>

        <div className="text-content">
          <h1 className="text-delay-1">
            Hello, I'm <span className="highlight">Juliana!</span>
          </h1>
          <p className="text-delay-2">
            A <span className="highlight">Summa Cum Laude</span> Information Technology graduate from Bulacan State University, aspiring <span className="highlight">UI/UX Designer</span> and <span className="highlight">Web Developer</span> with experience in web/app development, graphic design, and programming. <span className="highlight">Passionate about leveraging technical and creative skills to drive innovation</span> and contribute in dynamic, growth-oriented environments. Committed to continuous learning and delivering impactful solutions.
          </p>

          <div className="animated-circles">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
          </div>

          <div className="buttons-container text-delay-3">
            <a
              href={`${import.meta.env.BASE_URL}CV-Juliana_A_Santos.pdf`}
              download="CV-Santos_Juliana_A.pdf"
              className="download-cv-button explore-button"
            >
              Download CV
            </a>

            <a href="#about" className="explore-button">
              Get to know me!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
