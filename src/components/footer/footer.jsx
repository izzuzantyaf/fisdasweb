import React from "react";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import socialMedia from "../../contents/social-media";
import { menu as menuArr } from "../../contents/menu";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {

    const socmedList = socialMedia.map((socmed, index) => (
      <a
        key={index}
        href={socmed.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#ffffff" }}
        alt={socmed.name} >
        <FontAwesomeIcon icon={socmed.icon} />
      </a>
    ));

    const menuList = menuArr.map((menu, index) => (
      <Link
        key={index}
        to={menu.link}
        style={{ textDecoration: "none", color: "#7a7a7a", cursor: "pointer" }} >
        {menu.name}
      </Link>
    ));

    return (
      <footer className="footer">
        <div className="container">

          <div className="section1">
            <div className="title">
              Laboratorium Fisika Dasar<br></br>Universitas Telkom
            </div>
            <div className="socmed">{socmedList}</div>
          </div>

          <div className="section2">
            <div className="headquarter">
              <p className="title">Our headquarter</p>
              <p className="address">
                Gedung P (Deli) lantai 3, Telkom University, Jl. Telekomunikasi
                No.1, Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat.
              </p>
            </div>
          </div>

          <div className="section3">
            <div className="explore">
              <p className="title">Explore</p>
              <div className="footer-menu-list">{menuList}</div>
            </div>
          </div>

          <div className="back-to-top-icon" onClick={() => { window.scrollTo(0, 0) }}>
            <FontAwesomeIcon icon="chevron-circle-up" />
          </div>

          <div className="credits">All rights reserved.</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
