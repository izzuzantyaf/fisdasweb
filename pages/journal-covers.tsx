import { SimpleGrid, Skeleton } from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import PracticumMaterialCardWithLinkButton from "../components/practicum-material-info-with-link.comp"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"
import { practicumMaterialService } from "../core/services/practicum-material.service"
import { JournalCoverMaterial } from "../core/types/practicum-material.type"
import MenuPageLayout from "../layouts/menu-page.layout"

export default function JournalCoverPage() {
  const [journalCovers, setJournalCovers] = useState<JournalCoverMaterial[]>()

  const getJournalCovers = async () => {
    const journalCovers = await practicumMaterialService.getJournalCovers()
    setJournalCovers(journalCovers)
  }
  useEffect(() => {
    getJournalCovers()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Cover Jurnal | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Cover Jurnal">
        <SimpleGrid
          className="journal-covers-list"
          columns={[1, 2, 3, 4]}
          spacing={["16px", "24px"]}
        >
          {journalCovers?.map(
            ({ faIconName, code, name, journalCover: { url } }, index) => (
              <PracticumMaterialCardWithLinkButton
                key={index}
                iconName={faIconName}
                title={code}
                description={name}
                url={url}
                buttonLabel="Akses Cover"
              />
            )
          ) ?? repeatElement(<Skeleton height="128px" />, 6)}
        </SimpleGrid>
      </MenuPageLayout>
    </>
  )
}
