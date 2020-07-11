import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

import MenuCard from '../menu-card/menu-card'

import { menu as menuArr } from '../../contents/menu'

class Template extends React.Component {

    render() {
        const menuList = menuArr.map(menu => <Link to={menu.link} style={{ textDecoration: 'none' }}> <MenuCard data={menu} /> </Link>)
        return (
            <section className="menu">
                <div className="container">
                    {menuList}
                </div>
            </section>
        )
    }
}

export default Template