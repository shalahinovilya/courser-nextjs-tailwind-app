import Image from "next/image"
import Logo from "@/components/Icons/message.svg"
import { ReactNode } from "react"

interface IProps {
  message: string
  children?: ReactNode
  type?: string
}

const Message = ({ message, children, type }: IProps) => {
  const gridColumns = type === "button" ? 2 : type === "picture" ? 3 : 1
  return (
    <div className="flex flex-col md:flex-row  gap-8 w-full items-start">
      <div className="hidden md:block">
        <Image src={Logo} alt="message" width={94} height={94} />
      </div>
      <div className="flex flex-col gap-10">
        <div className="relative">
          <div className="bg-white rounded-b-xl rounded-tr-xl rounded-tl-xl md:rounded-tl-none w-full max-w-[450px] px-6 py-4 text-[18px] md:text-[22px] font-medium">
            {message}
          </div>
          <div className="hidden md:flex absolute top-[-9.5px] left-[-25px] rotate-[270deg] w-0 h-0 border-solid border-transparent border-[10px] border-r-white border-b-white transform -translate-x-[-10px] -translate-y-[-10px]"></div>
        </div>
        <div className={`grid grid-cols-${gridColumns} md:flex gap-10 flex-wrap`}>{children}</div>
      </div>
    </div>
  )
}

export default Message
