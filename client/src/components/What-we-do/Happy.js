import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import happybar from "../../assets/happybar.jpg";
gsap.registerPlugin(ScrollTrigger);
const Happy = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paraRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });
            tl.from(imageRef.current, {
                opacity: 0,
                x: -80,
                duration: 1,
            })
                .from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
            }, "-=0.5")
                .from(paraRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
            }, "-=0.4");
        }, sectionRef);
        return () => ctx.revert();
    }, []);
    return (_jsxs("section", { ref: sectionRef, className: "relative w-full bg-[#5b2d82] overflow-hidden", children: [_jsx("div", { className: "absolute top-0 left-0 w-full overflow-hidden leading-none z-10", children: _jsxs("svg", { viewBox: "0 0 1440 120", fill: "none", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none", className: "relative block w-full h-[60px] md:h-[100px]", children: [_jsx("path", { d: "M0,0 L1440,0 L1440,40 C1100,100 400,0 0,60 Z", fill: "#8E6BAE", opacity: "0.4" }), _jsx("path", { d: "M0,0 L1440,0 L1440,30 C1000,80 400,-20 0,40 Z", fill: "white" })] }) }), _jsxs("div", { className: "relative px-6 sm:px-10 md:px-20 lg:px-32 py-20 flex flex-col md:flex-row items-center gap-12", children: [_jsx("div", { className: "flex-1 flex justify-center md:justify-start", children: _jsx("img", { ref: imageRef, src: happybar, alt: "Happy bar", className: "w-full max-w-[380px] sm:max-w-[420px] h-auto md:h-[420px] object-cover rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]" }) }), _jsxs("div", { className: "flex-1 text-center md:text-left", children: [_jsxs("div", { className: "inline-block", children: [_jsxs("h2", { ref: titleRef, className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight", children: ["The Happy", " ", _jsx("span", { className: "text-yellow-400", children: "Bar" })] }), _jsx("div", { className: "mt-2 h-[6px] w-full", style: {
                                            backgroundImage: "radial-gradient(circle, #ffffff 2px, transparent 2px)",
                                            backgroundSize: "10px 6px",
                                        } })] }), _jsxs("p", { ref: paraRef, className: "mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0", children: ["Our Happy Bar delivers the same amount of protein as one egg to a child, and perhaps even greater yet, a feeling of love\u2026 and love makes you happy!", _jsx("br", {}), _jsx("br", {}), "Because many of these children have never received a gift, we wrap each bar with love and deliver a smile through our bubbly ostrich friend, Boing."] })] })] })] }));
};
export default Happy;
