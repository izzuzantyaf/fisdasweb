import React, { useEffect, useState } from 'react'
import './practicum-schedule.scss'

const axios = require('axios')

// level 1 components
function ClassSchedule() {

    const [classSchedule, setClassSchedule] = useState({})

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/schedule')
                .then(response => response.data.class_schedule)
                .catch(error => error.message)
            setClassSchedule(data)
        })()
    }, [])

    return (
        <div className="class-schedule">
            <div className="table-title">Jadwal kelas</div>
            <div className="img-container">
                <img src={classSchedule.image_url} alt="Jadwal kelas" />
            </div>
        </div>
    )
}

function HandoutSchedule() {

    // function createTableHeader({ content }) {
    //     const tableHeader = []
    //     for (let i = 0; i <= content.length; i++)
    //         tableHeader.push((<th key={i}>{i === 0 ? `Kelompok` : `Minggu ${i}`}</th>))

    //     return (
    //         <thead>
    //             <tr>
    //                 {tableHeader}
    //             </tr>
    //         </thead>
    //     )
    // }

    // function createTableBody(schedule) {
    //     const tableRow = groups.map((group, index) => {
    //         const row = []
    //         for (let i = 0; i <= schedule.content.length; i++)
    //             row.push((<td key={i}>{i === 0 ? group : schedule.content[i - 1]}</td>))
    //         return (
    //             <tr key={index}>
    //                 {row}
    //             </tr>
    //         )
    //     })

    //     return (
    //         <tbody>
    //             {tableRow}
    //         </tbody>
    //     )
    // }

    // function createTable(faculty) {
    //     // filter schedule based on faculty
    //     let filteredSchedule = practicumSchedule.filter(schedule => schedule.faculty === faculty)
    //     filteredSchedule = filteredSchedule[0]

    //     // create schedule table
    //     return (
    //         <table className="schedule-table">
    //             {createTableHeader(filteredSchedule)}
    //             {createTableBody(filteredSchedule)}
    //         </table>
    //     )
    // }

    const [moduleSchedules, setModuleSchedules] = useState([])

    useEffect(() => {
        (async function () {
            const data = await axios
                .get('https://fisdascms.herokuapp.com/api/schedule')
                .then(response => response.data.module_schedule)
                .catch(error => error.message)
            setModuleSchedules(data)
        })()
    }, [])

    return (
        <div className="handout-schedule">
            <div className="table-title">Jadwal modul</div>
            {moduleSchedules.map((moduleSchedule, index) =>
                <div key={index}>
                    <div className="table-sub-title">{moduleSchedule.faculty}</div>
                    <img src={moduleSchedule.image_url} alt="faculty schedule" />
                </div>
            )}
            {/* <div className="table-container">{createTable('fte')}</div> */}
            {/* <div className="table-container">{createTable('fri')}</div> */}
        </div>
    )
}

// level 0 component
export default function PracticumSchedule() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

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