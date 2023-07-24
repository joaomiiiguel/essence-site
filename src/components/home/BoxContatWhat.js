'use client'
import React from 'react'
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from 'next/link';

import './../../service/translate/i18n'
import { useTranslation } from 'react-i18next'

export default function BoxContatWhat() {
    const { t } = useTranslation()

    return (
        <div>
            <div className="w-10/12 lg:w-7/12 bg-gray-300 mx-auto p-10 rounded-md flex flex-col lg:flex-row justify-between items-center z-10 space-y-2">
                <div className='text-black'>
                    <p className='text-2xl'>{t('contactWhats_title')}</p>
                    <p className='text-2xl  font-semibold'>{t('contactWhats_subtitle')}</p>
                </div>
                <Link class="bg-black text-white flex flex-row justify-between px-6 py-2 rounded space-x-2" href={"https://api.whatsapp.com/send?phone=33658753466&text=Ol%C3%A1"} target="_blank">
                    <p>{t('contactWhats_btn')}</p>
                    <WhatsappLogo size={22} weight="light" />
                </Link>
            </div >
            <div className='bg-black h-20 mt-[-5vh] z-[-1] contact'/>
        </div>
    )
}
