import React, { useEffect, useState } from 'react'
import './preliminary-test.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const axios = require('axios')

// level 2 component
function PreliminaryTestCard(props) {

    return (
        <div className="pt-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.preliminaryTest.reactjs_icon} />
            </div>
            <div className="module-name">{props.preliminaryTest.name}</div>
        </div>
    )
}

// level 1 component
function PreliminaryTestList() {

    const [preliminaryTests, setPreliminaryTests] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/preliminary-test')
                .then(response => response.data)
                .catch(error => error.message)
            setPreliminaryTests(data)
        })()
    }, [])

    const preliminaryTestList = preliminaryTests.map((preliminaryTest, index) =>
        <a
            style={preliminaryTest.preliminary_test_link ? {} : { opacity: 0.3 }}
            key={index}
            href={preliminaryTest.preliminary_test_link}
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
        window.scrollTo(0, 0);
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