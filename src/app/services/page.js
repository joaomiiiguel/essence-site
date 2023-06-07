import React from 'react'
import ServiceComp from '../../components/home/ServiceComp'
import BoxContatWhat from '../../components/home/BoxContatWhat'

export default function sercivesPage() {
  return (
    <main className="flex flex-col w-full">
      <div className='flex flex-col justify-center items-center min-h-[80vh] text-white bg-black'>
        <ServiceComp />
      </div>
      <div className='flex flex-col justify-center items-center min-h-[80vh] text-black bg-white'>
        <p className="flex py-10 justify-center text-4xl font-black uppercase lg:mb-14 items-center">COMMENT FAIRE?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-8/12">
          <div className="flex flex-col p-4 text-center">
            <p className="text-5xl font-black">1</p>
            <p className="text-lg font-semibold">Planning</p>
            <p className="text-justify mt-4">Nous mettons nos talents, et notre expertise  à service de vos projets: Concepteurs-rédacteurs, Directeurs Artistiques, Cadreurs, Producteurs, Illustrateurs, Customer Success Managers, Motion Designers, etc.</p>
          </div>
          <div className="flex flex-col p-4 text-center">
            <p className="text-5xl font-black">2</p>
            <p className="text-lg font-semibold">Réalisation</p>
            <p className="text-justify mt-4">Notre équipe débarque chez vous ou lieu de tournage. Nous appliquerons toutes vos demandes afin de garantir la réalisation d'une vidéo qui réponde parfaitement à vos attentes. Nous permettons à nos clients de faire leurs retours à chaque étape du processus de production.</p>
          </div>
          <div className="flex flex-col p-4 text-center">
            <p className="text-5xl font-black">3</p>
            <p className="text-lg font-semibold">Édition</p>
            <p className="text-justify mt-4">À partir de vos rushes vidéo ou bien suite à un tournage réalisé par notre équipe, nous effectuerons la post-production de votre film d’entreprise. Les monteurs vidéo et les motion designers se chargeront de votre film promotionnel.</p>
          </div>
        </div>
      </div>
      <BoxContatWhat/>
    </main>
  )
}
