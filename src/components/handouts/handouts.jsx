import React from 'react'
import './handouts.css'

import HandoutCard from '../handout-card/handout-card'

import { handouts } from '../../contents/handouts'

class Handouts extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const handoutsList = handouts.map(handout => <a href={handout.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><HandoutCard data={handout} /></a>)
        return (
            <section className="handouts">
                <div className="container">
                    {handoutsList}
                </div>
            </section>
        )
    }
}

export default Handouts