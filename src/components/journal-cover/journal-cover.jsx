import React, { useEffect, useState } from 'react'
import './journal-cover.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getData } from '../../lib/get-data'

// level 2 component
function JournalCoverCard(props) {

    return (
        <div className="jc-card">
            <div className="icon">
                <FontAwesomeIcon icon={props.data.reactjs_icon} />
            </div>
            <div className="module-name">{props.data.name}</div>
        </div>
    )
}

// level 0 component
export default function JournalCover() {

    const [journalCovers, setJournalCovers] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('journal-cover')
            setJournalCovers(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="journal-cover">
            <div className="container">
                <div className="title">Cover Jurnal Praktikum</div>
                <div className="jc-card-list">
                    {journalCovers.map((journalCover, index) =>
                        <a
                            style={{ opacity: journalCover.journal_cover_link ? 1 : 0.3 }}
                            key={index}
                            href={journalCover.journal_cover_link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <JournalCoverCard data={journalCover} />
                        </a>)}
                </div>
            </div>
        </div>
    )
}