import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from "react";
const RealChange = () => {
    const sectionRef = useRef(null);
    return (_jsx(_Fragment, { children: _jsxs("section", { ref: sectionRef, className: "w-full px-12 md:px-20 py-16 flex flex-col items-center gap-2", style: { background: "#ffffff" }, children: [_jsx("div", { style: { textAlign: "center", width: "fit-content" }, children: _jsxs("h2", { className: "text-7xl md:text-7xl font-bold leading-tight", style: { color: "var(--text-purple-dark)" }, children: [_jsxs("div", { children: ["Make A ", _jsx("span", { style: { color: "var(--text-yellow)" }, children: "Real Change" }), " In Someone's Life"] }), _jsx("div", { className: "-mt-2", style: {
                                    height: "6px",
                                    width: "100%",
                                    // marginTop: "4px",
                                    backgroundImage: "radial-gradient(circle, #6B2A6B 3px, transparent 1.5px)",
                                    backgroundSize: "10px 6px",
                                } })] }) }), _jsx("p", { style: { color: "#555", fontSize: "20px", marginTop: "10px" }, children: "Take the first step by watching these videos" }), _jsx("div", { style: {
                        width: "100%",
                        maxWidth: "1100px",
                        // borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                    }, children: _jsx("div", { style: { position: "relative", paddingTop: "56.25%" }, children: _jsx("iframe", { src: "https://www.youtube.com/embed/srSoRImGc4o", title: "Feeding children in under-privileged societies", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: "none",
                            } }) }) })] }) }));
};
export default RealChange;
