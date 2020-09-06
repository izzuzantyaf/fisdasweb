import React from 'react'
import './hero.scss'

class Hero extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="hero">
                <div className="main-title">Laboratorium Fisika Dasar <br></br> Telkom University</div>
            </section>
        )
    }
}

export default Hero