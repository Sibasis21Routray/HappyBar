
import Change from "../components/Get-involved/Change"
import DonationBanner from "../components/Get-involved/Donationbanner"
import Hero from "../components/Get-involved/Hero"
import OurCauses from "../components/Get-involved/OurCauses"
import Year2024 from "../components/What-we-do/Year2024"

const GetInvolved = () => {
  return (
    <div>
      <Hero/>
      <Change/>
      <OurCauses/>
      <Year2024/>
        {/* ── Multi-color Wave ── */}
      <div className="relative -mt-1 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "120px" }}
        >
          <rect width="1440" height="120" fill="#ffffff" />
          <path
            d="M0,20 C300,80 700,0 1000,50 C1200,80 1350,20 1440,40 L1440,120 L0,120 Z"
            fill="var(--light-p1)"
            opacity="0.5"
          />
          <path
            d="M0,45 C200,10 500,75 800,35 C1050,5 1280,65 1440,30 L1440,120 L0,120 Z"
            fill="var(--mid-p1)"
            opacity="0.7"
          />
          <path
            d="M0,65 C250,30 600,90 900,55 C1100,30 1300,75 1440,55 L1440,120 L0,120 Z"
            fill="var(--dark-p1)"
          />
        </svg>
       <DonationBanner/>
      </div>
    </div>
  )
}

export default GetInvolved
