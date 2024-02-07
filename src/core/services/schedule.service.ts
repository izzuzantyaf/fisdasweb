import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import { Schedule } from "../../modules/fisdasweb-backend/types/schedule.type"

export const scheduleService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.SCHEDULE, "isActive=true")
    console.log("Get schedules API response :", response)
    return response.data as Schedule[]
  },
}
