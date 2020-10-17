import React, { useEffect } from 'react'
import './preliminary-test.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { processedPreliminaryTest as preliminaryTests } from '../../contents/preliminary-test'

// level 2 component
function PreliminaryTestCard(props) {

    return (
        <div className="pt-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.preliminaryTest.icon} />
            </div>
            <div className="module-name">{props.preliminaryTest.module}</div>
        </div>
    )
}

// level 1 component
function PreliminaryTestList() {

    const preliminaryTestList = preliminaryTests.map((preliminaryTest, index) =>
        <a
            style={preliminaryTest.link === '' ? { opacity: 0.3 } : {}}
            key={index}
            href={preliminaryTest.link}
            target="_blank"
            rel="noopener noreferrer"><PreliminaryTestCard preliminaryTest={preliminaryTest} />
        </a>)

    return (
        <div className="pt-card-list">
            {preliminaryTestList}
        </div>
    )
}

// level 0 component
export default function PreliminaryTest() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <section className="preliminary-test">
            <div className="container">
                <div className="title">Tugas Pendahuluan</div>
                <PreliminaryTestList />
            </div>
        </section>
    )
}