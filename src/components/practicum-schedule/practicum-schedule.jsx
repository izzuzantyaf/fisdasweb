import React from 'react'
import './practicum-schedule.scss'

import { practicumSchedule } from '../../contents/practicum-schedule'
import { groups } from '../../contents/groups'

class HeaderCell extends React.Component {

    render() {
        return (
            <th>
                {this.props.content}
            </th>
        )
    }
}

class BodyCell extends React.Component {

    render() {
        return (
            <td>
                {this.props.content}
            </td>
        )
    }
}

class PracticumSchedule extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    createTableHeader({ content }) {
        const tableHeader = []
        for (let i = 0; i <= content.length; i++)
            tableHeader.push((<HeaderCell key={i} content={i === 0 ? `Kelompok` : `Minggu ${i}`} />))

        return (
            <thead>
                <tr>
                    {tableHeader}
                </tr>
            </thead>
        )
    }

    createTableBody(schedule) {
        const tableRow = groups.map((group, index) => {
            const row = []
            for (let i = 0; i <= schedule.content.length; i++)
                row.push((<BodyCell key={i} content={i === 0 ? group : schedule.content[i - 1]} />))
            return (
                <tr key={index}>
                    {row}
                </tr>
            )
        })

        return (
            <tbody>
                {tableRow}
            </tbody>
        )
    }

    createTable(faculty) {
        // filter schedule based on faculty
        let filteredSchedule = practicumSchedule.filter(schedule => schedule.faculty === faculty)
        filteredSchedule = filteredSchedule[0]

        // create schedule table
        return (
            <table className="schedule-table">
                {this.createTableHeader(filteredSchedule)}
                {this.createTableBody(filteredSchedule)}
            </table>
        )
    }

    render() {

        return (
            <section className="practicum-schedule">
                <div className="container">
                    <div className="title">Jadwal Modul Praktikum Fisika Dasar 1</div>
                    <div className="table-title">Fakultas Teknik Elektro</div>
                    <div className="table-container">{this.createTable('fte')}</div>
                    <div className="table-title">Fakultas Teknik Industri</div>
                    <div className="table-container">{this.createTable('fri')}</div>
                </div>
            </section>
        )
    }
}

export default PracticumSchedule