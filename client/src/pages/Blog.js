import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "../components/Blog/Hero";
import BlogList from "../components/Blog/BlogList";
import DonationBanner from "../components/Blog/Donationbanner";
const Blog = () => {
    return (_jsxs("div", { children: [_jsx(Hero, {}), _jsx(BlogList, {}), _jsx(DonationBanner, {})] }));
};
export default Blog;
