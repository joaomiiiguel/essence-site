'use client'
import AboutComp from "../components/AboutComp"
import BannerCover from "../components/BannerCover"

export default function Home() {

  return (
    <main className="w-full min-h-screen text-white ">
      <BannerCover/>
      <AboutComp/>
    </main>
  )
}
