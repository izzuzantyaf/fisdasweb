import Navbar from "../components/navbar.comp"
import Footer from "../components/footer.comp"
import React from "react"

// @ts-ignore
export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
