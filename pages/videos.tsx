import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getData } from "../lib/get-data"
import MenuPageLayout from "../layouts/menu-page.layout"

function PracticumVideoPage() {
  const [currentPlayingUrl, setCurrentPlayingUrl] = useState(null)
  const [currentPlayingTitle, setcurrentPlayingTitle] = useState(null)
  const [videoFrameHeight, setVideoFrameHeight] = useState(0)
  const [practicumVideos, setPracticumVideos] = useState([])
  const [activeLang, setActiveLang] = useState("id")
  const videoFrame = useRef()

  function videoFrameStickyOnScroll() {
    const videoFrame = document.querySelector(".practicum-video .player")
    const sticky = videoFrame.offsetTop
    const otherVideoList = document.querySelector(".practicum-video .sidebar")
    window.onscroll = () => {
      if (window.pageYOffset >= sticky && window.innerWidth <= 768) {
        videoFrame.classList.add("fixed", "top-4", "right-4", "left-4")
        otherVideoList.style.marginTop = `${videoFrame.offsetHeight}px`
      } else {
        videoFrame.classList.remove("fixed", "top-4", "right-4", "left-4")
        otherVideoList.style.marginTop = "0px"
      }
    }
  }

  function changeCurrentPlaying({ videoUrl, videoTitle }) {
    setCurrentPlayingUrl(videoUrl)
    setcurrentPlayingTitle(videoTitle)
  }

  useEffect(() => {
    setVideoFrameHeight(0.5625 * videoFrame.current.offsetWidth)
    const resizeVideoFrame = () => {
      setVideoFrameHeight(0.5625 * videoFrame.current.offsetWidth)
    }
    window.addEventListener("resize", resizeVideoFrame)
    return () => {
      window.removeEventListener("resize", resizeVideoFrame)
    }
  }, [currentPlayingUrl])

  useEffect(() => {
    videoFrameStickyOnScroll()
  }, [])

  useEffect(() => {
    ;(async function () {
      const data = await getData("practicum-video")
      setPracticumVideos(data)
    })()
  }, [])

  useEffect(() => {
    console.log(practicumVideos)
    if (practicumVideos.length > 0)
      changeCurrentPlaying({
        videoTitle: practicumVideos[0].name,
        videoUrl: practicumVideos[0].video_embed_url,
      })
  }, [practicumVideos])

  return (
    <MenuPageLayout pageTitle="Video Praktikum">
      <section className="practicum-video">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* video player */}
          <div className="player lg:col-span-2 flex flex-col gap-6">
            <iframe
              ref={videoFrame}
              className="practicum-video bg-gray-200 rounded-xl"
              title={currentPlayingUrl}
              width="100%"
              height={`${videoFrameHeight}px`}
              src={currentPlayingUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
            <div className="video-title hidden lg:block text-2xl font-bold">
              {currentPlayingTitle}
            </div>
          </div>
          {/* end of video player */}

          {/* Sidebar */}
          <div className="sidebar flex flex-col gap-6">
            <div className="video-title lg:hidden text-2xl font-bold">
              {currentPlayingTitle}
            </div>
            {/* Language switch */}
            <div className="lang-switch flex rounded-full bg-white">
              <div
                className={`lang1 rounded-full p-2 cursor-pointer w-1/2 text-center font-medium ${
                  activeLang === "id" ? "bg-blue-800 text-white" : ""
                }`}
                onClick={() => setActiveLang("id")}
              >
                Indonesia
              </div>
              <div
                className={`lang2 rounded-full p-2 cursor-pointer w-1/2 text-center font-medium ${
                  activeLang === "en" ? "bg-blue-800 text-white" : ""
                }`}
                onClick={() => setActiveLang("en")}
              >
                English
              </div>
            </div>
            {/* end of Language switch */}
            {practicumVideos
              .filter((practicumVideo) => practicumVideo.lang === activeLang)
              .map((video, index) => (
                <div
                  key={index}
                  className={`other-video-card p-4 pl-6 text-blue-800 rounded-xl flex items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
                    video.video_embed_url === currentPlayingUrl
                      ? "bg-blue-100"
                      : "bg-white"
                  }`}
                  onClick={() =>
                    changeCurrentPlaying({
                      videoUrl: video.video_embed_url,
                      videoTitle: video.name,
                    })
                  }
                >
                  <div className="icon text-3xl w-16 flex-shrink-0">
                    <FontAwesomeIcon icon={video.reactjs_icon} />
                  </div>
                  <div className="video-name font-medium">{video.name}</div>
                </div>
              ))}
          </div>
          {/* end of Sidebar */}
        </div>
      </section>
    </MenuPageLayout>
  )
}

export default PracticumVideoPage
