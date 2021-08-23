import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import Menu from '../menu'

export default function Home() {
  return (
    <section className="home">
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </section>
  )
}