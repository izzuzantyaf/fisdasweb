import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import ModuleList from "../layouts/module-list.layout"
import { getData } from "../lib/get-data"

export default function JournalCover() {
  const [journalCovers, setJournalCovers] = useState([])

  useEffect(() => {
    ;(async function () {
      const data = await getData("journal-cover")
      setJournalCovers(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Cover Jurnal">
      <ModuleList
        list={journalCovers.map(
          ({ name, reactjs_icon, journal_cover_link }) => {
            return {
              title: name,
              iconName: reactjs_icon,
              link: journal_cover_link,
            }
          }
        )}
      />
    </MenuPageLayout>
  )
}
