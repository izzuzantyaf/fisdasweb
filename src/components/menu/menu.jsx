import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

import MenuCard from '../menu-card/menu-card'

import { menu as menuArr } from '../../contents/menu'
import socialMedia from '../../contents/social-media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Menu extends React.Component {

    render() {
        const menuList = menuArr.map((menu, index) => <Link key={index} to={menu.link} style={{ textDecoration: 'none' }}> <MenuCard data={menu} /> </Link>)

        const socmedList = socialMedia.map((socmed, index) => <a key={index} href={socmed.link}><FontAwesomeIcon icon={socmed.icon} /></a>)
        return (
            <section className="menu">
                <div className="container">
                    <div className="socmed-banner">
                        <div className="title">Keep in touch with us</div>
                        <div className="socmed-list">{socmedList}</div>
                    </div>
                    <div className="menu-list">
                        {menuList}
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu