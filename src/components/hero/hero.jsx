import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './hero.scss'

class Hero extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="main-title">Laboratorium Fisika Dasar <br></br> Universitas Telkom</div>
                    <div className="fisdas-board">
                        {/* <div className="board-title">Fisdas Board</div> */}
                        <div className="content-container">
                            <a href="https://regresi.msatrio.com/" target="_blank"
                                rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="content-card">
                                    <div className="type">NEW FEATURE</div>
                                    <div className="main-section">
                                        <div className="icon"><FontAwesomeIcon icon={faChartLine} /></div>
                                        <div className="title">Kalkulator Regresi Linear</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero