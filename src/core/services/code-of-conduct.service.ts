import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import { CodeOfConduct } from "../../modules/fisdasweb-backend/types/code-of-conduct.type"

export const codeOfConductService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.CODE_OF_CONDUCT)
    console.log("Get code of conduct API response :", response)
    return response.data as CodeOfConduct
  },
}
