import { Fragment, useState } from "react"
import Arrow from "@/assets/Course/Arrow.svg"
import Image from "next/image"

export default function CourseContentItem({ title, listOfContent }: { title: string; listOfContent: string[] }) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="w-full h-max transition duration-300 ease-in-out border-b border-[#DDDDDD]">
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="text-[#003F7D] font-bold text-uppercase text-[24px]">{title}</span>
        <button className="w-max h-max" onClick={() => setOpen(!open)}>
          <Image
            className={`transition duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
            src={Arrow}
            width={22}
            height={12}
            alt="open content of paragraph"
          />
        </button>
      </div>
      {open && (
        <div className="px-6 pb-4 text-[#5F6265]">
          {listOfContent &&
            listOfContent.map((content, index) => (
              <Fragment key={index}>
                <span>{content}</span> {listOfContent.length === index + 1 ? <></> : <span>{">>"}</span>}{" "}
              </Fragment>
            ))}
        </div>
      )}
    </div>
  )
}
