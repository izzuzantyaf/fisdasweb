import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// Fontawesome
// prettier-ignore
import { faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons"
// prettier-ignore
import {
  faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox, faGamepad, faQuestion, faNewspaper, faAnglesRight, faAnglesLeft
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { config } from "@fortawesome/fontawesome-svg-core" //* untuk mengatasi bug ukuran icon jadi sangat besar di Next.js
import "@fortawesome/fontawesome-svg-core/styles.css" //* untuk mengatasi bug ukuran icon jadi sangat besar di Next.js
import Head from "next/head"
import Script from "next/script"
import { ConfigProvider, theme } from "antd"
import { useToken } from "antd/es/theme/internal"

// prettier-ignore
library.add(faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube, faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox, faGamepad, faQuestion, faNewspaper, faAnglesRight, faAnglesLeft)
config.autoAddCss = false //* untuk mengatasi bug ukuran icon jadi sangat besar di Next.js

const customizedTheme = extendTheme({
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
  components: {
    Skeleton: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const { useToken } = theme
  const { token } = useToken()
  return (
    <>
      <Head>
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676144620857119"
          crossOrigin="anonymous"
        ></script> */}
        <title>Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      {/* <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676144620857119" /> */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: token["blue-7"],
            fontSize: 16,
            fontFamily: "Inter, system-ui, sans-serif",
          },
          components: {
            Button: {
              borderRadius: 8,
            },
          },
        }}
      >
        {/* <ChakraProvider theme={customizedTheme}> */}
        <Component {...pageProps} />
        {/* </ChakraProvider> */}
      </ConfigProvider>
    </>
  )
}

export default MyApp
