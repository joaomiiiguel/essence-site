'use client'
import React from 'react'
import { InstagramLogo, YoutubeLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from 'next/link';
import Image from 'next/image';
import './../../service/translate/i18n'
import { useTranslation } from 'react-i18next'

import LogoImg from '../../../public/logo.png'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="containerPad backBlak contact" id='contact'>
            <div className="flex flex-row justify-around items-center w-full my-20">
                <Image src={LogoImg} alt="Logo" width={120}  />
                <div>
                    <p className="text-sm font-light uppercase">{t('footer_address')}</p>
                    <p className="font-bold mb-10">40110 Arengosse, <br/> {t('footer_address_descrip')}</p>

                    <p className="text-sm font-light uppercase">{t('footer_contact')}</p>
                    <p className="font-bold">+33 6 58 75 34 66 - Vando Oliver</p>
                </div>

            </div>
            <div className='flex space-x-4 my-4'>
                <Link href={'https://www.instagram.com/vandoliver/'} target="_blank">
                    <InstagramLogo size={22} weight="light" />
                </Link>
                <Link href={"https://www.youtube.com/@EssenceFilms."} target="_blank">
                    <YoutubeLogo size={22} weight="fill" />
                </Link>
                <Link href={"https://api.whatsapp.com/send?phone=33658753466&text=Ol%C3%A1"} target="_blank">
                    <WhatsappLogo size={22} weight="light" />
                </Link>
            </div>
            <p className=" text-xs opacity-30 mt-10">{t('footer_developer')} <Link href={'https://www.instagram.com/dev.joaomiguel/'} target="_blank" className='cursor-pointer font-semibold hover:underline'>@dev.joaomiguel</Link></p>
        </footer>
    )
}
