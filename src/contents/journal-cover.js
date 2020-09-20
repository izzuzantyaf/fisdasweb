import { practicumModules } from './modules'

const journalCover = [
    {
        link: 'https://drive.google.com/file/d/1Di8-iOXGsFmz6bD23l-Lo6iHEgeOrsTh/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1A5SSdy00uvtPUsiymbKWON7foCZ6nDc-/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1Tb4lVM37I5ohawhdMEVVTDBXpNzFE97i/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1lABhbCN9DNBclVinLNZDdmIYzbPs6_RC/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1qCa6PdJSUdSEnkZLHGuZJO9I9sEtByAh/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1M1u75vQuGEQn_1f8olGPj8Eg8xcosr9U/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1cK-aTMEyqII_CV2RsU9JKotEExgGy2G-/view?usp=sharing'
    },
    {
        link: 'https://drive.google.com/file/d/1ttnGZQjt8ZymfLS5aRG2UlV69dtHZH6C/view?usp=sharing'
    },
]

const idModules = practicumModules.filter(module => module.lang === 'id')

export const processedJournalCover = journalCover.map((jc, index) => {
    jc["module"] = idModules[index].name
    jc["icon"] = idModules[index].icon
    return jc
})