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
import CodeOfConduct from "./components/code-of-conduct/code-of-conduct"
import Handouts from "./components/handouts/handouts"
import PreliminaryTest from "./components/preliminary-test/preliminary-test"
import PracticumVideo from "./components/practicum-video/practicum-video"
import Regression from "./components/regression/regression"
import PracticumSimulator from "./components/practicum-simulator/practicum-simulator"
import JournalCover from "./components/journal-cover/journal-cover"
import Assistants from "./components/assistants/assistants"
import PracticumSchedule from "./components/practicum-schedule/practicum-schedule"
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
  faFile,
  faChartLine,
  faCogs,
  faBars
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
  faFile,
  faChartLine,
  faCogs,
  faBars,
)

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" render={() => <Navbar />} />

        <Switch>
          <Route exact path="/">
            <Hero />
            <Menu />
          </Route>
          <Route path="/code-of-conduct" render={() => <CodeOfConduct />} />
          <Route path="/handout" render={() => <Handouts />} />
          <Route path="/preliminary-test" render={() => <PreliminaryTest />} />
          <Route path="/practicum-video" render={() => <PracticumVideo />} />
          <Route path="/regression" render={() => <Regression />} />
          <Route path="/practicum-simulator" render={() => <PracticumSimulator />} />
          <Route path="/journal-cover" render={() => <JournalCover />} />
          <Route path="/assistants" render={() => <Assistants />} />
          <Route path="/practicum-schedule" render={() => <PracticumSchedule />} />
          <Route path="/organigram" render={() => <Organigram />} />
          <Route path="/404" render={() => <NotFoundPage />} />
          <Redirect to="/404" />
        </Switch>

        <Route path="/" render={() => <Footer />} />
      </Router>
    </div>
  )
}