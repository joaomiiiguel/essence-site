import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ImageAbout from '../../../public/assets/about.png'

export default function AboutComp() {
    return (
        <div class="flex flex-col md:flex-row justify-around items-center text-black px-8 md:px-28 py-24">
            <Image src={ImageAbout} alt="about image" />
            <div className='flex flex-col w-10/12 ld:w-4/12 space-y-4'>
                <div>
                    <p class="font-semibold">NOTRE ÉQUIPE</p>
                    <p class="text-4xl font-black uppercase">Essence films</p>
                </div>
                <p>
                    Née de la collaboration d'anciens militaires, une entreprise est née
                    <br />
                    <br />
                    Essence Films est une agence de production audiovisuelle qui développe et produit, des contenus télévisuels et cinématographiques. Elle travaille en collaboration avec des scénaristes et des réalisateurs. Sa ligne éditoriale est éclectique, avec Originalité et Audace.
                    Spécialisée dans le secteur d'activité de la production de films institutionnels et publicitaires.
                </p>
                <Link className='border-2 border-black py-2 px-4 font-semibold text-center hover:bg-black hover:text-white transition delay-100 duration-300 ease-in-out' href={"/lagence"}>VOIR PLUS</Link>
            </div >
        </div >
    )
}
