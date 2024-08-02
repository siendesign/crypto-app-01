import EmailCTA from "./components/EmailCTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navigation"
import TotalVolume from "./components/TotalVolume"
import TrendingNFTs from "./components/TrendingNFTs"


const page = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <TotalVolume/>
      <TrendingNFTs/>
      <HowItWorks/>
      <EmailCTA/>
      <Footer/>
    </div>
  )
}

export default page

