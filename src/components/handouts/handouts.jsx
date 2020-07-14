import React from 'react'
import './handouts.css'

import HandoutCard from '../handout-card/handout-card'

import { handouts } from '../../contents/handouts'

class Handouts extends React.Component {

    render() {
        const handoutsList = handouts.map(handout => <HandoutCard data={handout} />)
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