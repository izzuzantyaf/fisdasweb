import React from 'react'
import './menu-card.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MenuCard extends React.Component {

    render() {
        return (
            <div className="menu-card">
                <div className="icon"><FontAwesomeIcon icon={this.props.data.icon} /></div>
                <div className="menu-name">{this.props.data.name}</div>
            </div>
        )
    }
}

export default MenuCard