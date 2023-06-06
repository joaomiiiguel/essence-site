'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { X } from "@phosphor-icons/react";


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

export const CardPortfolio = ({id, title, client, durationVideo, imageCover, onClickCard }) => {
    return (
        <div key={id} className='relative flex rounded-lg overflow-hidden w-[250px] h-[400px] cursor-pointer	hover:scale-[+1.1] transition delay-100 duration-300 ease-in-out ' onClick={onClickCard}>
            <Image src={imageCover} alt={title} className="w-full absolute" />
            <div className='absolute flex flex-col w-full justify-center items-center bottom-6'>
                <p class="font-bold text-white uppercase">{title}</p>
                <p class="text-white text-sm">{client} - {durationVideo}</p>
            </div>
        </div>
    )
}


export const ModalDetails = ({ setModalDetails, item }) => {
    return (
        <div className='fixed bg-black  top-0 left-0 z-50 w-full h-full bg-opacity-50'>
            <div className='bg-white text-black w-7/12 mx-auto mt-[3%] p-14 pb-16'>
                <div className='float-right mb-6 cursor-pointer hover:opacity-40' onClick={() => setModalDetails(false)}>
                    <X size={26} weight="bold" />
                </div>

                <iframe width="100%" height="400" src={item.videoProject} title="YouTube vidéo player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div class="row">
                    <div class="columnModal">
                        <p class="uppercase text-sm tracking-widest">Title Project</p>
                        <p class="font-semibold text-xl">{item.title}</p>
                    </div>
                    <div class="columnModal">
                        <p class="uppercase text-sm tracking-widest">Client</p>
                        <p class="font-semibold text-xl">{item.clientName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="columnModal">
                        <p class="uppercase text-sm tracking-widest">Duração</p>
                        <p class="font-semibold text-xl">{item.durationVideo}</p>
                    </div>
                    <div class="columnModal">
                        <p class="uppercase text-sm tracking-widest">Ano</p>
                        <p class="font-semibold text-xl">{item.ano}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="columnModal">
                        <p class="uppercase text-sm tracking-widest">Service</p>
                        <p class="font-semibold text-xl">{item.serviceType}</p>
                    </div>
                    <div class="columnModal">
                        <p class="uppercase text-sm tracking-widest">Contact Client</p>
                        <p class="font-semibold text-xl">{item.contactClient}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PortifolioPage() {
    const [modalDetails, setModalDetails] = useState(false)
    const [modalSelected, setModalSelected] = useState()
    return (
        <div class="flex flex-col justify-around items-center px-28 py-24 text-white bg-black min-h-[90vh]">
            <p class="text-4xl font-black uppercase mb-14">Découvrez notre travail</p>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
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
        </div>
    )
}
