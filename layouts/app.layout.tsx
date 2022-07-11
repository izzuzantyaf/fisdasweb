import Navbar from "../components/navbar.comp"
import Footer from "../components/footer.comp"

export default function AppLayout(props: any) {
  const Content = props.content
  return (
    <>
      <Navbar />
      {Content}
      <Footer />
    </>
  )
}
