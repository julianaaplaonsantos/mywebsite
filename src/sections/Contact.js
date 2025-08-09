import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";
export default function Contact() {
    const [visible, setVisible] = useState(false);
    const contactRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.5 });
        if (contactRef.current)
            observer.observe(contactRef.current);
        return () => {
            if (contactRef.current)
                observer.unobserve(contactRef.current);
        };
    }, []);
    return (_jsxs("section", { id: "contact", ref: contactRef, className: `contact-section ${visible ? "visible" : ""}`, children: [_jsx("h2", { className: "contact-title", children: "Let's Connect!" }), _jsxs("div", { className: "contact-buttons", children: [_jsx("a", { href: "https://github.com/julianaaplaonsantos", target: "_blank", rel: "noopener noreferrer", className: "contact-icon-btn", "aria-label": "GitHub", children: _jsx(FaGithub, {}) }), _jsx("a", { href: "https://www.linkedin.com/in/juliana-santos-212a78374/", target: "_blank", rel: "noopener noreferrer", className: "contact-icon-btn", "aria-label": "LinkedIn", children: _jsx(FaLinkedin, {}) }), _jsx("a", { href: "https://www.facebook.com/julianaaplaonsantos/", target: "_blank", rel: "noopener noreferrer", className: "contact-icon-btn", "aria-label": "Facebook", children: _jsx(FaFacebook, {}) })] }), _jsxs("div", { className: "contact-info", children: [_jsxs("p", { children: [_jsx(FaEnvelope, { className: "contact-info-icon" }), " japlaonsantos@gmail.com"] }), _jsxs("p", { children: [_jsx(FaPhone, { className: "contact-info-icon" }), " 09630208143"] })] })] }));
}
