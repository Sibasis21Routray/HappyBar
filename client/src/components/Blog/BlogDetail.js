import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
// Lazy load all blog components
const EmpathyBlog = lazy(() => import("../Blog/detailPage/EmpathyBlog"));
const TreeLineBlog = lazy(() => import("../Blog/detailPage/TreeLineBlog"));
const LeprosyImpactBlog = lazy(() => import("../Blog/detailPage/LeprosyImpactBlog"));
const AnnualReportBlog = lazy(() => import("../Blog/detailPage/AnnualReportBlog"));
const BarsSupportBlog = lazy(() => import("../Blog/detailPage/BarsSupportBlog"));
const BlogDetail = () => {
    const { slug } = useParams();
    // Map slugs to their respective components
    const blogComponents = {
        "empathy-in-classroom": EmpathyBlog,
        "tree-line-journey": TreeLineBlog,
        "leprosy-international-impact": LeprosyImpactBlog,
        "annual-report-2023": AnnualReportBlog,
        "81000-bars-support": BarsSupportBlog,
    };
    const BlogComponent = slug ? blogComponents[slug] : null;
    if (!BlogComponent) {
        return (_jsxs("div", { className: "w-full bg-white py-24 text-center", children: [_jsx("p", { className: "text-xl font-semibold text-stone-900", children: "Blog post not found." }), _jsx(Link, { to: "/blog", className: "mt-4 inline-block text-[#f92c8b] hover:underline", children: "Back to blog" })] }));
    }
    return (_jsx(Suspense, { fallback: _jsx("div", { className: "w-full bg-white py-24 text-center", children: _jsx("p", { className: "text-xl font-semibold text-stone-900", children: "Loading..." }) }), children: _jsx(BlogComponent, {}) }));
};
export default BlogDetail;
