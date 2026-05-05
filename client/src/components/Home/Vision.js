import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import childImage from "../../assets/boy.jpg";
gsap.registerPlugin(ScrollTrigger);
const Vision = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const dotlineRef = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Text animations ──
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
                defaults: { ease: "power3.out" },
            });
            tl.fromTo(titleRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 })
                .fromTo(dotlineRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "center center" }, "-=0.2")
                .fromTo(para1Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.1")
                .fromTo(para2Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
            // ── Image: scroll-driven scale ──
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
    return (_jsx("div", { className: "w-full overflow-hidden flex justify-center", style: { background: "var(--dark-blue)" }, children: _jsx("div", { className: "w-full max-w-5xl mx-auto", children: _jsxs("section", { ref: sectionRef, className: "w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row  justify-center gap-8 ", children: [_jsxs("div", { className: "flex-1 flex flex-col gap-4 sm:gap-5 text-center", children: [_jsxs("div", { className: "w-full flex flex-col items-center justify-center", children: [_jsxs("h2", { ref: titleRef, className: "text-4xl sm:text-6xl md:text-7xl font-bold leading-tight md:leading-normal text-center", style: { opacity: 0 }, children: [_jsx("span", { className: "text-white", children: "Our " }), _jsx("span", { style: { color: "var(--text-yellow)" }, children: "Vision" })] }), _jsx("div", { ref: dotlineRef, className: " md:-mt-3", style: {
                                            opacity: 0,
                                            height: "6px",
                                            width: "100%",
                                            maxWidth: "300px",
                                            backgroundImage: "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                                            backgroundSize: "10px 6px",
                                        } })] }), _jsx("p", { ref: para1Ref, className: "text-white text-2xl sm:text-2xl md:text-3xl font-bold leading-snug text-center", style: { opacity: 0 }, children: "Nutrition for All" }), _jsxs("p", { ref: para2Ref, className: "text-white text-sm sm:text-base md:text-2xl leading-relaxed font-normal text-center max-w-2xl mx-auto", style: { opacity: 0 }, children: ["A world of communities with no ", _jsx("br", {}), " undernourished children."] })] }), _jsx("div", { className: "flex-1 flex justify-center mt-8 md:mt-10 pb-10", children: _jsx("img", { ref: imageRef, src: childImage, alt: "Happy child", className: "object-cover rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto md:h-[380px] lg:h-[500px]", style: {
                                boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
                            } }) })] }) }) }));
};
export default Vision;
