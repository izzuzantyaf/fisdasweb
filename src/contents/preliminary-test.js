import practicumModules from './modules'

const preliminaryTest = [
    {
        // gmb
        link: 'https://drive.google.com/drive/folders/1Yqrzk8VMoFJux-PJqKuh5znnyRjsi6VH?usp=sharing'
    },
    {
        // gjb
        link: 'https://drive.google.com/drive/folders/1pNfcusRFTMiIRLp54Sh2NAlnWTwp_6w3?usp=sharing'
    },
    {
        // sgh
        link: 'https://drive.google.com/drive/folders/1V489AMrQ01WE1CwDDgf3SP7B0f0yozMv?usp=sharing'
    },
    {
        // pbl
        link: 'https://drive.google.com/drive/folders/1VOl7e8e6Mz9s5xZ2gJgkbCavigpk4-AF?usp=sharing'
    },
    {
        // glb
        link: 'https://drive.google.com/drive/folders/1fRo5BTsBQKbaGSZ5ci-UTv0TqxAG9G3H?usp=sharing'
    },
    {
        // rgb
        link: ''
    },
    {
        // im
        link: ''
    },
]

const idModules = practicumModules.filter(module => module.lang === 'id' && module.isActive)

export const processedPreliminaryTest = preliminaryTest.map((pt, index) => {
    pt["module"] = idModules[index].name
    pt["icon"] = idModules[index].icon
    return pt
})