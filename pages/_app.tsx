import "../styles/globals.css"
import type { AppProps } from "next/app"
// Fontawesome setup
// prettier-ignore
import { faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons"
// prettier-ignore
import {
  faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

// prettier-ignore
library.add(faFacebook, faTwitter, faInstagram, faLine, faDiscord, faTiktok, faLinkedin, faTelegramPlane, faYoutube, faCoffee, faListOl, faBook, faPlay, faUsers, faCalendarMinus, faSitemap, faGlobe, faEye, faDownload, faTasks, faBalanceScale, faSortNumericUpAlt, faGripLinesVertical, faCircleNotch, faInfinity, faSatelliteDish, faWaveSquare, faMagnet, faBolt, faChevronCircleUp, faFile, faChartLine, faCogs, faBars, faCalculator, faPlug, faDrawPolygon, faParachuteBox)

const customizedTheme = extendTheme({
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={customizedTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
