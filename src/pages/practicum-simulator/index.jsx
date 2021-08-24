import React, { useEffect, useState } from 'react'
import ContentLayout from '../../layouts/content'
import ModuleList from '../../layouts/module-list'

import { getData } from '../../lib/get-data'

// level 0 component
export default function PracticumSimulator() {

    const [practicumSimulators, setPracticumSimulators] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('practicum-simulator')
            setPracticumSimulators(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return <ContentLayout data={{
        title: 'Cover Jurnal',
        Content: <ModuleList list={practicumSimulators.map(
            ({ name, reactjs_icon, simulator_link }) => {
                return {
                    title: name,
                    iconName: reactjs_icon,
                    link: simulator_link,
                }
            })} />
    }} />
}