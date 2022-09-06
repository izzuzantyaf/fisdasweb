import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getData } from "../lib/get-data"
import { menu } from "../core/lib/constants"
import Link from "next/link"
import { Box, Container } from "@chakra-ui/react"

export default function Footer() {
  const [socialMedia, setSocialMedia] = useState()

  const getSocialMedia = async () => {
    const data = await getData("social-media")
    setSocialMedia(data)
  }

  useEffect(() => {
    getSocialMedia()
  }, [])

  return (
    <Box as="footer" className="footer text-gray-600" paddingY="32px">
      <Container maxWidth="container.lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="identity col-span-full flex flex-col gap-4">
            <p className="title text-2xl font-bold">
              Laboratorium Fisika Dasar<br></br>Universitas Telkom
            </p>
            <div className="socmed text-2xl flex gap-4">
              {socialMedia?.map(({ link, name, reactjs_icon }, index) => (
                <a
                  key={index}
                  className="socmed-icon"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={name}
                >
                  <FontAwesomeIcon icon={reactjs_icon.split("-")} />
                </a>
              ))}
            </div>
          </div>

          <div className="headquarters">
            <p className="title font-bold">Our headquarters</p>
            <p className="address mt-4">
              TULT 10.103-10.105 JL. Telekomunikasi Trs. Buah Batu, Bandung, 40257
            </p>
          </div>

          <div className="explore">
            <p className="title font-bold">Explore</p>
            <div className="footer-menu-list flex flex-wrap mt-4 gap-4">
              {menu.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.route}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="back-to-top-icon col-span-full text-center text-2xl cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <FontAwesomeIcon icon="chevron-circle-up" />
          </div>

          <div className="credits col-span-full text-center">
            All rights reserved.
          </div>
        </div>
      </Container>
    </Box>
  )
}
