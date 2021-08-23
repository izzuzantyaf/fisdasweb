import React, { useEffect, useState } from 'react'
import { getData } from '../../lib/get-data'
import './practicum-schedule.scss'

// level 1 components
function ClassSchedule() {

    const [classSchedule, setClassSchedule] = useState({})

    useEffect(() => {
        (async function () {
            const data = await getData('schedule')
            setClassSchedule(data?.class_schedule)
        })()
    }, [])

    return (
        <div className="class-schedule">
            <div className="table-title">Jadwal kelas</div>
            <div className="img-container">
                <iframe title="class_schedule" src={classSchedule?.prepared_url} frameBorder="0" width="67%" height="720px" style={{ margin: "auto" }}></iframe>
            </div>
        </div>
    )
}

function HandoutSchedule() {

    const [moduleSchedules, setModuleSchedules] = useState([])

    useEffect(() => {
        (async function () {
            const data = await getData('schedule')
            setModuleSchedules(data?.module_schedules)
        })()
    }, [])

    return (
        <div className="handout-schedule">
            <div className="table-title">Jadwal modul</div>
            {moduleSchedules.map((moduleSchedule, index) =>
                <div key={index}>
                    <div className="table-sub-title">{moduleSchedule.faculty}</div>
                    <iframe title="class_schedule" src={moduleSchedule?.prepared_url} frameBorder="0" width="67%" height="720px" style={{ margin: "auto" }}></iframe>
                </div>
            )}
        </div>
    )
}

// level 0 component
export default function PracticumSchedule() {

    return (
        <section className="practicum-schedule">
            <div className="container">
                <div className="title">Jadwal Praktikum Fisika Dasar 1 Tahun Akademik 2020/2021</div>
                <ClassSchedule />
                <HandoutSchedule />
            </div>
        </section>
    )
}