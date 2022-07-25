import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getData } from "../lib/get-data"

function AssistantCard(props: any) {
  const [feedbackTime] = useState(false)
  const { name, code, line_id, feedback_link } = props.data

  return (
    <div className="assistant-card flex flex-col gap-1 bg-white p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <div className="assistant-code font-bold text-2xl text-blue-800">
        {code}
      </div>
      <div className="assitants-name flex-grow">{name}</div>
      {line_id ? (
        <div className="flex gap-2 items-center text-xs font-bold">
          <FontAwesomeIcon
            icon={["fab", "line"]}
            className="text-2xl text-green-500"
          />
          {line_id}
        </div>
      ) : (
        <div className="flex gap-2 items-center rounded-lg text-xs text-gray-300">
          <FontAwesomeIcon icon={["fab", "line"]} className="text-2xl" />
          No Line ID
        </div>
      )}
      {feedbackTime ? (
        <a href={feedback_link} target="_blank" rel="noopener noreferrer">
          <div className="feedback-btn">Write me a feedback</div>
        </a>
      ) : (
        ""
      )}
    </div>
  )
}

export default function Assistant() {
  const [assistants, setAssistants] = useState([])

  useEffect(() => {
    ;(async function () {
      const data = await getData("assistant")
      setAssistants(data)
    })()
    window.scrollTo(0, 0)
  }, [])

  return (
    <MenuPageLayout pageTitle="Asisten Praktikum">
      <div className="assistants-list grid grid-cols-2 md:grid-cols-3 gap-6">
        {assistants.map((assistant, index) => (
          <AssistantCard key={index} data={assistant} />
        ))}
      </div>
    </MenuPageLayout>
  )
}
