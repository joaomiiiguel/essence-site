'use client'
import React from 'react'
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from 'next/link';

export default function BoxContatWhat() {
    return (
        <div className="w-7/12 bg-gray-300 mx-auto p-10 rounded-md flex flex-row justify-between items-center">
            <div className='text-black'>
                <p className='text-2xl'>Boostez les résultats</p>
                <p className='text-2xl  font-semibold'>de votre vidéo</p>
            </div>
            <Link class="bg-black text-white flex flex-row justify-between px-6 py-2 rounded space-x-2" href={"https://api.whatsapp.com/send?phone=33658753466&text=Ol%C3%A1"} target="_blank">
                <p>Parlons de votre projet</p> 
                <WhatsappLogo size={22} weight="light" />
            </Link>
        </div >
    )
}
