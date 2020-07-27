import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Menu from './components/menu/menu'
import PracticumVideo from './components/practicum-video/practicum-video'
import Assistants from './components/assistants/assistants'
import Handouts from './components/handouts/handouts'
import Footer from './components/footer/footer'
import NotFoundPage from './components/not-found-page/not-found-page'

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
  , faEye
  , faDownload
} from '@fortawesome/free-solid-svg-icons';

library.add(fab
  , faCoffee
  , faListOl
  , faBook
  , faPlay
  , faUsers
  , faCalendarMinus
  , faSitemap
  , faGlobe
  , faEye
  , faDownload)

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" render={() => (<Navbar />)} />
          <Switch>
            <Route exact path="/">
              <Hero />
              <Menu />
            </Route>
            <Route path="/practicum-video" render={() => (
              <PracticumVideo />
            )} />
            <Route path="/assistants" render={() => (
              <Assistants />
            )} />
            <Route path="/handout" render={() => (
              <Handouts />
            )} />
            <Route path="/404" render={() => (<NotFoundPage />)} />
            <Redirect to="/404" />
          </Switch>
          <Route path="/" render={() => (<Footer />)} />
        </Router>
      </div>
    )
  }
}

export default App;
