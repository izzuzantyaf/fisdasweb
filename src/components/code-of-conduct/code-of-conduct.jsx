import React, { useEffect, useState } from 'react'
import './code-of-conduct.scss'
import { getData } from '../../lib/get-data'

// level 0 component
export default function CodeOfConduct() {

    const [codeOfConduct, setcodeOfConduct] = useState({})

    useEffect(() => {
        (async function () {
            const data = await getData('code-of-conduct')
            setcodeOfConduct(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="organigram">
            <div className="container">
                <div className="title">
                    Tata Tertib Praktikum Fisika Dasar Universitas Telkom
                </div>
                <iframe title="code-of-conduct" src={codeOfConduct?.prepared_url} frameBorder="0" width="67%" height="720px" style={{ margin: "auto" }}></iframe>
            </div>
        </section>
    )
}