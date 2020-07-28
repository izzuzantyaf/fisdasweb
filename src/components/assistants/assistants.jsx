import React from 'react'
import './assistants.css'

import { assistants } from '../../contents/assistants'

const AssistantCard = (props) => {

    return (
        <div className="assistant-card">
            <div className="assitants-name">{props.data.name}</div>
            <div className="assistant-code">{props.data.code}</div>
        </div>
    )
}

class Assistants extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const assistantsList = assistants.map(assistant => <AssistantCard data={assistant} />)
        return (
            <section className="assistants">
                <div className="container">
                    <div className="title">Asisten Praktikum Laboratorium Fisika Dasar 2020/2021</div>
                    <div className="assistants-list">
                        {assistantsList}
                    </div>
                </div>
            </section>
        )
    }
}

export default Assistants