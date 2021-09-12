import React from 'react'
import menus from '../../contents/menu'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Menu() {
  return (
    <section className="menu">
      <div className="menu-list grid grid-cols-1 sm:grid-cols-2 gap-4">
        {menus.filter(menu => !menu.newFeature).map((menu, index) =>
          <Link
            key={index}
            to={menu.link}
            style={{ textDecoration: 'none' }}>
            <div className="menu-card hover:shadow-lg transition-shadow duration-300 text-blue-800 bg-white flex p-6 items-center rounded-xl">
              <div className="icon text-3xl w-16 flex-shrink-0">
                <FontAwesomeIcon icon={menu.icon} />
              </div>
              <div className="menu-name font-medium">{menu.name}</div>
            </div>
          </Link>)}
      </div>
    </section>
  )
}