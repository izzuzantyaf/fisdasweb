import React from 'react'
import './not-found-page.scss'

import image404 from '../../assets/img/404.png'

class NotFoundPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="not-found">
                <div className="error-message">
                    <img className="img-404" src={image404} alt="404" />
                    <div className="messages">Your lovely feature is under development.</div>
                </div>
            </section>
        )
    }
}

export default NotFoundPage