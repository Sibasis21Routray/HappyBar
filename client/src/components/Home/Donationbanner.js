import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import boy2 from "../../assets/boy2.jpg";
const heroImage = boy2;
export default function DonationBanner() {
    return (
    /* ── Outer wrapper: page-level background + padding ── */
    _jsx("div", { className: "w-full overflow-hidden flex justify-center", style: { background: "var(--dark-p1)" }, children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsx("div", { className: "w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8", children: _jsxs("div", { className: "w-full max-w-6xl mx-auto rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-stretch gap-8 md:gap-10 lg:gap-12", style: { background: "var(--dark-purple)" }, children: [_jsxs("div", { className: "order-2 md:order-1 flex-1 flex flex-col justify-center text-center", children: [_jsxs("h2", { className: "text-white font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-3xl md:text-4xl lg:text-5xl", children: ["Be The Hero In A Child's ", _jsx("br", {}), " Life!"] }), _jsxs("p", { className: "text-white font-semibold mb-6 sm:mb-7 md:mb-8 leading-snug text-xl md:text-2xl lg:text-4xl", children: [_jsx("span", { style: { color: "#F5C518" }, children: "US$ 94" }), " provides a child with", _jsx("br", {}), "an energy bar every day for", " ", _jsx("br", {}), _jsx("span", { style: { color: "#F5C518" }, children: "a whole year" })] }), _jsx("button", { className: "block mx-auto mb-4 font-bold rounded-full cursor-pointer transition-opacity hover:opacity-90", style: {
                                        background: "var(--button-yellow)",
                                        color: "#000000",
                                        fontSize: "clamp(0.875rem, 3vw, 1rem)",
                                        padding: "10px 0",
                                        border: "none",
                                        width: "100%",
                                        maxWidth: "260px",
                                    }, children: "Donate With PayPal" }), _jsx("button", { className: "block mx-auto font-bold rounded-full cursor-pointer transition-opacity hover:opacity-90", style: {
                                        background: "var(--button-blue)",
                                        color: "#ffffff",
                                        fontSize: "clamp(0.875rem, 3vw, 1rem)",
                                        padding: "10px 0",
                                        border: "none",
                                        width: "100%",
                                        maxWidth: "260px",
                                    }, children: "Donate With Stripe" })] }), _jsx("div", { className: "order-1 md:order-2 flex-shrink-0 w-full md:w-auto flex items-stretch justify-center", children: _jsx("img", { src: heroImage, alt: "Child in need", className: "w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] object-cover", style: {
                                    borderRadius: "1rem",
                                    height: "100%",
                                    maxHeight: "400px"
                                } }) })] }) }) }) }));
}
