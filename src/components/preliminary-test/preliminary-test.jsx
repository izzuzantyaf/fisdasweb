import React from 'react'
import './preliminary-test.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { processedPreliminaryTest as preliminaryTest } from '../../contents/preliminary-test'

class PLCard extends React.Component {

    render() {
        return (
            <div className="jc-card">
                <div className="icon">
                    <FontAwesomeIcon icon={this.props.preliminaryTest.icon} />
                </div>
                <div className="module-name">{this.props.preliminaryTest.module}</div>
            </div>
        )
    }
}

class PreliminaryTest extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const preliminaryTestList = preliminaryTest.map((pt, index) =>
            <a style={pt.link === '' ? { opacity: 0.5 } : {}} key={index} href={pt.link}><PLCard preliminaryTest={pt} /></a>
        )

        return (
            <div className="journal-cover">
                <div className="container">
                    <div className="title">Tugas Pendahuluan</div>
                    <div className="jc-card-list">
                        {preliminaryTestList}
                    </div>
                </div>
            </div>
        )
    }
}

export default PreliminaryTest