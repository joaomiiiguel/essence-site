'use client'
import React, { useState } from 'react'
import { CardPortfolio } from '../../components/CardPort'
import { ModalDetails } from '../../components/ModalDetails'
import { useTranslation } from 'react-i18next';
import '../../service/translate/i18n'

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

export default function PortifolioPage() {
    const [modalDetails, setModalDetails] = useState(false)
    const [modalSelected, setModalSelected] = useState()
    const {t} = useTranslation()
    return (
        <div className="flex flex-col w-screen justify-around items-center px-8 md:px-28 py-24 text-white bg-black min-h-[90vh]">
            <p className="text-2xl lg:text-4xl font-black uppercase mb-14">{t('about_title')}</p>
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
