import practicumModules from './modules'

const journalCover = [
    {
        // pap
        link: 'https://drive.google.com/file/d/1Yy6PrABKmy6bfzDlbA-gqn9Uqo5K2-P0/view?usp=sharing'
    },
    {
        // gmb
        link: 'https://drive.google.com/file/d/17sSFWWvruwc8nj6mKNedpiK0Iy9LKayd/view?usp=sharing'
    },
    {
        // gjb
        link: 'https://drive.google.com/file/d/1l8mGnkIp1BXtuHOViYCwy_BKp5TVcORc/view?usp=sharing'
    },
    {
        // sgh
        link: 'https://drive.google.com/file/d/12D9SjZvziFNSJTDboqhbKcf9cPoEYVtR/view?usp=sharing'
    },
    {
        // pbl
        link: 'https://drive.google.com/file/d/1NxaBOZNZaLshpFkaxYNfM2MjRkI2VUlb/view?usp=sharing'
    },
    {
        // glb
        link: 'https://drive.google.com/file/d/1Wr9KbxHqADdBW61sp1ucMl5NSe06eWfs/view?usp=sharing'
    },
    {
        // rgb
        link: 'https://drive.google.com/file/d/1hF6WdgttDuCIhbJRLDopACdpnXDCMLwp/view?usp=sharing'
    },
    {
        // im
        link: 'https://drive.google.com/file/d/1gvsG1xAj9KdaNUCXF8_E5hxL5fN2J_3s/view?usp=sharing'
    },
]

const idModules = practicumModules.filter(module => module.lang === 'id')

export const processedJournalCover = journalCover.map((jc, index) => {
    jc["module"] = idModules[index].name
    jc["icon"] = idModules[index].icon
    return jc
})