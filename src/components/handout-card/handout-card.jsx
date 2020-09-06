import React from 'react'
import './handout-card.scss'

class HandoutCard extends React.Component {

    render() {
        return (
            <div className="handout-card">
                <div className="handout-info">
                    <p className="title">{this.props.data.name} ({this.props.data.faculty})</p>
                    <p className="lang">{this.props.data.lang === 'id' ? 'Bahasa Indonesia' : 'English'}</p>
                </div>
            </div>
        )
    }
}

export default HandoutCard