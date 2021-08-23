import React, { useState, useEffect } from "react";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getData } from "../../lib/get-data";
import menuArr from "../../contents/menu";
import { Link } from "react-router-dom";

// level 1 components
function Identity() {
  const [socialMedia, setSocialMedia] = useState([])

  useEffect(() => {
    (async function () {
      const data = await getData('social-media')
      setSocialMedia(data)
    })()
  }, [])

  return (
    <div className="identity">
      <p className="title">
        Laboratorium Fisika Dasar<br></br>Universitas Telkom
      </p>
      <div className="socmed">{socialMedia.map(({ link, name, reactjs_icon }, index) => (
        <a
          key={index}
          className="socmed-icon"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          alt={name} >
          <FontAwesomeIcon icon={reactjs_icon.split('-')} />
        </a>
      ))}</div>
    </div>
  )
}

function Headquarters() {

  return (
    <div className="headquarters">
      <p className="title">Our headquarters</p>
      <p className="address">
        Gedung P (Deli) lantai 3, Telkom University, Jl. Telekomunikasi
        No.1, Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat.
      </p>
    </div>
  )

}

function Explore() {

  const menuList = menuArr.map((menu, index) => (
    <Link
      key={index}
      to={menu.link}
      style={{ textDecoration: "none", cursor: "pointer" }} >
      {menu.name}
    </Link>
  ));

  return (
    <div className="explore">
      <p className="title">Explore</p>
      <div className="footer-menu-list">{menuList}</div>
    </div>
  )
}

function BackToTopButton() {

  return (
    <div className="back-to-top-icon" onClick={() => { window.scrollTo(0, 0) }}>
      <FontAwesomeIcon icon="chevron-circle-up" />
    </div>
  )
}

// level 0 component
export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <Identity />
        <Headquarters />
        <Explore />
        <BackToTopButton />
        <div className="credits">All rights reserved.</div>
      </div>
    </footer>
  )
}