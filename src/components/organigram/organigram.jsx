import React, { useEffect } from 'react'
import './organigram.scss'

import organigram from '../../assets/img/1598764183966-min.jpg'

// level 0 component
export default function Organigram() {

    useEffect(() => { window.scrollTo(0, 0) })

    return (
        <section className="organigram">
            <div className="container">
                <div className="title">Organigram Asisten Laboratorium Fisika Dasar 2020/2021</div>
                <img className="organigram-img" src={organigram} alt="organigram" />
            </div>
        </section>
    )
}
