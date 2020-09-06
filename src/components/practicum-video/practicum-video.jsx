import React from "react"
import VideoFrame from "../video-frame/video-frame"
import "./practicum-video.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { practicumModules } from "../../contents/modules"

class OtherVideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      videoId: props.video.videoId,
    }
  }

  handleChange() {
    this.props.onCurrentPlayingChange(this.state.videoId)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div
        className="other-video-card"
        style={
          this.state.videoId === this.props.currentPlayingVideoId
            ? { color: "#222ea2" }
            : {}
        }
        onClick={this.handleChange}
      >
        <div className="icon">
          <FontAwesomeIcon icon="play" />
        </div>
        <div className="video-name">{this.props.video.name + this.props.video.videoId}</div>
      </div>
    )
  }
}

class LangSwitch extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      whatActive: this.props.currentLang
    }
  }

  handleChange() {
    if (this.state.whatActive === 'id') this.setState({ whatActive: 'en' })
    else this.setState({ whatActive: 'id' })
    this.props.onCurrentLangChange(this.state.whatActive)
  }

  render() {
    return (
      <div className="lang-switch">
        <div className="slider"></div>
        <div className={`lang1 ${this.state.whatActive === 'id' ? 'active' : ''}`} onClick={this.handleChange}>Indonesia</div>
        <div className={`lang2 ${this.state.whatActive === 'en' ? 'active' : ''}`} onClick={this.handleChange}>English</div>
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
      activeLang: 'en',
      currentPlayingId: practicumModules[0].videoId
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

  changeCurrentPlaying(videoId) {
    this.setState({ currentPlayingId: videoId })
  }

  render() {

    const otherVideoList = practicumModules
      .filter(practicumModule => practicumModule.lang === this.state.activeLang)
      .map(practicumModule => (
        <div style={{ cursor: 'pointer' }}>
          <OtherVideoCard
            onCurrentPlayingChange={this.changeCurrentPlaying}
            currentPlayingVideoId={this.state.currentPlayingId}
            video={practicumModule}
          />
        </div>
      ))

    return (
      <section className="practicum-video">
        <div className="player">
          <VideoFrame videoId={this.state.currentPlayingId} />
        </div>
        <div className="sidebar">
          <LangSwitch onCurrentLangChange={this.changeCurrentLang} currentLang={this.state.activeLang} />
          {otherVideoList}
        </div>
      </section>
    )
  }
}

export default PracticumVideo
