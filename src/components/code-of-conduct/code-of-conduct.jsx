import React, { useEffect } from 'react'
import './code-of-conduct.scss'

import tatib1 from '../../assets/img/tatib 1-min.jpg'
import tatib2 from '../../assets/img/tatib 2-min.jpg'
import tatib3 from '../../assets/img/tatib 3-min.jpg'

// level 0 component
export default function CodeOfConduct() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const tatibImgArr = [tatib1, tatib2, tatib3]
    const tatibList = tatibImgArr.map((tatibImg, index) =>
        <img key={index} className={`tatib-${index + 1}`} src={tatibImg} alt={`tatib${index + 1}`} />
    )

    return (
        <section className="organigram">
            <div className="container">
                <div className="title">Tata Tertib Praktikum Fisika Dasar 1 Tahun Akademik 2020/2021</div>
                {tatibList}
            </div>
        </section>
    )
}