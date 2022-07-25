import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import DocumentFrame from "../components/document-frame.comp"
import { getData } from "../lib/get-data"

// ini adalah halaman jadwal praktikum
export default function PracticumSchedule() {
  const [classSchedule, setClassSchedule] = useState({})
  const [moduleSchedules, setModuleSchedules] = useState([])

  useEffect(() => {
    // ambil data jadwal kelas dari API
    ;(async function () {
      const data = await getData("schedule")
      setClassSchedule(data?.class_schedule)
    })()
    // ambil data jadwal modul dari API
    ;(async function () {
      const data = await getData("schedule")
      setModuleSchedules(data?.module_schedules)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Jadwal Praktikum">
      <div className="grid sm:grid-cols-2 gap-6">
        <DocumentFrame
          data={{
            title: "Jadwal kelas",
            url: classSchedule?.prepared_url,
            height: 240,
          }}
        />
        {moduleSchedules.map(({ prepared_url }, index) => (
          <DocumentFrame
            key={index}
            data={{
              title: "Jadwal modul",
              url: prepared_url,
              height: 240,
            }}
          />
        ))}
      </div>
    </MenuPageLayout>
  )
}
