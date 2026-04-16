import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import nutritionImg1 from "../../assets/nutritionImg1.jpg";
import nutritionImg2 from "../../assets/nutritionImg2.jpg";
import nutritionImg3 from "../../assets/nutritionImg3.jpg";
export default function Nutrition() {
    const [showShare, setShowShare] = useState(false);
    const [copyLabel, setCopyLabel] = useState("Copy link");
    const [fullscreen, setFullscreen] = useState(false);
    const infogramLoaded = useRef(false);
    useEffect(() => {
        if (infogramLoaded.current)
            return;
        infogramLoaded.current = true;
        const script = document.createElement("script");
        script.async = true;
        script.id = "infogram-async";
        script.src = "https://e.infogram.com/js/dist/embed-loader-min.js";
        document.head.appendChild(script);
        return () => {
            const existing = document.getElementById("infogram-async");
            if (existing)
                existing.remove();
        };
    }, []);
    const CHART_URL = "https://infogram.com/1p1rmg6gjzxkrycmz763l9ljl7a61dymlv9";
    function handleCopy() {
        navigator.clipboard
            .writeText(CHART_URL)
            .then(() => {
            setCopyLabel("Copied!");
            setTimeout(() => setCopyLabel("Copy link"), 2000);
        })
            .catch(() => {
            setCopyLabel("Copied!");
            setTimeout(() => setCopyLabel("Copy link"), 2000);
        });
    }
    return (_jsxs("div", { className: "w-full overflow-x-hidden", style: { background: "var(--dark-p3)" }, id: "nutrition", children: [_jsx("div", { className: "w-full flex justify-center", children: _jsx("div", { className: "w-full max-w-10/12 px-4 sm:px-6 md:px-8 lg:px-0 py-12 md:py-16 lg:py-20", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:gap-0 items-start", children: [_jsxs("div", { className: "hidden lg:flex flex-col w-full lg:w-[45%] xl:w-[50%] 2xl:w-[55%] mx-12", children: [_jsx("div", { className: "w-full rounded-xl overflow-hidden mb-6", children: _jsx("img", { src: nutritionImg1, alt: "Child nutrition", className: "w-full h-auto object-cover", style: { height: "auto", minHeight: "300px", maxHeight: "70vh" } }) }), _jsx("div", { className: "w-full rounded-xl overflow-hidden mb-6", children: _jsx("img", { src: nutritionImg2, alt: "Children group", className: "w-full h-auto object-cover", style: { height: "auto", minHeight: "250px", maxHeight: "50vh" } }) })] }), _jsxs("div", { className: "flex-1 w-full lg:w-[55%] xl:w-[50%] 2xl:w-[45%] lg:pl-0", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-6 lg:hidden", children: [_jsx("div", { className: "w-full sm:w-1/2", children: _jsx("img", { src: nutritionImg1, alt: "Child nutrition", className: "w-full h-[300px] object-cover rounded-xl" }) }), _jsx("div", { className: "w-full sm:w-1/2", children: _jsx("img", { src: nutritionImg2, alt: "Children group", className: "w-full h-[300px] object-cover rounded-xl" }) })] }), _jsxs("div", { className: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", children: [_jsx("div", { className: "text-center mb-6 md:mb-8", children: _jsxs("div", { style: { width: "fit-content", margin: "0 auto" }, children: [_jsx("h1", { className: "font-black leading-none", style: { color: "#D4A017", fontSize: "clamp(2rem, 8vw, 3.5rem)" }, children: _jsx("span", { className: "block", children: _jsx("span", { style: { color: "var(--text-yellow)" }, children: "Nutrition" }) }) }), _jsx("div", { className: "mt-0", style: {
                                                                opacity: 1,
                                                                height: "6px",
                                                                width: "100%",
                                                                backgroundImage: "radial-gradient(circle, #fff 3px, transparent 1.5px)",
                                                                backgroundSize: "10px 6px",
                                                            } })] }) }), _jsx("p", { className: "mb-4 font-semibold text-base sm:text-lg md:text-xl", style: { color: "#fff" }, children: "As per a UNICEF/WHO/World Bank 2023 Report :-" }), _jsxs("p", { className: "mb-3 font-semibold text-base sm:text-lg leading-relaxed", style: { lineHeight: 1.7 }, children: [_jsx("span", { style: { color: "var(--text-yellow)", fontWeight: 700 }, children: "Stunting" }), "* affects 148.1 million children under 5 (52% of the children are in Asia)."] }), _jsxs("p", { className: "mb-3 font-semibold text-base text-white sm:text-lg leading-relaxed", style: { lineHeight: 1.7 }, children: [_jsx("span", { style: { color: "var(--bg-orange)", fontWeight: 700 }, children: "Wasting" }), "** affects 45 million children under 5 (70% of the children are in South Asia)."] }), _jsxs("p", { className: "mb-5 font-semibold text-base text-white sm:text-lg leading-relaxed", style: { lineHeight: 1.7 }, children: [_jsx("span", { style: { color: "var(--link-blue)", fontWeight: 700 }, children: "Overweight" }), "*** affects 37 million children under 5 (48% of the children are in South Asia)."] }), _jsx("p", { className: "mb-3 text-sm sm:text-base", style: { color: "var(--text-yellow)", lineHeight: 1.6 }, children: "* Stunting refers to a child who is too short for his or her age. Stunting is the failure to grow both physically and cognitively and is the result of chronic or recurrent malnutrition. The devastating effects of stunting can last a lifetime." }), _jsx("p", { className: "mb-3 text-sm sm:text-base", style: { color: "var(--bg-orange)", lineHeight: 1.6 }, children: "** Overweight refers to a child who is too heavy for his or her height. This form of malnutrition results from expending too few calories for the amount consumed from food and drinks and increases the risk of noncommunicable diseases later in life." }), _jsx("p", { className: "mb-6 text-sm sm:text-base", style: { color: "var(--link-blue)", lineHeight: 1.6 }, children: "*** Wasting refers to a child who is too thin for his or her height. Wasting, or acute malnutrition, is the result of recent rapid weight loss or the failure to gain weight. A child who is moderately or severely wasted has an increased risk of death, but treatment is possible." }), _jsx("div", { className: "w-full mb-6", children: _jsx("img", { src: nutritionImg3, alt: "Malnourished children", className: "w-full h-auto object-cover rounded-xl", style: { maxHeight: "400px" } }) }), _jsxs("p", { className: "mb-4 text-base sm:text-lg leading-relaxed", style: { color: "#fff" }, children: ["Globally,", " ", _jsx("strong", { className: "text-yellow-400", children: "1 in 5 deaths among children under the age of 5 is attributed to severe wasting" }), "."] }), _jsx("p", { className: "mb-4 text-base sm:text-lg leading-relaxed", style: { color: "#fff" }, children: "Poor nutrition during the first 1,000 days of a child's life can lead to stunted growth, which is associated with impaired cognitive abilities and reduced school performance. Diets high in carbohydrates and low in proteins are common among poorer populations worldwide." }), _jsx("p", { className: "mb-6 text-base sm:text-lg leading-relaxed", style: { color: "#fff" }, children: "Proteins are essential for the development of all cells. They help a child produce enzymes and hormones, and are crucial for building muscle, skin, and bones." }), _jsxs("div", { className: "w-full rounded-xl overflow-hidden mb-2", style: { background: "#fff", border: "1px solid rgba(255,255,255,0.15)" }, children: [showShare && (_jsxs("div", { style: {
                                                            padding: "12px 14px",
                                                            background: "#fafafa",
                                                            borderBottom: "1px solid #e0e0e0",
                                                        }, children: [_jsx("p", { style: { fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 8 }, children: "Share this chart" }), _jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }, children: [_jsx("input", { readOnly: true, value: CHART_URL, style: {
                                                                            flex: 1,
                                                                            minWidth: 180,
                                                                            fontSize: 11,
                                                                            padding: "6px 8px",
                                                                            borderRadius: 6,
                                                                            border: "1px solid #ccc",
                                                                            background: "#fff",
                                                                            color: "#333",
                                                                            outline: "none",
                                                                        } }), _jsx("button", { onClick: handleCopy, style: {
                                                                            background: "#D4A017",
                                                                            border: "none",
                                                                            borderRadius: 6,
                                                                            padding: "6px 12px",
                                                                            cursor: "pointer",
                                                                            fontSize: 11,
                                                                            color: "#fff",
                                                                            fontWeight: 600,
                                                                            whiteSpace: "nowrap",
                                                                        }, children: copyLabel })] }), _jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: [
                                                                    {
                                                                        label: "X / Twitter",
                                                                        href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(CHART_URL)}&text=Joint+Child+Malnutrition+Estimates+2023`,
                                                                    },
                                                                    {
                                                                        label: "LinkedIn",
                                                                        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(CHART_URL)}`,
                                                                    },
                                                                    {
                                                                        label: "Facebook",
                                                                        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(CHART_URL)}`,
                                                                    },
                                                                ].map(({ label, href }) => (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", style: {
                                                                        fontSize: 11,
                                                                        color: "#2FA8D5",
                                                                        border: "1px solid #ddd",
                                                                        padding: "4px 10px",
                                                                        borderRadius: 6,
                                                                        textDecoration: "none",
                                                                    }, children: label }, label))) })] })), _jsx("div", { className: "infogram-embed", "data-id": "1p1rmg6gjzxkrycmz763l9ljl7a61dymlv9", "data-type": "interactive", "data-title": "JME-Global-Estimates-2023-1", style: { width: "100%" } })] }), _jsxs("p", { className: "text-xs sm:text-sm leading-relaxed mt-2 pb-4", style: { color: "#ccc" }, children: ["To see the latest publication on the Joint Child Malnutrition Estimates, 2023 edition, access", " ", _jsx("a", { href: "https://www.who.int/teams/nutrition-and-food-safety/monitoring-nutritional-status-and-food-safety-and-events/joint-child-malnutrition-estimates", target: "_blank", rel: "noopener noreferrer", style: { color: "#2FA8D5", fontWeight: 600 }, children: "here" }), "."] })] })] })] }) }) }), fullscreen && (_jsxs("div", { style: {
                    position: "fixed",
                    inset: 0,
                    background: "#000",
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                }, children: [_jsxs("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px 18px",
                            background: "#111",
                            flexShrink: 0,
                            flexWrap: "wrap",
                            gap: 10,
                        }, children: [_jsx("span", { style: { color: "#ccc", fontSize: 13 }, children: "Joint Child Malnutrition Estimates, 2023 \u2014 UNICEF/WHO/World Bank" }), _jsx("button", { onClick: () => setFullscreen(false), style: {
                                    background: "transparent",
                                    border: "1px solid #444",
                                    borderRadius: 8,
                                    padding: "5px 16px",
                                    color: "#ccc",
                                    cursor: "pointer",
                                    fontSize: 13,
                                }, children: "\u2715 Close" })] }), _jsx("iframe", { src: CHART_URL, frameBorder: "0", allowFullScreen: true, title: "JME Global Estimates 2023", style: { flex: 1, width: "100%", border: "none" } })] }))] }));
}
