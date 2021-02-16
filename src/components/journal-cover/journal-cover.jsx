import React, { useEffect, useState } from 'react'
import './journal-cover.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const axios = require('axios')

// level 2 component
function JournalCoverCard(props) {

    return (
        <div className="jc-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.journalCover.reactjs_icon} />
            </div>
            <div className="module-name">{props.journalCover.name}</div>
        </div>
    )
}

// level 1 component
function JournalCoverList() {
    const [journalCovers, setJournalCovers] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/journal-cover')
                .then(response => response.data)
                .catch(error => error.message)
            setJournalCovers(data)
        })()
    }, [])

    const journalCoverList = journalCovers.map((journalCover, index) =>
        <a
            style={{ opacity: journalCover.journal_cover_link ? 1 : 0.3 }}
            key={index}
            href={journalCover.journal_cover_link}
            target="_blank"
            rel="noopener noreferrer">
            <JournalCoverCard journalCover={journalCover} />
        </a>)

    return (
        <div className="jc-card-list">
            {journalCoverList}
        </div>
    )
}

// level 0 component
export default function JournalCover() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="journal-cover">
            <div className="container">
                <div className="title">Cover Jurnal Praktikum</div>
                <JournalCoverList />
            </div>
        </div>
    )
}