import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import './../../service/translate/i18n'
import { useTranslation } from 'react-i18next'

import Image1 from "../../../public/assets/logoClients/dca.png"
import Image2 from "../../../public/assets/logoClients/ifs.png"
import Image3 from "../../../public/assets/logoClients/lpn.png"
import Image4 from "../../../public/assets/logoClients/summit.png"
import Image5 from "../../../public/assets/logoClients/fitnesspark.png"
import Image6 from "../../../public/assets/logoClients/compea.png"
import Image7 from "../../../public/assets/logoClients/coeur-merendella.png"
import Image8 from "../../../public/assets/logoClients/securite_nord.jpeg"

const ClientsData = [
    {
        id: 1,
        logoClient: Image1,
        linkUrl: "https://dca-france.com"
    },
    {
        id: 2,
        logoClient: Image2,
        linkUrl: "https://www.ecole-francaise-securite.fr/"
    },
    {
        id: 3,
        logoClient: Image3,
        linkUrl: "https://securite-protection-risque.com"
    },
    {
        id: 4,
        logoClient: Image4,
        linkUrl: "https://summit-outdoor.com/fr"
    },
    {
        id: 5,
        logoClient: Image5,
        linkUrl: "https://www.fitnesspark.fr/"
    },
    {
        id: 6,
        logoClient: Image6,
        linkUrl: "https://velo-porquerolles.fr"
    },
    {
        id: 7,
        logoClient: Image7,
        linkUrl: "https://www.merendella.com"
    },
    {
        id: 8,
        logoClient: Image8,
        linkUrl: "#"
    },
]

export const ClientCard = ({ logoClient, linkUrl }) => {
    return (
        <Link href={linkUrl} target="_blank" className='flex justify-center items-center' >
            <Image src={logoClient} alt="linkUrl" className="h-[50px] w-auto" />
        </Link>
    )
}

export default function ListClients() {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col justify-around items-center px-28 py-24 text-black">
            <p className="text-4xl font-black uppercase mb-14">{t('clients_title')}</p>
            <div className="grid gap-10 grid-cols-2 md:grid-cols-4" >
                {ClientsData.map(item => 
                    <ClientCard logoClient={item.logoClient} linkUrl={item.linkUrl} />
                )}
            </div>
        </div>
    )
}
