import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import julsImg from "../assets/juls.JPG";
import './About.css';
const slides = [
    {
        title: 'Personal Info',
        content: (_jsxs("div", { className: "personal-info-wrapper", children: [_jsxs("div", { className: "info-list", children: [_jsxs("p", { children: [_jsx("strong", { children: "Name:" }), " Juliana Aplaon Santos"] }), _jsxs("p", { children: [_jsx("strong", { children: "Birthdate:" }), " July 27, 2003"] }), _jsxs("p", { children: [_jsx("strong", { children: "Gender:" }), " Female"] }), _jsxs("p", { children: [_jsx("strong", { children: "Civil Status:" }), " Single"] }), _jsxs("p", { children: [_jsx("strong", { children: "Address:" }), " Hagonoy, Bulacan"] }), _jsxs("p", { children: [_jsx("strong", { children: "Citizenship:" }), " Filipino"] }), _jsxs("p", { children: [_jsx("strong", { children: "Language:" }), " Tagalog & English"] })] }), _jsx("img", { src: julsImg, alt: "Juliana", className: "personal-image" })] })),
    },
    {
        title: 'Work Experience',
        content: (_jsxs(_Fragment, { children: [_jsx("p", { children: _jsx("strong", { className: "job-title", children: "Local Government Unit (LGU) of Hagonoy, Bulacan \u2014 Intern" }) }), _jsx("p", { className: "job-subtitle", children: "Poblacion, Sto. Ni\u00F1o, Hagonoy, Bulacan | January 2025 \u2013 April 2025" }), _jsxs("ul", { className: "work-experience-list", children: [_jsx("li", { children: "Created designs for event materials such as posters, tarpaulins, name tags, and invitations using Adobe Photoshop \u2014 including select merchandise like trophies and t-shirts, and the layout and color scheme for the basketball court area at the grandstand in Hagonoy, Bulacan." }), _jsx("li", { children: "Edited official documents such as gas slips, voter lists, and reports; managed files through encoding, sorting, and database maintenance." }), _jsx("li", { children: "Provided technical support by optimizing computer systems and collaborated across departments to meet administrative and design needs." })] })] })),
    },
    {
        title: 'Education',
        content: (_jsxs(_Fragment, { children: [_jsx("p", { children: _jsx("strong", { className: "edu-title", children: "Bulacan State University - Meneses Campus, Bulacan" }) }), _jsx("p", { className: "edu-subtitle", children: "Bachelor of Science in Information Technology | August 2021 \u2013 July 2025" }), _jsx("p", { className: "edu-subtitle", children: "Summa Cum Laude | GPA: 1.185 (2025)" }), _jsxs("ul", { className: "edu-list", children: [_jsx("li", { children: "President\u2019s Lister | GPA: 1.144 (2024-2025)" }), _jsx("li", { children: "President\u2019s Lister | GPA: 1.123 (2023-2024)" }), _jsx("li", { children: "Dean\u2019s Lister | GPA: 1.23 (2022-2023)" })] }), _jsx("p", { children: _jsx("strong", { className: "edu-title", children: "St. Mary\u2019s Academy of Hagonoy, Bulacan" }) }), _jsx("p", { className: "edu-subtitle", children: "June 2015 \u2013 June 2021" }), _jsxs("ul", { className: "edu-list", children: [_jsx("li", { children: "Best in Innovation \u2013 2021" }), _jsx("li", { children: "Conduct Awardee \u2013 2019" })] }), _jsx("p", { children: _jsx("strong", { className: "edu-title", children: "San Nicolas Elementary School, Hagonoy, Bulacan" }) }), _jsx("p", { className: "edu-subtitle", children: "June 2007 \u2013 March 2015" })] })),
    },
    {
        title: 'Skills',
        content: (_jsx(_Fragment, { children: _jsxs("div", { className: "skills-category", children: [_jsx("h4", { className: "skills-category-title", children: "Programming" }), _jsxs("ul", { className: "skills-list", children: [_jsx("li", { children: "Java, Python, JavaScript, HTML & CSS" }), _jsx("li", { children: "SQL & Firebase, Web & Mobile Development" })] }), _jsx("h4", { className: "skills-category-title", children: "Design & Multimedia" }), _jsxs("ul", { className: "skills-list", children: [_jsx("li", { children: "UI/Graphic Design, Multimedia & Video Editing" }), _jsx("li", { children: "Microsoft Office (Word, Excel, PowerPoint)" })] }), _jsx("h4", { className: "skills-category-title", children: "E-commerce" }), _jsx("ul", { className: "skills-list", children: _jsx("li", { children: "E-commerce Website Setup (Shopify, WordPress)" }) })] }) })),
    },
    {
        title: 'Tools',
        content: (_jsxs("div", { className: "tools-multi-column", children: [_jsxs("ul", { className: "tools-list", children: [_jsx("li", { children: "Eclipse" }), _jsx("li", { children: "Android Studio" }), _jsx("li", { children: "Visual Studio Code" }), _jsx("li", { children: "WordPress" }), _jsx("li", { children: "Shopify" })] }), _jsxs("ul", { className: "tools-list", children: [_jsx("li", { children: "Canva" }), _jsx("li", { children: "Figma" }), _jsx("li", { children: "Procreate" }), _jsx("li", { children: "IbisPaint X" }), _jsx("li", { children: "Adobe Photoshop & Illustrator" })] }), _jsxs("ul", { className: "tools-list", children: [_jsx("li", { children: "Cute Cut Pro" }), _jsx("li", { children: "Filmora" }), _jsx("li", { children: "Trello" })] })] })),
    }
];
const About = () => {
    const [current, setCurrent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showSlider, setShowSlider] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const aboutRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });
        if (aboutRef.current)
            observer.observe(aboutRef.current);
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
        }
        else {
            setShowSlider(false);
            setShowControls(false);
        }
    }, [isVisible]);
    return (_jsxs("section", { id: "about", className: "about-section", ref: aboutRef, children: [_jsx("h2", { className: `about-title ${isVisible ? 'fade-in' : ''}`, children: "Come Take a Peek!" }), _jsxs("div", { className: `slider-and-controls-wrapper ${showSlider ? 'fade-in-delay-1' : ''}`, "aria-live": "polite", children: [_jsx("button", { className: "slider-btn prev", onClick: () => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1)), "aria-label": "Previous Slide", children: "\u2039" }), _jsxs("div", { className: "slider-container", children: [_jsx("div", { className: "slider-header", children: slides[current].title }), _jsx("div", { className: "slide", children: _jsx("div", { className: "slide-content", children: slides[current].content }) }, current)] }), _jsx("button", { className: "slider-btn next", onClick: () => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1)), "aria-label": "Next Slide", children: "\u203A" }), _jsx("div", { className: `dots-container ${showControls ? 'fade-in-delay-2' : ''}`, role: "tablist", "aria-label": "Slide navigation", children: slides.map((_, index) => (_jsx("span", { className: `dot ${index === current ? 'active' : ''}`, onClick: () => setCurrent(index), "aria-label": `Go to slide ${index + 1}`, role: "button", tabIndex: 0, onKeyDown: (e) => {
                                if (e.key === 'Enter' || e.key === ' ')
                                    setCurrent(index);
                            } }, index))) })] })] }));
};
export default About;
