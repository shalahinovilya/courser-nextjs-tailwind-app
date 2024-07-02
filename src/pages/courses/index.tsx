import db from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { ICourse } from "@/interfaces/ICourse"
import CoursesPage from "@/components/CoursesPage/CoursesPage"

const Index = ({ categories, courses }: { categories: string[]; courses: ICourse[] }) => {
  return <CoursesPage categoriesList={categories} courses={courses} />
}

export default Index

export async function getStaticProps() {
  let categories: string[] = []
  let courses: ICourse[] = []

  try {
    const categoriesRef = collection(db, "categories")
    const coursesRef = collection(db, "courses")
    const querySnapshotCourses = await getDocs(coursesRef)
    const querySnapshot = await getDocs(categoriesRef)

    querySnapshot.forEach(doc => {
      categories = doc.data().categories
    })
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
      categories,
      courses,
    },
    revalidate: 60000,
  }
}
