import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girlImage from "../../assets/girl5.jpg";
gsap.registerPlugin(ScrollTrigger);
const Year2024 = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const dotlineRef = useRef(null);
    const imageRef = useRef(null);
    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);
    const count4Ref = useRef(null);
    const count5Ref = useRef(null);
    const count6Ref = useRef(null);
    const labelRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    const stats = useMemo(() => [
        { ref: count1Ref, target: 309025, color: "var(--text-orange)", label: "protein energy bars donated", format: "comma" },
        { ref: count2Ref, target: 14, color: "var(--text-purple-dark)", label: "locations/causes", format: "plain" },
        { ref: count3Ref, target: 3000, prefix: "~", color: "var(--text-yellow)", label: "children supported", format: "comma" },
        { ref: count4Ref, target: 100, suffix: "%", color: "var(--text-blue-purple)", label: "of funds goes to production of Happy Bars", format: "plain" },
        { ref: count5Ref, target: 6, color: "var(--text-purple)", label: "volunteer staff", format: "plain" },
        { ref: count6Ref, target: 0, color: "var(--text-blue)", label: "paid staff", format: "plain" },
    ], []);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                    onEnter: () => {
                        stats.forEach((stat) => {
                            if (stat.target === 0) {
                                if (stat.ref.current)
                                    stat.ref.current.textContent = "0";
                                return;
                            }
                            gsap.to({ val: 0 }, {
                                val: stat.target,
                                duration: 2,
                                ease: "power2.out",
                                delay: 0.7,
                                onUpdate: function () {
                                    var _a, _b;
                                    if (!stat.ref.current)
                                        return;
                                    const v = this.targets()[0].val;
                                    let display = "";
                                    if (stat.format === "comma") {
                                        display = Math.round(v).toLocaleString();
                                    }
                                    else {
                                        display = Math.round(v).toString();
                                    }
                                    stat.ref.current.textContent =
                                        ((_a = stat.prefix) !== null && _a !== void 0 ? _a : "") + display + ((_b = stat.suffix) !== null && _b !== void 0 ? _b : "");
                                },
                            });
                        });
                    },
                },
                defaults: { ease: "power3.out" },
            });
            tl.fromTo(titleRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 })
                .fromTo(dotlineRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "center center" }, "-=0.2")
                .fromTo(imageRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
                .fromTo([count1Ref.current, count2Ref.current, count3Ref.current,
                count4Ref.current, count5Ref.current, count6Ref.current], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.4")
                .fromTo(labelRefs.map(r => r.current), { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, "-=0.3");
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
    }, [stats]);
    return (_jsx("div", { className: "w-full overflow-hidden flex justify-center", style: { background: "#ffffff" }, children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsxs("section", { ref: sectionRef, className: "w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 px-4 sm:px-6 md:px-8 lg:px-12", children: [_jsxs("div", { className: "inline-flex flex-col items-center justify-center", style: { width: "fit-content" }, children: [_jsxs("h2", { ref: titleRef, className: "text-4xl sm:text-5xl md:text-6xl font-bold text-center", children: [_jsx("span", { style: { color: "var(--text-purple-dark)" }, children: "Year " }), _jsx("span", { style: { color: "var(--text-yellow)" }, children: "2024" })] }), _jsx("div", { ref: dotlineRef, className: "-mt-1", style: {
                                    height: "6px",
                                    width: "100%",
                                    maxWidth: "300px",
                                    backgroundImage: "radial-gradient(circle, var(--text-purple-dark) 3px, transparent 1.5px)",
                                    backgroundSize: "10px 6px",
                                } })] }), _jsxs("div", { className: "w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 xl:gap-16", children: [_jsx("div", { className: "flex-shrink-0 w-full lg:w-auto flex justify-center", children: _jsx("img", { ref: imageRef, src: girlImage, alt: "Girl smiling", className: "rounded-2xl object-cover w-full sm:max-w-[320px] md:max-w-[450px] lg:w-[500px] h-auto lg:h-[600px]", style: {
                                        opacity: 0,
                                        boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                                    } }) }), _jsx("div", { className: "flex-1 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 w-full", children: stats.map((stat, i) => {
                                    var _a, _b;
                                    return (_jsxs("div", { className: "flex flex-col gap-1 sm:gap-2 text-center sm:text-center", children: [_jsxs("span", { ref: stat.ref, className: "font-bold block", style: {
                                                    color: stat.color,
                                                    opacity: 0,
                                                    fontSize: "clamp(2rem, 6vw, 4.5rem)",
                                                    lineHeight: 1.1,
                                                }, children: [(_a = stat.prefix) !== null && _a !== void 0 ? _a : "", "0", (_b = stat.suffix) !== null && _b !== void 0 ? _b : ""] }), _jsx("p", { ref: labelRefs[i], className: "text-xs sm:text-sm md:text-base font-medium", style: { color: "#333", opacity: 0 }, children: stat.label })] }, i));
                                }) })] })] }) }) }));
};
export default Year2024;
