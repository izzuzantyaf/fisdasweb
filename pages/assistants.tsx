import { useEffect, useState } from "react"
import MenuPageLayout from "../layouts/menu-page.layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import { Assistant } from "../core/types/assistant.type"
import { assistantService } from "../core/services/assistant.service"

function AssistantCard({
  name,
  code,
  lineId,
  feedbackLink,
}: {
  name: string
  code: string
  lineId?: string
  feedbackLink?: string
}) {
  const [feedbackTime] = useState(false)

  return (
    <div className="assistant-card flex flex-col gap-1 bg-white p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <div className="assistant-code font-bold text-2xl text-blue-800">
        {code}
      </div>
      <div className="assitants-name flex-grow">{name}</div>
      {lineId ? (
        <div className="flex gap-2 items-center text-xs font-bold">
          <FontAwesomeIcon
            icon={["fab", "line"]}
            className="text-2xl text-green-500"
          />
          {lineId}
        </div>
      ) : (
        <div className="flex gap-2 items-center rounded-lg text-xs text-gray-300">
          <FontAwesomeIcon icon={["fab", "line"]} className="text-2xl" />
          No Line ID
        </div>
      )}
      {feedbackTime ? (
        <a href={feedbackLink} target="_blank" rel="noopener noreferrer">
          <div className="feedback-btn">Write me a feedback</div>
        </a>
      ) : (
        ""
      )}
    </div>
  )
}

export default function AssistantPage() {
  const [assistants, setAssistants] = useState<Assistant[]>()

  const getAsssitants = async () => {
    const assistants = await assistantService.getAll()
    setAssistants(assistants)
  }

  useEffect(() => {
    getAsssitants()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Asisten Praktikum | Lab Fisika Dasar Universitas Telkom</title>
      </Head>
      <MenuPageLayout pageTitle="Asisten Praktikum">
        <div className="assistants-list grid grid-cols-2 md:grid-cols-3 gap-6">
          {assistants?.map(({ code, name, lineId, feedbackUrl }, index) => (
            <AssistantCard
              key={index}
              code={code}
              name={name}
              lineId={lineId}
              feedbackLink={feedbackUrl}
            />
          ))}
        </div>
      </MenuPageLayout>
    </>
  )
}
