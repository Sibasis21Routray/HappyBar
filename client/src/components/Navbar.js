import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const links = [
    { label: "HOME", path: "/" },
    { label: "WHO WE ARE", path: "/who-we-are" },
    { label: "WHAT WE DO", path: "/what-we-do" },
    { label: "ANNUAL REPORTS", path: "/annual-reports" },
    { label: "GET INVOLVED", path: "/get-involved" },
    { label: "BLOG", path: "/blog" },
    { label: "GET IN TOUCH", path: "/get-in-touch" },
    { label: "DONATE", path: "/donate" },
];
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (_jsxs("header", { className: "bg-black sticky top-0 z-50 shadow-md ", children: [_jsxs("div", { className: "flex items-center justify-between px-8 md:px-18 h-20 md:h-28 w-full max-w-9xl mx-auto", children: [_jsx(NavLink, { to: "/", children: _jsx("img", { src: logo, alt: "Logo", className: "h-12 w-auto object-contain" }) }), _jsx("nav", { className: "hidden lg:flex items-center gap-6", children: links.map((link) => (_jsx(NavLink, { to: link.path, end: link.path === "/", className: ({ isActive }) => `text-[0.9rem] font-bold tracking-widest uppercase transition-colors duration-200 whitespace-nowrap ${isActive ? "text-orange-500" : "text-white hover:text-orange-500"}`, children: link.label }, link.path))) }), _jsxs("button", { className: "lg:hidden flex flex-col gap-[5px] p-1 focus:outline-none", onClick: () => setMenuOpen(!menuOpen), "aria-label": "Toggle menu", children: [_jsx("span", { className: `block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}` }), _jsx("span", { className: `block w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}` }), _jsx("span", { className: `block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}` })] })] }), menuOpen && (_jsx("nav", { className: "lg:hidden flex flex-col bg-black border-t border-neutral-800 px-6 pb-4", children: links.map((link) => (_jsx(NavLink, { to: link.path, end: link.path === "/", onClick: () => setMenuOpen(false), className: ({ isActive }) => `py-3 text-[0.78rem] font-bold tracking-widest uppercase border-b border-neutral-800 last:border-none transition-colors duration-200 ${isActive ? "text-orange-500" : "text-white hover:text-orange-500"}`, children: link.label }, link.path))) }))] }));
};
export default Navbar;
