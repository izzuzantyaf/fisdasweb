export enum Route {
  HOME = "/",
  SIGN_IN = "/signin",
  CODE_OF_CONDUCT = "/code-of-conduct",
  HANDOUT = "/handouts",
  PRACTICUM_MATERIAL = "/practicum-material",
  PRETASK = "/pretasks",
  PRACTICUM_VIDEO = "/videos",
  SIMULATOR = "/simulators",
  JOURNAL_COVER = "/journal-covers",
  ASSISTANT = "/assistants",
  SCHEDULE = "/schedules",
  ORGANIGRAM = "/organigram",
  SOCIAL_MEDIA = "/social-media",
  BLOG = "/blog",
}

export enum ApiRoute {
  SIGN_IN = "/auth/signin",
  CODE_OF_CONDUCT = "/api/code-of-conduct",
  ORGANIGRAM = "/api/organigram",
  HANDOUT = "/api/handout",
  PRACTICUM_MATERIAL = "/api/practicum-module",
  PRETASK = "/api/practicum-module/pretasks",
  VIDEO = "/api/practicum-module/videos",
  SIMULATOR = "/api/practicum-module/simulators",
  JOURNAL_COVER = "/api/practicum-module/journal-covers",
  SCHEDULE = "/api/schedule",
  ASSISTANT = "/api/assistant",
  ARTICLE = "/api/articles",
}

export const menu = [
  {
    name: "Blog",
    faIconName: "newspaper",
    route: Route.BLOG,
  },
  {
    name: "Tata tertib",
    faIconName: "balance-scale",
    route: Route.CODE_OF_CONDUCT,
  },
  {
    name: "Modul",
    faIconName: "book",
    route: Route.HANDOUT,
  },
  // {
  //   name: "Konten praktikum",
  //   faIconName: "folder-open",
  //   route: Route.PRACTICUM_MATERIAL,
  // },
  {
    name: "Tugas pendahuluan",
    faIconName: "tasks",
    route: Route.PRETASK,
  },
  {
    name: "Video praktikum",
    faIconName: "play",
    route: Route.PRACTICUM_VIDEO,
  },
  {
    name: "Simulator",
    faIconName: "gamepad",
    route: Route.SIMULATOR,
  },
  {
    name: "Cover jurnal",
    faIconName: "file",
    route: Route.JOURNAL_COVER,
  },
  {
    name: "Asisten",
    faIconName: "users",
    route: Route.ASSISTANT,
  },
  {
    name: "Jadwal",
    faIconName: "calendar-minus",
    route: Route.SCHEDULE,
  },
  {
    name: "Organigram",
    faIconName: "sitemap",
    route: Route.ORGANIGRAM,
  },
  // {
  //   name: "Social media",
  //   faIconName: "thumbs-up",
  //   route: Route.SOCIAL_MEDIA,
  // },
]

export const breadcrumpStack = [
  {
    path: Route.CODE_OF_CONDUCT,
    values: ["Tata tertib"],
  },
]

export enum Faculty {
  FTE = "fte",
  FRI = "fri",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export enum AssistantLevel {
  JUNIOR = "junior",
  SENIOR = "senior",
}

export enum Language {
  ID = "id",
  EN = "en",
}
