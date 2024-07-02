import Image from "next/image"
import BgImage from "@/assets/Course/courseBg.svg"
import ObjectiveImg from "@/assets/Course/ObjectiveImg.svg"
import CourseContentItem from "@/components/CourseContentItem/CourseContentItem"
import BgMoreAbout from "@/assets/Course/aboutCourse.png"
import { CloudIcon } from "@/components/Icons/CloudIcon"
import { PinIcon } from "@/components/Icons/PinIcon"
import { ComputerIcon } from "@/components/Icons/ComputerIcon"
import Points from "@/components/Icons/Points.svg"
import Circle from "@/components/Icons/circle.svg"
import { collection, getDocs } from "firebase/firestore"
import db from "@/firebase/config"
import ICourseInfo from "@/interfaces/ICourseInfo"

export default function index({ course }: { course: ICourseInfo }) {
  const { LogoSrc, name, themeCourse, aboutCourse, objectives, courseContent, projects, toolsPlatform, download } =
    course
  return (
    <div className=" flex justify-center mb-[100px] w-full flex-col">
      <div className="absolute w-full h-[80%] bg-[#033f79] top-0 md:rounded-b-[40px]">
        <Image src={BgImage} fill={true} className="w-full h-auto object-cover md:rounded-b-[40px]" alt="background" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 relative z-10 justify-center items-center h-[60vh] lg:h-[55vh]">
        <Image src={LogoSrc} width={181} height={191} className="h-auto" alt="logo" />
        <div className="flex flex-col items-center lg:items-start gap-2 text-2xl lg:text-6xl font-bold lg:max-w-[50%]">
          <span className="text-gerberaRed">{name}:</span>
          <span className="text-white text-center lg:text-start">{themeCourse}</span>
        </div>
      </div>
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col md:grid md:grid-cols-2 gap-12 justify-center relative mt-[50px] lg:mt-[100px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-gerberaRed font-bold text-3xl">About The Course</h3>
            <div className="font-bold">{aboutCourse}</div>
          </div>
          <div className=" flex flex-col gap-4">
            <h3 className="text-gerberaRed font-bold text-3xl">Objectives</h3>
            <div className="flex flex-col gap-3">
              {objectives &&
                objectives.map((objective, index) => (
                  <div className="flex gap-2 items-center font-bold" key={index}>
                    <Image src={ObjectiveImg} width={29} height={29} alt="objective" />
                    <span>{objective}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Points}
            width={200}
            height={50}
            alt="points"
            className="absolute rotate-90 top-[100px] right-[-102px]"
          />
          <Image
            src={Circle}
            alt="decoration"
            className="absolute bottom-[-50px] left-[-80px]"
            width={150}
            height={150}
          />
          <div className="flex bg-white shadow-faq px-6 py-8 pb-14 rounded-3xl flex-col gap-8 relative z-10">
            <h3 className="text-gerberaRed font-bold text-3xl px-6">Course Content</h3>
            <div className="flex flex-col gap-4">
              {courseContent &&
                courseContent.map((content, index) => {
                  const title = `${index + 1 < 10 ? `0${index + 1}` : index + 1} ${content.title}`
                  return (
                    <div key={index}>
                      <CourseContentItem title={title} listOfContent={content.listOfContent} />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1360px] px-6 md:px-16 pt-[50px] md:pt-[100px] mx-auto flex flex-col gap-8">
        <div className="flex w-full items-center gap-2">
          <h3 className="text-gerberaRed font-bold text-3xl min-w-[300px]">{name} Projects</h3>
          <div className="w-full h-[3px] bg-gerberaRed"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects &&
            projects.map((project, index) => (
              <div
                key={index}
                className="shadow-project rounded-[20px] px-[20px] py-[25px] grid grid-cols-1 lg:grid-cols-1fr3fr gap-2 items-center justify-center">
                <div className="bg-gerberaRed w-[50px] h-[50px] rounded-[100%] flex items-center justify-center">
                  <Image alt="project" src={LogoSrc} width={25} height={25} />
                </div>
                <div className="text-[#003F7D] text-[21px] font-bold h-max w-full flex flex-wrap">{project}</div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full max-w-[1360px] px-6 md:px-16 pt-[50px] md:pt-[100px] mx-auto flex flex-col gap-12">
        <div className="w-full relative bg-[#003F7D] p-6 md:p-16 rounded-[50px]">
          <Image
            src={BgMoreAbout}
            width={200}
            height={200}
            // fill={true}
            className="object-cover absolute top-0 left-0 rounded-[50px] w-full h-full"
            alt="more about course"
          />
          <div className="object-contain absolute top-0 left-0 w-full h-full bg-[rgba(0,63,125,0.95)] rounded-[50px]"></div>
          <div className="w-full h-full grid grid-cols-1 gap-6 lg:gap-0 text-center lg:text-start lg:grid-cols-2fr1fr z-10 relative">
            <span className="text-white font-bold text-[48px]">Wanna check more about the course?</span>
            <div className="flex flex-col justify-between gap-6 lg:gap-0">
              <div className="flex justify-between">
                <button className="flex gap-x-2 border-2 border-gerberaRed px-2.5 py-1.5 rounded-lg items-center">
                  <ComputerIcon />
                  <span className="text-white font-bold text-[16px] md:text-[24px] whitespace-nowrap">Live Demo</span>
                </button>
                <button className="flex gap-x-2 border-2 border-gerberaRed px-2.5 py-1.5 rounded-lg items-center">
                  <PinIcon />
                  <span className="text-white font-bold text-[16px] md:text-[24px] whitespace-nowrap">Enroll Now</span>
                </button>
              </div>
              <a
                href={download}
                download
                className="flex items-center px-5 py-2 gap-x-1.5 rounded-[30px] bg-gerberaRed mt-3 mx-auto">
                <CloudIcon />
                <span className="text-white font-bold whitespace-nowrap text-[18px] md:text-[27px]">
                  Download Curriculam
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1360px] px-6 md:px-16 pt-[50px] md:pt-[100px] mx-auto flex flex-col gap-12">
        <div className="flex w-full items-center gap-2">
          <h3 className="text-gerberaRed font-bold text-3xl min-w-[300px]">Tools & Platforms</h3>
          <div className="w-full h-[3px] bg-gerberaRed"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {toolsPlatform &&
            toolsPlatform.map((tool, index) => (
              <div
                key={index}
                className="bg-[#003F7D] rounded-[100%] px-[20px] py-[20px] w-[150px] h-[150px] flex items-center justify-center">
                <Image src={tool} width={75} height={75} alt="tool" />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // Fetch the list of courses from your Firestore collection
  const coursesRef = collection(db, "courses")
  const querySnapshotCourses = await getDocs(coursesRef)
  const courses = querySnapshotCourses.docs.map(doc => {
    return Object.keys(doc.data())
  })

  // Generate paths for each course
  const paths =
    courses[0] &&
    courses[0]
      .filter(item => item !== "courses")
      .map(course => ({
        params: { name: course },
      }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { name } = params
  let course: Partial<ICourseInfo> = {}

  try {
    const coursesRef = collection(db, "courses")
    const querySnapshotCourses = await getDocs(coursesRef)

    querySnapshotCourses.forEach(doc => {
      // Assuming course name matches the key in your Firestore document
      const fixDateCourses = doc.data()[name as string]
      course = fixDateCourses
    })
  } catch (error) {
    console.error("Error getting documents: ", error)
    return {
      redirect: {
        destination: "/courses",
      },
    }
  }

  const isEmpty = (obj: object) => Object.keys(obj).length === 0

  if (isEmpty(course)) {
    return {
      redirect: {
        destination: "/courses",
      },
    }
  }

  return {
    props: {
      course,
    },
    revalidate: 60000,
  }
}
