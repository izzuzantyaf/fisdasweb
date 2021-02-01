import React, { useEffect, useState } from 'react'
import './handouts.scss'

// import handouts from '../../contents/handouts'

const axios = require('axios')

// level 2 component
function HandoutCard(props) {

    const { lang, faculty } = props.data

    return (
        <div className="handout-card">
            <div className="handout-info">
                <p className="title">{lang === 'id' ? 'Modul Praktikum Fisika Dasar' : 'Physics Lab Works Handout'} ({faculty})</p>
                <p className="lang">{lang === 'id' ? 'Bahasa Indonesia' : 'English'}</p>
            </div>
        </div>
    )
}

// level 1 component
function HandoutList() {

    const [handouts, setHandouts] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://labfisdas-telu-cms.herokuapp.com/api/practicum-handout')
                .then(response => response.data)
                .catch(error => error.message)
            setHandouts(data)
        })()
    }, [])

    const handoutsList = handouts.map((handout, index) => <a
        key={index}
        href={handout.file_url}
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