import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [slideDownActive, setSlideDownActive] = useState(false);
    const underlineRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "home";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 &&
                    rect.bottom >= window.innerHeight / 2) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideDownActive(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const activeLink = document.querySelector(`.nav-link[data-section="${activeSection}"]`);
        const underline = underlineRef.current;
        const navbar = document.querySelector(".navbar");
        if (activeLink && underline && navbar) {
            const linkRect = activeLink.getBoundingClientRect();
            const navbarRect = navbar.getBoundingClientRect();
            underline.style.left = `${linkRect.left - navbarRect.left}px`;
            underline.style.width = `${linkRect.width}px`;
        }
    }, [activeSection]);
    return (_jsx("header", { children: _jsxs("nav", { className: "navbar", children: [_jsxs("div", { className: `navbar-left ${slideDownActive ? "visible" : ""}`, children: [_jsxs("div", { className: "contact-item", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "contact-icon", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: _jsx("path", { d: "M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zM4 6v.01L12 13l8-6.99V6H4zm0 12h16v-9l-8 7-8-7v9z" }) }), _jsx("a", { href: "mailto:japlaonsantos@gmail.com", style: { color: "inherit", textDecoration: "none" }, children: "japlaonsantos@gmail.com" })] }), _jsxs("div", { className: "contact-item", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "contact-icon", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: _jsx("path", { d: "M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.87.76a1 1 0 011 1v3.5a1 1 0 01-1 1A17.91 17.91 0 012 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.34.27 2.66.76 3.87a1 1 0 01-.21 1.11l-2.43 2.43z" }) }), _jsx("a", { href: "tel:+639630208143", style: { color: "inherit", textDecoration: "none" }, children: "09630208143" })] })] }), _jsxs("div", { className: `slide-down-nav ${slideDownActive ? "active" : ""}`, children: [_jsx("a", { href: "#home", className: `nav-link ${activeSection === "home" ? "active" : ""}`, "data-section": "home", children: "Home" }), _jsx("a", { href: "#about", className: `nav-link ${activeSection === "about" ? "active" : ""}`, "data-section": "about", children: "About Me" }), _jsx("a", { href: "#projects", className: `nav-link ${activeSection === "projects" ? "active" : ""}`, "data-section": "projects", children: "Projects" }), _jsx("a", { href: "#contact", className: `nav-link ${activeSection === "contact" ? "active" : ""}`, "data-section": "contact", children: "Contact" })] }), _jsx("div", { className: "underline", ref: underlineRef })] }) }));
};
export default Navbar;
