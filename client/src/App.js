import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import Blog from "./pages/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import GetInTouch from "./pages/GetInTouch";
import Donate from "./pages/Donate";
import WhatWeDo from "./pages/WhatWeDo";
import GetInvolved from "./pages/GetInvolved";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnualReports from "./pages/AnnualReports";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
const ScrollToHash = () => {
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash.slice(1); // Remove '#' from hash
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);
    return null;
};
const App = () => {
    return (_jsxs(BrowserRouter, { children: [_jsx(ScrollToHash, {}), _jsx(ScrollToTop, {}), _jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/who-we-are", element: _jsx(WhoWeAre, {}) }), _jsx(Route, { path: "/what-we-do", element: _jsx(WhatWeDo, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/blog/:slug", element: _jsx(BlogDetail, {}) }), _jsx(Route, { path: "/get-in-touch", element: _jsx(GetInTouch, {}) }), _jsx(Route, { path: "/get-involved", element: _jsx(GetInvolved, {}) }), _jsx(Route, { path: "/donate", element: _jsx(Donate, {}) }), _jsx(Route, { path: "/annual-reports", element: _jsx(AnnualReports, {}) }), _jsx(Route, { path: "*", element: _jsx(Home, {}) }), _jsx(Route, { path: "/privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/terms-of-service", element: _jsx(TermsOfServices, {}) })] }), _jsx(Footer, {})] }));
};
export default App;
