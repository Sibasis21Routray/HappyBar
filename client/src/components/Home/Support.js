import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import childImage from "../../assets/girl2.jpg";
gsap.registerPlugin(ScrollTrigger);
const Support = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Only image scroll-driven scale animation
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
    return (_jsx("div", { className: "w-full overflow-hidden flex justify-center", style: { background: "var(--dark-pink)" }, children: _jsx("div", { className: "w-full max-w-7xl mx-auto", children: _jsxs("section", { ref: sectionRef, className: "w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16", children: [_jsx("div", { className: "flex-1 flex justify-center md:justify-center", children: _jsx("img", { ref: imageRef, src: childImage, alt: "Child holding food", className: "object-cover rounded-[32px] shadow-[0_18px_60px_rgba(0,0,0,0.25)] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] h-auto md:h-[420px] lg:h-[480px]" }) }), _jsxs("div", { className: "flex-1 flex flex-col gap-3 sm:gap-4 text-center md:text-left max-w-3xl", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-black leading-tight", style: { color: "#ffffff" }, children: _jsxs("span", { className: "block", children: [" ", _jsx("span", { style: { color: "var(--text-yellow)" }, children: "Support" }), " The"] }) }), _jsx("div", { className: " mt-0 md:-mt-2", style: {
                                            height: "6px",
                                            width: "100%",
                                            //maxWidth: "200px",
                                            backgroundImage: "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                                            backgroundSize: "10px 6px",
                                        } })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-black leading-tight", style: { color: "#ffffff" }, children: _jsx("span", { className: "block", children: "Cause" }) }), _jsx("div", { className: "mt-0 lg:-mt-2", style: {
                                            height: "6px",
                                            width: "100%",
                                            //maxWidth: "150px",
                                            backgroundImage: "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                                            backgroundSize: "10px 6px",
                                        } })] }), _jsx("p", { className: "text-white text-sm sm:text-base md:text-lg leading-relaxed font-medium mt-2", children: "We produce tasty, healthy snack bars for impoverished children. Current donations are helping feed children in 1 leprosy program, 4 HIV/AIDS orphanages, 10 schools for the disadvantaged, 11 cancer and special needs wards for children, and several preschool\u2013kindergarten child care programs for the underprivileged." }), _jsxs("p", { className: "text-white text-sm sm:text-base md:text-lg leading-relaxed font-medium", children: [_jsx("strong", { style: { color: "#ffffff" }, children: "The Happy Bar:" }), " One Happy Bar delivers the same amount of protein as one egg to a child and, perhaps greater yet, a feeling of love. Because many of these children have never received a gift, we wrap each bar with love and deliver a smile through our bubbly ostrich friend, Boing."] })] })] }) }) }));
};
export default Support;
