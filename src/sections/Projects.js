import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import pawtioncareweb from "../assets/pawtioncareweb.jpg";
import pawtioncareapp from "../assets/pawtioncareappnweb.jpg";
import MRSHotel from "../assets/MRSHotel.jpg";
const projectsData = [
    {
        id: 1,
        title: "Pawtion Care — Web Platform",
        image: pawtioncareweb,
        description: `This project marks the first iteration of Pawtion Care, developed as a web-based platform focused on providing pet care resources and services. It served as the foundational version that later inspired the full-featured mobile app. The website offers essential features for pet owners to access care information and manage pet needs efficiently online.`,
        role: "UI/UX Designer, Front-End Developer & QA Tester",
        year: "2023",
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    },
    {
        id: 2,
        title: "Pawtion Care — Mobile & Web App",
        image: pawtioncareapp,
        description: `Pawtion Care is a mobile and web-based application designed to support responsible pet adoption and assist in locating missing pets. Developed in collaboration with the Municipality of Guiguinto and My Pets Vet Clinic, the system offers a streamlined approach to pet adoption and lost pet reporting while encouraging community involvement in animal welfare.`,
        role: "UI/UX Designer, Front-End Developer, QA Tester & Documentation Lead",
        year: "2024 - 2025",
        technologies: [
            "Android Studio (Java)",
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase Realtime Database",
            "Firebase Authentication",
            "Firebase Storage",
            "Canva",
            "Adobe Photoshop",
        ],
    },
    {
        id: 3,
        title: "MRS Hotel — Hotel Reservation Management System",
        image: MRSHotel,
        description: `Developed an intuitive user interface using Java, JDBC, and MySQL to improve navigation and booking flow. Conducted thorough system testing to ensure feature completeness and a bug-free deployment. Collaborated closely with team members to refine design and functionality based on user feedback, enhancing the overall user experience.`,
        role: "UI/UX Designer, Front-End Developer & QA Tester",
        year: "2023",
        technologies: ["Java", "JDBC", "MySQL"],
    },
];
const Projects = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.3 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current)
                observer.unobserve(sectionRef.current);
        };
    }, []);
    return (_jsxs("section", { id: "projects", className: `projects-section ${isVisible ? "visible" : ""}`, ref: sectionRef, children: [_jsxs("div", { className: "animated-circles", children: [_jsx("div", { className: "circle circle1" }), _jsx("div", { className: "circle circle2" }), _jsx("div", { className: "circle circle3" })] }), _jsx("h2", { className: "section-title", children: "Latest Adventures" }), _jsx("div", { className: "projects-grid", children: projectsData.map(({ id, title, image, description, role, year, technologies }) => (_jsxs("div", { className: "project-card", children: [image ? (id === 1 || id === 2 ? (_jsxs("a", { href: id === 1
                                ? "https://github.com/julianaaplaonsantos/Juliana-Aplaon-Santos-Projects/blob/main/PAWTION-CARE-WEBSITE.pdf"
                                : "https://github.com/julianaaplaonsantos/Juliana-Aplaon-Santos-Projects/blob/main/PAWTION-CARE.pdf", target: "_blank", rel: "noopener noreferrer", className: "project-image-wrapper", children: [_jsx("img", { src: image, alt: title, className: "project-image" }), _jsx("div", { className: "project-overlay", children: _jsx("span", { children: "View Project" }) })] })) : (_jsx("div", { className: "project-image-wrapper", children: _jsx("img", { src: image, alt: title, className: "project-image" }) }))) : (_jsx("div", { className: "project-placeholder", children: "Image Coming Soon" })), _jsx("h3", { children: title }), _jsxs("div", { className: "project-content", children: [_jsx("p", { className: "project-description", children: description }), role && (_jsxs("p", { children: [_jsx("strong", { children: "Role:" }), " ", role] })), year && (_jsxs("p", { children: [_jsx("strong", { children: "Year:" }), " ", year] })), technologies.length > 0 && (_jsxs("p", { children: [_jsx("strong", { children: "Technologies:" }), " ", technologies.join(", ")] }))] })] }, id))) }), _jsxs("div", { className: "see-more-container", children: [_jsx("p", { children: "See more projects here:" }), _jsx("a", { href: "https://github.com/julianaaplaonsantos/Juliana-Aplaon-Santos-Projects", target: "_blank", rel: "noopener noreferrer", className: "github-button", children: "View My Projects on GitHub" })] })] }));
};
export default Projects;
