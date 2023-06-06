'use client'
import React from 'react'
import { InstagramLogo, YoutubeLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from 'next/link';
import Image from 'next/image';

import LogoImg from '../../../public/logo.png'

export default function Footer() {
    return (
        <footer className="containerPad backBlak contact" id='contact'>
            <div className="flex flex-row justify-around items-center w-full my-20">
                <Image src={LogoImg} alt="Logo" width={120} />
                <div>
                    <p className="text-sm font-light">ADRESSE</p>
                    <p className="font-bold mb-10">TOULON (83100), France </p>

                    <p className="text-sm font-light">ADRESSE CONTACT</p>
                    <p className="font-bold">+33 6 58 75 34 66 - Vando Oliver</p>
                    <p className="font-bold">contact@blackfoxprod.fr</p>
                </div>

            </div>
            <div className='flex space-x-4 my-4'>
                <Link href={'https://www.instagram.com/vandoliver/'} target="_blank">
                    <InstagramLogo size={22} weight="light" />
                </Link>
                <Link href={"https://www.youtube.com/@EssenceFilms."} target="_blank">
                    <YoutubeLogo size={22} weight="fill" />
                </Link>
                <Link href={"https://www.facebook.com/blackfoxrpod"} target="_blank">
                    <WhatsappLogo size={22} weight="light" />
                </Link>
            </div>
            <p className=" text-xs opacity-30 mt-10">website by <Link href={'https://www.instagram.com/dev.joaomiguel/'} target="_blank" className='cursor-pointer font-semibold hover:underline'>@dev.joaomiguel</Link></p>
        </footer>
    )
}
