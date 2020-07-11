import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import fisdasLogo from '../../assets/img/fisdas-logo-min.png'
import { menu as menuArr } from '../../contents/menu'

class Navbar extends React.Component {

    render() {
        const menuInNavbar = ['Modul', 'Jadwal', 'Video']
        const menuList = menuArr.filter(menu => menuInNavbar.includes(menu.name)).map(menu => <Link to={menu.link} style={{ textDecoration: 'none', color: 'black' }}><span>{menu.name}</span></Link>)
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