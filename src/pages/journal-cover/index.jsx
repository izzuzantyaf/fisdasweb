import React, { useEffect, useState } from 'react'
import ContentLayout from '../../layouts/content'
import ModuleList from '../../layouts/module-list'

import { getData } from '../../lib/get-data'

// level 0 component
export default function JournalCover() {

    const [journalCovers, setJournalCovers] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('journal-cover')
            setJournalCovers(data)
        })()
        window.scrollTo(0, 0)
    }, [])

    return <ContentLayout data={{
        title: 'Cover Jurnal',
        Content: <ModuleList list={journalCovers.map(
            ({ name, reactjs_icon, journal_cover_link }) => {
                return {
                    title: name,
                    iconName: reactjs_icon,
                    link: journal_cover_link,
                }
            })} />
    }} />
}