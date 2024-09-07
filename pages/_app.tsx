import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// Fontawesome
// prettier-ignore
import { faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons"
// prettier-ignore
import {
  faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox, faGamepad, faQuestion, faHurricane, faBowlingBall,
  faAppleAlt
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { config } from "@fortawesome/fontawesome-svg-core" //* untuk mengatasi bug ukuran icon jadi sangat besar di Next.js
import "@fortawesome/fontawesome-svg-core/styles.css" //* untuk mengatasi bug ukuran icon jadi sangat besar di Next.js
import Head from "next/head"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import formbricks from "@formbricks/js"
import { useEffect } from "react"
import { useRouter } from "next/router"

// prettier-ignore
library.add(faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube, faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox, faGamepad, faQuestion, faBowlingBall, faHurricane, faInfinity, faAppleAlt)
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

if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID as string,
    apiHost: process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST as string,
    debug: process.env.NEXT_PUBLIC_FORMBRICKS_DEBUG_MODE === "true", // remove when in production
  })
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Connect next.js router to Formbricks
    const handleRouteChange = formbricks?.registerRouteChange
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676144620857119"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {/* <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676144620857119" /> */}
      <ChakraProvider theme={customizedTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <Analytics />
    </>
  )
}

export default MyApp
