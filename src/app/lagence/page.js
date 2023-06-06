"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Logo from '../../../public/logo.png'
import AvatarVando from "../../../public/assets/VandoPhoto.png"

import { InstagramLogo, EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react";


export default function index() {
  return (
    <main className="flex flex-col w-full">
      <div className='flex flex-col justify-center items-center min-h-[80vh] text-white bg-black'>
        <p class="flex w-full justify-center text-4xl font-black uppercase mb-14 items-center">L'AGENCE</p>
        <div class="flex flex-row justify-center items-center w-9/12 space-x-8">
          <Image src={Logo} alt="Logomarca da Black Fox" class="w-2/12" />
          <div class="flex flex-col w-5/12 space-y-4 ">
            <p className='text-3xl font-semibold uppercase'>Essence Films</p>
            <p>Née d'une collaboration entre anciens militaires, une société à vu le jour.</p>
            <p>
              BlackFox Prod est une agence de production audiovisuelle qui développe et produit, des contenus télévisuels et cinématographiques. Elle travaille en collaboration avec des scénaristes et des réalisateurs. Sa ligne éditoriale est éclectique, avec Originalité et Audace.
              Spécialisée dans le secteur d'activité de la production de films institutionnels et publicitaires.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center bg-white  min-h-[80vh]'>
        <p class="flex w-full justify-center text-4xl font-black uppercase mb-14 items-center">L'Equipe</p>

        <div class="flex space-x-6 max-w-3xl px-8 py-8 rounded-lg space-y-2 bg-gray-100 shadow-md">
          <div className='pr-2 w-3/12'>
            <Image class="mt-4" src={AvatarVando} />
            <div class="flex flex-row justify-around py-2">
              <Link href={"https://www.linkedin.com/in/vando-oliver-b9487920b/"} target="_blank" className="p-2 hover:bg-gray-200 rounded-full">
                <LinkedinLogo size={22} weight="light" />
              </Link>
              <Link href={"https://www.instagram.com/vandoliver/"} target="_blank" className="p-2 hover:bg-gray-200 rounded-full">
                <InstagramLogo size={22} weight="light" />
              </Link>
              <Link href={"mailto:production@blackfoxprod.fr"} target="_blank" className="p-2 hover:bg-gray-200 rounded-full">
                <EnvelopeSimple size={22} weight="light" />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-2xl font-bold'>Vando Oliver</p>
            <p className='text-xs'>Directeur de production</p>
            <p className='text-sm mt-2'>
              Réalisateur et directeur de la photographie, ancien légionnaire et entrepreneur, je suis spécialisé dans la production de clips vidéo, le montage vidéo, les films institutionnels, les courts métrages et les moyens métrages. J'ai également de l'expérience dans la réalisation de films publicitaires, d'émissions télévisées et de documentaires. En tant que responsable de production audiovisuelle, j'ai accumulé 16 ans d'expérience dans le domaine de l'audiovisuel.
            </p>
            <p className='text-sm mt-2'>
              Mes compétences incluent le montage et les effets spéciaux, l'étalonnage, le montage sonore, le motion design et la conception web. J'ai également une expertise en prise de vue vidéo et photo, en retouche et manipulation d'images, ainsi qu'en animation 2D et 3D. En outre, j'ai occupé le poste d'opérateur multimédia au Centre de communication de la Légion étrangère à Aubagne, où ma principale responsabilité était la production de vidéos institutionnelles pour la Légion.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
