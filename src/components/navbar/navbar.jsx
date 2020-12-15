import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import fisdasLogo from '../../assets/img/fisdas-logo-min.png'
import menuArr from '../../contents/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

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

    const menuList = menuArr
        .map((menu, index) =>
            <Link
                key={index}
                to={menu.link}
                style={{ textDecoration: 'none', color: 'black' }}
                className="menu-list-item">
                {menu.name}
            </Link>
        )

    useEffect(() => {
        const hamburgerIcon = document.querySelector(".hamburger-icon")
        const dropdownMenu = document.querySelector(".menu-list")
        hamburgerIcon.addEventListener('mouseenter', () => {
            dropdownMenu.classList.add('show')
        })
        hamburgerIcon.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show')
        })
        dropdownMenu.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('show')
        })
        return () => { }
    }, [])

    return (
        <div className="navigation">
            <FontAwesomeIcon
                icon="bars"
                className="hamburger-icon"
            />
            <div className="menu-list">
                {menuList}
            </div>
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
