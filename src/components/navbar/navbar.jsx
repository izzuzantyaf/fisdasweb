import React from 'react'
import './navbar.css'

import fisdasLogo from '../../assets/img/fisdas-logo-min.png'
import { menu as menuArr } from '../../contents/menu'

class Navbar extends React.Component {

    render() {
        const menuInNavbar = ['Modul', 'Jadwal', 'Video']
        const menuList = menuArr.filter(menu => menuInNavbar.includes(menu.name)).map(menu => <span>{menu.name}</span>)
        return (
            <section className="navbar">
                <div className="container">
                    <div className="logo">
                        <img src={fisdasLogo} alt="fisdas-logo" />
                    </div>
                    <div className="navigation">
                        {menuList}
                    </div>
                </div>
            </section>
        )
    }
}

export default Navbar