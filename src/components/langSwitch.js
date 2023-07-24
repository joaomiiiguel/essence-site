import React, { useEffect, useState } from 'react'

import './../service/translate/i18n'
import { useTranslation } from 'react-i18next'

export default function LangSwitch() {
    const [language, setLanguage] = useState(null)
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n && setLanguage(i18n.language);
    }, [language])

    function changeLanguage(value) {
        setLanguage(value)
        i18n.changeLanguage(value)
    }

    return (
        <div className='flex flex-col justify-center items-center text-white ml-4'>
            <label for="lng" className='text-[10px]'>{language === 'fr' ? 'Langue' : 'Language'}</label>
            <select name="lng" id="lng" className='bg-transparent px-4' onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>

        </div>
    )
}
