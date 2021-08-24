import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menus from '../../contents/menu'
import { Link } from 'react-router-dom'

function MenuCard(props) {

  return (
    <div className="menu-card hover:shadow-lg transition-shadow duration-300 text-blue-800 bg-white flex p-6 items-center rounded-xl">
      <div className="icon text-3xl w-16 flex-shrink-0">
        <FontAwesomeIcon icon={props.data.icon} />
      </div>
      <div className="menu-name font-medium">{props.data.name}</div>
    </div>
  )
}

export default function Home() {
  return (
    <section className="home">
      <Navbar />
      <div className="container mx-auto flex flex-col gap-12 p-6 pb-12 max-w-screen-lg">
        <section className="hero bg-blue-800 text-white rounded-xl pt-12 pb-6 px-4 flex flex-col gap-6 h-96">
          <div className="main-title text-3xl md:text-4xl font-bold text-center">Laboratorium Fisika Dasar <br /> Universitas Telkom</div>
          <div className="desc text-center lg:text-xl">The official website of<br />Tel-U Physics Laboratory</div>
        </section>
        <section className="menu">
          <div className="menu-list grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menus.filter(menu => !menu.newFeature).map((menu, index) =>
              <Link
                key={index}
                to={menu.link}
                style={{ textDecoration: 'none' }}>
                <MenuCard data={menu} />
              </Link>)}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}