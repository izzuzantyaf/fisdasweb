import React from 'react'
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { socialMedia } from '../../contents/assests'
import { menu as menuArr } from '../../contents/menu'

class Footer extends React.Component {

    render() {
        const socmedList = socialMedia.map(socmed => <FontAwesomeIcon icon={socmed.icon} />)
        const menuList = menuArr.map(menu => <p>{menu.name}</p>)
        return (
            <footer className="footer">
                <div className="container">

                    <div className="section1">
                        <div className="title">Laboratorium Fisika Dasar<br></br>Telkom University</div>
                        <div className="socmed">
                            {socmedList}
                        </div>
                    </div>

                    <div className="section2">
                        <div className="find-us">
                            <p className="title">Find us</p>
                            <p className="address">
                                Gedung P (Deli) lantai 3, Telkom University,
                                Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot,
                                Bandung, Jawa Barat.
                            </p>
                        </div>
                        <div className="explore">
                            <p className="title">Explore</p>
                            <div className="footer-menu-list">
                                {menuList}
                            </div>
                        </div>
                    </div>

                    <div className="credits">All rights reserved.</div>
                </div>
            </footer>
        )
    }
}

export default Footer