import { menus } from "../contents/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/navbar.comp"
import Link from "next/link"
import Head from "next/head"
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Head>
        <title>Lab Fisika Dasar Universitas Telkom</title>
      </Head>

      <Navbar />

      <Container maxWidth="container.lg" paddingBottom="32px">
        {/* Hero */}
        <Box className="hero" paddingY="192px">
          <Heading
            className="text-center"
            fontSize={["24px", "40px", "56px"]}
            fontWeight="black"
          >
            Laboratorium <span className="text-blue-700">Fisika Dasar</span>{" "}
            <br /> Universitas Telkom
          </Heading>
          <Text
            className="text-gray-400"
            textAlign="center"
            fontSize={["16px", "24px", "32px"]}
            marginTop={["16px", "32px"]}
          >
            Website resmi Lab Fisika Dasar untuk <br /> membantu proses
            praktikum
          </Text>
        </Box>
        {/* end of Hero */}

        {/* Menu */}
        <Box className="menu">
          <Heading fontSize={["16px", "24px", "32px"]}>Menu</Heading>
          <SimpleGrid
            className="menu-list"
            columns={[2, 2, 3]}
            spacing="16px"
            marginTop="16px"
          >
            {menus.map((menu, index) => (
              <Link key={index} href={menu.link}>
                <Box
                  className="menu-card bg-white"
                  padding="12px"
                  boxShadow="md"
                  rounded="12px"
                  cursor="pointer"
                >
                  <Box
                    className="bg-blue-200 text-blue-700 flex justify-center items-center rounded-full"
                    width={["40px", "40px", "48px"]}
                    height={["40px", "40px", "48px"]}
                  >
                    <FontAwesomeIcon icon={menu.icon} />
                  </Box>
                  <Text
                    className="menu-name"
                    fontSize={["14px", "16px", "18px"]}
                    marginTop="8px"
                    fontWeight="medium"
                  >
                    {menu.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
        {/* end of Menu */}
      </Container>
    </>
  )
}
