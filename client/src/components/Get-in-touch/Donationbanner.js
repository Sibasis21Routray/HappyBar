import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import boy2 from "../../assets/children3.jpg";
const heroImage = boy2;
const stripeLink = import.meta.env.VITE_STRIPE_USD_8_PER_MONTH;
const paypalLink = import.meta.env.VITE_PAYPAL_USD_8_PER_MONTH;
export default function DonationBanner() {
    return (
    /* ── Outer wrapper: page-level background + padding ── */
    _jsx("div", { className: "w-full overflow-hidden flex justify-center", style: { background: "#fff" }, children: _jsx("div", { className: "w-full max-w-9xl mx-auto", children: _jsx("div", { className: "w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8", children: _jsxs("div", { className: "w-full max-w-6xl mx-auto rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12", style: { background: "#5C005E" }, children: [_jsxs("div", { className: "flex-1 text-center", children: [_jsx("h2", { className: "text-white font-bold leading-tight mb-4 sm:mb-5 md:mb-6", style: { fontSize: "clamp(1.8rem, 5vw, 2.6rem)" }, children: "Give Hope To Children" }), _jsxs("p", { className: "text-white font-semibold mb-6 sm:mb-7 md:mb-8 leading-snug", style: { fontSize: "clamp(1rem, 4vw, 1.35rem)" }, children: ["Support their journey with ", _jsx("br", {}), _jsx("span", { style: { color: "#F5C518" }, children: "just US$8 per month" })] }), _jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsxs("button", { onClick: () => window.open(paypalLink, '_blank', 'noopener,noreferrer'), className: "group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-yellow)] hover:bg-[var(--dark-p2)] hover:text-white flex items-center justify-center gap-2 px-5 py-2.5", style: {
                                                color: "#000000",
                                                fontSize: "clamp(0.875rem, 3vw, 1rem)",
                                                border: "none",
                                            }, children: [_jsx("span", { children: "Donate With PayPal" }), _jsx(ChevronRight, { className: "w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0", strokeWidth: 2.5 })] }), _jsxs("button", { onClick: () => window.open(stripeLink, '_blank', 'noopener,noreferrer'), className: "group w-full max-w-[260px] font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-[var(--button-blue)] hover:bg-[var(--dark-p2)] flex items-center justify-center gap-2 px-5 py-2.5", style: {
                                                color: "#ffffff",
                                                fontSize: "clamp(0.875rem, 3vw, 1rem)",
                                                border: "none",
                                            }, children: [_jsx("span", { children: "Donate With Stripe" }), _jsx(ChevronRight, { className: "w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0", strokeWidth: 2.5 })] })] })] }), _jsx("div", { className: "flex-shrink-0 w-full md:w-auto flex justify-center", children: _jsx("img", { src: heroImage, alt: "Child in need", className: "w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] object-cover", style: { borderRadius: "1rem", height: "auto", maxHeight: "380px" } }) })] }) }) }) }));
}
