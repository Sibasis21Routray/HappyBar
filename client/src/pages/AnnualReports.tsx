import AnnualReport from "../components/Annual-report/AnnualReport"
import DonationBanner from "../components/Annual-report/Donationbanner"
import Hero from "../components/Annual-report/Hero"
import JoinMission from "../components/Annual-report/JoinMission"
import OurCauses from "../components/Annual-report/OurCauses"
import RealChange from "../components/Annual-report/RealChange"
import Stats from "../components/Annual-report/Stats"
import Year2024 from "../components/Annual-report/Year2024"



const AnnualReports = () => {
  return (
    <div>
     <Hero/>
     <AnnualReport/>
     <Stats/>
     <Year2024/>
 <OurCauses/>
 <DonationBanner/>
 <RealChange/>
 <JoinMission/>
    </div>
  )
}

export default AnnualReports
