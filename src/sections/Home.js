import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "../assets/juliana.jpg";
const Home = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
    return (_jsx("section", { id: "home", className: `home-section ${loaded ? "loaded" : ""}`, children: _jsxs("div", { className: "home-container", children: [_jsxs("div", { className: "image-wrapper image-delay", children: [_jsx("div", { className: "circle-bg" }), _jsx("img", { src: profileImg, alt: "Juliana Aplaon Santos", className: "profile-img" })] }), _jsxs("div", { className: "text-content", children: [_jsxs("h1", { className: "text-delay-1", children: ["Hello, I'm ", _jsx("span", { className: "highlight", children: "Juliana!" })] }), _jsxs("p", { className: "text-delay-2", children: ["A ", _jsx("span", { className: "highlight", children: "Summa Cum Laude" }), " Information Technology graduate from Bulacan State University, aspiring ", _jsx("span", { className: "highlight", children: "UI/UX Designer" }), " and ", _jsx("span", { className: "highlight", children: "Web Developer" }), " with experience in web/app development, graphic design, and programming. ", _jsx("span", { className: "highlight", children: "Passionate about leveraging technical and creative skills to drive innovation" }), " and contribute in dynamic, growth-oriented environments. Committed to continuous learning and delivering impactful solutions."] }), _jsxs("div", { className: "animated-circles", children: [_jsx("div", { className: "circle circle1" }), _jsx("div", { className: "circle circle2" }), _jsx("div", { className: "circle circle3" })] }), _jsxs("div", { className: "buttons-container text-delay-3", children: [_jsx("a", { href: "/CV-Santos_Juliana_A.pdf", download: "CV-Santos_Juliana_A.pdf", className: "download-cv-button explore-button", children: "Download CV" }), _jsx("a", { href: "#about", className: "explore-button", children: "Get to know me!" })] })] })] }) }));
};
export default Home;
