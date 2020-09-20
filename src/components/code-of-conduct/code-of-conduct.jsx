import React from 'react'
import './code-of-conduct.scss'

import tatib1 from '../../assets/img/tatib 1-min.jpg'
import tatib2 from '../../assets/img/tatib 2-min.jpg'
import tatib3 from '../../assets/img/tatib 3-min.jpg'

class CodeOfConduct extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="organigram">
                <div className="container">
                    <div className="title">Tata Tertib Praktikum Fisika Dasar 1 Tahun Akademik 2020/2021</div>
                    <img className="tatib-1" src={tatib1} alt="tatib1" />
                    <img className="tatib-2" src={tatib2} alt="tatib2" />
                    <img className="tatib-3" src={tatib3} alt="tatib2" />
                </div>
            </section>
        )
    }
}

export default CodeOfConduct