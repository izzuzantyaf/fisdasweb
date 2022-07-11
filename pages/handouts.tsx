import { useEffect, useState } from "react"
import ContentLayout from "../layouts/content.layout"
import { getData } from "../lib/get-data"

// level 2 component
function HandoutCard(props: any) {
  const { lang, faculty, file_url } = props.data

  return (
    <a
      href={file_url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", opacity: file_url ? 1 : 0.3 }}
    >
      <div className="handout-card bg-white rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
        <div className="handout-info text-blue-800">
          <p className="title font-bold">
            {lang === "id"
              ? "Modul Praktikum Fisika Dasar"
              : "Physics Lab Works Handout"}{" "}
            ({faculty})
          </p>
          <p className="lang">
            {lang === "id" ? "Bahasa Indonesia" : "English"}
          </p>
        </div>
      </div>
    </a>
  )
}

// level 0 component
export default function Handout() {
  const [handouts, setHandouts] = useState([])

  useEffect(() => {
    ;(async function () {
      const data = await getData("practicum-handout")
      setHandouts(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <ContentLayout
      data={{
        title: "Modul Praktikum",
        Content: (
          <div className="handouts-list grid grid-cols-1 md:grid-cols-2 gap-6">
            {handouts.map((handout, index) => (
              <HandoutCard key={index} data={handout} />
            ))}
          </div>
        ),
      }}
    />
  )
}
