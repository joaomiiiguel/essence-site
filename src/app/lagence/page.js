"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Logo from '../../../public/logo.png'
import AvatarVando from "../../../public/assets/VandoPhoto.png"

import { InstagramLogo, EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react";

import './../../service/translate/i18n'
import { useTranslation } from 'react-i18next'

export default function index() {
  const { t } = useTranslation()
  return (
    <main className="flex flex-col w-screen">
      <div className='flex flex-col justify-center items-center min-h-[80vh] py-20 text-white bg-black'>
        <p className="flex w-full justify-center text-4xl font-black uppercase mb-14 items-center">{t('menu_agence')}</p>
        <div className="flex flex-col lg:flex-row justify-center items-center w-10/12 space-x-8">
          <Image src={Logo} alt="Logomarca da Black Fox" className="w-1/4 lg:w-1/12" />
          <div className="flex flex-col lg:w-5/12 space-y-4 ">
            <p className='text-3xl font-semibold uppercase hidden lg:flex'>Essence Films</p>
            <p>
              {t('about_description')}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center bg-white py-20  min-h-[80vh]'>
        <p className="flex w-full justify-center text-4xl font-black uppercase mb-14 items-center">{t('about_team_name')}</p>

        <div className="flex flex-col lg:flex-row items-center space-x-6 w-10/12 max-w-3xl px-8 py-8 rounded-lg space-y-2 bg-gray-100 shadow-md">
          <div className='pr-2 w-1/4'>
            <Image className="mt-4" src={AvatarVando} />
            <div className="flex flex-row justify-around py-2">
              <Link href={"https://www.linkedin.com/in/vando-oliver-b9487920b/"} target="_blank" className="p-2 hover:bg-gray-200 rounded-full">
                <LinkedinLogo size={22} weight="light" />
              </Link>
              <Link href={"https://www.instagram.com/vandoliver/"} target="_blank" className="p-2 hover:bg-gray-200 rounded-full">
                <InstagramLogo size={22} weight="light" />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
            <p className='text-2xl font-bold'>Vando Oliver</p>
            <p className='text-xs'> {t('about_function_name')}</p>
            <p className='text-sm mt-2 text-justify'>
              {t('about_description_function')}
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
