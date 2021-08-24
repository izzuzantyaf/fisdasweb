import React from 'react'
import { Link } from 'react-router-dom'

import fisdasLogo from '../../assets/img/fisdas-logo-min.png'
import menuArr from '../../contents/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

// level 1 component
function Logo() {

    return (
        <div className="logo">
            <Link to="/">
                <img src={fisdasLogo} alt="fisdas-logo" width="50" />
            </Link>
        </div>
    )
}

function DropDownMenu() {

    useEffect(() => {
        const hamburgerIcon = document.querySelector(".hamburger-icon")
        const dropdownMenu = document.querySelector(".dropdown")
        const dropDownOverlay = document.querySelector(".dropdown-overlay")
        hamburgerIcon.addEventListener('click', () => {
            if (dropdownMenu.classList.contains('hidden')) {
                dropdownMenu.classList.replace('hidden', 'flex')
                dropDownOverlay.classList.add('fixed')
            }
            else {
                dropdownMenu.classList.replace('flex', 'hidden')
                dropDownOverlay.classList.remove('fixed')
            }
        })
        dropDownOverlay.addEventListener('click', (e) => {
            if (e.target !== dropdownMenu) {
                dropdownMenu.classList.replace('flex', 'hidden')
                dropDownOverlay.classList.remove('fixed')
            }
        })
        return () => { }
    }, [])

    return (
        <div className="navigation">
            <div className="dropdown-overlay inset-0 z-10 bg-black bg-opacity-30">
                <div className="container relative mx-auto max-w-screen-lg">
                    <div className="dropdown absolute top-14 right-0 hidden flex-col bg-white rounded-xl px-2 py-3 border">
                        {menuArr.map((menu, index) =>
                            <Link
                                key={index}
                                to={menu.link}
                                className="dropdown-item rounded-lg hover:bg-gray-100 p-2">
                                {menu.name}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="hamburger-icon cursor-pointer rounded-md text-blue-800 text-lg hover:bg-blue-100 px-2 py-1">
                <FontAwesomeIcon icon="bars" />
            </div>
        </div>
    )
}

// level 0 component
export default function Navbar() {

    return (
        <section className="navbar bg-white">
            <div className="container flex items-center mx-auto justify-between p-4 max-w-screen-lg">
                <Logo />
                <DropDownMenu />
            </div>
        </section>
    )
}
