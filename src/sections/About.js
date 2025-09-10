import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaWordpress, FaFigma, FaFileWord, FaFileExcel, FaFilePowerpoint, } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiVercel, SiAndroidstudio, SiEclipseide, SiShopify, SiCanva, SiAdobephotoshop, } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import "./About.css";
import julianaPhoto from "../assets/juls.JPG";
const About = () => {
    const [skillsVisible, setSkillsVisible] = useState({
        skillsGained: false,
        skills: false,
    });
    const skillsGainedRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutSectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add("fade-up");
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px",
        });
        const elementsToObserve = document.querySelectorAll(".about-section .personal-info-card, .about-section .skills-gained-card, .about-section .education-card, .about-section .skills-card, .about-section .tools-card, .about-section .work-experience-card");
        elementsToObserve.forEach((el) => {
            el.classList.add("animate-on-scroll");
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const skillsGainedObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setSkillsVisible((prev) => ({ ...prev, skillsGained: true }));
            }
        }, {
            threshold: 0.3,
            rootMargin: "0px 0px -100px 0px",
        });
        const skillsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setSkillsVisible((prev) => ({ ...prev, skills: true }));
            }
        }, {
            threshold: 0.3,
            rootMargin: "0px 0px -100px 0px",
        });
        if (skillsGainedRef.current)
            skillsGainedObserver.observe(skillsGainedRef.current);
        if (skillsRef.current)
            skillsObserver.observe(skillsRef.current);
        return () => {
            skillsGainedObserver.disconnect();
            skillsObserver.disconnect();
        };
    }, []);
    useEffect(() => {
        const aboutSection = aboutSectionRef.current;
        if (aboutSection) {
            const hash = window.location.hash;
            if (hash === "#about") {
                aboutSection.classList.add("section-fade-in");
            }
            const handleHashChange = () => {
                if (window.location.hash === "#about") {
                    aboutSection.classList.add("section-fade-in");
                }
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
        { name: "Microsoft Word", icon: FaFileWord },
        { name: "Microsoft Excel", icon: FaFileExcel },
        { name: "Microsoft PowerPoint", icon: FaFilePowerpoint },
    ];
    const SkillCircle = ({ skill, percentage, isVisible, delay = 0, }) => {
        const [progress, setProgress] = useState(0);
        const circumference = 2 * Math.PI * 45;
        const strokeDasharray = circumference;
        const strokeDashoffset = circumference - (progress / 100) * circumference;
        useEffect(() => {
            if (!isVisible)
                return;
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
        return (_jsxs("div", { className: "skill-circle", children: [_jsxs("div", { className: "skill-circle-svg", children: [_jsxs("svg", { className: "circle-svg", viewBox: "0 0 100 100", children: [_jsx("circle", { cx: "50", cy: "50", r: "45", className: "circle-bg" }), _jsx("circle", { cx: "50", cy: "50", r: "45", className: "circle-progress", strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, style: {
                                        transition: isVisible
                                            ? "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
                                            : "none",
                                    } })] }), _jsx("div", { className: "percentage-text", children: _jsxs("span", { className: isVisible ? "counter-animate" : "", children: [Math.round(progress), "%"] }) })] }), _jsx("p", { className: "skill-text", children: skill })] }));
    };
    return (_jsx("section", { id: "about", className: "about-section", ref: aboutSectionRef, children: _jsxs("div", { className: "about-container", children: [_jsx("div", { className: "about-header", children: _jsx("h1", { className: "about-title", children: "Come take a peek!" }) }), _jsxs("div", { className: "personal-info-card", children: [_jsx("h2", { className: "section-title-center", children: "PERSONAL INFO" }), _jsxs("div", { className: "personal-info-content", children: [_jsx("div", { className: "photo-container", children: _jsx("img", { src: julianaPhoto, alt: "Juliana Aplaon Santos", className: "personal-photo" }) }), _jsx("div", { className: "personal-details", children: _jsxs("div", { className: "info-grid", children: [_jsxs("p", { children: [_jsx("span", { className: "info-label", children: "Name:" }), " Juliana Aplaon Santos"] }), _jsxs("p", { children: [_jsx("span", { className: "info-label", children: "Birthdate:" }), " July 27, 2003"] }), _jsxs("p", { children: [_jsx("span", { className: "info-label", children: "Gender:" }), " Female"] }), _jsxs("p", { children: [_jsx("span", { className: "info-label", children: "Civil Status:" }), " Single"] }), _jsxs("p", { children: [_jsx("span", { className: "info-label", children: "Citizenship:" }), " Filipino"] }), _jsxs("p", { children: [_jsx("span", { className: "info-label", children: "Language:" }), " Tagalog & English"] })] }) })] })] }), _jsxs("div", { className: "work-experience-card", children: [_jsx("h2", { className: "section-title-center", children: "WORK EXPERIENCE" }), _jsxs("div", { className: "work-content", children: [_jsx("h3", { className: "job-title", children: "Local Government Unit (LGU) of Hagonoy, Bulacan \u2014 Intern" }), _jsx("p", { className: "job-location", children: "Poblacion, Sto. Ni\u00F1o, Hagonoy, Bulacan | January 2025 \u2013 April 2025" }), _jsxs("ul", { className: "work-list", children: [_jsxs("li", { children: [_jsx("span", { className: "bullet", children: "\u25B8" }), _jsx("span", { children: "Created designs for event materials such as posters, tarpaulins, name tags, and invitations using Adobe Photoshop \u2014 including select merchandise like trophies and t-shirts, and the layout and color scheme for the basketball court area at the grandstand in Hagonoy, Bulacan." })] }), _jsxs("li", { children: [_jsx("span", { className: "bullet", children: "\u25B8" }), _jsx("span", { children: "Edited official documents such as gas slips, voter lists, and reports; managed files through encoding, sorting, and database maintenance." })] }), _jsxs("li", { children: [_jsx("span", { className: "bullet", children: "\u25B8" }), _jsx("span", { children: "Provided technical support by optimizing computer systems and collaborated across departments to meet administrative and design needs." })] })] })] })] }), _jsxs("div", { className: "skills-gained-card", ref: skillsGainedRef, children: [_jsx("h2", { className: "section-title-center", children: "SKILLS GAINED" }), _jsx("div", { className: "skills-grid", children: skillsData.map((skill, index) => (_jsx(SkillCircle, { skill: skill.category, percentage: skill.percentage, isVisible: skillsVisible.skillsGained, delay: index * 200 }, index))) })] }), _jsxs("div", { className: "education-card", children: [_jsx("h2", { className: "section-title-center", children: "EDUCATIONAL BACKGROUND" }), _jsxs("div", { className: "education-content", children: [_jsxs("div", { className: "education-main", children: [_jsx("h3", { className: "education-title", children: "Bulacan State University - Meneses Campus, Bulacan" }), _jsx("p", { className: "education-degree", children: "Bachelor of Science in Information Technology" }), _jsx("p", { className: "education-date", children: "August 2021 \u2013 July 2025" }), _jsx("p", { className: "education-gpa", children: "Summa Cum Laude | GPA: 1.185 (2025)" }), _jsxs("ul", { className: "education-honors", children: [_jsx("li", { children: "President's Lister | GPA: 1.144 (2024-2025)" }), _jsx("li", { children: "President's Lister | GPA: 1.123 (2023-2024)" }), _jsx("li", { children: "Dean's Lister | GPA: 1.23 (2022-2023)" })] })] }), _jsxs("div", { className: "education-secondary", children: [_jsxs("div", { className: "school-item", children: [_jsx("h3", { className: "school-title", children: "St. Mary's Academy of Hagonoy, Bulacan" }), _jsx("p", { className: "school-date", children: "June 2015 \u2013 June 2021" }), _jsxs("ul", { className: "school-awards", children: [_jsx("li", { children: "Best in Innovation \u2013 2021" }), _jsx("li", { children: "Conduct Awardee \u2013 2019" })] })] }), _jsxs("div", { className: "school-item", children: [_jsx("h3", { className: "school-title", children: "San Nicolas Elementary School, Hagonoy, Bulacan" }), _jsx("p", { className: "school-date", children: "June 2007 \u2013 March 2015" })] })] })] })] }), _jsxs("div", { className: "skills-card", ref: skillsRef, children: [_jsx("h2", { className: "section-title-center", children: "SKILLS" }), _jsx("div", { className: "skills-grid", children: [
                                { skill: "Java", rating: 4.5 },
                                { skill: "Python", rating: 4.2 },
                                { skill: "JavaScript", rating: 4.6 },
                                { skill: "HTML & CSS", rating: 4.8 },
                                { skill: "SQL", rating: 4.5 },
                                { skill: "Firebase", rating: 4.2 },
                                { skill: "Web Development", rating: 4.8 },
                                { skill: "Mobile Development", rating: 4.6 },
                                { skill: "UI/UX Design", rating: 4.8 },
                                { skill: "User Research", rating: 4.8 },
                                { skill: "Usability Testing", rating: 4.8 },
                                { skill: "Graphic Design", rating: 4.7 },
                                { skill: "Multimedia", rating: 4.7 },
                                { skill: "Video Editing", rating: 4.4 },
                                { skill: "Microsoft Office", rating: 4.7 },
                            ].map((skillObj, index) => {
                                const percentage = (skillObj.rating / 5) * 100;
                                return (_jsx(SkillCircle, { skill: skillObj.skill, percentage: percentage, isVisible: skillsVisible.skills, delay: index * 100 }, index));
                            }) })] }), _jsxs("div", { className: "tools-card", children: [_jsx("h2", { className: "section-title-center", children: "TOOLS" }), _jsx("div", { className: "tools-grid", children: tools.map((tool, index) => {
                                const Icon = tool.icon;
                                return (_jsxs("div", { className: "tool-item", children: [_jsx("div", { className: "tool-icon", children: _jsx(Icon, {}) }), _jsx("span", { className: "tool-name", children: tool.name })] }, index));
                            }) })] })] }) }));
};
export default About;
