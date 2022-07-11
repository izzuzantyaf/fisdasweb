import { useEffect, useState } from "react"
import ContentLayout from "../layouts/content.layout"
import { getData } from "../lib/get-data"
import ModuleList from "../layouts/module-list.layout"

// level 0 component
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
    <ContentLayout
      data={{
        title: "Tugas Pendahuluan",
        Content: (
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
        ),
      }}
    />
  )
}
