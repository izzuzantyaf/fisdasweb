import React from 'react'
import './assistants.css'

import { assistants } from '../../contents/assistants'

function AssistantCard(props) {

    return (
        <div className="assistant-card">
            <div className="assitants-name">{props.data.name}</div>
            <div className="assistant-code">{props.data.code}</div>
        </div>
    )
}

class Assistants extends React.Component {

    render() {
        const assistantsList = assistants.map(assistant => <AssistantCard data={assistant} />)
        return (
            <section className="assistants">
                <div className="container">
                    {assistantsList}
                    {/* hello world */}
                    {/* <AssistantCard />
                    <AssistantCard />
                    <AssistantCard /> */}
                </div>
            </section>
        )
    }
}

export default Assistants