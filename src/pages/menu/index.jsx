import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

import menuArr from '../../contents/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// level 1 component
function MenuCard(props) {

    return (
        <div className="menu-card">
            <div className="icon"><FontAwesomeIcon icon={props.data.icon} /></div>
            <div className="menu-name">{props.data.name}</div>
        </div>
    )
}

// level 0 component
export default function Menu() {

    return (
        <section className="menu">
            <div className="container">
                <div className="menu-list">
                    {menuArr.filter(menu => !menu.newFeature).map((menu, index) =>
                        <Link
                            key={index}
                            to={menu.link}
                            style={{ textDecoration: 'none' }}>
                            <MenuCard data={menu} />
                        </Link>)}
                </div>
            </div>
        </section>
    )
}