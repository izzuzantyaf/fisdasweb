import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ModuleList(props) {
  const modules = props.list
  return (
    <div className="module-list grid grid-cols-1 md:grid-cols-2 gap-6">
      {modules.map(({ link, iconName, title }, index) =>
        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
          <div className="module-card p-4 pl-6 text-blue-800 bg-white rounded-xl flex items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer" style={link ? {} : { opacity: 0.3 }}>
            <div className="icon text-3xl w-16 flex-shrink-0">
              <FontAwesomeIcon icon={iconName} />
            </div>
            <div className="title font-medium">{title}</div>
          </div>
        </a>)}
    </div>
  )
}