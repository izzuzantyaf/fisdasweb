import React, { useEffect, useState } from 'react'
import './assistants.scss'
import { getData } from '../../lib/get-data'

// level 2 component
function AssistantCard(props) {
    const [feedbackTime] = useState(false)
    const { name, code, feedback_link } = props.data

    return (
        <div className="assistant-card">
            <div className="assitants-name">{name}</div>
            <div className="assistant-code">{code}</div>
            {feedbackTime ?
                <a
                    href={feedback_link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="feedback-btn">Write me a feedback</div>
                </a> : ''}
        </div>
    )
}

// level 0 component
export default function Assistants() {
    const [assistants, setAssistants] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('assistant')
            setAssistants(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="assistants">
            <div className="container">
                <div className="title">Asisten Praktikum</div>
                <div className="assistants-list">
                    {assistants.map((assistant, index) =>
                        <AssistantCard key={index} data={assistant} />)}
                </div>
            </div>
        </section>
    )
}
