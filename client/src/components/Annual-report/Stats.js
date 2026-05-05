import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        const stepTime = 16; // ~60fps
        const steps = duration / stepTime;
        const increment1 = target1 / steps;
        let current1 = 0;
        let timer1;
        // Counter 2: 0 → 500,000
        const target2 = 500000;
        const increment2 = target2 / steps;
        let current2 = 0;
        let timer2;
        const updateCounter1 = () => {
            current1 += increment1;
            if (current1 >= target1) {
                setCount1(target1);
                clearInterval(timer1);
                return;
            }
            setCount1(parseFloat(current1.toFixed(1)));
        };
        const updateCounter2 = () => {
            current2 += increment2;
            if (current2 >= target2) {
                setCount2(target2);
                clearInterval(timer2);
                return;
            }
            setCount2(Math.round(current2));
        };
        timer1 = window.setInterval(updateCounter1, stepTime);
        timer2 = window.setInterval(updateCounter2, stepTime);
        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, []);
    // Format number for display
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return num.toFixed(1) + " million";
        }
        return num.toLocaleString();
    };
    return (_jsx("div", { className: "w-full flex justify-center bg-[#C1E6F1]", children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsxs("section", { className: "w-full py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col items-center gap-8 md:gap-10", children: [_jsxs("div", { className: "flex flex-col items-center", style: { width: "fit-content" }, children: [_jsxs("h2", { className: "text-5xl md:text-6xl lg:text-7xl font-black text-center leading-tight", children: [_jsx("span", { style: { color: "var(--text-purple-dark, #5e2a7c)" }, children: "Since " }), _jsx("span", { style: { color: "var(--text-yellow, #f5a623)" }, children: "2016" })] }), _jsx("div", { className: "-mt-2", style: {
                                    height: "6px",
                                    width: "100%",
                                    backgroundImage: "radial-gradient(circle, var(--text-purple-dark, #5e2a7c) 3px, transparent 1.5px)",
                                    backgroundSize: "10px 6px",
                                } })] }), _jsxs("div", { className: "w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-26", children: [_jsxs("div", { className: "flex flex-col items-center text-center gap-2 md:gap-3 flex-1", children: [_jsx("span", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold", style: { color: "#e8420a" }, children: formatNumber(count1) }), _jsx("p", { className: "text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide max-w-xs mx-auto", style: { color: "#333" }, children: "protein energy bars donated to date" })] }), _jsxs("div", { className: "flex flex-col items-center text-center gap-2 md:gap-3 flex-1", children: [_jsx("span", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold", style: { color: "#e8420a" }, children: count2.toLocaleString() }), _jsx("p", { className: "text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide", style: { color: "#333" }, children: "target for 2025" })] })] })] }) }) }));
};
export default Stats;
