import { Box, Container, Heading } from "@chakra-ui/react"
import Navbar from "../components/navbar.comp"

export default function MenuPageLayout({
  pageTitle,
  children,
}: {
  pageTitle: string
  children: any
}) {
  return (
    <>
      <Navbar />
      <Box className="menu-page-content" paddingTop="16px" paddingBottom="32px">
        <Container maxWidth="container.xl">
          <Heading className="menu-page-title" marginBottom="24px">
            {pageTitle}
          </Heading>
          {children}
        </Container>
      </Box>
    </>
  )
}
