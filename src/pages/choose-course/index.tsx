import ChooseCoursePage from "@/components/ChooseCoursePage/ChooseCoursePage"
import { IQuestionsList } from "@/interfaces/IQuestionsList"
import db from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"

const Index = ({ questionsList }: { questionsList: IQuestionsList }) => {
  return (
    <>
      <ChooseCoursePage questionsList={questionsList} />
    </>
  )
}

export default Index

export async function getStaticProps() {
  let questionsList: IQuestionsList = {}

  try {
    const questionsRef = collection(db, "questions")
    const querySnapshot = await getDocs(questionsRef)

    querySnapshot.forEach(doc => {
      questionsList = doc.data().questionList
    })
  } catch (error) {
    console.error("Error getting documents: ", error)
  }

  return {
    props: {
      questionsList,
    },
    revalidate: 60000,
  }
}
