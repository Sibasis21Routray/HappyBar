import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import annual from "../../assets/meet-boing.jpg";
export default function Hero() {
    return (_jsx("div", { className: "w-full bg-white overflow-hidden", children: _jsxs("div", { className: "flex flex-col lg:flex-row items-stretch min-h-[520px]", children: [_jsxs("div", { className: "relative lg:flex-shrink-0 w-full lg:w-[800px]", children: [_jsx("div", { className: "absolute top-0 left-0 right-0", style: {
                                height: "clamp(40px, 8vw, 130px)",
                                background: "#FF8154"
                            } }), _jsx("div", { className: "relative z-10 px-4 sm:px-8 lg:pl-28 pt-6 pb-10", children: _jsx("img", { src: annual, alt: "Happy child", className: "w-full object-cover object-top rounded-4xl" }) })] }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("div", { className: "flex items-center justify-center px-4 lg:bg-[#FF8154]", style: {
                                height: "clamp(60px, 10vw, 130px)",
                                flexShrink: 0
                            }, children: _jsx("h1", { className: "w-full text-center text-black font-bold tracking-tight", style: {
                                    fontSize: "clamp(2rem, 5vw, 4.5rem)",
                                    lineHeight: 1.2
                                }, children: "The Boing Logs (Blogs)" }) }), _jsxs("div", { className: "flex flex-col justify-center items-center text-center py-10 sm:py-14 px-6 sm:px-8 lg:px-10", style: { flex: 1 }, children: [_jsx("p", { className: "leading-relaxed mb-8 max-w-2xl text-sm sm:text-base md:text-lg", style: { color: "#1a1a1a" }, children: "Happy Bar Nutrition's blog serves as a vibrant hub where we share regular updates and heartwarming stories from our various initiatives. Here, you can find posts about our latest activities, progress reports on how your contributions are helping children receive nutritious Happy Bars, and insights into our diverse programs. Each entry is designed to keep our supporters informed and engaged, showcasing the tangible impact of their generosity on the communities we serve. Whether you're looking to catch up on recent developments or discover more about our mission, our blog is your go-to source for all the latest news." }), _jsxs("p", { className: "font-bold max-w-lg text-xs sm:text-sm md:text-base", style: { color: "var(--link-blue)", lineHeight: 1.5 }, children: [_jsx("a", { href: "/", children: "Happy Bar Nutrition" }), " ", _jsx("span", { style: { color: "var(--text-purple)" }, children: "Inc. (est. 2016) is a US 501(c)(3) non-profit organisation" })] })] })] })] }) }));
}
