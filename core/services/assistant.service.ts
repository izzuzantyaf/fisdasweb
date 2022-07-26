import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import { Assistant, AssistantFilter } from "../types/assistant.type"

export const assistantService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.ASSISTANT)
    console.log("Get assistants API response :", response)
    return response.data.assistants as Assistant[]
  },
  search: async (keyword: string) => {
    const response = await getFetch(ApiRoute.ASSISTANT, `keyword=${keyword}`)
    console.log("Search assistants API response :", response)
    return response.data.assistants as Assistant[]
  },
  searchLocal: (assistant: Assistant, keyword: string) => {
    const searchRegex = new RegExp(keyword, "i")
    const isPass =
      searchRegex.test(assistant.name) || searchRegex.test(assistant.code)
    return isPass
  },
  filter: (assistant: Assistant, filter: AssistantFilter) => {
    if (filter.level == "all" && filter.gender == "all") return true
    else if (filter.level != "all" && filter.gender == "all") {
      return assistant.level == filter.level ? true : false
    } else if (filter.level == "all" && filter.gender != "all") {
      return assistant.gender == filter.gender ? true : false
    } else {
      return assistant.level == filter.level &&
        assistant.gender == filter.gender
        ? true
        : false
    }
  },
}
