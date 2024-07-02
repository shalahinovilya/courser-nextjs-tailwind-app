import React from "react"
import Image from "next/image"
import Collab1 from "@/assets/Collaborations/collab-1.png"
import Collab2 from "@/assets/Collaborations/collab-2.png"
import Collab3 from "@/assets/Collaborations/collab-3.png"
import Collab4 from "@/assets/Collaborations/collab-4.png"
import Points from "@/components/Icons/Points.svg"

const collaborations = [
  {
    id: 1,
    img: Collab1,
  },
  {
    id: 2,
    img: Collab2,
  },
  {
    id: 3,
    img: Collab3,
  },
  {
    id: 4,
    img: Collab4,
  },
]

export const Collaborations = () => {
  return (
    <div className="w-full lg:px-[100px] gap-x-3 pt-6 pb-[120px] relative">
      <Image src={Points} width={200} height={50} alt="points" className="absolute z-10 left-[-102px] top-[-20px]" />
      <p className="text-center text-[38px] sm:text-[53px] font-bold mb-[45px] lg:mb-[85px]">
        <span className="text-darkCerulean">Our</span> <span className="text-gerberaRed">Collaborations</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 px-5 lg:px-0 gap-x-2  xl:flex items-center md:gap-x-6 w-full justify-center">
        {collaborations.map(collab => (
          <Image key={collab.id} src={collab.img} alt={"certification"} />
        ))}
      </div>
    </div>
  )
}
