import React from 'react'
import './menu.css'

import MenuCard from '../menu-card/menu-card'

import { menu as menuArr } from '../../contents/menu'

class Template extends React.Component {

    render() {
        const menuList = menuArr.map(menu => <MenuCard data={menu} />)
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