import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import fisdasLogo from '../../assets/img/fisdas-logo-min.png'
import { menu as menuArr } from '../../contents/menu'

class Navbar extends React.Component {

    render() {
        const menuInNavbar = ['Modul', 'Jadwal', 'Video']
        const menuList = menuArr
            .filter(menu => menuInNavbar.includes(menu.name))
            .map((menu, index) =>
                <Link key={index} to={menu.link} style={{ textDecoration: 'none', color: 'black' }}><span className="nav-item">{menu.name}</span></Link>
            )
        return (
            <section className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <img src={fisdasLogo} alt="fisdas-logo" />
                        </Link>
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