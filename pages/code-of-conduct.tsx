import { useEffect, useState } from "react"
import DocumentFrame from "../components/document-frame.comp"
import ContentLayout from "../layouts/content.layout"
import { getData } from "../lib/get-data"

// level 0 component
export default function CodeOfConduct() {
  const [codeOfConduct, setcodeOfConduct] = useState({})

  useEffect(() => {
    ;(async function () {
      const data = await getData("code-of-conduct")
      setcodeOfConduct(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <ContentLayout
      data={{
        title: "Tata Tertib Praktikum",
        Content: (
          <DocumentFrame
            data={{
              title: "Code of Conduct",
              url: codeOfConduct?.prepared_url,
            }}
          />
        ),
      }}
    />
  )
}
