import React, { useEffect, useState } from 'react'
import './preliminary-test.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getData } from '../../lib/get-data'

// level 2 component
function PreliminaryTestCard(props) {

    return (
        <div className="pt-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.data.reactjs_icon} />
            </div>
            <div className="module-name">{props.data.name}</div>
        </div>
    )
}

// level 0 component
export default function PreliminaryTest() {

    const [preliminaryTests, setPreliminaryTests] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('preliminary-test')
            setPreliminaryTests(data)
        })()
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="preliminary-test">
            <div className="container">
                <div className="title">Tugas Pendahuluan</div>
                <div className="pt-card-list">
                    {preliminaryTests.map((preliminaryTest, index) =>
                        <a
                            style={preliminaryTest.preliminary_test_link ? {} : { opacity: 0.3 }}
                            key={index}
                            href={preliminaryTest.preliminary_test_link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <PreliminaryTestCard data={preliminaryTest} />
                        </a>)}
                </div>
            </div>
        </section>
    )
}