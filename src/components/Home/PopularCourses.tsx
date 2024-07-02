import React from "react"
import Link from "next/link"
import CourseCard from "../CourseCard/CourseCard"
import { ICourse } from "@/interfaces/ICourse"

export const PopularCourses = ({ courses }: { courses: ICourse[] }) => {
  return (
    <div className="w-full px-6 sm:px-[50px] 2xl:px-[100px] gap-x-3">
      <p className="text-center text-[53px] mb-7 font-bold">
        <span className="text-darkCerulean">Popular</span> <span className="text-gerberaRed">Courses</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-10 2xl:gap-x-20 gap-y-[40px]">
        {courses.slice(0, 9).map(course => (
          <CourseCard course={course} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-[50px]">
        <Link href="/courses" className="bg-darkCerulean py-2 px-10 font-medium text-[23px] text-white rounded-xl">
          View All Courses
        </Link>
      </div>
    </div>
  )
}
