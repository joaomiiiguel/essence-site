import React from 'react'
import { X } from "@phosphor-icons/react";
import './../service/translate/i18n'
import { useTranslation } from 'react-i18next';

export const ModalDetails = ({ setModalDetails, item }) => {
    const {t} = useTranslation()
    return (
        <div className='fixed bg-black top-0 left-0 z-50 w-full h-full bg-opacity-50'>
            <div className='bg-white text-black w-full  h-screen lg:h-fit lg:w-7/12 mx-auto p-2 lg:p-14 pb-16'>
                <div className='float-right mb-6 cursor-pointer hover:opacity-40' onClick={() => setModalDetails(false)}>
                    <X size={26} weight="bold" />
                </div>

                <iframe width="100%" height="100%" className='h-80'  src={item.videoProject} title="YouTube vidéo player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className="row">
                    <div className="columnModal">
                        <p className="uppercase text-xs lg:text-sm tracking-widest">Title Project</p>
                        <p className="font-semibold text-md lg:text-xl">{item.title}</p>
                    </div>
                    <div className="columnModal">
                        <p className="uppercase text-xs lg:text-sm tracking-widest">Client</p>
                        <p className="font-semibold text-md lg:text-xl">{item.clientName}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="columnModal">
                        <p className="uppercase text-xs lg:text-sm tracking-widest">Duração</p>
                        <p className="font-semibold text-md lg:text-xl">{item.durationVideo}</p>
                    </div>
                    <div className="columnModal">
                        <p className="uppercase text-xs lg:text-sm tracking-widest">Ano</p>
                        <p className="font-semibold text-md lg:text-xl">{item.ano}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="columnModal">
                        <p className="uppercase text-xs lg:text-sm tracking-widest">Service</p>
                        <p className="font-semibold text-md lg:text-xl capitalize">{t(item.serviceType)}</p>
                    </div>
                    <div className="columnModal">
                        <p className="uppercase text-xs lg:text-sm tracking-widest">Contact Client</p>
                        <p className="font-semibold text-md lg:text-xl">{item.contactClient}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}