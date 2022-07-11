import fisdasLogo from "../public/img/fisdas-logo-min.png"
import { menus } from "../contents/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// level 1 component
function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image src={fisdasLogo} alt="fisdas-logo" height="32px" width="48px" />
      </Link>
    </div>
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

// level 0 component
export default function Navbar() {
  return (
    <section className="navbar bg-white">
      <div className="container flex items-center mx-auto justify-between p-4 max-w-screen-lg">
        <Logo />
        <DropDownMenu />
      </div>
    </section>
  )
}
