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

import './../../service/translate/i18n'
import { useTranslation } from 'react-i18next'

export const CardServices = ({ title, description, iconURL }) => {

    return (
        <div class="cardCompet">
            <Image class="iconsCompet" src={iconURL} />
            <p class="titleCompet uppercase">{title}</p>
            <p class="descriptionCompet">{description}</p>
        </div>
    )
}

export default function ServiceComp() {
    const { t } = useTranslation()

    return (
        <div class="flex flex-col justify-around items-center bg-black px-28 py-24">
            <p class="text-2xl lg:text-4xl font-black uppercase mb-10">{t('services_title')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                <CardServices title={t('card_vid_publi')} description={t('descript_vid_publi')} iconURL={Icon1}/>
                <CardServices title={t('card_vid_inter')} description={t('descript_vid_inter')} iconURL={Icon2}/>
                <CardServices title={t('card_mot_desig')} description={t('descript_mot_desig')} iconURL={Icon3}/>
                <CardServices title={t('card_mot_vid')} description={t('descript_mot_vid')} iconURL={Icon4}/>
                <CardServices title={t('card_vid_drone')} description={t('descript_vid_drone')} iconURL={Icon5}/>
                <CardServices title={t('card_mkt_digital')} description={t('descript_mkt_digital')} iconURL={Icon6}/>
                <CardServices title={t('card_calibration')} description={t('descript_calibration')} iconURL={Icon7}/>
                <CardServices title={t('card_3D')} description={t('descript_3D')} iconURL={Icon8}/>
            </div>
        </div>
    )
}
