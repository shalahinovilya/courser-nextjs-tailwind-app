import Message from "../Message/Message"
import Image from "next/image"
import Circle from "@/components/Icons/circle.svg"
import Buttons from "../Message/OptionsMessage/Buttons"
import Pictures from "../Message/OptionsMessage/Pictures"
import { Button, IQuestionsList, Picture } from "@/interfaces/IQuestionsList"
import { useCourses } from "@/context/CoursesContext"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function ChooseCoursePage({ questionsList }: { questionsList: IQuestionsList }) {
  const { categories, setCategories } = useCourses()
  const { push } = useRouter()
  const [history, setHistory] = useState(["start"])

  const handleNextStep = (nextStep: string, category: string) => {
    setHistory([...history, nextStep])
    setCategories([...categories, category])
  }

  useEffect(() => {
    setCategories([])
  }, [])

  const onSuccess = () => {
    const succesCategories = categories
    succesCategories.shift()
    setCategories([...succesCategories])
    push("/courses")
  }
  const questions =
    questionsList &&
    history.map((historyStep: string, id) => {
      const question = questionsList[historyStep]
      if (historyStep === "finish") return <></>
      return (
        <Message message={question.message} key={id} type={question.buttons ? "button" : "picture"}>
          {question.buttons &&
            question.buttons.map((button: Button) => (
              <Buttons
                active={history.indexOf(historyStep) < history.length - 1 && categories.includes(button.category)}
                disabled={history.indexOf(historyStep) < history.length - 1}
                text={button.text}
                onClick={() => handleNextStep(button.next, button.category)}
              />
            ))}

          {question.pictures &&
            question.pictures.map((picture: Picture) => (
              <Pictures
                active={history.indexOf(historyStep) < history.length - 1 && categories.includes(picture.category)}
                disabled={history.indexOf(historyStep) < history.length - 1}
                text={picture.text}
                src={picture.src}
                onClick={() => handleNextStep(picture.next, picture.category)}
              />
            ))}
        </Message>
      )
    })

  return (
    <div className=" flex justify-center mt-[45px] mb-[200px] w-full">
      <div className=" max-w-[1100px] w-full px-[20px] flex items-center flex-col gap-10  relative">
        <h1 className="text-darkCerulean capitalize font-bold text-3xl sm:text-5xl lg:text-[60px] 2xl:text-[76px] leading-[106%]">
          Choose <span className="text-gerberaRed">The Course</span>
        </h1>
        <div className="bg-darkCerulean px-8 py-10 md:px-16 md:py-20 rounded-[22px] w-full z-10 gap-14 flex flex-col">
          {questions}
          {((questionsList && history.includes("finish")) || !questionsList) && (
            <Message message={"Excellent! Click next to get into"} key="afterLastQuestion">
              <Buttons
                active={true}
                text={"Next"}
                styles="font-bold py-[15px] px-[40px] md:py-[15px] md:px-[40px]"
                onClick={() => onSuccess()}
              />
            </Message>
          )}
        </div>
        <Image
          src={Circle}
          alt="decoration"
          className="absolute hidden md:flex w-[150px] h-[150px] xl:w-[200x] xl:h-[200px] right-[-70px] bottom-[-100px]"
        />
      </div>
    </div>
  )
}
