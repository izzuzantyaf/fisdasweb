import React, { useEffect, useState } from 'react'
import './practicum-simulator.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const axios = require('axios')

// level 2 component
function PracticumSimulatorCard(props) {

    return (
        <div className="sw-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.practicumSimulator.reactjs_icon} />
            </div>
            <div className="module-name">{props.practicumSimulator.name}</div>
        </div>
    )
}

// level 1 component
function PracticumSimulatorList() {

    const [practicumSimulators, setPracticumSimulators] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/practicum-simulator')
                .then(response => response.data)
                .catch(error => error.message)
            setPracticumSimulators(data)
        })()
    }, [])

    const simulatorWebsiteList = practicumSimulators.map((practicumSimulator, index) =>
        <a
            style={practicumSimulator.simulator_link ? {} : { opacity: 0.3 }}
            key={index}
            href={practicumSimulator.simulator_link}
            target="_blank"
            rel="noopener noreferrer"><PracticumSimulatorCard practicumSimulator={practicumSimulator} />
        </a>)

    return (
        <div className="sw-card-list">
            {simulatorWebsiteList}
        </div>
    )
}

// level 0 component
export default function PracticumSimulator() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <section className="practicum-simulator">
            <div className="container">
                <div className="title">Simulator Praktikum</div>
                <PracticumSimulatorList />
            </div>
        </section>
    )
}