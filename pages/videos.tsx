import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getData } from "../lib/get-data"

// level 2 components
function VideoFrame(props: any) {
  const [videoFrameHeight, setVideoFrameHeight] = useState(0)

  useEffect(() => {
    const videoFrame = document.querySelector(`iframe.practicum-video`)
    setVideoFrameHeight(0.5625 * videoFrame.offsetWidth)

    window.addEventListener("resize", () => {
      setVideoFrameHeight(0.5625 * videoFrame.offsetWidth)
    })

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [props.videoUrl])

  return (
    <iframe
      className="practicum-video bg-gray-200 rounded-xl"
      title={props.videoUrl}
      width="100%"
      height={`${videoFrameHeight}px`}
      src={props.videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    ></iframe>
  )
}

function OtherVideoCard(props: any) {
  function handleChange() {
    props.onCurrentPlayingChange({
      videoUrl: props.video.video_embed_url,
      videoTitle: props.video.name,
    })
  }

  return (
    <div
      className={`other-video-card p-4 pl-6 text-blue-800 rounded-xl flex items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
        props.video.video_embed_url === props.currentPlayingVideoUrl
          ? "bg-blue-100"
          : "bg-white"
      }`}
      onClick={handleChange}
    >
      <div className="icon text-3xl w-16 flex-shrink-0">
        <FontAwesomeIcon icon={props.video.reactjs_icon} />
      </div>
      <div className="video-name font-medium">{props.video.name}</div>
    </div>
  )
}

function LangSwitch(props: any) {
  const [whatActive, setWhatActive] = useState(props.currentLang)

  function switchToId() {
    setWhatActive("id")
    props.onCurrentLangChange("id")
  }

  function switchToEn() {
    setWhatActive("en")
    props.onCurrentLangChange("en")
  }

  return (
    <div className="lang-switch flex rounded-full bg-white">
      <div
        className={`lang1 rounded-full p-2 cursor-pointer w-1/2 text-center font-medium ${
          whatActive === "id" ? "bg-blue-800 text-white" : ""
        }`}
        onClick={switchToId}
      >
        Indonesia
      </div>
      <div
        className={`lang2 rounded-full p-2 cursor-pointer w-1/2 text-center font-medium ${
          whatActive === "en" ? "bg-blue-800 text-white" : ""
        }`}
        onClick={switchToEn}
      >
        English
      </div>
    </div>
  )
}

// level 1 components
function VideoPlayer(props: any) {
  return (
    <div className="player lg:col-span-2 flex flex-col gap-6">
      <VideoFrame videoUrl={props.currentPlayingUrl} />
      <div className="video-title hidden lg:block text-2xl font-bold">
        {props.currentPlayingTitle}
      </div>
    </div>
  )
}

function Sidebar(props: any) {
  const [practicumVideos, setPracticumVideos] = useState([])
  const [activeLang, setActiveLang] = useState("id")

  const changeCurrentPlaying = (changedData) => {
    props.onCurrentPlayingChange(changedData)
  }

  function changeCurrentLang(lang) {
    setActiveLang(lang)
  }

  useEffect(() => {
    ;(async function () {
      const data = await getData("practicum-video")
      setPracticumVideos(data)
    })()
  }, [])

  return (
    <div className="sidebar flex flex-col gap-6">
      <div className="video-title lg:hidden text-2xl font-bold">
        {props.currentPlayingTitle}
      </div>
      <LangSwitch
        onCurrentLangChange={changeCurrentLang}
        currentLang={activeLang}
      />
      {practicumVideos
        .filter((practicumVideo) => practicumVideo.lang === activeLang)
        .map((practicumVideo, index) => (
          <OtherVideoCard
            key={index}
            onCurrentPlayingChange={changeCurrentPlaying}
            currentPlayingVideoUrl={props.currentPlayingUrl}
            video={practicumVideo}
          />
        ))}
    </div>
  )
}

// level 0 component
function PracticumVideo() {
  const [currentPlayingUrl, setCurrentPlayingUrl] = useState(null)
  const [currentPlayingTitle, setcurrentPlayingTitle] = useState(null)

  useEffect(() => {
    // make video frame sticky top when scrolling
    videoFrameStickyOnScroll()
  }, [])

  function videoFrameStickyOnScroll() {
    const videoFrame = document.querySelector(".practicum-video .player")
    const sticky = videoFrame.offsetTop
    const otherVideoList = document.querySelector(".practicum-video .sidebar")
    window.onscroll = () => {
      if (window.pageYOffset >= sticky && window.innerWidth <= 768) {
        videoFrame.classList.add("fixed", "top-6", "right-6", "left-6")
        otherVideoList.style.marginTop = `${videoFrame.offsetHeight}px`
      } else {
        videoFrame.classList.remove("fixed", "top-6", "right-6", "left-6")
        otherVideoList.style.marginTop = "0px"
      }
    }
  }

  function changeCurrentPlaying({ videoUrl, videoTitle }) {
    setCurrentPlayingUrl(videoUrl)
    setcurrentPlayingTitle(videoTitle)
  }

  return (
    <section className="practicum-video p-6 pb-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <VideoPlayer
          currentPlayingUrl={currentPlayingUrl}
          currentPlayingTitle={currentPlayingTitle}
        />
        <Sidebar
          onCurrentPlayingChange={changeCurrentPlaying}
          currentPlayingUrl={currentPlayingUrl}
          currentPlayingTitle={currentPlayingTitle}
        />
      </div>
    </section>
  )
}

export default PracticumVideo
