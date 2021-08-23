import React, { useEffect, useState } from 'react'
import './handouts.scss'
import { getData } from '../../lib/get-data'

// level 2 component
function HandoutCard(props) {

    const { lang, faculty, file_url } = props.data

    return (
        <a href={file_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', opacity: file_url ? 1 : 0.3 }}>
            <div className="handout-card">
                <div className="handout-info">
                    <p className="title">{lang === 'id' ? 'Modul Praktikum Fisika Dasar' : 'Physics Lab Works Handout'} ({faculty})</p>
                    <p className="lang">{lang === 'id' ? 'Bahasa Indonesia' : 'English'}</p>
                </div>
            </div>
        </a>
    )
}

// level 0 component
export default function Handouts() {

    const [handouts, setHandouts] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('practicum-handout')
            setHandouts(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="handouts">
            <div className="container">
                <div className="main-title">Modul Praktikum</div>
                <div className="handouts-list">
                    {handouts.map((handout, index) =>
                        <HandoutCard key={index} data={handout} />)}
                </div>
            </div>
        </section>
    )
}