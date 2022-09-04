import { menu } from "../core/lib/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/navbar.comp"
import Link from "next/link"
import Head from "next/head"
import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import Footer from "../components/footer.comp"
import MyIcon from "../components/my-icon.comp"

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
            fontSize={["24px", "32px", "48px", "56px"]}
            fontWeight="black"
          >
            Laboratorium <span className="text-blue-700">Fisika Dasar</span>{" "}
            <br /> Universitas Telkom
          </Heading>
          <Text
            className="text-gray-400"
            textAlign="center"
            fontSize={["16px", "16px", "24px"]}
            marginTop={["16px", "32px"]}
          >
            Website resmi Lab Fisika Dasar untuk <br /> membantu proses
            praktikum
          </Text>
        </Box>
        {/* end of Hero */}

        {/* Menu */}
        <Box className="menu">
          <Heading fontSize={["24px", "24px", "32px"]}>Menu</Heading>
          <SimpleGrid
            className="menu-list"
            columns={[2, 2, 3]}
            spacing={["16px", "16px", "24px"]}
            marginTop="16px"
          >
            {menu.map((menu, index) => (
              <Link key={index} href={menu.route}>
                <Box
                  className="menu-card"
                  padding="12px"
                  boxShadow="md"
                  rounded="12px"
                  cursor="pointer"
                >
                  <MyIcon faIconName={menu.faIconName} />
                  <Text
                    className="menu-name"
                    fontSize={["16px", "16px", "18px"]}
                    marginTop="8px"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
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

      <Footer />
    </>
  )
}
