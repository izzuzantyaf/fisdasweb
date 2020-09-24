import { practicumModules } from './modules'

const preliminaryTest = [
    {
        // gmb
        link: 'https://drive.google.com/drive/folders/1Yqrzk8VMoFJux-PJqKuh5znnyRjsi6VH?usp=sharing'
    },
    {
        // gjb
        link: ''
    },
    {
        // sgh
        link: ''
    },
    {
        // pbl
        link: ''
    },
    {
        // glb
        link: ''
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