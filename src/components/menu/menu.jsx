import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

import menuArr from '../../contents/menu'
import socialMedia from '../../contents/social-media'
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
function SocialMediaBanner() {

    const socmedList = socialMedia.map((socmed, index) =>
        <a
            key={index}
            href={socmed.link}
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={socmed.icon} />
        </a>)

    return (
        <div className="socmed-banner">
            <div className="title">Keep in touch with us</div>
            <div className="socmed-list">{socmedList}</div>
        </div>
    )
}

function MenuList() {

    const menuList = menuArr.map((menu, index) =>
        <Link
            key={index}
            to={menu.link}
            style={{ textDecoration: 'none' }}>
            <MenuCard data={menu} />
        </Link>)

    return (
        <div className="menu-list">
            {menuList}
        </div>
    )
}

// level 0 component
export default function Menu() {

    return (
        <section className="menu">
            <div className="container">
                <SocialMediaBanner />
                <MenuList />
            </div>
        </section>
    )
}