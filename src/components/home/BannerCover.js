import React from 'react'
import { CaretDoubleDown, MouseSimple } from "@phosphor-icons/react";

export default function BannerCover() {
    return (
        <div className="relative flex flex-col justify-end items-end h-screen bg-black">
            <video className="myVideoBg" crossOrigin="Anonymous" src='http://localhost:3000/assets/paneauSite.mp4' id='video' width='400' height='360' autoPlay muted loop type="video/mp4" />
            <div className=" absolute px-28 py-24">
                <p className="text-4xl font-medium">Boostez les résultats de votre vidéo</p>
                <p className="font-light tracking-widest text-right mb-[30%]">Renforcer la communication avec la <br />créativité et l'innovation</p>
            </div>
            <div className="absolute flex flex-col items-center bottom-[5%] right-[50%]">
                <MouseSimple size={36} weight="light" />
                <CaretDoubleDown className="animate-bounce mt-2" size={25} weight="light" />
            </div>
        </div>
    )
}
