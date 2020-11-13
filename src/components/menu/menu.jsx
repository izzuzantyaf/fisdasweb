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

function NewFeature() {

    const newFeatureList = menuArr.filter(menu => menu.newFeature).map((newFeature, index) =>
        <Link
            key={index}
            to={newFeature.link}
            style={{ textDecoration: 'none' }}>
            <MenuCard data={newFeature} />
        </Link>)

    return (
        <div className="new-feature">
            <div className="container">
                <div className="title">New features</div>
                <div className="new-menu-list">{newFeatureList}</div>
            </div>
        </div>
    )
}

function MenuList() {

    const menuList = menuArr.filter(menu => !menu.newFeature).map((menu, index) =>
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
                <NewFeature />
                <MenuList />
            </div>
        </section>
    )
}