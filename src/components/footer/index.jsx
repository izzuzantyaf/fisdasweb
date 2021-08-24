import React, { useState, useEffect } from "react";

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
    <div className="identity col-span-full flex flex-col gap-4">
      <p className="title text-2xl font-bold">
        Laboratorium Fisika Dasar<br></br>Universitas Telkom
      </p>
      <div className="socmed text-2xl flex gap-4">{socialMedia.map(
        ({ link, name, reactjs_icon }, index) => (
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
      <p className="title font-bold">Our headquarters</p>
      <p className="address mt-4">
        Gedung P (Deli) lantai 3, Telkom University, Jl. Telekomunikasi
        No.1, Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat.
      </p>
    </div>
  )

}

function Explore() {

  return (
    <div className="explore">
      <p className="title font-bold">Explore</p>
      <div className="footer-menu-list flex flex-wrap mt-4 gap-4">{menuArr.map(
        (menu, index) =>
          <Link
            key={index}
            to={menu.link}
            style={{ textDecoration: "none", cursor: "pointer" }} >
            {menu.name}
          </Link>
      )}</div>
    </div>
  )
}

function BackToTopButton() {

  return (
    <div className="back-to-top-icon col-span-full text-center text-2xl cursor-pointer" onClick={() => { window.scrollTo(0, 0) }}>
      <FontAwesomeIcon icon="chevron-circle-up" />
    </div>
  )
}

// level 0 component
export default function Footer() {

  return (
    <footer className="footer bg-white p-6 pt-12 text-gray-600">
      <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <Identity />
        <Headquarters />
        <Explore />
        <BackToTopButton />
        <div className="credits col-span-full text-center">All rights reserved.</div>
      </div>
    </footer>
  )
}