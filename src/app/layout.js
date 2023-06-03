import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '../../public/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Essence Films',
  description: 'Generated by create next app',
}
export const MenuLink = ({ nameButton, urlLink }) => {
  return (
    <Link href={`${urlLink}`} 
      className='flex justify-center items-center font-semibold text-sm tracking-widest w-full py-2 text-slate-800 hover:font-extrabold transition delay-100 hover:border-b-2 duration-300 ease-in-out'>
      {nameButton}
    </Link>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-row justify-between items-stretch px-28 w-full fixed z-50 bg-white bg-blend-soft-light bg-opacity-60">
          <Link href={"/"}>
            <Image src={LogoImg} alt="Logo Le monde" height={80} className="h-fit p-2" priority />
          </Link>
          <div className="flex flex-row justify-between items-center py-2 w-4/12">
            <MenuLink nameButton={'L’agence'} urlLink={'/'} />
            <MenuLink nameButton={'Services'} urlLink={'/'} />
            <MenuLink nameButton={'Portfolio'} urlLink={'/'} />
            <MenuLink nameButton={'Contact'} urlLink={'/'} />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
