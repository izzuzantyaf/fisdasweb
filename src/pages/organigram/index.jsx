import React, { useEffect, useState } from 'react'
import { getData } from '../../lib/get-data'
import ContentLayout from '../../layouts/content'
import DocumentFrame from '../../components/document-frame'

// level 0 component
export default function Organigram() {

    const [organigram, setOrganigram] = useState({})

    useEffect(() => {
        (async function () {
            const data = await getData('organigram')
            setOrganigram(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return <ContentLayout data={{
        title: 'Organigram',
        Content: <DocumentFrame data={{
            title: 'Organigram',
            url: organigram?.prepared_url,
        }} />
    }} />
}
