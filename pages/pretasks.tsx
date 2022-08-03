import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import Head from "next/head"
import { PreTaskMaterial } from "../core/types/practicum-material.type"
import { practicumMaterialService } from "../core/services/practicum-material.service"
import { SimpleGrid, Skeleton } from "@chakra-ui/react"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"
import PracticumMaterialCardWithLinkButton from "../components/practicum-material-info-with-link.comp"

export default function PreTaskPage() {
  const [preTasks, setPreTasks] = useState<PreTaskMaterial[]>()

  const getPreTasks = async () => {
    const preTasks = await practicumMaterialService.getPreTasks()
    setPreTasks(preTasks)
  }

  useEffect(() => {
    getPreTasks()
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
          {preTasks?.map(
            ({ faIconName, code, name, preTask: { url } }, index) => (
              <PracticumMaterialCardWithLinkButton
                key={index}
                iconName={faIconName}
                title={code}
                description={name}
                url={url}
                buttonLabel="Lihat Soal"
              />
            )
          ) ?? repeatElement(<Skeleton height="128px" />, 6)}
        </SimpleGrid>
      </MenuPageLayout>
    </>
  )
}
