import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import "./App.css"

import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import Menu from "./components/menu/menu"
import Handouts from "./components/handouts/handouts"
import PracticumVideo from "./components/practicum-video/practicum-video"
import PracticumSchedule from "./components/practicum-schedule/practicum-schedule"
import JournalCover from "./components/journal-cover/journal-cover"
import Assistants from "./components/assistants/assistants"
import Organigram from "./components/organigram/organigram"
import Footer from "./components/footer/footer"
import NotFoundPage from "./components/not-found-page/not-found-page"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faCoffee,
  faListOl,
  faBook,
  faPlay,
  faUsers,
  faCalendarMinus,
  faSitemap,
  faGlobe,
  faEye,
  faDownload,
  faTasks,
  faBalanceScale,
  faSortNumericUpAlt,
  faGripLinesVertical,
  faCircleNotch,
  faInfinity,
  faSatelliteDish,
  faWaveSquare,
  faMagnet,
  faBolt,
  faChevronCircleUp,
  faFile
} from "@fortawesome/free-solid-svg-icons"

library.add(
  fab,
  faCoffee,
  faListOl,
  faBook,
  faPlay,
  faUsers,
  faCalendarMinus,
  faSitemap,
  faGlobe,
  faEye,
  faDownload,
  faTasks,
  faBalanceScale,
  faSortNumericUpAlt,
  faGripLinesVertical,
  faCircleNotch,
  faInfinity,
  faSatelliteDish,
  faWaveSquare,
  faMagnet,
  faBolt,
  faChevronCircleUp,
  faFile
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" render={() => <Navbar />} />

          <Switch>
            <Route exact path="/">
              <Hero />
              <Menu />
            </Route>
            <Route path="/assistants" render={() => <Assistants />} />
            <Route path="/handout" render={() => <Handouts />} />
            <Route path="/organigram" render={() => <Organigram />} />
            <Route path="/practicum-video" render={() => <PracticumVideo />} />
            <Route path="/journal-cover" render={() => <JournalCover />} />
            <Route path="/practicum-schedule" render={() => <PracticumSchedule />} />
            <Route path="/404" render={() => <NotFoundPage />} />
            <Redirect to="/404" />
          </Switch>

          <Route path="/" render={() => <Footer />} />
        </Router>
      </div>
    )
  }
}

export default App
