import React, { useEffect } from 'react'
import './journal-cover.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { processedJournalCover as journalCovers } from '../../contents/journal-cover'

// level 2 component
function JournalCoverCard(props) {

    return (
        <div className="jc-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.journalCover.icon} />
            </div>
            <div className="module-name">{props.journalCover.module}</div>
        </div>
    )
}

// level 1 component
function JournalCoverList() {

    const journalCoverList = journalCovers.map((journalCover, index) =>
        <a
            key={index}
            href={journalCover.link}
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