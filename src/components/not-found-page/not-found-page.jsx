import React, { useEffect } from 'react'
import './not-found-page.scss'

import image404 from '../../assets/img/404-min.png'

// level 0 component
export default function NotFoundPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <section className="not-found">
            <div className="error-message">
                <img className="img-404" src={image404} alt="404" />
                <div className="messages">Your lovely feature is under development.</div>
            </div>
        </section>
    )
}