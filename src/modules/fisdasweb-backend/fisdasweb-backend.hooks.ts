import { fisdaswebBackendService } from "src/modules/fisdasweb-backend/fisdasweb-backend.service"
import useSWR from "swr"
import useSWRMutation from "swr/mutation"

export function useGetAssistants() {
  const { isLoading, data, error, mutate } = useSWR("get-assistants", () =>
    fisdaswebBackendService.getAssistants()
  )

  return {
    isGetAssistantsLoading: isLoading,
    getAssistantsData: data,
    getAssistantsError: error,
    getAssistants: mutate,
  }
}

export function useSearchAssistants() {
  const { isMutating, data, error, trigger } = useSWRMutation(
    `search-assistants`,
    (key, { arg }: { arg: string }) =>
      fisdaswebBackendService.searchAssistants(arg)
  )

  return {
    isSearchAssistantsLoading: isMutating,
    searchAssistantsData: data,
    searchAssistantsError: error,
    searchAssistants: trigger,
  }
}

export function useGetCodeOfConduct() {
  const { isLoading, data, error, mutate } = useSWR("get-code-of-conduct", () =>
    fisdaswebBackendService.getCodeOfConduct()
  )

  return {
    isGetCodeOfConductLoading: isLoading,
    getCodeOfConductData: data,
    getCodeOfConductError: error,
    getCodeOfConduct: mutate,
  }
}

export function useGetHandouts() {
  const { isLoading, data, error, mutate } = useSWR("get-handouts", () =>
    fisdaswebBackendService.getHandouts()
  )

  return {
    isGetHandoutsLoading: isLoading,
    getHandoutsData: data,
    getHandoutsError: error,
    getHandouts: mutate,
  }
}
export function useGetOrganigram() {
  const { isLoading, data, error, mutate } = useSWR("get-organigram", () =>
    fisdaswebBackendService.getOrganigram()
  )

  return {
    isGetOrganigramLoading: isLoading,
    getOrganigramData: data,
    getOrganigramError: error,
    getOrganigram: mutate,
  }
}

export function useGetPracticumMaterial() {
  const { isLoading, data, error, mutate } = useSWR(
    "get-practicum-material",
    () => fisdaswebBackendService.getPracticumMaterial()
  )

  return {
    isGetPracticumMaterialLoading: isLoading,
    getPracticumMaterialData: data,
    getPracticumMaterialError: error,
    getPracticumMaterial: mutate,
  }
}

export function useGetPreTasks() {
  const { isLoading, data, error, mutate } = useSWR("get-pre-tasks", () =>
    fisdaswebBackendService.getPreTasks()
  )

  return {
    isGetPreTasksLoading: isLoading,
    getPreTasksData: data,
    getPreTasksError: error,
    getPreTasks: mutate,
  }
}

export function useGetSimulators() {
  const { isLoading, data, error, mutate } = useSWR("get-simulators", () =>
    fisdaswebBackendService.getSimulators()
  )

  return {
    isGetSimulatorsLoading: isLoading,
    getSimulatorsData: data,
    getSimulatorsError: error,
    getSimulators: mutate,
  }
}

export function useGetJournalCovers() {
  const { isLoading, data, error, mutate } = useSWR("get-journal-covers", () =>
    fisdaswebBackendService.getJournalCovers()
  )

  return {
    isGetJournalCoversLoading: isLoading,
    getJournalCoversData: data,
    getJournalCoversError: error,
    getJournalCovers: mutate,
  }
}

export function useGetVideos() {
  const { isLoading, data, error, mutate } = useSWR("get-videos", () =>
    fisdaswebBackendService.getVideos()
  )

  return {
    isGetVideosLoading: isLoading,
    getVideosData: data,
    getVideosError: error,
    getVideos: mutate,
  }
}

export function useGetSchedules() {
  const { isLoading, data, error, mutate } = useSWR("get-schedules", () =>
    fisdaswebBackendService.getSchedules()
  )

  return {
    isGetSchedulesLoading: isLoading,
    getSchedulesData: data,
    getSchedulesError: error,
    getSchedules: mutate,
  }
}
