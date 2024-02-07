import { SimpleGrid, Skeleton } from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import HandoutCard from "../components/handout-card.comp"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"
import { handoutService } from "../core/services/handout.service"
import { Handout } from "../core/types/handout.type"
import MenuPageLayout from "../layouts/menu-page.layout"

export default function HandoutPage() {
  const [handouts, setHandouts] = useState<Handout[]>()

  const getHandouts = async () => {
    const handouts = await handoutService.getAll()
    setHandouts(handouts)
  }

  useEffect(() => {
    getHandouts()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Modul | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Modul Praktikum">
        <SimpleGrid
          className="handouts-list"
          columns={{
            sm: 2,
            md: 2,
            lg: 4,
          }}
          spacing={["16px", "24px"]}
        >
          {handouts?.map((handout, index) => (
            <HandoutCard key={index} data={handout} />
          )) ?? repeatElement(<Skeleton height="128px" />, 4)}
        </SimpleGrid>
      </MenuPageLayout>
    </>
  )
}
