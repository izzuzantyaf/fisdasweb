import React, { useEffect, useState } from "react"
import "./practicum-video.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getData } from "../../lib/get-data"

// level 2 components
function VideoFrame(props) {
  const [videoFrameHeight, setVideoFrameHeight] = useState(0)

  useEffect(() => {

    const videoFrame = document.querySelector(`iframe.practicum-video`)
    setVideoFrameHeight(0.5625 * videoFrame.offsetWidth)
    // setVideoFrameHeight(500)

    window.addEventListener('resize', () => {
      setVideoFrameHeight(0.5625 * videoFrame.offsetWidth)
    })

    return () => {
      window.removeEventListener('resize', () => { })
    }
  }, [props.videoUrl])

  return (
    <iframe className="practicum-video" title={props.videoUrl} width="100%" height={`${videoFrameHeight}px`} src={props.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>
  )
}

function OtherVideoCard(props) {

  function handleChange() {
    props.onCurrentPlayingChange({
      videoUrl: props.video.video_embed_url,
      videoTitle: props.video.name
    })
  }

  return (
    <div
      className="other-video-card"
      style={
        props.video.video_embed_url === props.currentPlayingVideoUrl
          ? { color: "#222ea2" } : {}
      }
      onClick={handleChange}>
      <div className="icon">
        <FontAwesomeIcon icon={props.video.reactjs_icon} />
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
      <VideoFrame videoUrl={props.currentPlayingUrl} />
      <div className="video-title">
        {props.currentPlayingTitle}
      </div>
    </div>
  )
}

function Sidebar(props) {

  const [practicumVideos, setPracticumVideos] = useState([])
  const [activeLang, setActiveLang] = useState('id')

  const changeCurrentPlaying = (changedData) => {
    props.onCurrentPlayingChange(changedData)
  }

  function changeCurrentLang(lang) {
    setActiveLang(lang)
  }

  useEffect(() => {
    (async function () {
      const data = await getData('practicum-video')
      setPracticumVideos(data)
    })()
  }, [])

  const otherVideoList = practicumVideos
    .filter(practicumVideo => practicumVideo.lang === activeLang)
    .map((practicumVideo, index) => (
      <OtherVideoCard
        key={index}
        onCurrentPlayingChange={changeCurrentPlaying}
        currentPlayingVideoUrl={props.currentPlayingUrl}
        video={practicumVideo}
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
function PracticumVideo() {

  const [currentPlayingUrl, setCurrentPlayingUrl] = useState(null)
  const [currentPlayingTitle, setcurrentPlayingTitle] = useState(null)

  useEffect(() => {
    // make video frame sticky top when scrolling
    videoFrameStickyOnScroll();
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

  function changeCurrentPlaying({ videoUrl, videoTitle }) {
    setCurrentPlayingUrl(videoUrl)
    setcurrentPlayingTitle(videoTitle)
  }

  return (
    <section className="practicum-video">
      <VideoPlayer
        currentPlayingUrl={currentPlayingUrl}
        currentPlayingTitle={currentPlayingTitle}
      />
      <Sidebar
        onCurrentPlayingChange={changeCurrentPlaying}
        currentPlayingUrl={currentPlayingUrl}
        currentPlayingTitle={currentPlayingTitle}
      />
    </section>
  )
}

export default PracticumVideo
