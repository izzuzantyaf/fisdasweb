import React, { useEffect, useState } from 'react'
// import './code-of-conduct.scss'
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
        <section className="code-of-conduct p-6">
            <div className="container max-w-screen-lg mx-auto flex flex-col gap-6">
                <div className="title text-4xl font-bold">
                    Tata Tertib Praktikum
                </div>
                <iframe title="code-of-conduct" src={codeOfConduct?.prepared_url} frameBorder="0" width="100%" height="720" style={{ margin: "auto" }} className="rounded-xl"></iframe>
            </div>
        </section>
    )
}