import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Home from "./pages/home"
import CodeOfConduct from "./pages/code-of-conduct"
import Handout from "./pages/handout"
import PreliminaryTest from "./pages/preliminary-test"
import PracticumVideo from "./pages/practicum-video"
import Regression from "./pages/regression"
import PracticumSimulator from "./pages/practicum-simulator"
import JournalCover from "./pages/journal-cover"
import Assistants from "./pages/assistants"
import PracticumSchedule from "./pages/practicum-schedule"
import Organigram from "./pages/organigram"
import NotFoundPage from "./pages/not-found-page"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons"
import {
  faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox
} from "@fortawesome/free-solid-svg-icons"
import AppLayout from "./layouts/app"

library.add(faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube, faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox)

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/code-of-conduct" render={() => <AppLayout content={<CodeOfConduct />} />} />
          <Route path="/handout" render={() => <AppLayout content={<Handout />} />} />
          <Route path="/preliminary-test" render={() => <AppLayout content={<PreliminaryTest />} />} />
          <Route path="/practicum-video" render={() => <AppLayout content={<PracticumVideo />} />} />
          <Route path="/regression" render={() => <AppLayout content={<Regression />} />} />
          <Route path="/simulator" render={() => <AppLayout content={<PracticumSimulator />} />} />
          <Route path="/journal-cover" render={() => <AppLayout content={<JournalCover />} />} />
          <Route path="/assistant" render={() => <AppLayout content={<Assistants />} />} />
          <Route path="/schedule" render={() => <AppLayout content={<PracticumSchedule />} />} />
          <Route path="/organigram" render={() => <AppLayout content={<Organigram />} />} />
          <Route path="/404" render={() => <NotFoundPage />} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  )
}