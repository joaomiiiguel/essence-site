import Image from 'next/image'
import React from 'react'

import Icon1 from '../../../public/assets/video.svg'
import Icon2 from '../../../public/assets/interview.svg'
import Icon3 from '../../../public/assets/animation.svg'
import Icon4 from '../../../public/assets/film-editing.svg'
import Icon5 from '../../../public/assets/drone.svg'
import Icon6 from '../../../public/assets/digital-marketing.svg'
import Icon7 from '../../../public/assets/camera.svg'
import Icon8 from '../../../public/assets/3d.svg'

export const CardServices = ({ title, description, iconURL }) => {
    return (
        <div class="cardCompet">
            <Image class="iconsCompet" src={iconURL} />
            <p class="titleCompet">{title}</p>
            <p class="descriptionCompet">{description}</p>
        </div>
    )
}

export default function ServiceComp() {
    return (
        <div class="flex flex-col justify-around items-center bg-black px-28 py-24">
            <p class="text-2xl lg:text-4xl font-black uppercase mb-10">NOS COMPÉTENCES</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                <CardServices title={'VÍDEO PUBLICITÉS'} description={'Vidéo de promotion à destination du grand public'} iconURL={Icon1}/>
                <CardServices title={'VIDEO INTERVIEW'} description={'JRI + matériel, livraison J+1'} iconURL={Icon2}/>
                <CardServices title={'MOTION DESIGN'} description={'Création d’animations graphiques en vidéo pour exprimer votre entreprise.'} iconURL={Icon3}/>
                <CardServices title={'MONTAGE VIDEO'} description={'Nous tirons le meilleur de vos rushs et vous livrons dans le respect de votre budget/deadline'} iconURL={Icon4}/>
                <CardServices title={'Video Drone'} description={'Des plans aériens parfaitement fluides en intérieur et extérieur.'} iconURL={Icon5}/>
                <CardServices title={'MARKETING DIGITAL'} description={'des conseils experts avant de lancer la production'} iconURL={Icon6}/>
                <CardServices title={'ÉTALONNAGE'} description={'Étalonnage fiction, documentaires et publicité.'} iconURL={Icon7}/>
                <CardServices title={'3D'} description={'Modélisation et animation 3D'} iconURL={Icon8}/>
            </div>
        </div>
    )
}
