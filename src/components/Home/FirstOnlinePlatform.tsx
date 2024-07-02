import React from "react"
import Slider from "react-slick"
import Slide1 from "@/assets/FirstOnlinePlatform/slide-1.png"
import Slide2 from "@/assets/FirstOnlinePlatform/slide-2.png"
import Slide3 from "@/assets/FirstOnlinePlatform/slide-3.png"
import Slide4 from "@/assets/FirstOnlinePlatform/slide-4.png"
import Image from "next/image"
import Points from "@/components/Icons/Points.svg"

const slides = [
  {
    id: 1,
    img: Slide1,
    title: "Course Selector",
  },
  {
    id: 2,
    img: Slide2,
    title: "Scenarios",
  },
  {
    id: 3,
    img: Slide3,
    title: "Quizs/Tests",
  },
  {
    id: 4,
    img: Slide4,
    title: "Gamification",
  },
]

export const FirstOnlinePlatform = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="xl:flex grid grid-cols-1 w-full px-6 sm:px-[50px] 2xl:px-[100px] gap-x-3 xl:items-center relative">
      <Image
        src={Points}
        width={200}
        height={50}
        alt="points"
        className="absolute z-10 bottom-[-100px] left-[-102px]"
      />
      <div className="xl:w-1/2 mb-5 xl:mb-0 h-fit">
        <p className="text-center xl:text-start text-darkCerulean capitalize font-bold text-4xl sm:text-5xl lg:text-[60px] 2xl:text-[82px] leading-[106%]">
          World’s First AI Based
        </p>
        <p className="text-center xl:text-start text-gerberaRed capitalize font-bold text-4xl sm:text-5xl lg:text-[60px] 2xl:text-[82px] leading-[106%]">
          Online Learning Platform
        </p>
      </div>
      <div className="relative xl:w-1/2">
        <Slider className="max-w-[791px] mx-auto xl:mx-0" {...settings}>
          {slides.map(slide => (
            <div
              key={slide.id}
              className="!flex justify-center items-center bg-paleOrange max-h-[466px] p-8 2xl:p-[63px_34px_49px_51px] rounded-2xl h-[190px] xs:h-[250px] sm:h-[350px] xl:h-[400px]">
              <div className="flex gap-x-4 items-center justify-between w-full">
                <div>
                  <p className="text-nightRider text-2xl xs:text-4xl sm:text-5xl lg:text-[52px] 2xl:text-[62px] leading-[107%] font-light">
                    AI Based
                  </p>
                  <p className="text-lg xs:text-3xl sm:text-4xl lg:text-5xl 2xl:text-[57px] font-bold leading-[107%] text-gerberaRed">
                    {slide.title}
                  </p>
                </div>
                <div className="shrink relative max-w-[200px] sm:max-w-[300px]">
                  <Image className="" src={slide.img} width={461} height={354} alt={"slide"} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
