import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// utils/renderBlock.tsx (create this helper file)
import { Link } from "react-router-dom";
const processTextWithLinks = (text) => {
    // Split the text by "Happy Bar Nutrition" and create an array of parts
    const parts = text.split(/(Happy Bar Nutrition)/g);
    return parts.map((part, index) => {
        if (part === "Happy Bar Nutrition") {
            return (_jsx(Link, { to: "/", className: "text-[#f92c8b] hover:underline font-medium", children: "Happy Bar Nutrition" }, index));
        }
        return part;
    });
};
export const renderBlock = (block, idx) => {
    switch (block.type) {
        case "text":
            return (_jsx("p", { className: "text-[20px] leading-relaxed text-stone-700", children: processTextWithLinks(block.content) }, idx));
        case "bold":
            return (_jsx("p", { className: "text-[16px] leading-relaxed font-bold text-stone-900", children: processTextWithLinks(block.content) }, idx));
        case "image":
            return (_jsx("img", { src: block.src, alt: block.alt, className: "w-150 rounded-xl shadow-md my-2" }, idx));
        case "link":
            return (_jsxs("p", { className: "mt-2", children: [block.prefix && (_jsx("span", { className: "text-sm text-stone-500", children: block.prefix })), _jsx(Link, { to: block.href, className: "text-sm font-bold text-[#f92c8b] hover:underline", children: block.label })] }, idx));
        default:
            return null;
    }
};
