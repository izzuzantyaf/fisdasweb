import React, { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('../../components/navbar'))
const Hero = lazy(() => import('./hero'))
const Menu = lazy(() => import('./menu'))
const Footer = lazy(() => import('../../components/footer'))

export default function Home() {
  return (
    <section className="home">
      <Suspense fallback={<div className="bg-gray-200 h-16"></div>}>
        <Navbar />
      </Suspense>
      <div className="container mx-auto flex flex-col gap-12 p-6 pb-12 max-w-screen-lg">
        <Suspense fallback={<div className="bg-gray-200 rounded-xl h-96"></div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-xl h-16"></div>
            <div className="bg-gray-200 rounded-xl h-16"></div>
            <div className="bg-gray-200 rounded-xl h-16"></div>
            <div className="bg-gray-200 rounded-xl h-16"></div>
          </div>
        }>
          <Menu />
        </Suspense>
      </div>
      <Suspense fallback={<div className="bg-gray-200 h-96"></div>}>
        <Footer />
      </Suspense>
    </section>
  )
}