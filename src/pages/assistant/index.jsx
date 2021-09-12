import React, { useEffect, useState } from 'react'
import ContentLayout from '../../layouts/content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getData } from '../../lib/get-data'

function AssistantCard(props) {
    const [feedbackTime] = useState(false)
    const { name, code, line_id, feedback_link } = props.data

    return (
        <div className="assistant-card flex flex-col gap-1 bg-white p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="assistant-code font-bold text-2xl text-blue-800">{code}</div>
            <div className="assitants-name flex-grow">{name}</div>
            {
                line_id ?
                    <a href={`https://line.me/R/ti/p/${line_id}`} target="_blank" rel="noopener noreferrer" className="border border-green-500 text-green-500 p-2 rounded-lg text-xs">
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={['fab', 'line']} className="text-2xl" />
                            Contact me
                        </div>
                    </a>
                    :
                    <div className="flex gap-2 items-center bg-gray-100 text-gray-500 p-2 rounded-lg text-xs">
                        <FontAwesomeIcon icon={['fab', 'line']} className="text-2xl" />
                        No Line ID
                    </div>
            }
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

export default function Assistant() {
    const [assistants, setAssistants] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('assistant')
            setAssistants(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return <ContentLayout data={{
        title: 'Asisten Praktikum',
        Content:
            <div className="assistants-list grid grid-cols-2 md:grid-cols-3 gap-6">
                {assistants.map((assistant, index) => <AssistantCard key={index} data={assistant} />)}
            </div>
    }} />
}
