import React, { useEffect, useState } from 'react'
import './code-of-conduct.scss'

const axios = require('axios')

// level 0 component
export default function CodeOfConduct() {

    const [codeOfConducts, setcodeOfConducts] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/code-of-conduct')
                .then(response => response.data)
                .catch(error => error.message)
            setcodeOfConducts(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    const codeOfConductsList = codeOfConducts.map((codeOfConduct, index) =>
        <img key={index} className={`tatib-${index + 1}`} src={codeOfConduct.image_url} alt={`tatib${index + 1}`} />
    )

    return (
        <section className="organigram">
            <div className="container">
                <div className="title">Tata Tertib Praktikum Fisika Dasar 1 Tahun Akademik 2020/2021</div>
                {codeOfConductsList}
            </div>
        </section>
    )
}