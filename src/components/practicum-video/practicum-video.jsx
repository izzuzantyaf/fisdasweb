import React from "react"
import VideoFrame from "../video-frame/video-frame"
import "./practicum-video.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { practicumModules } from "../../contents/modules"

class OtherVideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.onCurrentPlayingChange(this.props.video.videoId, this.props.video.name)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div
        className="other-video-card"
        style={
          this.props.video.videoId === this.props.currentPlayingVideoId
            ? { color: "#222ea2" } : {}
        }
        onClick={this.handleChange}
      >
        <div className="icon">
          <FontAwesomeIcon icon={this.props.video.icon} />
        </div>
        <div className="video-name">{this.props.video.name}</div>
      </div>
    )
  }
}

class LangSwitch extends React.Component {

  constructor(props) {
    super(props)
    this.handleIdLangChange = this.handleIdLangChange.bind(this)
    this.handleEnLangChange = this.handleEnLangChange.bind(this)
    this.state = {
      whatActive: this.props.currentLang
    }
  }

  handleIdLangChange() {
    if (this.state.whatActive === 'en') this.setState({ whatActive: 'id' })
    this.props.onCurrentLangChange('id')
  }

  handleEnLangChange() {
    if (this.state.whatActive === 'id') this.setState({ whatActive: 'en' })
    this.props.onCurrentLangChange('en')
  }

  render() {
    return (
      <div className="lang-switch">
        <div className="slider"></div>
        <div className={`lang1 ${this.state.whatActive === 'id' ? 'active' : ''}`} onClick={this.handleIdLangChange}>Indonesia</div>
        <div className={`lang2 ${this.state.whatActive === 'en' ? 'active' : ''}`} onClick={this.handleEnLangChange}>English</div>
      </div>
    )
  }
}

class PracticumVideo extends React.Component {

  constructor(props) {
    super(props)
    this.changeCurrentPlaying = this.changeCurrentPlaying.bind(this)
    this.changeCurrentLang = this.changeCurrentLang.bind(this)
    this.state = {
      activeLang: 'id',
      currentPlayingId: practicumModules[0].videoId,
      currentPlayingTitle: practicumModules[0].name,
    }
  }

  componentDidMount() {
    // make video frame on top when scrolling
    const videoFrame = document.querySelector(".practicum-video .player")
    const sticky = videoFrame.offsetTop
    const otherVideoList = document.querySelector(".practicum-video .sidebar")
    const container = document.querySelector(".practicum-video")
    window.onscroll = () => {
      if (window.pageYOffset >= sticky && window.innerWidth <= 768) {
        videoFrame.classList.add("sticky")
        otherVideoList.style.marginTop = `${videoFrame.offsetHeight}px`
        container.style.display = "block"
      } else {
        videoFrame.classList.remove("sticky")
        otherVideoList.style.marginTop = "0px"
        container.style.display = "grid"
      }
    }
  }

  changeCurrentLang(lang) {
    this.setState({ activeLang: lang })
  }

  changeCurrentPlaying(videoId, title) {
    this.setState({ currentPlayingId: videoId, currentPlayingTitle: title })
  }

  render() {
    const filteredPracticumModules = practicumModules
      .filter(practicumModule => practicumModule.lang === this.state.activeLang)
    const otherVideoList = filteredPracticumModules
      .map((module, index) => (
        <OtherVideoCard
          key={index}
          onCurrentPlayingChange={this.changeCurrentPlaying}
          currentPlayingVideoId={this.state.currentPlayingId}
          video={module}
        />
      ))

    return (
      <section className="practicum-video">
        <div className="player">
          <VideoFrame videoId={this.state.currentPlayingId} />
          <div className="video-title">
            {this.state.currentPlayingTitle}
          </div>
        </div>
        <div className="sidebar">
          <div className="video-title">
            {this.state.currentPlayingTitle}
          </div>
          <LangSwitch onCurrentLangChange={this.changeCurrentLang} currentLang={this.state.activeLang} />
          {otherVideoList}
        </div>
      </section>
    )
  }
}

export default PracticumVideo
