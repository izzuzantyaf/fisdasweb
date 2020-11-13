import React, { useEffect } from 'react'
import './practicum-simulator.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import simulatorWebsites from '../../contents/simulator-web'

// level 2 component
function PracticumSimulatorCard(props) {

    return (
        <div className="sw-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.simulatorWebsite.icon} />
            </div>
            <div className="module-name">{props.simulatorWebsite.module}</div>
        </div>
    )
}

// level 1 component
function PracticumSimulatorList() {

    const simulatorWebsiteList = simulatorWebsites.map((simulatorWebsite, index) =>
        <a
            style={simulatorWebsite.link === '' ? { opacity: 0.3 } : {}}
            key={index}
            href={simulatorWebsite.link}
            target="_blank"
            rel="noopener noreferrer"><PracticumSimulatorCard simulatorWebsite={simulatorWebsite} />
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