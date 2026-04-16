import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import girl4 from "../../assets/girl4.jpg";
const PolicyBanner = () => {
    return (_jsx("div", { className: "w-full overflow-hidden flex justify-center", style: { background: "var(--dark-blue)" }, children: _jsx("div", { className: "w-full max-w-6xl mx-auto", children: _jsxs("section", { className: "w-full py-8  px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-1", children: [_jsx("div", { className: "flex-1 flex items-center justify-center md:justify-start rounded-3xl overflow-hidden", children: _jsx("img", { src: girl4, alt: "Happy child", className: "w-full object-fill", style: {
                                height: "auto",
                                maxHeight: "500px",
                                borderRadius: "1.5rem",
                                maxWidth: "350px",
                            } }) }), _jsx("div", { className: "flex-1 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12", children: _jsxs("div", { className: "text-center max-w-lg", children: [_jsxs("div", { style: { width: "fit-content", margin: "0 auto" }, children: [_jsxs("h2", { className: "text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight", children: [_jsx("span", { style: { color: "white" }, children: "Our " }), _jsx("span", { style: { color: "var(--text-yellow)" }, children: "Policy" })] }), _jsx("div", { className: "mb-6 -mt-4", style: {
                                                height: "6px",
                                                width: "100%",
                                                backgroundImage: "radial-gradient(circle, #ffffff 3px, transparent 1.5px)",
                                                backgroundSize: "10px 6px",
                                            } })] }), _jsx("p", { className: "text-white text-sm sm:text-base md:text-xl leading-relaxed font-medium", children: "Our company policy is to donate 100% of funds raised to produce and provide healthy, nutritional snacks to the undernourished. Private donors cover the operating expenses of the company." })] }) })] }) }) }));
};
export default PolicyBanner;
