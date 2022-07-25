import Navbar from "../components/navbar.comp"
import Footer from "../components/footer.comp"

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
