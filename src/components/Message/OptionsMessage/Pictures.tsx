import Image from "next/image"

const Pictures = ({
  text,
  onClick,
  disabled,
  active,
  src,
}: {
  text: string
  onClick: () => void
  active: boolean
  disabled: boolean
  src: string
}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`rounded-[22px] p-[12px] md:p-[30px] border 
        border-white
    transition duration-300 ease-in-out ${active ? "bg-white" : ""}  w-[80px] h-[80px] md:w-[110px] md:h-[110px]
    lg:w-[120px] lg:h-[120px]
    ${disabled ? "" : " hover:bg-white"}`}>
        <img src={src} alt={text} />
      </button>
      <span className="text-white text-[14px] md:text-base text-center">{text}</span>
    </div>
  )
}

export default Pictures
