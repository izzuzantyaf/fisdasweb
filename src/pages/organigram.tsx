import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import { organigramService } from "../core/services/organigram.service"
import { Organigram } from "../modules/fisdasweb-backend/types/organigram.type"
import Head from "next/head"

export default function OrganigramPage() {
  const [organigram, setOrganigram] = useState<Organigram>()

  const getOrganigram = async () => {
    const organigram = await organigramService.getAll()
    setOrganigram(organigram)
  }

  useEffect(() => {
    getOrganigram()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Organigram | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Organigram">
        <iframe
          className="bg-gray-100 mt-4"
          title="Organigram"
          src={organigram?.previewUrl}
          width="100%"
          style={{
            borderRadius: "12px",
          }}
          height={720}
        ></iframe>
      </MenuPageLayout>
    </>
  )
}
