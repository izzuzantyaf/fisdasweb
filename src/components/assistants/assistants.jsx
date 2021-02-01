import React, { useEffect, useState } from 'react'
import './assistants.scss'

const axios = require('axios')

// level 2 component
function AssistantCard(props) {

    const [feedbackTime] = useState(false)

    return (
        <div className="assistant-card">
            <div className="assitants-name">{props.data.name}</div>
            <div className="assistant-code">{props.data.code}</div>
            {
                feedbackTime ?
                    <a
                        href={props.data.feedback_link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="feedback-btn">Write me a feedback</div>
                    </a> : ''
            }
        </div>
    )
}

// level 1 component
function AssistantList() {

    const [assistants, setAssistants] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('http://labfisdas-telu-cms.herokuapp.com/api/assistant')
                .then(response => response.data)
            setAssistants(data)
        })()
    }, [])

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
