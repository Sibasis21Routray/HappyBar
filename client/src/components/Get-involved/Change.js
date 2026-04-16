import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const cards = [
    {
        id: "donate",
        bg: "#6b2047",
        title: "DONATE",
        desc: "Make a tax deductible donation",
        buttons: [
            { label: "Donate With PayPal", style: "yellow", url: "" },
            { label: "Donate With Stripe", style: "purple", url: "" },
        ],
        icon: (_jsxs("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: [_jsx("text", { x: "18", y: "16", textAnchor: "middle", fontSize: "14", fontWeight: "900", fill: "#6b2047", children: "$" }), _jsx("path", { d: "M4 28 C4 20 10 16 18 16 C26 16 32 20 32 28", stroke: "#6b2047", strokeWidth: "2.5", fill: "none", strokeLinecap: "round" }), _jsx("path", { d: "M2 30h32", stroke: "#6b2047", strokeWidth: "2.5", strokeLinecap: "round" }), _jsx("path", { d: "M10 30 Q18 24 26 30", stroke: "#6b2047", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", opacity: "0.4" })] })),
    },
    {
        id: "fundraiser",
        bg: "#5a5ec7",
        title: "SHARE/CREATE A FUNDRAISER",
        desc: "Invite friends and family to join the cause",
        buttons: [
            { label: "Share Our Fundraiser", style: "orange", url: "https://www.gofundme.com/f/help-kids-like-joshua-fight-scid-cancer?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer" },
            { label: "Start A Fundraiser", style: "orange", url: "https://www.gofundme.com/create/fundraiser/category" },
        ],
        icon: (_jsxs("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: [_jsx("ellipse", { cx: "13", cy: "18", rx: "10", ry: "8", stroke: "#5a5ec7", strokeWidth: "2", fill: "none" }), _jsx("ellipse", { cx: "26", cy: "13", rx: "8", ry: "7", stroke: "#5a5ec7", strokeWidth: "2", fill: "#fff" }), _jsx("text", { x: "26", y: "17", textAnchor: "middle", fontSize: "10", fontWeight: "900", fill: "#5a5ec7", children: "$" })] })),
    },
    {
        id: "speak",
        bg: "#cc5533",
        title: "INVITE US TO SPEAK",
        desc: "or refer us to other organisations",
        buttons: [{ label: "Invite Us", style: "orange", url: "/get-in-touch" }],
        icon: (_jsxs("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: [_jsx("ellipse", { cx: "18", cy: "15", rx: "12", ry: "9", stroke: "#cc5533", strokeWidth: "2", fill: "none" }), _jsx("path", { d: "M14 24 L10 30 L20 26", stroke: "#cc5533", strokeWidth: "2", fill: "none", strokeLinejoin: "round" }), _jsx("circle", { cx: "24", cy: "24", r: "6", fill: "#fff", stroke: "#cc5533", strokeWidth: "2" }), _jsx("circle", { cx: "24", cy: "24", r: "3.5", fill: "#e06030" })] })),
    },
    {
        id: "sponsor",
        bg: "#c03070",
        title: "SPONSOR",
        desc: "Sponsor a child or a group of children with nutritious Energy Bars",
        buttons: [{ label: "Sponsor A Child", style: "orange", url: "/get-involved" }],
        icon: (_jsxs("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: [_jsx("circle", { cx: "18", cy: "10", r: "5", fill: "#c03070" }), _jsx("circle", { cx: "8", cy: "14", r: "4", fill: "#c03070", opacity: "0.6" }), _jsx("circle", { cx: "28", cy: "14", r: "4", fill: "#c03070", opacity: "0.6" }), _jsx("path", { d: "M9 30c0-5 4-9 9-9s9 4 9 9", stroke: "#c03070", strokeWidth: "2.5", fill: "none" }), _jsx("path", { d: "M2 30c0-3.5 2.5-6 7-7", stroke: "#c03070", strokeWidth: "2", fill: "none", opacity: "0.6" }), _jsx("path", { d: "M34 30c0-3.5-2.5-6-7-7", stroke: "#c03070", strokeWidth: "2", fill: "none", opacity: "0.6" })] })),
    },
    {
        id: "develop",
        bg: "#5c2d8c",
        title: "DEVELOP MATERIAL",
        desc: "Help us create material that will aid in our fund-raising efforts",
        buttons: [{ label: "Invite Us", style: "orange", url: "/get-in-touch" }],
        icon: (_jsxs("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: [_jsx("rect", { x: "8", y: "5", width: "20", height: "26", rx: "3", stroke: "#5c2d8c", strokeWidth: "2", fill: "none" }), _jsx("line", { x1: "13", y1: "13", x2: "23", y2: "13", stroke: "#5c2d8c", strokeWidth: "2", strokeLinecap: "round" }), _jsx("line", { x1: "13", y1: "18", x2: "23", y2: "18", stroke: "#5c2d8c", strokeWidth: "2", strokeLinecap: "round" }), _jsx("line", { x1: "13", y1: "23", x2: "19", y2: "23", stroke: "#5c2d8c", strokeWidth: "2", strokeLinecap: "round" })] })),
    },
    {
        id: "partner",
        bg: "#29a8e0",
        title: "PARTNER WITH US",
        desc: "Work with us for your CSR programme or collaborate in other ways",
        buttons: [{ label: "Invite Us", style: "orange", url: "/get-in-touch" }],
        icon: (_jsxs("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: [_jsx("path", { d: "M8 22 C10 16 14 12 18 14 C22 16 26 10 28 8", stroke: "#29a8e0", strokeWidth: "2.5", fill: "none", strokeLinecap: "round" }), _jsx("circle", { cx: "8", cy: "22", r: "4", fill: "#29a8e0" }), _jsx("circle", { cx: "28", cy: "8", r: "4", fill: "#29a8e0" }), _jsx("path", { d: "M16 20 L20 26", stroke: "#29a8e0", strokeWidth: "2.5", strokeLinecap: "round" }), _jsx("circle", { cx: "16", cy: "20", r: "2", fill: "#29a8e0" }), _jsx("circle", { cx: "20", cy: "26", r: "2", fill: "#29a8e0" })] })),
    },
];
const DARK_PINK = "#99355a";
const buttonBaseStyle = {
    padding: "0.48rem 0.7rem",
    borderRadius: "999px",
    border: "none",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    maxWidth: "200px",
    transition: "background 0.2s, color 0.2s",
    letterSpacing: "0.01em",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
};
const buttonDefaultColors = {
    yellow: { background: "#e6a817", color: "#3a1a00" },
    purple: { background: "#7070d8", color: "#fff" },
    orange: { background: "#e06030", color: "#fff" },
};
const buttonHoverStyle = {
    background: DARK_PINK,
    color: "#fff",
};
function CardButton({ label, style, url }) {
    const [hovered, setHovered] = useState(false);
    const handleClick = () => {
        if (url.startsWith('http')) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
        else {
            if (typeof window !== 'undefined') {
                window.location.href = url;
            }
        }
    };
    return (_jsx("button", { style: Object.assign(Object.assign({}, buttonBaseStyle), (hovered ? buttonHoverStyle : buttonDefaultColors[style])), onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), onClick: handleClick, children: label }));
}
function Card({ card }) {
    return (_jsxs("div", { style: {
            background: card.bg,
            borderRadius: "38px",
            padding: "1.5rem 1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "0.5rem",
            minHeight: "400px",
            height: "auto",
        }, children: [_jsx("div", { style: {
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.5rem",
                    flexShrink: 0,
                }, children: card.icon }), _jsx("p", { style: {
                    margin: 0,
                    fontWeight: 900,
                    fontSize: "clamp(1.5rem, 3vw, 0.95rem)",
                    color: "#fff",
                    letterSpacing: "0.04em",
                    lineHeight: 1.25,
                }, children: card.title }), _jsx("p", { style: {
                    margin: "0.1rem 0 0.4rem",
                    fontSize: "clamp(1.2rem, 2.5vw, 0.8rem)",
                    color: "#e6a817",
                    lineHeight: 1.45,
                    padding: "0 0.5rem",
                }, children: card.desc }), _jsx("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "100%",
                    marginTop: "0.25rem",
                }, children: card.buttons.map((btn) => (_jsx(CardButton, { label: btn.label, style: btn.style, url: btn.url }, btn.label))) })] }));
}
export default function Change() {
    return (_jsxs("div", { style: {
            background: "#f2d6e0",
            padding: "2rem 1rem 3rem",
            fontFamily: "sans-serif",
            minHeight: "100vh",
            boxSizing: "border-box",
            width: "100%",
        }, children: [_jsxs("div", { className: "mx-auto", style: { maxWidth: "1500px" }, children: [_jsx("div", { style: { display: "flex", justifyContent: "center", marginBottom: "0.75rem", padding: "0 1rem" }, children: _jsxs("div", { style: { textAlign: "center" }, children: [_jsxs("h2", { style: {
                                        margin: 0,
                                        fontWeight: 900,
                                        fontSize: "clamp(2rem, 8vw, 3.2rem)",
                                        color: "#1a1a1a",
                                        lineHeight: 1.1,
                                    }, children: ["Let's Make A", " ", _jsx("span", { style: { color: "#e6a817", whiteSpace: "nowrap" }, children: "Change" })] }), _jsx("div", { style: {
                                        marginTop: "10px",
                                        height: "6px",
                                        width: "100%",
                                        backgroundImage: "radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px)",
                                        backgroundSize: "10px 6px",
                                    } })] }) }), _jsx("p", { style: {
                            textAlign: "center",
                            fontWeight: 700,
                            fontSize: "clamp(0.9rem, 3vw, 1rem)",
                            color: "#1a1a1a",
                            margin: "1.2rem 0 1.8rem",
                            padding: "0 1rem",
                        }, children: "Here are some ways you can get involved:" }), _jsx("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "2rem",
                            padding: "0 0.5rem",
                        }, children: cards.map((card) => (_jsx(Card, { card: card }, card.id))) })] }), _jsx("style", { children: `
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      ` })] }));
}
