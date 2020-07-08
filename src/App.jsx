import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee
  , faListOl
  , faBook
  , faPlay
  , faUsers
  , faCalendarMinus
  , faSitemap
  , faGlobe
} from '@fortawesome/free-solid-svg-icons';

library.add(fab
  , faCoffee
  , faListOl
  , faBook
  , faPlay
  , faUsers
  , faCalendarMinus
  , faSitemap
  , faGlobe)

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Menu />
        <Footer />
      </div>
    )
  }
}

export default App;
