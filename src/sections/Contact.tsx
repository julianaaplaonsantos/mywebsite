import React, { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility when the section is in viewport (e.g. 50% visible)
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`contact-section ${visible ? "visible" : ""}`}
    >
      <h2 className="contact-title">Let's Connect!</h2>

      <div className="contact-buttons">
        <a
          href="https://github.com/julianaaplaonsantos"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-btn"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/juliana-santos-212a78374/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-btn"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/julianaaplaonsantos/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-btn"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      <div className="contact-info">
        <p>
          <FaEnvelope className="contact-info-icon" /> japlaonsantos@gmail.com
        </p>
        <p>
          <FaPhone className="contact-info-icon" /> 0963 020 8143
        </p>
      </div>

      <a
        href={`${import.meta.env.BASE_URL}CV-Juliana_A_Santos.pdf`}
        download
        className="explore-button contact-download-btn"
      >
        Download CV
      </a>
    </section>
  );
}
