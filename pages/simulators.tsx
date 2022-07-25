import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import ModuleList from "../layouts/module-list.layout"
import { getData } from "../lib/get-data"

export default function PracticumSimulator() {
  const [practicumSimulators, setPracticumSimulators] = useState([])

  useEffect(() => {
    ;(async function () {
      const data = await getData("practicum-simulator")
      setPracticumSimulators(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Simulator Praktikum">
      <ModuleList
        list={practicumSimulators.map(
          ({ name, reactjs_icon, simulator_link }) => {
            return {
              title: name,
              iconName: reactjs_icon,
              link: simulator_link,
            }
          }
        )}
      />
    </MenuPageLayout>
  )
}
