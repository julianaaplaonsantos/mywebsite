import React, { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
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
        <a
          href="https://wa.me/639630208143"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-btn"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className="contact-info">
        <p>
          <FaEnvelope className="contact-info-icon" />
          <a
            href="mailto:japlaonsantos@gmail.com"
            aria-label="Send email to japlaonsantos@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
          >
            japlaonsantos@gmail.com
          </a>
        </p>
        <p>
          <FaPhone className="contact-info-icon" />
          <a
            href="tel:+639630208143"
            aria-label="Call 09630208143"
            className="contact-link"
            role="link"
          >
            09630208143
          </a>
        </p>
      </div>
    </section>
  );
}
