import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Year2024 = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
    const [hasAnimated, setHasAnimated] = useState(false);
    const stats = useMemo(() => [
        { target: 309025, color: "var(--text-orange)", label: "protein energy bars donated", format: "comma" },
        { target: 14, color: "var(--text-purple-dark)", label: "locations/causes", format: "plain" },
        { target: 3000, prefix: "~", color: "var(--text-yellow)", label: "children supported", format: "comma" },
        { target: 100, suffix: "%", color: "var(--text-blue-purple)", label: "of funds goes to production of Happy Bars", format: "plain" },
        { target: 6, color: "var(--text-purple)", label: "volunteer staff", format: "plain" },
        { target: 0, color: "var(--text-blue)", label: "paid staff", format: "plain" },
    ], []);
    // GSAP scroll animation for image
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current, { scale: 0.6, opacity: 0.8 }, {
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);
    // Count up animation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    stats.forEach((stat, index) => {
                        if (stat.target === 0) {
                            setCounts(prev => {
                                const newCounts = [...prev];
                                newCounts[index] = 0;
                                return newCounts;
                            });
                            return;
                        }
                        const duration = 2000;
                        const interval = 20;
                        const steps = duration / interval;
                        const increment = stat.target / steps;
                        let current = 0;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= stat.target) {
                                setCounts(prev => {
                                    const newCounts = [...prev];
                                    newCounts[index] = stat.target;
                                    return newCounts;
                                });
                                clearInterval(timer);
                            }
                            else {
                                setCounts(prev => {
                                    const newCounts = [...prev];
                                    newCounts[index] = Math.round(current);
                                    return newCounts;
                                });
                            }
                        }, interval);
                    });
                }
            });
        }, { threshold: 0.3 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated, stats]);
    const formatValue = (value, stat) => {
        var _a, _b;
        let display = "";
        if (stat.format === "comma") {
            display = Math.round(value).toLocaleString();
        }
        else {
            display = Math.round(value).toString();
        }
        return ((_a = stat.prefix) !== null && _a !== void 0 ? _a : "") + display + ((_b = stat.suffix) !== null && _b !== void 0 ? _b : "");
    };
    return (_jsx("div", { className: "w-full overflow-hidden flex flex-col justify-center", style: { background: "#E0B3CB" }, children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsxs("section", { ref: sectionRef, className: "w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 px-4 sm:px-6 md:px-8 lg:px-12", children: [_jsxs("div", { className: "inline-flex flex-col items-center justify-center", style: { width: "fit-content" }, children: [_jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-bold text-center", children: [_jsx("span", { style: { color: "var(--text-purple-dark)" }, children: "Year " }), _jsx("span", { style: { color: "var(--text-yellow)" }, children: "2023" })] }), _jsx("div", { className: "-mt-1", style: {
                                    height: "6px",
                                    width: "100%",
                                    maxWidth: "300px",
                                    backgroundImage: "radial-gradient(circle, var(--text-purple-dark) 3px, transparent 1.5px)",
                                    backgroundSize: "10px 6px",
                                } })] }), _jsxs("div", { className: "w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 xl:gap-16", children: [_jsx("div", { className: "flex-shrink-0 w-full lg:w-auto flex justify-center", children: _jsx("img", { ref: imageRef, src: "https://happybarnutrition.org/wp-content/uploads/2024/06/girl-in-school-uniform-and-pony-tails-scaled-1.webp", alt: "Girl smiling", className: "rounded-2xl object-cover w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:w-[300px] h-auto lg:h-[400px]", style: {
                                        boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                                    } }) }), _jsx("div", { className: "flex-1 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 w-full", children: stats.map((stat, i) => (_jsxs("div", { className: "flex flex-col gap-1 sm:gap-2 text-center sm:text-left", children: [_jsx("span", { className: "font-bold block", style: {
                                                color: stat.color,
                                                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                                                lineHeight: 1.1,
                                            }, children: formatValue(counts[i], stat) }), _jsx("p", { className: "text-xs sm:text-sm md:text-base font-medium", style: { color: "#333" }, children: stat.label })] }, i))) })] })] }) }) }));
};
export default Year2024;
