"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Logo from '../../../public/logo.png'
import AvatarVando from "../../../public/assets/VandoPhoto.png"

import { InstagramLogo, EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react";


export default function index() {
  return (
    <main className="flex flex-col w-screen">
      <div className='flex flex-col justify-center items-center min-h-[80vh] py-20 text-white bg-black'>
        <p className="flex w-full justify-center text-4xl font-black uppercase mb-14 items-center">L'AGENCE</p>
        <div className="flex flex-col lg:flex-row justify-center items-center w-10/12 space-x-8">
          <Image src={Logo} alt="Logomarca da Black Fox" className="w-1/4 lg:w-1/12" />
          <div className="flex flex-col lg:w-5/12 space-y-4 ">
            <p className='text-3xl font-semibold uppercase hidden lg:flex'>Essence Films</p>
            <p>Née d'une collaboration entre anciens militaires, une société à vu le jour.</p>
            <p>
              Essence Films est une agence de production audiovisuelle qui développe et produit, des contenus télévisuels et cinématographiques. Elle travaille en collaboration avec des scénaristes et des réalisateurs. Sa ligne éditoriale est éclectique, avec Originalité et Audace.
              Spécialisée dans le secteur d'activité de la production de films institutionnels et publicitaires.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center bg-white py-20  min-h-[80vh]'>
        <p className="flex w-full justify-center text-4xl font-black uppercase mb-14 items-center">L'Equipe</p>

        <div className="flex flex-col lg:flex-row items-center space-x-6 w-10/12 max-w-3xl px-8 py-8 rounded-lg space-y-2 bg-gray-100 shadow-md">
          <div className='pr-2 w-1/4'>
            <Image className="mt-4" src={AvatarVando}  />
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
            <p className='text-xs'>Directeur de production</p>
            <p className='text-sm mt-2 text-justify'>
              Réalisateur et directeur de la photographie, ancien légionnaire et entrepreneur, je suis spécialisé dans la production de clips vidéo, le montage vidéo, les films institutionnels, les courts métrages et les moyens métrages. J'ai également de l'expérience dans la réalisation de films publicitaires, d'émissions télévisées et de documentaires. En tant que responsable de production audiovisuelle, j'ai accumulé 16 ans d'expérience dans le domaine de l'audiovisuel.
            </p>
            <p className='text-sm mt-2 text-justify'>
              Mes compétences incluent le montage et les effets spéciaux, l'étalonnage, le montage sonore, le motion design et la conception web. J'ai également une expertise en prise de vue vidéo et photo, en retouche et manipulation d'images, ainsi qu'en animation 2D et 3D. En outre, j'ai occupé le poste d'opérateur multimédia au Centre de communication de la Légion étrangère à Aubagne, où ma principale responsabilité était la production de vidéos institutionnelles pour la Légion.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
