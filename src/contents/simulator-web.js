import practicumModules from './modules'

const simulatorLinks = [
    {
        code: 'pbl',
        link: 'http://amrita.olabs.edu.in/?sub=1&brch=4&sim=99&cnt=4'
    },
    {
        code: 'im',
        link: 'http://cdac.olabs.edu.in/?sub=74&brch=9&sim=242&cnt=4'
    },
    {
        code: 'rgb',
        link: 'http://amrita.olabs.edu.in/?sub=1&brch=5&sim=36&cnt=4'
    },
    {
        code: 'glb',
        link: 'http://amrita.olabs.edu.in/?sub=1&brch=1&sim=44&cnt=4'
    },
]

const idModules = practicumModules.filter(practicumModule => practicumModule.lang === 'id')

export default simulatorLinks.map(simLink => {
    const filteredIdModules = idModules.filter(idModule => idModule.code === simLink.code)[0]
    simLink.icon = filteredIdModules.icon
    simLink.module = filteredIdModules.name
    return simLink
})
// 1. http://amrita.olabs.edu.in/?sub=1&brch=4&sim=99&cnt=4 (Ohm's Law)
// 2. http://cdac.olabs.edu.in/?sub=74&brch=9&sim=242&cnt=4 (IM)
// 3. http://amrita.olabs.edu.in/?sub=1&brch=5&sim=36&cnt=4 (RGB)
// 4. http://amrita.olabs.edu.in/?sub=1&brch=1&sim=44&cnt=4 (HK 2 NEWTON / GLBB )
// 5. https://academo.org/demos/virtual-oscilloscope/ (SGH/belum fix)