import React, { useEffect, useState } from 'react'
import './practicum-simulator.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getData } from '../../lib/get-data'

// level 2 component
function PracticumSimulatorCard(props) {

    return (
        <div className="sw-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.data.reactjs_icon} />
            </div>
            <div className="module-name">{props.data.name}</div>
        </div>
    )
}

// level 0 component
export default function PracticumSimulator() {

    const [practicumSimulators, setPracticumSimulators] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('practicum-simulator')
            setPracticumSimulators(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="practicum-simulator">
            <div className="container">
                <div className="title">Simulator Praktikum</div>
                <div className="sw-card-list">
                    {practicumSimulators.map((practicumSimulator, index) =>
                        <a
                            style={practicumSimulator.simulator_link ? {} : { opacity: 0.3 }}
                            key={index}
                            href={practicumSimulator.simulator_link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <PracticumSimulatorCard data={practicumSimulator} />
                        </a>)}
                </div>
            </div>
        </section>
    )
}