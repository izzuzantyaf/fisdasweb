import { SimpleGrid, Skeleton } from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import PracticumMaterialCardWithLinkButton from "../components/practicum-material-info-with-link.comp"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"
import { practicumMaterialService } from "../core/services/practicum-material.service"
import { SimulatorMaterial } from "../core/types/practicum-material.type"
import MenuPageLayout from "../layouts/menu-page.layout"

export default function PracticumSimulatorPage() {
  const [simulators, setSimulators] = useState<SimulatorMaterial[]>()

  const getSimulator = async () => {
    const simulators = await practicumMaterialService.getSimulators()
    setSimulators(simulators)
  }

  useEffect(() => {
    getSimulator()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Simulator Praktikum | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Simulator Praktikum">
        <SimpleGrid
          className="simulator-list"
          columns={[1, 2, 3, 4]}
          spacing={["16px", "24px"]}
        >
          {simulators?.map(
            ({ faIconName, code, name, simulator: { url } }, index) => (
              <PracticumMaterialCardWithLinkButton
                key={index}
                iconName={faIconName}
                title={code}
                description={name}
                url={url}
                buttonLabel="Coba"
              />
            )
          ) ?? repeatElement(<Skeleton height="128px" />, 6)}
        </SimpleGrid>
      </MenuPageLayout>
    </>
  )
}
