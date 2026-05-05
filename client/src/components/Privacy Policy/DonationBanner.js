import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import children2 from "../../assets/children2.jpg";
const heroImage = children2;
const stripeLink = import.meta.env.VITE_STRIPE_USD_94_PER_YEAR;
const paypalLink = import.meta.env.VITE_PAYPAL_USD_94_PER_YEAR;
export default function DonationBanner() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8", style: { background: "var(--dark-p4)" }, children: _jsxs("div", { className: "max-w-5xl mx-auto rounded-2xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12", style: { background: "var(--bg-p4)" }, children: [_jsxs("div", { className: "flex-1 text-center w-full", children: [_jsx("h2", { className: "text-white font-bold leading-tight mb-4 sm:mb-6", style: { fontSize: "clamp(1.8rem, 5vw, 2.6rem)" }, children: "Make a lasting impact!" }), _jsxs("p", { className: "text-white font-semibold mb-6 sm:mb-8 leading-snug px-2", style: { fontSize: "clamp(1.1rem, 4vw, 1.75rem)" }, children: ["Just", _jsx("span", { style: { color: "var(--text-yellow)" }, children: " US$ 94" }), " provides a child with an energy bar every day for ", _jsx("span", { style: { color: "var(--text-yellow)" }, children: " a whole year" })] }), _jsx("button", { className: "block mx-auto mb-4 font-bold rounded-full cursor-pointer transition hover:opacity-90 w-full sm:w-auto", style: {
                                    background: "var(--button-yellow)",
                                    color: "#000000",
                                    fontSize: "clamp(0.9rem, 3vw, 1rem)",
                                    padding: "10px 0",
                                    border: "none",
                                    width: "min(260px, 100%)",
                                    maxWidth: 260,
                                }, onClick: () => window.open(paypalLink, "_blank"), children: "Donate With PayPal" }), _jsx("button", { className: "block mx-auto font-bold rounded-full cursor-pointer transition hover:opacity-90 w-full sm:w-auto", style: {
                                    background: "var(--button-blue)",
                                    color: "#ffffff",
                                    fontSize: "clamp(0.9rem, 3vw, 1rem)",
                                    padding: "10px 0",
                                    border: "none",
                                    width: "min(260px, 100%)",
                                    maxWidth: 260,
                                }, onClick: () => window.open(stripeLink, "_blank"), children: "Donate With Stripe" })] }), _jsx("div", { className: "flex-shrink-0 w-full lg:w-auto", children: _jsx("img", { src: "https://happybarnutrition.org/wp-content/uploads/2024/06/biy-with-big-smile-1-scaled-1.webp", alt: "Child in need", className: "w-full object-cover", style: {
                                borderRadius: "1rem",
                                height: "auto",
                                maxHeight: 300,
                                width: "100%",
                                maxWidth: 420,
                                margin: "0 auto"
                            } }) })] }) }) }));
}
