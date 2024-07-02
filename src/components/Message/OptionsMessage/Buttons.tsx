const Buttons = ({
  text,
  onClick,
  active,
  disabled = false,
  styles = "",
}: {
  text: string
  onClick: () => void
  active: boolean
  disabled?: boolean
  styles?: string
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-[9px] text-white text-[14px] md:text-[18px] p-[12px] md:p-[30px] border 
    transition duration-300 ease-in-out ${active ? "border-gerberaRed bg-gerberaRed" : "border-white"}
    ${disabled ? "" : "hover:border-gerberaRed  hover:bg-gerberaRed"} ${styles}`}>
      {text}
    </button>
  )
}

export default Buttons
