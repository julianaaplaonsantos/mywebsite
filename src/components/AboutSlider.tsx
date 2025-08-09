import React, { useState } from "react";
import PersonalInfo from "./AboutSlides/PersonalInfo";
import WorkExp from "./AboutSlides/WorkExp";
import Education from "./AboutSlides/Education";
import Skills from "./AboutSlides/Skills";
import Tools from "./AboutSlides/Tools";
import "./About.css";

const slides = [
  { title: "Personal Info", content: <PersonalInfo /> },
  { title: "Work Experience", content: <WorkExp /> },
  { title: "Education", content: <Education /> },
  { title: "Skills", content: <Skills /> },
  { title: "Tools", content: <Tools /> },
];

const AboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="slider-wrapper">
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          ‹
        </button>

        <div className="slider-container">
          {/* Heading bar */}
          <div className="slide-header">{slides[currentIndex].title}</div>
          
          {/* Slide content */}
          <div className="slide-content">{slides[currentIndex].content}</div>
        </div>

        <button className="slider-btn next" onClick={nextSlide} aria-label="Next Slide">
          ›
        </button>
      </div>

      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") goToSlide(index);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSlider;
