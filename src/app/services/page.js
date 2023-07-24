'use client'
import React from 'react'
import ServiceComp from '../../components/home/ServiceComp'
import BoxContatWhat from '../../components/home/BoxContatWhat'
import './../../service/translate/i18n'
import { useTranslation } from 'react-i18next'

export default function sercivesPage() {
  const {t} = useTranslation()
  return (
    <main className="flex flex-col w-full">
      <div className='flex flex-col justify-center items-center min-h-[80vh] text-white bg-black'>
        <ServiceComp />
      </div>
      <div className='flex flex-col justify-center items-center min-h-[80vh] text-black bg-white'>
        <p className="flex py-10 justify-center text-4xl font-black uppercase lg:mb-14 items-center">{t('services_howtodo')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-8/12">
          <div className="flex flex-col p-4 text-center">
            <p className="text-5xl font-black">1</p>
            <p className="text-lg font-semibold">{t('services_howtodo_title1')}</p>
            <p className="text-justify mt-4">{t('services_howtodo_descript1')}</p>
          </div>
          <div className="flex flex-col p-4 text-center">
            <p className="text-5xl font-black">2</p>
            <p className="text-lg font-semibold">{t('services_howtodo_title2')}</p>
            <p className="text-justify mt-4">{t('services_howtodo_descript2')}</p>
          </div>
          <div className="flex flex-col p-4 text-center">
            <p className="text-5xl font-black">3</p>
            <p className="text-lg font-semibold">{t('services_howtodo_title3')}</p>
            <p className="text-justify mt-4">{t('services_howtodo_descript3')}</p>
          </div>
        </div>
      </div>
      <BoxContatWhat/>
    </main>
  )
}
