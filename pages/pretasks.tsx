import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import { getData } from "../lib/get-data"
import ModuleList from "../layouts/module-list.layout"

export default function PreliminaryTest() {
  const [preliminaryTests, setPreliminaryTests] = useState([])

  useEffect(() => {
    ;(async function () {
      const data = await getData("preliminary-test")
      setPreliminaryTests(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Tugas Pendahuluan">
      <ModuleList
        list={preliminaryTests.map(
          ({ name, reactjs_icon, preliminary_test_link }) => {
            return {
              title: name,
              iconName: reactjs_icon,
              link: preliminary_test_link,
            }
          }
        )}
      />
    </MenuPageLayout>
  )
}
