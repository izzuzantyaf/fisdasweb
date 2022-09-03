import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import DocumentFrame from "../components/document-frame.comp"
import { getData } from "../lib/get-data"
import { Schedule } from "../core/types/schedule.type"
import { scheduleService } from "../core/services/schedule.service"
import { Box, Heading, Text } from "@chakra-ui/react"

export default function PracticumSchedulePage() {
  const [schedulesState, setSchedulesState] = useState<Schedule[]>()

  /**
   * Mengambil data jadwal praktikum dari API dan memasukkannya ke dalam state schedulesState
   */
  const getSchedules = async () => {
    const schedules = await scheduleService.getAll()
    setSchedulesState(schedules)
  }

  useEffect(() => {
    getSchedules()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Jadwal Praktikum">
      <div className="grid sm:grid-cols-2 gap-6">
        {schedulesState?.map(({ faculty, embedURL }, index) => (
          <Box key={index}>
            <Heading fontWeight="medium" fontSize={24}>{`Jadwal ${
              faculty ? faculty.toUpperCase() : "Kelas"
            }`}</Heading>
            <iframe
              className="bg-gray-100 mt-4"
              title={`Jadwal ${faculty ? faculty.toUpperCase() : "Kelas"}`}
              src={embedURL}
              width="100%"
              style={{
                borderRadius: "12px",
              }}
              height={360}
            ></iframe>
          </Box>
        ))}
      </div>
    </MenuPageLayout>
  )
}
