'use client'
import AboutComp from "../components/home/AboutComp"
import BannerCover from "../components/home/BannerCover"
import PortifolioComp from "../components/home/PortifolioComp"
import ServiceComp from "../components/home/ServiceComp"

export default function Home() {

  return (
    <main className="w-full min-h-screen text-white ">
      <BannerCover/>
      <AboutComp/>
      <ServiceComp/>
      <PortifolioComp/>
    </main>
  )
}
