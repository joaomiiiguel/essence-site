'use client'
import AboutComp from "../components/home/AboutComp"
import BannerCover from "../components/home/BannerCover"
import BoxContatWhat from "../components/home/BoxContatWhat"
import ListClients from "../components/home/ListClients"
import PortifolioComp from "../components/home/PortifolioComp"
import ServiceComp from "../components/home/ServiceComp"

function Home() {

  return (
    <main className="max-w-screen overflow-hidden min-h-screen text-white ">
      <BannerCover />
      <AboutComp />
      <ServiceComp />
      <PortifolioComp />
      <ListClients />
      <BoxContatWhat />
    </main>
  )
}

export default Home;
