import React from "react"
import College from "@/assets/WhoCanJoin/college.png"
import Professional from "@/assets/WhoCanJoin/professional.png"
import Startup from "@/assets/WhoCanJoin/startup.png"
import Corporate from "@/assets/WhoCanJoin/corporate.png"
import DevScheme from "@/assets/WhoCanJoin/development-scheme.png"
import Image from "next/image"

const schemes = [
  {
    name: "01",
    img: College,
    description: "Colleges/Universities",
  },
  {
    name: "02",
    img: Professional,
    description: "Individuals/Working Professionals",
  },
  {
    name: "03",
    img: Startup,
    description: "Startups",
  },
  {
    name: "04",
    img: Corporate,
    description: "Corporates",
  },
]

export const WhoCanJoin = () => {
  return (
    <div className="w-full px-6 sm:px-[50px] 2xl:px-[100px]">
      <p
        className="text-center font-semibold text-lg sm:text-xl lg:text-2xl 2xl:text-3xl tracking-[8px] lg:tracking-[14px] text-gerberaRed mb-10 2xl:mb-14
       xl:text-start">
        WHO CAN JOIN
      </p>
      <div className="flex flex-col xl:flex-row items-center">
        <div className="2xl:w-1/2">
          <p className="text-center xl:text-start text-darkCerulean text-4xl sm:text-5xl lg:text-[68px] 2xl:text-[83px] leading-[107%] font-bold">
            Skill Development Schemes For All
          </p>
          <div className="relative max-w-[400px] mx-auto 2xl:hidden my-4">
            <Image className="w-full h-full" src={DevScheme} alt={"development scheme"} />
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-14 xl:gap-y-20 2xl:gap-y-[107px] mt-9 xl:mt-14">
            {schemes.map(scheme => (
              <div
                key={scheme.name}
                className="relative flex flex-col gap-5 2xl:gap-[27px] max-w-[270px] items-center mx-auto 2xl:mx-0">
                <div className="relative aspect-square w-[60px] sm:w-[80px] lg:w-[115px]">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-8 lg:-left-12 2xl:-left-16">
                    <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] text-darkCerulean font-bold">
                      {scheme.name}
                    </p>
                  </div>
                  <div className="aspect-square w-[60px] sm:w-[80px] lg:w-[115px] relative">
                    <Image className="w-full h-full" src={scheme.img} alt={scheme.name} />
                  </div>
                </div>
                <p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg 2xl:text-[22px] text-nightRider text-center">
                  {scheme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 hidden 2xl:block">
          <Image src={DevScheme} alt={"development scheme"} />
        </div>
      </div>
    </div>
  )
}
