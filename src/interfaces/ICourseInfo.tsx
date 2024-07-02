export default interface ICourseInfo {
  name: string
  themeCourse: string
  objectives: string[]
  download?: string
  projects: string[]
  courseContent: {
    title: string
    listOfContent: string[]
  }[]
  toolsPlatform: string[]
  aboutCourse: string
  LogoSrc: string
}
