import { useEffect, useRef, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import { VideoMaterial } from "../core/types/practicum-material.type"
import { practicumMaterialService } from "../core/services/practicum-material.service"
import ModuleInfo from "../components/module-info.comp"
import { Box } from "@chakra-ui/react"
import { Language } from "../core/lib/constants"
import Head from "next/head"

function PracticumVideoPage() {
  const [practicumVideos, setPracticumVideos] = useState<VideoMaterial[]>()
  const [selectedVideo, setSelectedVideo] = useState<VideoMaterial>()
  const [videoFrameHeight, setVideoFrameHeight] = useState(0)
  const [activeLang, setActiveLang] = useState<Language>(Language.ID)
  const videoFrame = useRef()

  /**
   * Memilih satu video berdasarkan id, mengupdate state selectedVideo
   * @param id
   * @returns
   */
  const selectVideoById = (id: string) => {
    const selectedVideo = practicumVideos?.find(
      (practicumVideo) => practicumVideo._id === id
    )
    setSelectedVideo(selectedVideo)
    return selectedVideo
  }

  /**
   * Mengambil data video praktikum dari API, dan memasukkannya ke dalam state practicumVideos
   */
  const getPracticumVideos = async () => {
    setPracticumVideos(await practicumMaterialService.getVideos())
  }

  const resizeVideoFrame = () => {
    setVideoFrameHeight(0.5625 * videoFrame.current.offsetWidth)
  }

  useEffect(() => {
    getPracticumVideos()
    setVideoFrameHeight(0.5625 * videoFrame.current.offsetWidth)
    // menambahkan event listener pada saat ukuran window browser di ubah agar aspect ratio frame video tetap 16:9
    window.addEventListener("resize", resizeVideoFrame)
    return () => {
      window.removeEventListener("resize", resizeVideoFrame)
    }
  }, [])

  useEffect(() => {
    if (practicumVideos) setSelectedVideo(practicumVideos[0])
  }, [practicumVideos])

  return (
    <>
      <Head>
        <title>Video Praktikum | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Video Praktikum">
        <section className="practicum-video">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* video player */}
            <div className="player md:col-span-2 flex flex-col gap-6">
              <iframe
                ref={videoFrame}
                className="practicum-video bg-gray-200 rounded-xl"
                title={selectedVideo?.name}
                width="100%"
                height={`${videoFrameHeight}px`}
                src={selectedVideo?.video.embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
              <div className="video-title text-2xl font-bold">
                {selectedVideo?.name}
              </div>
            </div>
            {/* end of video player */}

            {/* Sidebar */}
            <div className="sidebar flex flex-col gap-6">
              {/* Language switch */}
              <div className="lang-switch flex rounded-full bg-gray-50">
                <div
                  className={`lang1 rounded-full p-2 cursor-pointer w-1/2 text-center font-medium ${
                    activeLang === "id" ? "bg-blue-800 text-white" : ""
                  }`}
                  onClick={() => setActiveLang(Language.ID)}
                >
                  Indonesia
                </div>
                <div
                  className={`lang2 rounded-full p-2 cursor-pointer w-1/2 text-center font-medium ${
                    activeLang === "en" ? "bg-blue-800 text-white" : ""
                  }`}
                  onClick={() => setActiveLang(Language.EN)}
                >
                  English
                </div>
              </div>
              {/* end of Language switch */}

              {/* Video list */}
              <Box>
                {practicumVideos
                  ?.filter(
                    (practicumMaterial) =>
                      practicumMaterial.language === activeLang
                  )
                  .map(({ _id, name, code, faIconName, video }, index) => (
                    <>
                      <ModuleInfo
                        key={index}
                        iconName={faIconName}
                        title={code}
                        description={name}
                        className={`video-card p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer ${
                          video.embedUrl === selectedVideo?.video.embedUrl
                            ? "bg-blue-100"
                            : "bg-white"
                        }`}
                        onClick={() => selectVideoById(_id)}
                      />
                    </>
                  ))}
              </Box>
              {/* Video list end */}
            </div>
            {/* end of Sidebar */}
          </div>
        </section>
      </MenuPageLayout>
    </>
  )
}

export default PracticumVideoPage
