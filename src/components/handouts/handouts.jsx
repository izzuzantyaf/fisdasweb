import React, { useEffect } from 'react'
import './handouts.scss'

import { handouts } from '../../contents/handouts'

// level 2 component
function HandoutCard(props) {

    return (
        <div className="handout-card">
            <div className="handout-info">
                <p className="title">{props.data.name} ({props.data.faculty})</p>
                <p className="lang">{props.data.lang === 'id' ? 'Bahasa Indonesia' : 'English'}</p>
            </div>
        </div>
    )
}

// level 1 component
function HandoutList() {

    const handoutsList = handouts.map((handout, index) => <a
        key={index}
        href={handout.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}>
        <HandoutCard data={handout} />
    </a>)

    return (
        <div className="handouts-list">
            {handoutsList}
        </div>
    )
}

// level 0 component
export default function Handouts() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <section className="handouts">
            <div className="container">
                <div className="main-title">Modul Praktikum</div>
                <HandoutList />
            </div>
        </section>
    )
}