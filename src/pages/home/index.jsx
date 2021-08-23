import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Hero from '../../components/hero/hero'
import Menu from '../menu/menu'

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