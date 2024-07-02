import { Hero } from "@/components/Home/Hero"
import { FirstOnlinePlatform } from "@/components/Home/FirstOnlinePlatform"
import { WhoCanJoin } from "@/components/Home/WhoCanJoin"
import { PopularCourses } from "@/components/Home/PopularCourses"
import { Achievements } from "@/components/Home/Achievements"
import { Mentors } from "@/components/Home/Mentors"
import { Certifications } from "@/components/Home/Certifications"
import { Collaborations } from "@/components/Home/Collaborations"
import { ICourse } from "@/interfaces/ICourse"
import { collection, getDocs } from "firebase/firestore"
import db from "@/firebase/config"

export default function Home({ courses }: { courses: ICourse[] }) {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between gap-y-150 w-full`}>
      <Hero />
      <FirstOnlinePlatform />
      <WhoCanJoin />
      <PopularCourses courses={courses} />
      <Achievements />
      <Mentors />
      <Certifications />
      <Collaborations />
    </div>
  )
}

export async function getStaticProps() {
  let courses: ICourse[] = []

  try {
    const coursesRef = collection(db, "courses")
    const querySnapshotCourses = await getDocs(coursesRef)

    querySnapshotCourses.forEach(doc => {
      const fixDateCourses = doc.data().courses.map((item: ICourse) => {
        const { seconds, nanoseconds } = item.createdAt
        const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1000000)
        const timestamp = new Date(milliseconds)
        return { ...item, createdAt: String(timestamp) }
      })

      courses = fixDateCourses
    })
  } catch (error) {
    console.error("Error getting documents: ", error)
  }

  return {
    props: {
      courses,
    },
    revalidate: 60000,
  }
}
