import React from 'react'
import './journal-cover.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { processedJournalCover as journalCovers } from '../../contents/journal-cover'

class JCCard extends React.Component {

    render() {
        return (
            <div className="jc-card">
                <div className="icon">
                    <FontAwesomeIcon icon={this.props.journalCover.icon} />
                </div>
                <div className="module-name">{this.props.journalCover.module}</div>
            </div>
        )
    }
}

class JournalCover extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const journalCoverList = journalCovers.map((jc, index) => <a key={index} href={jc.link}><JCCard journalCover={jc} /></a>)

        return (
            <div className="journal-cover">
                <div className="container">
                    <div className="title">Cover Jurnal Praktikum</div>
                    <div className="jc-card-list">
                        {journalCoverList}
                    </div>
                </div>
            </div>
        )
    }
}

export default JournalCover