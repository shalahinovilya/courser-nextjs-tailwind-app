import Question from "@/components/Question/index"
import Circle from "@/components/Icons/circle.svg"
import Image from "next/image"
import Points from "@/components/Icons/Points.svg"

const questions = [
  {
    question: "Who is eligible for this program?",
    answer: "Any Degree/Btech/BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program.",
  },
  {
    question: "What is the duration of the program?",
    answer: "Any Degree/Btech/BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program.",
  },
  { question: "Do I get the assured placement?", answer: "" },
  {
    question: "What is the basic academic percentage required to enroll for the course?",
    answer: "Any Degree/Btech/BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program.",
  },
  {
    question: "What is the execution plan of the program?",
    answer: "Any Degree/Btech/BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program.",
  },
  {
    question: "Can we take this course online?",
    answer: "Any Degree/Btech/BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program.",
  },
]

export default function index() {
  return (
    <div className=" flex justify-center mt-[65px] mb-[100px] w-full">
      <div className="absolute w-full h-[70%] bg-gerberaRed top-0 md:rounded-b-[150px]"></div>
      <div className=" w-full md:px-[20px] flex items-center flex-col gap-10  relative">
        <div className="z-10 relative flex flex-col gap-6 md:w-[90%]">
          <h1 className="text-white pb-[45px] capitalize font-bold text-2xl sm:text-3xl lg:text-[50px] 2xl:text-[60px] leading-[106%] text-center">
            Frequently Asked Questions
          </h1>
          <div className="bg-white w-full px-[20px] py-[30px] md:px-[60px] lg:px-[110px] lg:py-[90px] md:rounded-[30px] flex flex-col gap-12 shadow-faq">
            {questions && questions.map((question, index) => <Question key={index} {...question} />)}
          </div>
        </div>
        <Image
          src={Points}
          width={200}
          height={50}
          alt="points"
          className="absolute rotate-90 top-[400px] left-[-40px]"
        />
        <Image
          src={Circle}
          alt="decoration"
          className="absolute hidden md:flex w-[150px] h-[150px] xl:w-[200x] xl:h-[200px] right-[40px] bottom-[-40px]"
        />
      </div>
    </div>
  )
}
