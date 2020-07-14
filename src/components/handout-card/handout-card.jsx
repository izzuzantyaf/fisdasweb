import React from 'react'
import './handout-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HandoutCard extends React.Component {

    render() {
        return (
            <div className="handout-card">
                <div className="handout-info">
                    <p className="title">{this.props.data.name} ({this.props.data.faculty})</p>
                    <p className="lang">{this.props.data.lang === 'id' ? 'Bahasa Indonesia' : 'English'}</p>
                </div>
                <div className="actions">
                    <a href={this.props.data.fileDir} className="view"><FontAwesomeIcon style={{ color: '#222EA2' }} icon={this.props.data.icon.view} /></a>
                    <a href={this.props.data.fileDir} className="download" download ><FontAwesomeIcon style={{ color: '#222EA2' }} icon={this.props.data.icon.download} /></a>
                </div>
            </div>
        )
    }
}

export default HandoutCard