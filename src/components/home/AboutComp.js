import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../service/translate/i18n'
import ImageAbout from '../../../public/assets/about.png'

export default function AboutComp() {
    const { t } = useTranslation()
    return (
        <div class="flex flex-col md:flex-row justify-around items-center text-black px-8 md:px-28 py-24">
            <Image src={ImageAbout} alt="about image" />
            <div className='flex flex-col w-10/12 lg:w-4/12 space-y-4'>
                <div>
                    <p class="font-semibold uppercase">{t('about_title')}</p>
                    <p class="text-4xl font-black uppercase">Essence films</p>
                </div>
                <p>
                    {t('about_description')}
                </p>
                <Link className='border-2 border-black py-2 px-4 font-semibold text-center hover:bg-black hover:text-white transition delay-100 duration-300 ease-in-out uppercase' href={"/lagence"}>{t('about_btnMore')}</Link>
            </div >
        </div >
    )
}
