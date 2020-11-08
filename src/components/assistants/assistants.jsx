import React, { useEffect } from 'react'
import './assistants.scss'

import assistants from '../../contents/assistants'

// level 2 component
function AssistantCard(props) {

    return (
        <div className="assistant-card">
            <div className="assitants-name">{props.data.name}</div>
            <div className="assistant-code">{props.data.code}</div>
        </div>
    )
}

// level 1 component
function AssistantList() {
    const assistantsList = assistants.map((assistant, index) =>
        <AssistantCard key={index} data={assistant} />)

    return (
        <div className="assistants-list">
            {assistantsList}
        </div>
    )
}

// level 0 component
export default function Assistants() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (
        <section className="assistants">
            <div className="container">
                <div className="title">Asisten Praktikum Laboratorium Fisika Dasar 2020/2021</div>
                <AssistantList />
            </div>
        </section>
    )
}