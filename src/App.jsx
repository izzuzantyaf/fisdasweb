import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Menu from './components/menu/menu'
import PracticumVideo from './components/practicum-video/practicum-video'
import Assistants from './components/assistants/assistants'
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
        <Router>
          <Route path="/" render={() => (<Navbar />)} />
          <Route exact path="/" render={() => (<Hero />)} />
          <Route exact path="/" render={() => (<Menu />)} />
          <Switch>
            <Route path="/practicum-video" render={() => (
              <PracticumVideo />
            )} />
            <Route path="/assistants" render={() => (
              <Assistants />
            )} />
            {/* <Route path="/404" render={() => (
              <div>404</div>
            )} />
            <Redirect to="/404" /> */}
          </Switch>
          <Route path="/" render={() => (<Footer />)} />
        </Router>
      </div>
    )
  }
}

export default App;
