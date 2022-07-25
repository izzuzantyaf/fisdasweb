import { useEffect, useState } from "react"
import { getData } from "../lib/get-data"
import MenuPageLayout from "../layouts/menu-page.layout"
import DocumentFrame from "../components/document-frame.comp"

export default function Organigram() {
  const [organigram, setOrganigram] = useState({})

  useEffect(() => {
    ;(async function () {
      const data = await getData("organigram")
      setOrganigram(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Organigram">
      <DocumentFrame
        data={{
          title: "Organigram",
          url: organigram?.prepared_url,
        }}
      />
    </MenuPageLayout>
  )
}
