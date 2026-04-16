import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home"
import WhoWeAre from "./pages/WhoWeAre"
import Blog from "./pages/Blog"
import BlogDetail from "./components/Blog/BlogDetail"
import GetInTouch from "./pages/GetInTouch"
import Donate from "./pages/Donate"
import WhatWeDo from "./pages/WhatWeDo"
import GetInvolved from "./pages/GetInvolved"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AnnualReports from "./pages/AnnualReports"
import ScrollToTop from "./components/ScrollToTop"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfServices from "./pages/TermsOfServices"

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.slice(1) // Remove '#' from hash
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [location])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToHash />
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/annual-reports" element={<AnnualReports />} />
        <Route path="*" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfServices />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
