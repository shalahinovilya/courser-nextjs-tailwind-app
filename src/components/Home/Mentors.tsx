import React, { useLayoutEffect, useState } from "react"
import Mentor1 from "@/assets/Mentors/mentor-1.png"
import Mentor2 from "@/assets/Mentors/mentor-2.png"
import Image from "next/image"
import { StarIcon } from "@/components/Icons/StarIcon"
import { DocumentIcon } from "@/components/Icons/DocumentIcon"
import { ManWithBook } from "@/components/Icons/ManWithBook"
import Slider from "react-slick"
import Circle from "@/components/Icons/circle.svg"

const mentors = [
  {
    img: Mentor1,
    firstName: "Sandeep",
    technology: ".Net & Azure",
    reviewNb: 72,
    moduleNb: 39,
    studentNb: 375,
    rating: 5,
  },
  {
    img: Mentor2,
    firstName: "Sudhansu",
    technology: "Cloud & Cyber Security",
    reviewNb: 38,
    moduleNb: 27,
    studentNb: 169,
    rating: 4,
  },
]

export const Mentors = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
  }

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth <= 1220)
  }, [])

  return (
    <div className="w-full px-3 md:px-0 mt-2.5 lg:px-2 xl:px-32 relative">
      <Image src={Circle} alt="decoration" className="absolute bottom-[-70px] left-10" />
      <p className="text-center xl:text-left font-bold mb-24 text-[32px] md:text-[40px] xl:text-[64px] leading-tight">
        <span className="text-darkCerulean">
          Meet Our Professional <span className="text-gerberaRed">Mentors & Trainers</span>
        </span>
      </p>
      <div className="relative mx-auto max-w-[320px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  2xl:max-w-screen-2xl">
        <Slider {...settings}>
          {mentors.map(mentor => (
            <div
              key={mentor.firstName}
              className="flex flex-col items-center px-12 py-8 bg-white shadow-lg rounded-3xl w-full">
              <div className="flex gap-3 md:gap-8 items-center">
                <div className="hidden md:flex md:max-w-[200px] md:max-h-[200px] rounded-full">
                  <Image
                    src={mentor.img}
                    alt="mentor"
                    width={200}
                    height={200}
                    className="hidden md:flex md:max-w-[200px] md:max-h-[200px] rounded-full"
                  />
                </div>
                <div>
                  <p className="text-xl md:text-5xl font-semibold">{mentor.firstName}</p>
                  <p className="text-lg flex-wrap md:text-2xl text-gerberaRed">{mentor.technology}</p>
                  <div className="flex-col items-start md:flex-row flex md:items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(rating => (
                        <StarIcon key={rating} isColored={mentor.rating >= rating} />
                      ))}
                    </div>
                    <p className="text-base text-gray-600 font-medium">{`${mentor.reviewNb} Reviews`}</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <DocumentIcon />
                      <p className="text-sm md:text-base text-gray-600 font-medium">{`${mentor.moduleNb} Modules`}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <ManWithBook />
                      <p className="text-sm md:text-base text-gray-600 font-medium">{`${mentor.studentNb} Students`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-base text-gray-600 font-medium mt-6">
                {mentor.firstName} is a Software Developer who specialized in {mentor.technology} for more than 24
                years, training hundreds of students to accomplish their goals & dreams.
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
