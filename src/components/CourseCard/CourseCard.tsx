import Image from "next/image"
import { ComputerIcon } from "@/components/Icons/ComputerIcon"
import { PinIcon } from "@/components/Icons/PinIcon"
import { CloudIcon } from "@/components/Icons/CloudIcon"
import { ICourse } from "@/interfaces/ICourse"
import Link from "next/link"

export default function CourseCard({ course }: { course: ICourse }) {
  return (
    <div className="flex flex-col gap-2 items-center" key={course.id}>
      <Link
        href={`courses/${course.title}`}
        className="relative grid px-3 auto-rows-2fr1fr bg-darkCerulean rounded-t-3xl rounded-b-md max-h-[354px]">
        <div className="flex items-center justify-center">
          <Image
            src={course.src}
            alt={course.title}
            width={130}
            height={120}
            className="w-auto m-h-[120px] h-[120px]"
          />
        </div>
        <div className="bg-white rounded-t-3xl px-4 pt-4 flex flex-col h-[165px]">
          <p className="text-center font-bold text-[21px] xl:text-[27px] text-coarseWool mb-2 whitespace-nowrap">
            {course.title}
          </p>
          <p className="text-xs	text-center xl:text-sm">{course.description}</p>
        </div>
      </Link>
      <div className="flex gap-x-3">
        <button className="flex gap-x-2 border border-gerberaRed px-2.5 py-1.5 rounded-lg items-center">
          <ComputerIcon />
          <span className="text-davyGray font-semibold whitespace-nowrap">Live Demo</span>
        </button>
        <button className="flex gap-x-2 border border-gerberaRed px-2.5 py-1.5 rounded-lg items-center">
          <PinIcon />
          <span className="text-davyGray font-semibold whitespace-nowrap">Enroll Now</span>
        </button>
      </div>
      <a
        href={course.download}
        download
        className="flex items-center px-5 py-2 gap-x-1.5 rounded-full bg-gerberaRed mt-3 mx-auto">
        <CloudIcon />
        <span className="text-white font-semibold whitespace-nowrap">Download Curriculam</span>
      </a>
    </div>
  )
}
