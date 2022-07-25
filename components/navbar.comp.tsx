import fisdasLogoPath from "../public/img/fisdas-logo-min.png"
import { menus } from "../contents/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Box,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react"

function FisdasLogo() {
  return (
    <Box className="logo" cursor="pointer">
      <Link href="/">
        <Image
          src={fisdasLogoPath}
          alt="fisdas-logo"
          height="24px"
          width="36px"
        />
      </Link>
    </Box>
  )
}

function DropDownMenu() {
  useEffect(() => {
    const hamburgerIcon = document.querySelector(".hamburger-icon")
    const dropdownMenu = document.querySelector(".dropdown")
    const dropDownOverlay = document.querySelector(".dropdown-overlay")
    hamburgerIcon.addEventListener("click", () => {
      if (dropDownOverlay.classList.contains("hidden")) {
        dropDownOverlay.classList.replace("hidden", "fixed")
      } else {
        dropDownOverlay.classList.replace("fixed", "hidden")
      }
    })
    dropDownOverlay.addEventListener("click", (e) => {
      if (e.target !== dropdownMenu) {
        dropDownOverlay.classList.replace("fixed", "hidden")
      }
    })
    return () => {}
  }, [])

  return (
    <div className="navigation">
      <div className="dropdown-overlay hidden px-6 inset-0 z-10 bg-black bg-opacity-30">
        <div className="container relative mx-auto max-w-screen-lg">
          <div className="dropdown absolute top-14 right-0 flex flex-col bg-white rounded-xl px-2 py-3 border">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                className="dropdown-item rounded-lg hover:bg-gray-100 p-2"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hamburger-icon cursor-pointer rounded-md text-blue-800 text-lg hover:bg-blue-100 px-2 py-1">
        <FontAwesomeIcon icon="bars" />
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <Box className="navbar" paddingTop="16px" paddingX="16px">
      <Container maxWidth="container.xl" display="flex" alignItems="center">
        <FisdasLogo />
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FontAwesomeIcon icon="bars" />}
            variant="ghost"
          />
          <MenuList>
            {menus.map((menu, index) => (
              <Link key={index} href={menu.link}>
                <MenuItem
                  icon={
                    <Icon>
                      <FontAwesomeIcon icon={menu.icon} />
                    </Icon>
                  }
                >
                  {menu.name}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </Container>
    </Box>
  )
}
