import { Skeleton } from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import { codeOfConductService } from "../core/services/code-of-conduct.service"
import { CodeOfConduct } from "../modules/fisdasweb-backend/types/code-of-conduct.type"
import MenuPageLayout from "../layouts/menu-page.layout"

export default function CodeOfConductPage() {
  const [codeOfConduct, setcodeOfConduct] = useState<CodeOfConduct>()

  const getCodeOfConduct = async () => {
    const codeOfConduct = await codeOfConductService.getAll()
    setcodeOfConduct(codeOfConduct)
  }

  useEffect(() => {
    getCodeOfConduct()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Tata tertib | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Tata Tertib Praktikum">
        <Skeleton isLoaded={codeOfConduct ? true : false}>
          <iframe
            title="Code of Conduct"
            src={codeOfConduct?.previewUrl}
            width="100%"
            style={{ borderRadius: "12px", height: "720px" }}
          ></iframe>
        </Skeleton>
      </MenuPageLayout>
    </>
  )
}
