import React from "react"
import Image from "next/image"
import { DataAnalystIcon } from "@/components/Icons/DataAnalystIcon"
import { WebsiteDesignIcon } from "@/components/Icons/WebsiteDesignIcon"
import { RoundStarIcon } from "@/components/Icons/RoundStarIcon"
import Link from "next/link"

const courses = [
  {
    id: 1,
    name: "Cloud Computing",
  },
  {
    id: 2,
    name: "Cyber Security",
  },
  {
    id: 3,
    name: "DevOps",
  },
  {
    id: 4,
    name: "Data Science",
  },
  {
    id: 5,
    name: "Software Testing",
  },
]

export const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row xl:gap-x-[130px] 2xl:gap-x-0 items-center p-6 sm:p-[50px] 2xl:p-[100px] pb-0
    sm:pb-0 2xl:pb-0">
      <div className="lg:w-1/2 xl:min-w-[500px] order-2 lg:order-1 mt-6 sm:mt-10 lg:mt-0 flex flex-col">
        <h1 className="text-center lg:text-start text-darkCerulean font-bold text-4xl sm:text-[56px] lg:text-[80px] 2xl:text-[100px] tracking-[0.5px] leading-[107%] capitalize">
          Skill your way up to success with us
        </h1>
        <p className="text-center lg:text-start mt-2 text-base sm:text-lg xl:text-[26px] 2xl:text-[34px] text-nobelGray lg:w-[55%] mb-6 lg:mb-10 leading-[110%]">
          Get the skills you need for the future of work.
        </p>
        <Link
          href={"/choose-course"}
          className="px-8 py-6 bg-darkCerulean rounded-[6px] text-white text-base sm:text-xl xl:text-[32px] 2xl:text-[26px] mb-[20px] w-max
          transition duration-300 ease-in-out hover:brightness-150">
          Choose course
        </Link>
        <div className="flex gap-x-[18px] gap-y-[22px] flex-wrap justify-center lg:justify-normal">
          {courses.map(course => (
            <div
              key={course.id}
              className="py-2 2xl:py-3 px-5 xl:px-9 2xl:px-14 text-philippineGray bg-silverCloud font-semibold text-sm xl:text-base
               2xl:text-lg whitespace-nowrap rounded-[6px]">
              {course.name}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 order-1 lg:order-2 -mr-10">
        <div className="relative w-fit ml-auto">
          <Image
            className="object-cover w-[400px] lg:w-[573px]"
            width={573}
            height={729}
            src={"/hero.png"}
            alt={"hero"}
          />

          <div
            className="absolute left-1/3 lg:left-1/2 -translate-y-full xl:translate-y-0 -translate-x-1/2 xl:translate-x-0 -bottom-32 xl:bottom-[100px] xl:left-0
            bg-silverCloud px-3 2xl:px-5 py-6 2xl:py-9 rounded-lg w-[260px] 2xl:w-[340px] xl:-ml-32 ">
            <div
              className="absolute right-1/2 translate-x-1/2 top-0 -translate-y-[70%] text-white font-semibold text-sm xl:text-base 2xl:text-lg
               w-[120px] xl:w-[150px] 2xl:w-[195px] h-8 xl:h-10 2xl:h-[60px] bg-gerberaRed rounded-lg flex items-center justify-center">
              Best seller
            </div>
            <div className="flex flex-col w-full gap-y-4 2xl:gap-y-8">
              {/* Data Analyst statistic */}
              <div className="flex items-center gap-x-2 2xl:gap-x-4">
                <div className="flex items-center justify-center bg-carolineBlue p-2 2xl:p-0 w-10 2xl:w-16 h-10 2xl:h-16 rounded-lg">
                  <DataAnalystIcon />
                </div>
                <div>
                  <p className="font-semibold text-sm xl:text-base 2xl:text-lg">Data Analyst</p>
                  <div className="flex gap-x-2 items-center">
                    <RoundStarIcon />
                    <p className="text-xs xl:text-sm">2145 Reviews</p>
                  </div>
                </div>
              </div>

              {/* Website Design statistic */}
              <div className="flex items-center gap-x-2 2xl:gap-x-4">
                <div className="flex items-center justify-center bg-gerberaRed p-2 2xl:p-0 w-10 2xl:w-16 h-10 2xl:h-16 rounded-lg">
                  <WebsiteDesignIcon />
                </div>
                <div>
                  <p className="font-semibold text-sm xl:text-base 2xl:text-lg">Website Design</p>
                  <div className="flex gap-x-2 items-center">
                    <RoundStarIcon />
                    <p className="text-xs xl:text-sm">2145 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
