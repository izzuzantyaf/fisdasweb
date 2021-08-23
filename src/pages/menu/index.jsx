import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

import menuArr from '../../contents/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getData } from '../../lib/get-data'

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
    const [socialMedia, setSocialMedia] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('social-media')
            setSocialMedia(data)
        })()
    }, [])

    return (
        <div className="socmed-banner">
            <div className="title">Keep in touch with us</div>
            <div className="socmed-list">{socialMedia.map(({ link, reactjs_icon }, index) =>
                <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={reactjs_icon.split('-')} />
                </a>)}
            </div>
        </div>
    )
}

function NewFeature() {

    return (
        <div className="new-feature">
            <div className="container">
                <div className="title">New features</div>
                <div className="new-menu-list">{menuArr.filter(menu => menu.newFeature)
                    .map((newFeature, index) =>
                        <Link
                            key={index}
                            to={newFeature.link}
                            style={{ textDecoration: 'none' }}>
                            <MenuCard data={newFeature} />
                        </Link>)}
                </div>
            </div>
        </div>
    )
}

function MenuList() {

    return (
        <div className="menu-list">
            {menuArr
                .filter(menu => !menu.newFeature)
                .map((menu, index) =>
                    <Link
                        key={index}
                        to={menu.link}
                        style={{ textDecoration: 'none' }}>
                        <MenuCard data={menu} />
                    </Link>)}
        </div>
    )
}

// level 0 component
export default function Menu() {

    const [ifAnyNewFeature] = useState(menuArr.map(menu => menu.newFeature).some(newFeature => newFeature))

    return (
        <section className="menu">
            <div className="container">
                <SocialMediaBanner />
                {ifAnyNewFeature ? <NewFeature /> : ''}
                <MenuList />
            </div>
        </section>
    )
}