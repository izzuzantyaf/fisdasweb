import { menus } from "../contents/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/navbar.comp"
import Hero from "../components/hero.comp"
import Footer from "../components/footer.comp"
import Link from "next/link"

export default function Home() {
  return (
    <section className="home">
      <Navbar />
      <div className="container mx-auto flex flex-col gap-12 p-6 pb-12 max-w-screen-lg">
        <Hero />
        <section className="menu">
          <div className="menu-list grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menus
              .filter((menu) => !menu.newFeature)
              .map((menu, index) => (
                <Link key={index} href={menu.link}>
                  <div className="menu-card hover:shadow-lg transition-shadow duration-300 text-blue-800 bg-white flex p-6 items-center rounded-xl cursor-pointer">
                    <div className="icon text-3xl w-16 flex-shrink-0">
                      <FontAwesomeIcon icon={menu.icon} />
                    </div>
                    <div className="menu-name font-medium">{menu.name}</div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
