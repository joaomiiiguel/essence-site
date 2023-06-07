'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { List, X } from "@phosphor-icons/react";

import LogoImg from '../../../public/logo.png'

export const MenuLink = ({ nameButton, urlLink }) => {
    return (
        <Link href={`${urlLink}`}
            className='flex justify-center items-center cursor-pointer font-semibold text-sm tracking-widest w-full py-2 text-white hover:font-extrabold transition delay-100 hover:border-b-2 duration-300 ease-in-out'>
            {nameButton}
        </Link>
    )
}

export default function Header() {
    const [modalMenu, setModalMenu] = useState(false)


    return (
        <>
            <div className="flex flex-row justify-between items-stretch px-4 lg:px-28 w-screen fixed z-50 bg-black bg-blend-soft-light bg-opacity-80">
                <Link href={"/"}>
                    <Image src={LogoImg} alt="Logo Le monde" height={80} className="h-fit p-2" priority />
                </Link>
                <div className="hidden lg:flex flex-row justify-between items-center py-2 w-4/12">
                    <MenuLink nameButton={'L’agence'} urlLink={'/lagence'} />
                    <MenuLink nameButton={'Services'} urlLink={'/services'} />
                    <MenuLink nameButton={'Portfolio'} urlLink={'/portfolio'} />
                    <MenuLink nameButton={'Contact'} urlLink={'#contact'} />
                </div>
                <button onClick={() => setModalMenu(!modalMenu)} className="flex lg:hidden text-white flex-row justify-between items-center py-">
                    <List size={25} weight="bold" />
                </button>

                {modalMenu &&
                    <div className='fixed flex flex-col lg:hidden top-[80px] right-0 w-7/12 h-fit justify-center items-center z-50 bg-black p-6 bg-opacity-90 space-y-8'>
                        <MenuLink nameButton={'L’agence'} urlLink={'/lagence'} />
                        <MenuLink nameButton={'Services'} urlLink={'/services'} />
                        <MenuLink nameButton={'Portfolio'} urlLink={'/portfolio'} />
                        <MenuLink nameButton={'Contact'} urlLink={'#contact'} />

                    </div>
                }
            </div>

        </>
    )
}
