import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const Stats = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const hasAnimated = useRef(false);
    useEffect(() => {
        // Only animate once when component mounts
        if (hasAnimated.current)
            return;
        hasAnimated.current = true;
        // Counter 1: 0 → 2.1 million
        const duration = 2000; // 2 seconds
        const target1 = 2.1;
        const stepTime1 = 16; // ~60fps
        const steps1 = duration / stepTime1;
        const increment1 = target1 / steps1;
        let current1 = 0;
        let timer1;
        // Counter 2: 0 → 500,000
        const target2 = 500000;
        const increment2 = target2 / steps1;
        let current2 = 0;
        let timer2;
        const updateCounters = () => {
            current1 += increment1;
            current2 += increment2;
            if (current1 >= target1) {
                setCount1(target1);
                setCount2(target2);
                clearInterval(timer1);
                clearInterval(timer2);
                return;
            }
            setCount1(parseFloat(current1.toFixed(1)));
            setCount2(Math.round(current2));
        };
        timer1 = window.setInterval(updateCounters, stepTime1);
        timer2 = window.setInterval(updateCounters, stepTime1);
        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, []);
    // Format number with commas for display
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + " million";
        }
        return num.toLocaleString();
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-full bg-white flex justify-center", children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsxs("section", { className: "w-full py-14 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center gap-8 md:gap-10", style: { background: "#ffffff" }, children: [_jsxs("div", { className: "flex flex-col items-center w-full", children: [_jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-black text-center leading-tight", children: [_jsx("span", { style: { color: "var(--text-purple-dark, #5e2a7c)" }, children: "Since " }), _jsx("span", { style: { color: "var(--text-yellow, #f5a623)" }, children: "2016" })] }), _jsx("div", { className: "-mt-2", style: {
                                            height: "6px",
                                            width: "clamp(120px, 60%, 300px)",
                                            backgroundImage: "radial-gradient(circle, var(--text-purple-dark, #5e2a7c) 3px, transparent 1.5px)",
                                            backgroundSize: "10px 6px",
                                            backgroundRepeat: "repeat-x",
                                        } })] }), _jsxs("div", { className: "w-full max-w-9xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-28 px-4 sm:px-6", children: [_jsxs("div", { className: "flex flex-col items-center text-center w-full sm:w-auto flex-1", children: [_jsx("span", { className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap", style: { color: "#e8420a" }, children: formatNumber(count1) }), _jsx("p", { className: "text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide mt-2 md:mt-3 max-w-xs mx-auto", style: { color: "#333" }, children: "protein energy bars donated to date" })] }), _jsxs("div", { className: "flex flex-col items-center text-center w-full sm:w-auto flex-1", children: [_jsx("span", { className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap", style: { color: "#e8420a" }, children: count2.toLocaleString() }), _jsx("p", { className: "text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide mt-2 md:mt-3", style: { color: "#333" }, children: "target for 2025" })] })] })] }) }) }), _jsx("div", { className: "w-full bg-white flex justify-center", children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsx("div", { className: "relative -mt-1 overflow-hidden", children: _jsxs("svg", { viewBox: "0 0 1440 120", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none", className: "block w-full", style: { height: "clamp(60px, 10vw, 120px)" }, children: [_jsx("rect", { width: "1440", height: "120", fill: "#ffffff" }), _jsx("path", { d: "M0,20 C300,80 700,0 1000,50 C1200,80 1350,20 1440,40 L1440,120 L0,120 Z", fill: "var(--light-p3, #7bc5d9)", opacity: "0.5" }), _jsx("path", { d: "M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z", fill: "var(--mid-p3, #4ba0b8)", opacity: "0.7" }), _jsx("path", { d: "M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z", fill: "var(--dark-p3, #1f6d84)" })] }) }) }) })] }));
};
export default Stats;
