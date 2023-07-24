import React from 'react'
import { CaretDoubleDown, MouseSimple } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';
import '../../service/translate/i18n'

export default function BannerCover() {
    const { t } = useTranslation()

    return (
        <div className="relative flex flex-col justify-end items-end h-screen bg-black">
            <video className="myVideoBg" crossOrigin="Anonymous" src='https://www.essencefilms.fr/assets/paneauSite.mp4' id='video' width='400' height='360' autoPlay muted loop type="video/mp4" />
            <div className="absolute py-24 right-[5%] md:right-[10%]">
                <p className="text-3xl md:text-4xl font-medium text-right">{t('banner_title')}</p>
                <p className="font-light tracking-widest text-right mb-[30%]">{t('banner_subtitle')}</p>
            </div>
            <div className="absolute flex flex-col items-center bottom-[5%] right-[50%]">
                <MouseSimple size={36} weight="light" />
                <CaretDoubleDown className="animate-bounce mt-2" size={25} weight="light" />
            </div>
        </div>
    )
}
