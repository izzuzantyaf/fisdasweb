import React, { useEffect, useState } from "react"
import "./practicum-video.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { practicumModules } from "../../contents/modules"

// level 2 components
function VideoFrame(props) {

  const [videoFrameHeight, setVideoFrameHeight] = useState(0)

  useEffect(() => {
    const videoFrame = document.querySelector(`iframe[title="${props.videoId}"]`)
    setVideoFrameHeight(0.5625 * videoFrame.offsetWidth)

    window.addEventListener('resize', () => {
      setVideoFrameHeight(0.5625 * videoFrame.offsetWidth)
    })

    return () => {
      window.removeEventListener('resize', () => { })
    }
  }, [props.videoId])

  const src = `https://www.youtube.com/embed/${props.videoId}`
  return (
    <iframe className="practicum-video" title={props.videoId} width="100%" height={`${videoFrameHeight}px`} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>
  )
}

function OtherVideoCard(props) {

  function handleChange() {
    props.onCurrentPlayingChange({
      videoId: props.video.videoId,
      videoTitle: props.video.name
    })
  }

  return (
    <div
      className="other-video-card"
      style={
        props.video.videoId === props.currentPlayingVideoId
          ? { color: "#222ea2" } : {}
      }
      onClick={handleChange}
    >
      <div className="icon">
        <FontAwesomeIcon icon={props.video.icon} />
      </div>
      <div className="video-name">{props.video.name}</div>
    </div>
  )
}

function LangSwitch(props) {

  const [whatActive, setWhatActive] = useState(props.currentLang)

  function switchToId() {
    setWhatActive('id')
    props.onCurrentLangChange('id')
  }

  function switchToEn() {
    setWhatActive('en')
    props.onCurrentLangChange('en')
  }

  return (
    <div className="lang-switch">
      <div className={`lang1 ${whatActive === 'id' ? 'active' : ''}`} onClick={switchToId}>Indonesia</div>
      <div className={`lang2 ${whatActive === 'en' ? 'active' : ''}`} onClick={switchToEn}>English</div>
    </div>
  )
}

// level 1 components
function VideoPlayer(props) {
  return (
    <div className="player">
      <VideoFrame videoId={props.currentPlayingId} />
      <div className="video-title">
        {props.currentPlayingTitle}
      </div>
    </div>
  )
}

function Sidebar(props) {

  const [activeLang, setActiveLang] = useState(practicumModules[0].lang)

  function changeCurrentLang(lang) {
    setActiveLang(lang)
  }

  function changeCurrentPlaying(changedData) {
    props.onCurrentPlayingChange(changedData)
  }

  const filteredPracticumModules = practicumModules
    .filter(practicumModule => practicumModule.lang === activeLang)

  const otherVideoList = filteredPracticumModules
    .map((module, index) => (
      <OtherVideoCard
        key={index}
        onCurrentPlayingChange={changeCurrentPlaying}
        currentPlayingVideoId={props.currentPlayingId}
        video={module}
      />
    ))

  return (
    <div className="sidebar">
      <div className="video-title">
        {props.currentPlayingTitle}
      </div>
      <LangSwitch
        onCurrentLangChange={changeCurrentLang}
        currentLang={activeLang} />
      {otherVideoList}
    </div>
  )
}

// level 0 component
export default function PracticumVideo() {

  const [currentPlayingId, setCurrentPlayingId] = useState(practicumModules[0].videoId)
  const [currentPlayingTitle, setcurrentPlayingTitle] = useState(practicumModules[0].name)

  useEffect(() => {
    // make video frame sticky top when scrolling
    videoFrameStickyOnScroll()
  }, [])

  function videoFrameStickyOnScroll() {
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

  function changeCurrentPlaying({ videoId, videoTitle }) {
    setCurrentPlayingId(videoId)
    setcurrentPlayingTitle(videoTitle)
  }

  return (
    <section className="practicum-video">
      <VideoPlayer
        currentPlayingId={currentPlayingId}
        currentPlayingTitle={currentPlayingTitle}
      />
      <Sidebar
        onCurrentPlayingChange={changeCurrentPlaying}
        currentPlayingId={currentPlayingId}
        currentPlayingTitle={currentPlayingTitle}
      />
    </section>
  )
}