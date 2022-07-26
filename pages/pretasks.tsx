import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import Head from "next/head"
import { PracticumMaterial } from "../core/types/practicum-material.type"
import { practicumMaterialService } from "../core/services/practicum-material.service"
import ModuleCard from "../components/module-card.comp"
import { SimpleGrid, Skeleton } from "@chakra-ui/react"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"

export default function PreliminaryTest() {
  const [practicumMaterials, setPracticumMaterials] = useState<
    PracticumMaterial[]
  >([])

  const getPracticumMaterials = async () => {
    const practicumMaterials = await practicumMaterialService.getAll()
    setPracticumMaterials(practicumMaterials)
  }

  useEffect(() => {
    getPracticumMaterials()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Tugas Pendahuluan | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Tugas Pendahuluan">
        <SimpleGrid
          className="pretask-list"
          columns={[1, 2, 3, 4]}
          spacing={["16px", "24px"]}
        >
          {practicumMaterials?.map((practicumMaterial, index) => (
            <ModuleCard key={index} data={practicumMaterial} />
          )) ?? repeatElement(<Skeleton height="128px" />, 4)}
        </SimpleGrid>
      </MenuPageLayout>
    </>
  )
}
