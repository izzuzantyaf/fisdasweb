import Head from "next/head"
import { useEffect, useState } from "react"
import DocumentFrame from "../components/document-frame.comp"
import MenuPageLayout from "../layouts/menu-page.layout"
import { getData } from "../lib/get-data"

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
      <MenuPageLayout pageTitle="Tata Tertib Praktikum">
        <DocumentFrame
          data={{
            title: "Code of Conduct",
            url: codeOfConduct?.prepared_url,
          }}
        />
      </MenuPageLayout>
    </>
  )
}
