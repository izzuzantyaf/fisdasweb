import React, { useEffect, useState } from 'react'
import './organigram.scss'

const axios = require('axios')

// level 0 component
export default function Organigram() {

    const [organigram, setOrganigram] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);

        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/organigram')
                .then(response => response.data)
                .catch(error => error.message)
            setOrganigram(data)
        })()
    }, [])

    return (
        <section className="organigram">
            <div className="container">
                <div className="title">Organigram Asisten Laboratorium Fisika Dasar 2020/2021</div>
                <img className="organigram-img" src={organigram.image_url} alt="organigram" />
            </div>
        </section>
    )
}
