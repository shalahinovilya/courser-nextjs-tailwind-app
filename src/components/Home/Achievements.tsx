import React from "react"
import Image from "next/image"
import MainImg from "@/assets/Achievements/main-img.png"
import { StudentIcon } from "@/components/Icons/StudentIcon"
import { BookIcon } from "@/components/Icons/BookIcon"
import CirclePoints from "@/components/Icons/circle-points.svg"

export const Achievements = () => {
  return (
    <div className="w-full px-[20px] lg:px-[100px] gap-x-3 bg-whiteSmoke pt-6 pb-[120px] relative">
      <Image src={CirclePoints} alt="decoration" className="absolute bottom-10 right-10" />
      <p className="text-center text-[43px] font-bold mb-[40px] lg:mb-[80px]">
        <span className="text-darkCerulean">Our</span> <span className="text-gerberaRed">Achievements</span>
      </p>
      <div className="flex justify-center xl:grid xl:grid-cols-1fr1fr items-center gap-20">
        <Image src={MainImg} alt={"achievements"} className="hidden xl:block" />
        <div className="grid grid-cols-2 gap-x-10 gap-y-7 max-w-[600px] ">
          {/* Students */}
          <div className="z-10 p-[12px_14px_26px_14px] md:p-[24px_28px_52px_28px] rounded-[22px] bg-white max-w-[276px] shadow-lg flex flex-col justify-center">
            <p className="text-center font-bold text-[60px] md:text-[111px] text-gerberaRed">100</p>
            <div className="flex flex-col md:flex-row justify-center gap-y-3 md:gap-y-0 gap-x-3 items-center -mt-4">
              <div>
                <StudentIcon />
              </div>
              <p className="text-center font-medium text-nightRider text-[21px] md:w-[60%] leading-7">
                Students Trained
              </p>
            </div>
          </div>

          {/*  Courses  */}
          <div className="z-10 p-[12px_14px_26px_14px] md:p-[24px_28px_52px_28px] rounded-[22px] bg-white md:h-[276px] shadow-lg flex flex-col justify-center">
            <p className="text-center font-bold text-[60px] md:text-[111px] text-gerberaRed">50</p>
            <div className="flex justify-center flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-3 items-center -mt-4">
              <div>
                <BookIcon />
              </div>
              <p className="text-center font-medium text-nightRider text-[21px] md:w-[60%] leading-7">
                Courses Available
              </p>
            </div>
          </div>

          {/* Secured Jobs */}
          <div className="z-10 flex gap-x-5 items-center p-[24px_28px_28px_40px] rounded-[22px] bg-white shadow-lg col-span-2">
            <p className="text-center font-bold text-[60px] md:text-[111px] text-darkCerulean">70%</p>
            <p className="font-medium text-[21px] md:text-[29px] text-nightRider">
              Students Secured Jobs in Level 1 Companies
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
