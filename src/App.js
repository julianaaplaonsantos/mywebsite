import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About"; // This must match your About.tsx location
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
export default function App() {
    return (_jsxs("div", { style: { textAlign: "center", marginTop: "50px" }, children: [_jsx(Navbar, {}), _jsx(Home, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contact, {})] }));
}
