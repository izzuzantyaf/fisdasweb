import React from 'react'
import './not-found-page.scss'

class NotFoundPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="not-found">
                <div className="error-message">
                    <div className="main-message">404</div>
                    <div>oops, page not found</div>
                </div>
            </section>
        )
    }
}

export default NotFoundPage