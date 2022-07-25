import Head from "next/head"
import { useEffect, useState } from "react"
import DocumentFrame from "../components/document-frame.comp"
import AppLayout from "../layouts/app.layout"
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
    <>
      <Head>
        <title>Tata tertib</title>
      </Head>
      <AppLayout>
        <ContentLayout
          data={{
            title: "Tata tertib praktikum",
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
      </AppLayout>
    </>
  )
}
