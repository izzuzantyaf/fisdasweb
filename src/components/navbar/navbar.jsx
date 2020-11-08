import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import fisdasLogo from '../../assets/img/fisdas-logo-min.png'
import menuArr from '../../contents/menu'

// level 1 component
function Logo() {

    return (
        <div className="logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={fisdasLogo} alt="fisdas-logo" />
            </Link>
        </div>
    )
}

function Navigation() {

    const menuInNavbar = ['Modul', 'Jadwal', 'Video']
    const menuList = menuArr
        .filter(menu => menuInNavbar.includes(menu.name))
        .map((menu, index) =>
            <Link
                key={index}
                to={menu.link}
                style={{ textDecoration: 'none', color: 'black' }}>
                <span className="nav-item">{menu.name}</span>
            </Link>
        )

    return (
        <div className="navigation">
            {menuList}
        </div>
    )
}

// level 0 component
export default function Navbar() {

    return (
        <section className="navbar">
            <div className="container">
                <Logo />
                <Navigation />
            </div>
        </section>
    )
}