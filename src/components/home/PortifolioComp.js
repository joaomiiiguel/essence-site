'use client'

import React, { useState } from 'react'
import Link from 'next/link';


import {CardPortfolio} from '../../components/CardPort'
import {ModalDetails} from '../../components/ModalDetails'

import ImgCard1 from '../../../public/assets/capa4.png'
import ImgCard2 from '../../../public/assets/capa1.png'
import ImgCard3 from '../../../public/assets/capa2.png'
import ImgCard4 from '../../../public/assets/capa3.png'

const PortfolioData = [
    {
        id: 1,
        title: 'Trainer tatical',
        clientShortName: 'IFS',
        clientName: "L'Institut Français de Sécurité",
        ano: '2020',
        serviceType: "VÍDEO PUBLICITÉS",
        durationVideo: '2 min',
        contactClient: "www.ecole-francaise-securite.fr",
        videoProject: "https://www.youtube.com/embed/Y0xefRC4TKk",
        imageCover: ImgCard1
    },
    {
        id: 2,
        title: 'JIU JITSU',
        clientShortName: 'ZR Team Nice',
        clientName: "ZR Team Nice",
        ano: '2021',
        serviceType: "VÍDEO PUBLICITÉS",
        durationVideo: '1 min',
        contactClient: "https://zr-team-nice-centre.business.site/",
        videoProject: "https://www.youtube.com/embed/KzvyvHgmxO0",
        imageCover: ImgCard2
    },
    {
        id: 3,
        title: 'Sport Fitness',
        clientShortName: 'Fitness Park',
        clientName: "Fitness Park Salon-de-Provence",
        ano: '2022',
        serviceType: "VÍDEO PUBLICITÉS",
        durationVideo: '1 min',
        contactClient: "https://www.fitnesspark.fr/club/salon-de-provence",
        videoProject: "https://www.youtube.com/embed/89hjqMKlgc0",
        imageCover: ImgCard3
    },
    {
        id: 4,
        title: 'POLE DANCE',
        clientShortName: 'Réalisations',
        clientName: "Réalisations",
        ano: '2021',
        serviceType: "VÍDEO PUBLICITÉS",
        durationVideo: '1 min',
        contactClient: "-",
        videoProject: "https://www.youtube.com/embed/jEsmzFA85Us",
        imageCover: ImgCard4
    },

]


export default function PortifolioComp() {
    const [modalDetails, setModalDetails] = useState(false)
    const [modalSelected, setModalSelected] = useState()
    return (
        <div className="flex flex-col w-screen justify-between min-h-[90vh] items-center px-8 md:px-28 py-24  text-black">
            <p className="text-2xl lg:text-4xl font-black uppercase mt-14">Découvrez notre travail</p>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-14'>
                {PortfolioData.map(item =>
                    <CardPortfolio
                        id={item.id}
                        title={item.title}
                        client={item.clientShortName}
                        durationVideo={item.durationVideo}
                        imageCover={item.imageCover}
                        onClickCard={() => { setModalSelected(item), setModalDetails(true) }}
                    />
                )}

                {modalDetails && <ModalDetails setModalDetails={setModalDetails} item={modalSelected} />}

            </div>

            <Link className='border-2 border-black py-2 px-10 font-semibold text-center hover:bg-black hover:text-white transition delay-100 duration-300 ease-in-out rounded tracking-widest' href={"/portfolio"} >VOIR PLUS</Link>
        </div>
    )
}
