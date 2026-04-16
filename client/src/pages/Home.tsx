import BeingSocial from "../components/Home/BeingSocial"
import DonationBanner from "../components/Home/Donationbanner"
import Hero from "../components/Home/Hero"
import Mission from "../components/Home/Mission"
import OurCauses from "../components/Home/OurCause"
import RealChange from "../components/Home/RealChange"
import Stats from "../components/Home/Stats"
import Support from "../components/Home/Support"
import Vision from "../components/Home/Vision"
import Year2024 from "../components/Home/Year2024"



const Home = () => {
  return (
    <div>
      <Hero />
      {/* <OrangeSection /> */}
      <Mission />
      {/* <Support/> */}
      <Stats />
      <Year2024 />
      <Vision />
      <RealChange />
      <Support />
      <OurCauses />
      <DonationBanner />
      <BeingSocial/>
    </div>
  )
}

export default Home
