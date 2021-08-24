import React, { useEffect, useState } from 'react'
import ContentLayout from '../../layouts/content'
import DocumentFrame from '../../components/document-frame'
import { getData } from '../../lib/get-data'

// level 0 component
export default function PracticumSchedule() {

    const [classSchedule, setClassSchedule] = useState({})
    const [moduleSchedules, setModuleSchedules] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('schedule')
            setClassSchedule(data?.class_schedule)
        })();
        (async function () {
            const data = await getData('schedule')
            setModuleSchedules(data?.module_schedules)
        })()
        window.scrollTo(0, 0)
    }, [])

    return <ContentLayout data={{
        title: 'Jadwal Praktikum',
        Content:
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DocumentFrame data={{
                    title: 'Jadwal kelas',
                    url: classSchedule?.prepared_url,
                }} />
                {moduleSchedules.map(({ prepared_url }, index) =>
                    <DocumentFrame key={index} data={{
                        title: 'Jadwal modul',
                        url: prepared_url,
                    }} />
                )}
            </div>
    }} />
}