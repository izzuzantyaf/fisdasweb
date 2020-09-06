import React from 'react'
import './handouts.scss'

import HandoutCard from '../handout-card/handout-card'

import { handouts } from '../../contents/handouts'

class Handouts extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const handoutsList = handouts.map((handout, index) => <a key={index} href={handout.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><HandoutCard data={handout} /></a>)
        return (
            <section className="handouts">
                <div className="container">
                    <div className="main-title">Modul praktikum</div>
                    <div className="handouts-list">
                        {handoutsList}
                    </div>
                </div>
            </section>
        )
    }
}

export default Handouts