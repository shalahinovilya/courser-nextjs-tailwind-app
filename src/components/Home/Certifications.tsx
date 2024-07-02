import React from "react"
import Cert1 from "@/assets/Certifications/cert-1.png"
import Cert2 from "@/assets/Certifications/cert-2.png"
import Cert3 from "@/assets/Certifications/cert-3.png"
import Cert4 from "@/assets/Certifications/cert-4.png"
import Image from "next/image"

const certs = [
  {
    id: 1,
    img: Cert1,
  },
  {
    id: 2,
    img: Cert2,
  },
  {
    id: 3,
    img: Cert3,
  },
  {
    id: 4,
    img: Cert4,
  },
]

export const Certifications = () => {
  return (
    <div className="w-full lg:px-[100px] gap-x-3 pt-6">
      <p className="text-center text-[43px] sm:text-[53px] font-bold mb-[45px] lg:mb-[85px]">
        <span className="text-darkCerulean">Our</span> <span className="text-gerberaRed">Certifications</span>
      </p>
      <div className="grid grid-cols-2 px-5 lg:px-0 lg:flex items-center flex-wrap gap-5 md:gap-20 w-full justify-center">
        {certs.map(cert => (
          <div key={cert.id} className="flex justify-center mx-auto">
            <Image src={cert.img} alt={"certification"} />
          </div>
        ))}
      </div>
    </div>
  )
}
