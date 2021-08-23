import React, { useEffect, useState } from 'react'
import { getData } from '../../lib/get-data'
import './organigram.scss'

// level 0 component
export default function Organigram() {

    const [organigram, setOrganigram] = useState({})

    useEffect(() => {
        (async function () {
            const data = await getData('organigram')
            setOrganigram(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="organigram">
            <div className="container">
                <div className="title">Organigram Asisten Laboratorium Fisika Dasar 2020/2021</div>
                <iframe title="organigram" src={organigram?.prepared_url} frameBorder="0" width="67%" height="720px" style={{ margin: "auto" }}></iframe>
            </div>
        </section>
    )
}
